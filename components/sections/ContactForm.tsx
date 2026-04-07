"use client";

import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { LoadingButton } from "@/components/ui/LoadingButton";
import { masterConfig } from "@/config/master";
import { Kicker } from "@/components/ui/Kicker";
import { CalButton } from "@/components/ui/CalBooking";
import { IconMail, IconPhone, IconMapPin, IconClock } from "@tabler/icons-react";
import { useState, useEffect } from "react";
import { sendEmail } from "@/app/actions";

type ContactFormVariant = "section" | "page";

const HELPFUL_DETAILS = [
  "Your business + industry",
  "What you need (brand, web, marketing, or all three)",
  "Your goals and timeline",
  "Current challenges or pain points",
] as const;

export function ContactForm({ variant = "section", hideHeader = false }: { variant?: ContactFormVariant, hideHeader?: boolean }) {
  const isPage = variant === "page";
  const [formStartedAt] = useState(() => Date.now().toString());
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const isEmailValid = email === "" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPhoneValid = phone === "" || /^\+?[\d\s-]{10,}$/.test(phone);


  async function handleAction(formData: FormData) {
    setStatus("loading");
    setErrorMessage("");

    const result = await sendEmail(formData);

    if (result.success) {
      setStatus("success");
    } else {
      setStatus("error");
      setErrorMessage(result.error || "Failed to send message. Please try again.");
    }
  }

  if (isPage) {
    return (
      <div className="flex flex-col">
        {status === "success" ? (
          <div className="flex-1 flex flex-col items-center justify-center min-h-[400px] text-center reveal-up">
            <div className="h-16 w-16 border border-grid/15 bg-white flex items-center justify-center mb-8">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <h3 className="font-serif text-3xl tracking-tight mb-2 text-ink">Message <em className="font-serif-10 italic text-blue-600">Sent</em></h3>
            <p className="text-ink-muted leading-relaxed max-w-sm">We&apos;ve received your inquiry and will match you with a senior strategist within 24 hours.</p>
            <Button variant="outline" className="mt-10 uppercase tracking-widest text-[10px]" onClick={() => setStatus("idle")}>Send another message</Button>
          </div>
        ) : (
          <form id="contact-form" className="flex flex-col" action={handleAction}>
            <input type="hidden" name="formStartedAt" value={formStartedAt} readOnly />
            <input
              aria-hidden="true"
              autoComplete="off"
              className="absolute -left-[9999px] opacity-0 pointer-events-none"
              name="website"
              tabIndex={-1}
              type="text"
            />

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="contact-page-name" className="font-mono text-xs uppercase tracking-widest text-ink-muted">
                  Name <span className="text-primary">*</span>
                </label>
                <input
                  className="w-full h-11 px-4 bg-paper/60 border border-grid/15 focus:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                  id="contact-page-name"
                  name="name"
                  autoComplete="name"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-page-email" className="font-mono text-xs uppercase tracking-widest text-ink-muted">
                  Email <span className="text-primary">*</span>
                </label>
                <input
                  className={`w-full h-11 px-4 bg-paper/60 border focus-visible:outline-none focus-visible:ring-2 transition-colors ${
                    !isEmailValid && email !== ""
                      ? "border-red-500 focus:border-red-500 focus-visible:ring-red-500/40"
                      : "border-grid/15 focus:border-primary focus-visible:ring-primary/40"
                  }`}
                  id="contact-page-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="mt-6 space-y-2">
              <label htmlFor="contact-page-phone" className="font-mono text-xs uppercase tracking-widest text-ink-muted">
                Phone Number
              </label>
              <input
                className={`w-full h-11 px-4 bg-paper/60 border focus-visible:outline-none focus-visible:ring-2 transition-colors ${
                  !isPhoneValid && phone !== ""
                    ? "border-red-500 focus:border-red-500 focus-visible:ring-red-500/40"
                    : "border-grid/15 focus:border-primary focus-visible:ring-primary/40"
                }`}
                id="contact-page-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                value={phone}
                onChange={(e) => {
                  const val = e.target.value.replace(/[^\d+\s-]/g, "");
                  setPhone(val);
                }}
              />
            </div>

            <div className="mt-6 space-y-2">
              <label htmlFor="contact-page-subject" className="font-mono text-xs uppercase tracking-widest text-ink-muted">
                Subject
              </label>
              <input
                className="w-full h-11 px-4 bg-paper/60 border border-grid/15 focus:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                id="contact-page-subject"
                name="subject"
              />
            </div>

            <div className="mt-6 space-y-2 flex flex-col">
              <label htmlFor="contact-page-message" className="font-mono text-xs uppercase tracking-widest text-ink-muted">
                Message <span className="text-primary">*</span>
              </label>
              <textarea
                className="w-full min-h-[120px] p-4 bg-paper/60 border border-grid/15 focus:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 resize-y text-sm leading-relaxed placeholder:font-mono placeholder:text-[11px] placeholder:tracking-[0.22em] placeholder:text-ink-muted/70"
                id="contact-page-message"
                name="message"
                placeholder={HELPFUL_DETAILS.map((line) => `- ${line}`).join("\n")}
                required
              />
            </div>

            <div className="mt-8 flex justify-center sm:justify-end">
              <LoadingButton
                type="submit"
                variant="primary"
                className="w-full sm:w-auto sm:min-w-[220px]"
                isLoading={status === "loading"}
                loadingText="Sending..."
              >
                Send message
              </LoadingButton>
            </div>
          </form>
        )}
      </div>
    );
  }

  return (
    <Section className="bg-transparent">
      <Container className="grid md:grid-cols-12 gap-10 items-start">
        {!hideHeader && (
          <div className="md:col-span-5">
            <Kicker>Let&apos;s talk.</Kicker>
            <h2 className="mt-6 text-3xl md:text-5xl font-serif tracking-tight mb-4">
              Get in Touch and get <em className="font-serif-10 italic">clarity.</em>
            </h2>
            <p className="text-ink-muted font-mono text-sm max-w-md">
              Share what you&apos;re building and what results you want. We&apos;ll reply with clear next steps.
            </p>

            <div className="mt-8 text-sm">
              <div className="font-mono text-xs uppercase tracking-widest text-ink-muted">
                Direct
              </div>
              <a href={`mailto:${masterConfig.contact.email}`} className="mt-2 inline-block text-ink hover:text-primary transition-colors">
                {masterConfig.contact.email}
              </a>
            </div>
          </div>
        )}

        <div className={hideHeader ? "md:col-span-12" : "md:col-span-7"}>
          {status === "success" ? (
            <div className="border border-grid/15 bg-white p-6 sm:p-8 md:p-12 text-center h-full flex flex-col items-center justify-center min-h-[440px] reveal-up">
              <div className="h-16 w-16 border border-grid/15 bg-white flex items-center justify-center mb-8">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <h3 className="font-serif text-3xl tracking-tight mb-2 text-ink">Message <em className="font-serif-10 italic text-blue-600">Sent</em></h3>
              <p className="text-ink-muted text-sm leading-relaxed mb-8 max-w-sm mx-auto">Our team will review your project and get back to you within 24 hours (business days).</p>
              <Button variant="outline" className="uppercase tracking-widest text-[10px]" onClick={() => setStatus("idle")}>Send another message</Button>
            </div>
          ) : (
            <form
              className="border border-grid/15 bg-white p-6 sm:p-8"
              action={handleAction}
            >
              <input type="hidden" name="formStartedAt" value={formStartedAt} readOnly />
              <input
                aria-hidden="true"
                autoComplete="off"
                className="absolute -left-[9999px] opacity-0 pointer-events-none"
                name="website"
                tabIndex={-1}
                type="text"
              />
              {/* Inline error message removed for bottom-right notification feed */}

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="contact-name"
                    className="font-mono text-xs uppercase tracking-widest text-ink-muted"
                  >
                    Name <span className="text-primary">*</span>
                  </label>
                  <input
                    className="w-full h-11 px-4 bg-paper/60 border border-grid/15 focus:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                    id="contact-name"
                    name="name"
                    autoComplete="name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="contact-email"
                    className="font-mono text-xs uppercase tracking-widest text-ink-muted"
                  >
                    Email <span className="text-primary">*</span>
                  </label>
                  <input
                    className={`w-full h-11 px-4 bg-paper/60 border focus-visible:outline-none focus-visible:ring-2 transition-colors ${
                      !isEmailValid && email !== ""
                        ? "border-red-500 focus:border-red-500 focus-visible:ring-red-500/40"
                        : "border-grid/15 focus:border-primary focus-visible:ring-primary/40"
                    }`}
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="mt-6 space-y-2">
                <label
                  htmlFor="contact-phone"
                  className="font-mono text-xs uppercase tracking-widest text-ink-muted"
                >
                  Phone Number
                </label>
                <input
                  className={`w-full h-11 px-4 bg-paper/60 border focus-visible:outline-none focus-visible:ring-2 transition-colors ${
                    !isPhoneValid && phone !== ""
                      ? "border-red-500 focus:border-red-500 focus-visible:ring-red-500/40"
                      : "border-grid/15 focus:border-primary focus-visible:ring-primary/40"
                  }`}
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={phone}
                  onChange={(e) => {
                    const val = e.target.value.replace(/[^\d+\s-]/g, "");
                    setPhone(val);
                  }}
                />
              </div>

              <div className="mt-6 space-y-2">
                <label
                  htmlFor="contact-subject"
                  className="font-mono text-xs uppercase tracking-widest text-ink-muted"
                >
                  Subject
                </label>
                <input
                  className="w-full h-11 px-4 bg-paper/60 border border-grid/15 focus:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                  id="contact-subject"
                  name="subject"
                  placeholder="e.g. Full rebrand + web launch, Performance marketing for e-commerce"
                />
              </div>

              <div className="mt-6 space-y-2">
                <label
                  htmlFor="contact-message"
                  className="font-mono text-xs uppercase tracking-widest text-ink-muted"
                >
                  Message <span className="text-primary">*</span>
                </label>
                <textarea
                  className="w-full min-h-[140px] p-4 bg-paper/60 border border-grid/15 focus:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 resize-y"
                  id="contact-message"
                  name="message"
                  required
                />
              </div>

              <div className="mt-8 flex justify-center sm:justify-end">
                <LoadingButton
                  type="submit"
                  variant="primary"
                  className="w-full sm:w-auto sm:min-w-[220px]"
                  isLoading={status === "loading"}
                  loadingText="Sending..."
                >
                  Send message
                </LoadingButton>
              </div>
            </form>
          )}
        </div>
      </Container>
    </Section>
  );
}
