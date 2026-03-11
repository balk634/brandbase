"use server";

import { Resend } from "resend";
import { masterConfig } from "@/config/master";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
    try {
        if (!process.env.RESEND_API_KEY) {
            return { success: false, error: "Email service is not configured." };
        }

        const name = String(formData.get("name") ?? "").trim();
        const email = String(formData.get("email") ?? "").trim();
        const project = String(formData.get("project") ?? "").trim();
        const message = String(formData.get("message") ?? "").trim();

        if (!name || !email || !message) {
            return { success: false, error: "Missing required fields" };
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return { success: false, error: "Please provide a valid email address." };
        }

        if (name.length > 120 || project.length > 200 || message.length > 5000) {
            return { success: false, error: "Submitted content is too long." };
        }

        const toAddress = process.env.CONTACT_TO_EMAIL || masterConfig.contact.email;
        const fromAddress =
            process.env.RESEND_FROM_EMAIL || "Nodecraft Notifications <onboarding@resend.dev>";
        const safeSubjectName = name.replace(/[\r\n]+/g, " ").slice(0, 120);
        const safeSubjectProject = (project || "General Inquiry").replace(/[\r\n]+/g, " ").slice(0, 120);

        const { data, error } = await resend.emails.send({
            from: fromAddress,
            to: toAddress,
            subject: `New Lead: ${safeSubjectName} / ${safeSubjectProject}`,
            text: `Name: ${name}\nEmail: ${email}\nProject: ${project || "N/A"}\n\nMessage:\n${message}`,
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
