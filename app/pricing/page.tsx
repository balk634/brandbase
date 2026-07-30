"use client";

import { useState } from "react";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { Button } from "@/components/ui/Button";
import { LoadingButton } from "@/components/ui/LoadingButton";
import { cn } from "@/lib/utils";
import { sendEmail } from "@/app/actions";
import { CalButton } from "@/components/ui/CalBooking";
import {
  IconCheck,
  IconCircleCheck,
  IconBuildingHospital,
  IconSchool,
  IconChefHat,
  IconPhone,
  IconBrandWhatsapp,
  IconHeadset,
  IconRefresh,
  IconServer,
  IconBriefcase,
} from "@tabler/icons-react";

// ─── Types ──────────────────────────────────────────────────────────────────

type VerticalKey = "none" | "health" | "education" | "hospitality" | "others";

type AddOnKey = "website" | "maps" | "social";

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

// ─── Pricing Data ───────────────────────────────────────────────────────────

const VERTICALS: {
  key: VerticalKey;
  label: string;
  name: string;
  range: string;
  rangeNote: string;
  Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  bullets: string[];
}[] = [
  {
    key: "health",
    label: "CLINIC MANAGEMENT SYSTEM",
    name: "Clinic",
    range: "₹18,000 – ₹32,000",
    rangeNote: "depending on number of doctors, specialty-specific fields (e.g. dental charts), and whether WhatsApp recall automation is included.",
    Icon: IconBuildingHospital,
    bullets: [
      "Patient records & digital visit history",
      "Live consultation queue tracker",
      "WhatsApp recall reminders for check-ups",
      "GST-compliant billing & invoicing",
      "Medicine & consumables inventory",
    ],
  },
  {
    key: "education",
    label: "COACHING MANAGEMENT SYSTEM",
    name: "Coaching Center",
    range: "₹16,000 – ₹28,000",
    rangeNote: "depending on number of batches, whether video course hosting is needed, and payment gateway integration.",
    Icon: IconSchool,
    bullets: [
      "Batch & class schedule management",
      "Student records & admission tracking",
      "WhatsApp fee reminders to parents",
      "Attendance marking & daily register",
      "Secure video course hosting (optional)",
    ],
  },
  {
    key: "hospitality",
    label: "RESTAURANT MANAGEMENT SYSTEM",
    name: "Restaurant / Café",
    range: "₹18,000 – ₹30,000",
    rangeNote: "depending on kitchen stations, whether a KDS tablet setup is needed, and QR menu integration.",
    Icon: IconChefHat,
    bullets: [
      "Live order dashboard (dine-in, takeaway, delivery)",
      "Kitchen Display System (KDS) for cook stations",
      "Dynamic menu & real-time item availability",
      "Table reservations with WhatsApp confirmations",
      "Stock deduction synced to each completed order",
    ],
  },
  {
    key: "others",
    label: "CUSTOM BUSINESS SYSTEM",
    name: "Others",
    range: "₹15,000+",
    rangeNote: "depending on your custom workflow, database complexity, integrations, and whether a frontend website is included.",
    Icon: IconBriefcase,
    bullets: [
      "Custom workflow design tailored to your specific process",
      "Personalized database schema mapped to your entities",
      "Custom actions, statuses, and notifications",
      "Integrations with your existing stack and messaging tools",
      "Responsive dashboard tailored for your devices",
    ],
  },
];

const INCLUDED_ALWAYS = [
  {
    text: "Custom backend system built for your business type — not a generic template",
    Icon: IconServer,
  },
  {
    text: "WhatsApp automation for reminders, invoices, and follow-ups",
    Icon: IconBrandWhatsapp,
  },
  {
    text: "Staff training and complete setup support",
    Icon: IconSchool,
  },
  {
    text: "Ongoing hosting and technical support (monthly fee, billed separately)",
    Icon: IconHeadset,
  },
  {
    text: "2 rounds of revisions on database fields and dashboard layout",
    Icon: IconRefresh,
  },
];

