"use server";

import { Resend } from "resend";
import { masterConfig } from "@/config/master";
import { isContactSubmissionRateLimited } from "@/lib/contactRateLimit";

const resend = new Resend(process.env.RESEND_API_KEY);
const MIN_FORM_FILL_MS = 2_500;
const MAX_FORM_AGE_MS = 24 * 60 * 60 * 1_000;
const hasRedisRateLimitConfig =
    Boolean(process.env.UPSTASH_REDIS_REST_URL) && Boolean(process.env.UPSTASH_REDIS_REST_TOKEN);

export async function sendEmail(formData: FormData) {
    try {
        if (!process.env.RESEND_API_KEY) {
            return { success: false, error: "Email service is not configured." };
        }

        const name = String(formData.get("name") ?? "").trim();
        const email = String(formData.get("email") ?? "").trim();
        const phone = String(formData.get("phone") ?? "").trim();
        const leadType = String(formData.get("leadType") ?? "").trim();
        const subject = String(formData.get("subject") ?? formData.get("project") ?? "").trim();
        const message = String(formData.get("message") ?? "").trim();
        const honeypot = String(formData.get("website") ?? "").trim();
        const formStartedAtRaw = String(formData.get("formStartedAt") ?? "").trim();

        if (!name || !email || !message) {
            return { success: false, error: "Missing required fields" };
        }

        if (honeypot) {
            return { success: true };
        }

        const formStartedAt = Number(formStartedAtRaw);
        const now = Date.now();
        if (!Number.isFinite(formStartedAt)) {
            return { success: false, error: "Please submit the form again." };
        }
        const elapsed = now - formStartedAt;
        if (elapsed < MIN_FORM_FILL_MS || elapsed > MAX_FORM_AGE_MS) {
            return { success: false, error: "Please submit the form again." };
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return { success: false, error: "Please provide a valid email address." };
        }

        if (name.length > 120 || subject.length > 200 || phone.length > 40 || message.length > 5000) {
            return { success: false, error: "Submitted content is too long." };
        }

        if (process.env.NODE_ENV === "production" && !hasRedisRateLimitConfig) {
            return {
                success: false,
                error: "Contact form is temporarily unavailable. Please try again shortly.",
            };
        }

        if (await isContactSubmissionRateLimited(email)) {
            return { success: false, error: "Please wait a minute before sending another message." };
        }

        const toAddress = (process.env.CONTACT_TO_EMAIL || masterConfig.contact.email || "").trim();
        const fromAddress = (process.env.RESEND_FROM_EMAIL || "").trim();

        if (!toAddress || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(toAddress)) {
            return { success: false, error: "Recipient email is not configured correctly." };
        }

        if (!fromAddress) {
            return {
                success: false,
                error: "Sender email is not configured. Set RESEND_FROM_EMAIL to a verified sender.",
            };
        }
        const safeSubjectName = name.replace(/[\r\n]+/g, " ").slice(0, 120);
        const mailSubjectPrefix =
            leadType === "quote_request" ? "Nodecraft Quote request" : "Nodecraft Form submission";

        const { data, error } = await resend.emails.send({
            from: fromAddress,
            to: toAddress,
            replyTo: email,
            subject: `${mailSubjectPrefix}/${safeSubjectName}`,
            text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "N/A"}\nSubject: ${subject || "N/A"}\n\nMessage:\n${message}`,
        });

        if (error) {
            console.error(error);
            return { success: false, error: error.message };
        }

        return { success: true, data };
    } catch (err) {
        console.error(err);
        return { success: false, error: "Failed to send email" };
    }
}
