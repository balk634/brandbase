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

export function ContactForm({ variant = "section" }: { variant?: ContactFormVariant }) {
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
      <>
        <Section className="bg-transparent py-10 md:py-12 lg:py-14">
          <Container>
            <div className="border border-grid/15 bg-white overflow-hidden">
              <div className="p-6 sm:p-8 md:p-12">
                <div className="text-center">
                  <Kicker className="mx-auto text-[10px] md:text-xs px-4 py-2 bg-primary/5 border-primary/30 text-primary">
                    CONTACT
                  </Kicker>
                </div>

                <h1 className="mt-8 text-center text-3xl sm:text-4xl md:text-6xl font-serif leading-[0.95] tracking-tighter text-ink">
                  Book a instant call for <em className="font-serif-20 italic">consultation.</em>
                </h1>
                <p className="mt-6 max-w-3xl mx-auto text-center text-ink-muted leading-relaxed text-lg md:text-xl">
                  We&apos;ll review your website (or idea), identify the biggest conversion opportunities, and outline what to build first. Then we&apos;ll map the right marketing moves to scale what works.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                  <CalButton variant="primary" size="lg" className="w-full sm:w-auto sm:min-w-[220px]">
                    Book a call
                  </CalButton>
                </div>
              </div>

              <div className="border-t border-grid/15 grid md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-grid/15">
                <div className="md:col-span-5 p-6 sm:p-7 md:p-8 flex flex-col">
                  <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-ink-muted">
                    Details
                  </div>

                  <div className="mt-6 border border-grid/15 bg-paper/40 divide-y divide-grid/15">
                    <div className="p-5">
                      <div>
                        <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-ink-muted">
                          Email
                        </div>
                        <a
                          href={`mailto:${masterConfig.contact.email}`}
                          className="mt-2 inline-flex text-sm text-ink hover:text-primary transition-colors"
                        >
                          {masterConfig.contact.email}
                        </a>
                      </div>
                    </div>

                    <div className="p-5">
                      <div>
                        <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-ink-muted">
                          Phone
                        </div>
                        <a
                          href={`tel:${masterConfig.contact.phone}`}
                          className="mt-2 inline-flex text-sm text-ink hover:text-primary transition-colors"
                        >
                          {masterConfig.contact.phone}
                        </a>
                      </div>
                    </div>

                    <div className="p-5">
                      <div>
                        <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-ink-muted">
                          Office
                        </div>
                        <p className="mt-2 text-sm text-ink-muted leading-relaxed">
                          {masterConfig.contact.address.street}
                          <br />
                          {masterConfig.contact.address.city}, {masterConfig.contact.address.state}, {masterConfig.contact.address.country}
                          <br />
                          {masterConfig.contact.address.postalCode}
                        </p>
                      </div>
                    </div>

                    <div className="p-5">
                      <div>
                        <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-ink-muted">
                          Response Time
                        </div>
                        <div className="mt-2 text-sm text-ink-muted">
                          Typically within 24 hours (business days).
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-7 p-6 sm:p-7 md:p-8 flex flex-col">
                  {status === "success" ? (
                    <div className="flex-1 flex flex-col items-center justify-center min-h-[400px] text-center reveal-up">
                      <div className="h-16 w-16 border border-grid/15 bg-white flex items-center justify-center mb-8">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      </div>
                      <h3 className="font-serif text-3xl tracking-tight mb-2">Request <em className="font-serif-10 italic">captured</em></h3>
                      <p className="text-ink-muted leading-relaxed max-w-sm">We&apos;ve received your inquiry and will match you with a senior strategist within 24 hours.</p>
                      <Button variant="outline" className="mt-10 uppercase tracking-widest text-[10px]" onClick={() => setStatus("idle")}>Send another message</Button>
                    </div>
                  ) : (
                    <form id="contact-form" className="flex-1 flex flex-col" action={handleAction}>
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
                            htmlFor="contact-page-name"
                            className="font-mono text-xs uppercase tracking-widest text-ink-muted"
                          >
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
                          <label
                            htmlFor="contact-page-email"
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
                        <label
                          htmlFor="contact-page-phone"
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
                        <label
                          htmlFor="contact-page-subject"
                          className="font-mono text-xs uppercase tracking-widest text-ink-muted"
                        >
                          Subject
                        </label>
                        <input
                          className="w-full h-11 px-4 bg-paper/60 border border-grid/15 focus:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                          id="contact-page-subject"
                          name="subject"
                        />
                      </div>

                      <div className="mt-6 space-y-2 flex-1 flex flex-col">
                        <label
                          htmlFor="contact-page-message"
                          className="font-mono text-xs uppercase tracking-widest text-ink-muted"
                        >
                          Message <span className="text-primary">*</span>
                        </label>
                        <textarea
                          className="w-full flex-1 min-h-[160px] p-4 bg-paper/60 border border-grid/15 focus:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 resize-y text-sm leading-relaxed placeholder:font-mono placeholder:text-[11px] placeholder:tracking-[0.22em] placeholder:text-ink-muted/70"
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
              </div>
            </div>
          </Container>
        </Section>
      </>
    );
  }

  return (
    <Section className="bg-transparent">
      <Container className="grid md:grid-cols-12 gap-10 items-start">
        <div className="md:col-span-5">
          <Kicker>Let&apos;s talk.</Kicker>
          <h2 className="mt-6 text-3xl md:text-5xl font-serif tracking-tight mb-4">
            Book a call and get <em className="font-serif-10 italic">clarity.</em>
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

        <div className="md:col-span-7">
          {status === "success" ? (
            <div className="border border-grid/15 bg-white p-6 sm:p-8 md:p-12 text-center h-full flex flex-col items-center justify-center min-h-[440px] reveal-up">
              <div className="h-16 w-16 border border-grid/15 bg-white flex items-center justify-center mb-8">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <h3 className="font-serif text-3xl tracking-tight mb-2">Request <em className="font-serif-10 italic">captured</em></h3>
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