const ADD_ONS: { key: AddOnKey; label: string; note: string }[] = [
  { key: "website", label: "Website Design & Development", note: "priced based on scope" },
  { key: "maps", label: "Google Maps / Local Visibility Setup", note: "priced based on scope" },
  { key: "social", label: "Initial Social Content Batch", note: "priced based on scope" },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

function VerticalCard({
  vertical,
  selected,
  onSelect,
}: {
  vertical: typeof VERTICALS[0];
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        "w-full text-left border transition-all duration-200 p-5 flex flex-col gap-3 group",
        selected
          ? "border-primary bg-primary/5 ring-1 ring-primary/30"
          : "border-grid/15 bg-white hover:border-primary/40"
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className={cn(
              "h-9 w-9 grid place-items-center border transition-colors duration-200",
              selected
                ? "border-primary/30 bg-primary/10 text-primary"
                : "border-grid/15 bg-paper/60 text-ink-muted group-hover:border-primary/20 group-hover:text-primary"
            )}
          >
            <vertical.Icon className="h-4 w-4" strokeWidth={1.5} />
          </div>
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-ink-muted">
            {vertical.label}
          </span>
        </div>
        <div
          className={cn(
            "h-5 w-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-200",
            selected ? "border-primary bg-primary" : "border-grid/30"
          )}
        >
          {selected && <IconCheck className="h-2.5 w-2.5 text-white" strokeWidth={3} />}
        </div>
      </div>
      <div className="font-serif text-base tracking-tight text-ink">{vertical.name}</div>
    </button>
  );
}

// ─── Page ───────────────────────────────────────────────────────────────────

export default function PricingPage() {
  const [selectedVertical, setSelectedVertical] = useState<VerticalKey>("none");
  const [selectedAddOns, setSelectedAddOns] = useState<Set<AddOnKey>>(new Set());

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formStartedAt] = useState(() => Date.now().toString());
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const isEmailValid = form.email === "" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
  const isPhoneValid = form.phone === "" || /^\+?[\d\s-]{10,}$/.test(form.phone);

  const activeVertical = VERTICALS.find((v) => v.key === selectedVertical) ?? null;

  function toggleAddOn(key: AddOnKey) {
    setSelectedAddOns((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  function reset() {
    setSelectedVertical("none");
    setSelectedAddOns(new Set());
    setForm({ name: "", email: "", phone: "", message: "" });
    setStatus("idle");
  }

  async function handleAction(formData: FormData) {
    const userMessage = String(formData.get("visitor_message") || "").trim();
    const phone = String(formData.get("phone") || "").trim();

    if (phone && !/^\+?[\d\s-]{10,}$/.test(phone)) return;

    const verticalLabel = activeVertical ? activeVertical.label : "None selected";
    const addOnLabels =
      selectedAddOns.size > 0
        ? Array.from(selectedAddOns)
            .map((k) => ADD_ONS.find((a) => a.key === k)?.label ?? k)
            .join(", ")
        : "None";
    const rangeText = activeVertical
      ? `${activeVertical.range} (${activeVertical.rangeNote})`
      : "Not selected";

    const composedMessage = [
      `System: ${verticalLabel}`,
      `Estimated Range: ${rangeText}`,
      `Add-ons: ${addOnLabels}`,
      userMessage ? `\nVisitor Message:\n${userMessage}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const payload = new FormData();
    payload.set("name", String(formData.get("name") || ""));
    payload.set("email", String(formData.get("email") || ""));
    payload.set("phone", phone);
    payload.set("visitor_message", composedMessage);
    payload.set("formStartedAt", String(formData.get("formStartedAt") || ""));
    payload.set("website", String(formData.get("website") || ""));
    payload.set("subject", "Pricing Enquiry");

    setStatus("loading");
    try {
      const result = await sendEmail(payload);
      setStatus(result?.error ? "error" : "success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="relative">

      {/* ── 1. HERO / PRICE ANCHOR ── */}
      <Section className="bg-transparent pt-6 md:pt-10 lg:pt-14 pb-14 md:pb-20 relative z-10 border-b border-grid/10">
        <Container>
          <div className="max-w-3xl">
            <Kicker>PRICING</Kicker>
            <h1 className="mt-8 text-3xl sm:text-4xl md:text-6xl font-serif leading-[0.95] tracking-tighter text-ink">
              How much does a custom management system cost? Custom business management systems{" "}
              <em className="font-serif-20 italic">start at ₹15,000.</em>
            </h1>
            <p className="mt-6 text-base md:text-lg text-ink-muted leading-relaxed max-w-xl">
              What affects the final price? Your industry type, required features, and whether you need a website included. Use the selector below to get a realistic range for your business
              type.
            </p>
            <p className="mt-3 text-sm text-ink-muted/70 leading-relaxed max-w-xl">
              There are no published tier packages here on purpose. Every system is scoped around
              how your business actually works — not a fixed feature list you have to fit into.
            </p>
          </div>
        </Container>
      </Section>

      {/* ── 2. WHAT'S INCLUDED ── */}
      <Section className="bg-transparent py-14 md:py-20 border-b border-grid/10 relative z-10">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <Kicker className="mb-6">WHAT&apos;S TYPICALLY INCLUDED</Kicker>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif tracking-tight text-ink mb-8">
                Every system ships with these{" "}
                <em className="font-serif-10 italic">core capabilities.</em>
              </h2>
              <ul className="space-y-4">
                {INCLUDED_ALWAYS.map((item) => {
                  const ItemIcon = item.Icon;
                  return (
                    <li key={item.text} className="flex items-start gap-3">
                      <div className="h-5 w-5 border border-primary/25 bg-primary/5 grid place-items-center text-primary flex-shrink-0 mt-0.5">
                        <ItemIcon className="h-3 w-3" strokeWidth={2} />
                      </div>
                      <span className="text-sm text-ink-muted leading-relaxed">{item.text}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div>
              <Kicker className="mb-6">OPTIONAL ADD-ONS</Kicker>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif tracking-tight text-ink mb-8">
                Flexible extras,{" "}
                <em className="font-serif-10 italic">scoped to your needs.</em>
              </h2>
              <div className="space-y-3">
                {ADD_ONS.map((addon) => (
                  <button
                    key={addon.key}
                    type="button"
                    onClick={() => toggleAddOn(addon.key)}
                    className={cn(
                      "w-full text-left border p-4 flex items-center justify-between gap-4 transition-all duration-200",
                      selectedAddOns.has(addon.key)
                        ? "border-primary/40 bg-primary/5"
                        : "border-grid/15 bg-white hover:border-primary/30"
                    )}
                  >
                    <div>
                      <div className="text-sm font-medium text-ink">{addon.label}</div>
                      <div className="mt-0.5 text-xs text-ink-muted/70 font-mono uppercase tracking-widest">
                        {addon.note}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
              <p className="mt-4 text-xs text-ink-muted/60 leading-relaxed">
                Add-on pricing is always discussed during your scoping call — no surprises.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── 3. VERTICAL SELECTOR + RANGE OUTPUT + FORM ── */}
      <Section className="bg-transparent py-14 md:py-20 border-b border-grid/10 relative z-10">
        <Container>
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-start">

            {/* Left: Selector */}
            <div>
              <Kicker className="mb-6">SELECT YOUR BUSINESS TYPE</Kicker>
              <h2 className="text-2xl sm:text-3xl font-serif tracking-tight text-ink mb-3">
                What kind of business are{" "}
                <em className="font-serif-10 italic">you running?</em>
              </h2>
              <p className="text-sm text-ink-muted leading-relaxed mb-8">
                Select the closest match. We&apos;ll show a realistic investment range based on
                what businesses like yours typically need.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {VERTICALS.map((v) => (
                  <VerticalCard
                    key={v.key}
                    vertical={v}
                    selected={selectedVertical === v.key}
                    onSelect={() =>
                      setSelectedVertical(selectedVertical === v.key ? "none" : v.key)
                    }
                  />
                ))}
              </div>

              {/* Range Output */}
              {activeVertical ? (
                <div className="mt-6 border border-primary/25 bg-primary/5 p-5">
                  <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-primary mb-3">
                    Typical Investment Range
                  </div>
                  <div className="font-serif text-3xl sm:text-4xl tracking-tight text-ink">
                    {activeVertical.range}
                  </div>
                  <p className="mt-2 text-xs text-ink-muted leading-relaxed">
                    This is a realistic range based on what {activeVertical.name} businesses
                    typically invest,{" "}
                    <span className="text-ink/80">{activeVertical.rangeNote}</span>
                  </p>
                  <div className="mt-5 border-t border-primary/15 pt-4">
                    <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-ink-muted mb-3">
                      System typically includes
                    </div>
                    <ul className="space-y-1.5">
                      {activeVertical.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-xs text-ink-muted leading-relaxed">
                          <IconCheck className="h-3 w-3 text-primary flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="mt-4 text-[11px] text-ink-muted/60 leading-relaxed">
                    Exact pricing is confirmed on a 15-minute scoping call once we understand how
                    your business runs.
                  </p>
                </div>
              ) : (
                <div className="mt-6 border border-grid/15 bg-paper/40 p-5">
                  <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-ink-muted mb-2">
                    Investment Range
                  </div>
                  <div className="text-sm text-ink-muted leading-relaxed">
                    Select your business type above to see a realistic investment range.
                  </div>
                </div>
              )}
            </div>

            {/* Right: Form */}
            <div className="border border-grid/15 bg-white">
              <div className="p-6 sm:p-8 border-b border-grid/10">
                <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-ink-muted mb-2">
                  Get Your Exact Quote
                </div>
                <p className="font-serif text-lg text-ink">
                  Tell us about your business. We&apos;ll reply within 24 hours with a scope and
                  exact price.
                </p>
              </div>

              {status === "success" ? (
                <div className="p-8 flex flex-col items-center justify-center min-h-[400px] text-center">
                  <div className="h-14 w-14 border border-grid/15 bg-white flex items-center justify-center mb-6">
                    <IconCircleCheck className="w-6 h-6 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-2xl tracking-tight mb-2 text-ink">
                    Message <em className="font-serif-10 italic text-primary">Received</em>
                  </h3>
                  <p className="text-ink-muted leading-relaxed max-w-sm text-sm">
                    We&apos;ve received your enquiry and will reply with a tailored scope and quote
                    within 24 hours.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-8 uppercase tracking-widest text-[10px]"
                    onClick={reset}
                  >
                    Start over
                  </Button>
                </div>
              ) : (
                <form className="flex flex-col gap-5 p-6 sm:p-8" action={handleAction}>
                  <input type="hidden" name="formStartedAt" value={formStartedAt} readOnly />
                  <input
                    aria-hidden="true"
                    autoComplete="off"
                    className="absolute -left-[9999px] opacity-0 pointer-events-none"
                    name="website"
                    tabIndex={-1}
                    type="text"
                  />

                  {/* Hidden: pass selected vertical into message */}
                  <input
                    type="hidden"
                    name="selected_vertical"
                    value={activeVertical?.label ?? "None"}
                    readOnly
                  />

                  <div className="space-y-1.5">
                    <label
                      htmlFor="pricing-name"
                      className="font-mono text-xs uppercase tracking-widest text-ink-muted"
                    >
                      Name <span className="text-primary">*</span>
                    </label>
                    <input
                      id="pricing-name"
                      name="name"
                      className="w-full h-11 px-4 bg-paper/60 border border-grid/15 focus:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 text-sm"
                      value={form.name}
                      onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                      autoComplete="name"
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="pricing-email"
                      className="font-mono text-xs uppercase tracking-widest text-ink-muted"
                    >
                      Email <span className="text-primary">*</span>
                    </label>
                    <input
                      id="pricing-email"
                      name="email"
                      type="email"
                      className={cn(
                        "w-full h-11 px-4 bg-paper/60 border focus-visible:outline-none focus-visible:ring-2 transition-colors text-sm",
                        !isEmailValid && form.email !== ""
                          ? "border-red-500 focus:border-red-500 focus-visible:ring-red-500/40"
                          : "border-grid/15 focus:border-primary focus-visible:ring-primary/40"
                      )}
                      value={form.email}
                      onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                      autoComplete="email"
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="pricing-phone"
                      className="font-mono text-xs uppercase tracking-widest text-ink-muted"
                    >
                      Phone / WhatsApp
                    </label>
                    <input
                      id="pricing-phone"
                      name="phone"
                      type="tel"
                      className={cn(
                        "w-full h-11 px-4 bg-paper/60 border focus-visible:outline-none focus-visible:ring-2 transition-colors text-sm",
                        !isPhoneValid && form.phone !== ""
                          ? "border-red-500 focus:border-red-500 focus-visible:ring-red-500/40"
                          : "border-grid/15 focus:border-primary focus-visible:ring-primary/40"
                      )}
                      value={form.phone}
                      onChange={(e) => {
                        const val = e.target.value.replace(/[^\d+\s-]/g, "");
                        setForm((p) => ({ ...p, phone: val }));
                      }}
                      autoComplete="tel"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="pricing-message"
                      className="font-mono text-xs uppercase tracking-widest text-ink-muted"
                    >
                      Tell us about your business
                    </label>
                    <textarea
                      id="pricing-message"
                      name="visitor_message"
                      className="w-full min-h-[120px] p-4 bg-paper/60 border border-grid/15 focus:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 resize-y text-sm leading-relaxed placeholder:font-mono placeholder:text-[11px] placeholder:tracking-[0.22em] placeholder:text-ink-muted/70"
                      value={form.message}
                      onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                      placeholder={"e.g. We run a dental clinic in Bandra with 3 doctors and want to replace our paper register."}
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-sm text-red-500">
                      Something went wrong. Please try again or email us directly at info@brandbase.in.
                    </p>
                  )}

                  <div className="pt-1">
                    <LoadingButton
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full"
                      isLoading={status === "loading"}
                      loadingText="Sending..."
                    >
                      Send enquiry
                    </LoadingButton>
                    <p className="mt-3 text-xs text-ink-muted leading-relaxed">
                      We reply within 24 hours with a clear scope and honest price. No automated
                      pitches — a real person reviews every enquiry.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── 4. STRONG CLOSING CTA ── */}
      <Section className="bg-transparent py-16 md:py-24 relative z-10">
        <Container>
          <div className="border border-grid/15 bg-white overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-grid/15">
                <Kicker className="mb-6">ONE CALL IS ALL IT TAKES</Kicker>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tighter mb-6">
                  Get your exact quote{" "}
                  <em className="font-serif-10 italic">in one call.</em>
                </h2>
                <p className="text-ink-muted text-base leading-relaxed mb-4 max-w-lg">
                  In 15 minutes, we&apos;ll understand exactly how your business runs and give you a
                  clear number — not a range, not a guess. A real quote built around your specific
                  workflow.
                </p>
                <p className="text-ink-muted/70 text-sm leading-relaxed mb-10 max-w-lg">
                  See what the system will look like before you commit to anything.
                </p>
                <div className="flex flex-wrap gap-3">
                  <CalButton variant="primary" size="lg" className="sm:min-w-[220px]">
                    <IconPhone className="h-4 w-4 mr-2" />
                    BOOK A 15-MIN CALL
                  </CalButton>
                  <Button asChild variant="outline" size="lg" className="sm:min-w-[220px]">
                    <Link href="/contact">
                      SEND A MESSAGE INSTEAD
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="p-8 md:p-12 lg:p-16 bg-paper/30 flex flex-col justify-center">
                <div className="divide-y divide-grid/10">
                  {[
                    { label: "Response Time", value: "Within 24 hours" },
                    { label: "Scoping Call", value: "15 minutes, no commitment" },
                    { label: "Proposal", value: "Clear scope + exact price" },
                    { label: "Seat Licensing", value: "Zero per-user fees" },
                    { label: "Ownership", value: "100% yours from day one" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 py-4 sm:py-5 first:pt-0 last:pb-0"
                    >
                      <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-ink-muted">
                        {stat.label}
                      </span>
                      <span className="font-serif text-ink">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
