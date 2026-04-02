"use client";

import { useMemo, useState } from "react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { sendEmail } from "@/app/actions";
import { masterConfig } from "@/config/master";

type SelectionKey =
  | "website_root"
  | "website_premium_static"
  | "website_premium_static_pay_monthly"
  | "website_premium_static_1_year"
  | "website_custom"
  | "website_custom_brand_guidelines"
  | "website_custom_booking_engine"
  | "website_custom_dynamic_updates"
  | "website_ecommerce"
  | "social_root"
  | "social_monthly_management"
  | "social_local_seo_maps"
  | "social_paid_ads";

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type ScopeResult = {
  points: number;
  level: "Starter" | "Growth" | "Scale" | "Enterprise";
  summary: Array<{ label: string; indent: number; kind: "group" | "item" }>;
  recommendedNext: string;
};

function getScope(selections: Record<SelectionKey, boolean>): ScopeResult {
  const picked: Array<{ label: string; points: number }> = [];
  const summary: ScopeResult["summary"] = [];

  const pushItem = (label: string, points: number, indent: number) => {
    picked.push({ label, points });
    summary.push({ label, indent, kind: "item" });
  };

  const pushGroup = (label: string) => {
    summary.push({ label, indent: 0, kind: "group" });
  };

  if (selections.website_root) {
    pushGroup("Website");
  }

  if (selections.website_premium_static) pushItem("Premium static website", 18, 1);
  if (selections.website_premium_static_pay_monthly) pushItem("Pay Monthly plan", 10, 2);
  if (selections.website_premium_static_1_year) pushItem("1 Year plan", 7, 2);

  if (selections.website_custom) pushItem("Custom website", 32, 1);
  if (selections.website_custom_brand_guidelines) {
    pushItem("Custom logo and brand guidelines", 22, 2);
  }
  if (selections.website_custom_booking_engine) pushItem("Booking or appointment engine", 26, 2);
  if (selections.website_custom_dynamic_updates) pushItem("Dynamic content updates", 16, 2);

  if (selections.website_ecommerce) pushItem("E-commerce build", 40, 1);

  if (selections.social_root) {
    pushGroup("Social media");
  }

  if (selections.social_monthly_management) pushItem("Monthly social management", 24, 1);
  if (selections.social_local_seo_maps) pushItem("Local SEO and Google Maps", 20, 1);
  if (selections.social_paid_ads) pushItem("Paid ads management", 34, 1);

  const points = picked.reduce((sum, item) => sum + item.points, 0);

  const level: ScopeResult["level"] =
    points <= 30 ? "Starter" : points <= 70 ? "Growth" : points <= 120 ? "Scale" : "Enterprise";

  const summaryWithFallback: ScopeResult["summary"] = picked.length
    ? summary
    : [{ label: "No items selected yet.", indent: 0, kind: "item" }];

  const recommendedNext =
    level === "Starter"
      ? "Fast launch, then iterate monthly based on leads."
      : level === "Growth"
        ? "Strong build with focused landing pages and tracking from day one."
        : level === "Scale"
          ? "Plan a phased rollout with conversion testing and content expansion."
          : "Align stakeholders early and define acceptance criteria before design starts.";

  return { points, level, summary: summaryWithFallback, recommendedNext };
}

function CheckboxRow({
  id,
  label,
  checked,
  onChange,
  disabled,
  indent = 0,
  hint,
  inputType = "checkbox",
  radioName,
}: {
  id: string;
  label: string;
  checked: boolean;
  onChange: (next: boolean) => void;
  disabled?: boolean;
  indent?: 0 | 1 | 2 | 3;
  hint?: string;
  inputType?: "checkbox" | "radio";
  radioName?: string;
}) {
  return (
    <label
      htmlFor={id}
      className={cn(
        "group flex items-start gap-3 border border-grid/15 bg-white px-4 py-3",
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:border-primary/50"
      )}
      style={{ marginLeft: indent * 14 }}
    >
      <span className="pt-0.5">
        <input
          id={id}
          type={inputType}
          name={inputType === "radio" ? radioName : undefined}
          className="h-4 w-4 accent-[var(--color-primary)]"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          disabled={disabled}
        />
      </span>
      <span className="min-w-0">
        <span className="block text-sm text-ink leading-snug">{label}</span>
        {hint ? <span className="mt-1 block text-xs text-ink-muted leading-relaxed">{hint}</span> : null}
      </span>
    </label>
  );
}

export default function PricingPage() {
  const [selections, setSelections] = useState<Record<SelectionKey, boolean>>({
    website_root: false,
    website_premium_static: false,
    website_premium_static_pay_monthly: false,
    website_premium_static_1_year: false,
    website_custom: false,
    website_custom_brand_guidelines: false,
    website_custom_booking_engine: false,
    website_custom_dynamic_updates: false,
    website_ecommerce: false,
    social_root: false,
    social_monthly_management: false,
    social_local_seo_maps: false,
    social_paid_ads: false,
  });

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [formError, setFormError] = useState<string | null>(null);

  const scope = useMemo(() => getScope(selections), [selections]);
  const calendlyUrl = masterConfig.contact.calendlyUrl?.trim();
  const calendlyIsExternal = /^https?:\/\//i.test(calendlyUrl ?? "");

  function setSelection(key: SelectionKey, next: boolean) {
    setSelections((prev) => {
      const base = { ...prev, [key]: next };

      if (key === "website_root") {
        if (!next) {
          base.website_root = false;
          base.website_premium_static = false;
          base.website_premium_static_pay_monthly = false;
          base.website_premium_static_1_year = false;
          base.website_custom = false;
          base.website_custom_brand_guidelines = false;
          base.website_custom_booking_engine = false;
          base.website_custom_dynamic_updates = false;
          base.website_ecommerce = false;
        }
      }

      if (key === "social_root") {
        if (!next) {
          base.social_monthly_management = false;
          base.social_local_seo_maps = false;
          base.social_paid_ads = false;
        }
      }

      if (key === "website_premium_static") {
        if (next) {
          base.website_root = true;
          base.website_custom = false;
          base.website_custom_brand_guidelines = false;
          base.website_custom_booking_engine = false;
          base.website_custom_dynamic_updates = false;
          base.website_ecommerce = false;
        } else {
          base.website_premium_static_pay_monthly = false;
          base.website_premium_static_1_year = false;
        }
      }

      if (key === "website_custom") {
        if (next) {
          base.website_root = true;
          base.website_premium_static = false;
          base.website_premium_static_pay_monthly = false;
          base.website_premium_static_1_year = false;
          base.website_ecommerce = false;
        } else {
          base.website_custom_brand_guidelines = false;
          base.website_custom_booking_engine = false;
          base.website_custom_dynamic_updates = false;
        }
      }

      if (key === "website_premium_static_pay_monthly" && next) {
        base.website_premium_static = true;
        base.website_root = true;
        base.website_premium_static_1_year = false;
      }
      if (key === "website_premium_static_1_year" && next) {
        base.website_premium_static = true;
        base.website_root = true;
        base.website_premium_static_pay_monthly = false;
      }

      if (
        (key === "website_custom_brand_guidelines" ||
          key === "website_custom_booking_engine" ||
          key === "website_custom_dynamic_updates") &&
        next
      ) {
        base.website_custom = true;
        base.website_root = true;
        base.website_premium_static = false;
        base.website_premium_static_pay_monthly = false;
        base.website_premium_static_1_year = false;
        base.website_ecommerce = false;
      }

      if (key === "website_ecommerce" && next) {
        base.website_root = true;
        base.website_premium_static = false;
        base.website_premium_static_pay_monthly = false;
        base.website_premium_static_1_year = false;
        base.website_custom = false;
        base.website_custom_brand_guidelines = false;
        base.website_custom_booking_engine = false;
        base.website_custom_dynamic_updates = false;
      }

      if (
        (key === "social_monthly_management" ||
          key === "social_local_seo_maps" ||
          key === "social_paid_ads") &&
        next
      ) {
        base.social_root = true;
      }

      return base;
    });
  }

  function reset() {
    setStatus("idle");
    setFormError(null);
    setSelections({
      website_root: false,
      website_premium_static: false,
      website_premium_static_pay_monthly: false,
      website_premium_static_1_year: false,
      website_custom: false,
      website_custom_brand_guidelines: false,
      website_custom_booking_engine: false,
      website_custom_dynamic_updates: false,
      website_ecommerce: false,
      social_root: false,
      social_monthly_management: false,
      social_local_seo_maps: false,
      social_paid_ads: false,
    });
    setForm({ name: "", email: "", phone: "", message: "" });
  }

  return (
    <main className="relative">
      <Section className="bg-transparent">
        <Container>
          <div className="border border-grid/15 bg-white overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="text-center">
                <Kicker className="mx-auto text-xs md:text-sm px-6 py-2.5 bg-primary/5 border-primary/30 text-primary"> PRICING </Kicker>
              </div>

              <h1 className="mt-8 text-center text-3xl sm:text-4xl md:text-6xl font-serif leading-[0.95] tracking-tighter text-ink">
                Get Pricing Estimate
              </h1>
              <p className="mt-6 max-w-3xl mx-auto text-center text-ink-muted leading-relaxed text-lg md:text-xl">
                Select exactly what you need. We&apos;ll instantly calculate the scope and send you a custom strategy and quote.
              </p>
            </div>

            <div className="border-t border-grid/15 p-7 md:p-8">
              <div className="border border-grid/15 bg-paper/30">
                <div className="grid md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-grid/15">
                  <div className="md:col-span-7 p-6 sm:p-7 md:p-8">
                    <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-ink-muted">
                      Build your package
                    </div>
                    <p className="mt-3 text-sm text-ink-muted leading-relaxed max-w-xl">
                      Check a category to unlock its options. Nothing is collapsible, everything stays visible. When you uncheck a parent, its child options reset.
                    </p>

                    <div className="mt-6 grid gap-2">
                      <CheckboxRow
                        id="sel-website-root"
                        label="Website"
                        checked={selections.website_root}
                        onChange={(next) => setSelection("website_root", next)}
                      />

                      <CheckboxRow
                        id="sel-premium-static"
                        label="Premium static website"
                        checked={selections.website_premium_static}
                        onChange={(next) => setSelection("website_premium_static", next)}
                        disabled={!selections.website_root}
                        indent={1}
                        inputType="radio"
                        radioName="website-tier"
                      />
                      <CheckboxRow
                        id="sel-premium-pay-monthly"
                        label="Pay Monthly"
                        checked={selections.website_premium_static_pay_monthly}
                        onChange={(next) => setSelection("website_premium_static_pay_monthly", next)}
                        disabled={!selections.website_premium_static || !selections.website_root}
                        indent={2}
                        hint="Best when you want ongoing improvements and support."
                        inputType="radio"
                        radioName="premium-static-term"
                      />
                      <CheckboxRow
                        id="sel-premium-1-year"
                        label="1 Year"
                        checked={selections.website_premium_static_1_year}
                        onChange={(next) => setSelection("website_premium_static_1_year", next)}
                        disabled={!selections.website_premium_static || !selections.website_root}
                        indent={2}
                        hint="Best when you want a fixed deliverable with a clear handoff."
                        inputType="radio"
                        radioName="premium-static-term"
                      />

                      <CheckboxRow
                        id="sel-custom-website"
                        label="Custom Website"
                        checked={selections.website_custom}
                        onChange={(next) => setSelection("website_custom", next)}
                        disabled={!selections.website_root}
                        indent={1}
                        inputType="radio"
                        radioName="website-tier"
                      />
                      <CheckboxRow
                        id="sel-custom-brand"
                        label="Custom Logo and Brand Guidelines"
                        checked={selections.website_custom_brand_guidelines}
                        onChange={(next) => setSelection("website_custom_brand_guidelines", next)}
                        disabled={!selections.website_custom || !selections.website_root}
                        indent={2}
                      />
                      <CheckboxRow
                        id="sel-custom-booking"
                        label="Booking or appointment engine"
                        checked={selections.website_custom_booking_engine}
                        onChange={(next) => setSelection("website_custom_booking_engine", next)}
                        disabled={!selections.website_custom || !selections.website_root}
                        indent={2}
                      />
                      <CheckboxRow
                        id="sel-custom-dynamic"
                        label="Dynamic content updates"
                        checked={selections.website_custom_dynamic_updates}
                        onChange={(next) => setSelection("website_custom_dynamic_updates", next)}
                        disabled={!selections.website_custom || !selections.website_root}
                        indent={2}
                      />

                      <CheckboxRow
                        id="sel-ecom"
                        label="E-commerce"
                        checked={selections.website_ecommerce}
                        onChange={(next) => setSelection("website_ecommerce", next)}
                        disabled={!selections.website_root}
                        indent={1}
                        hint="Catalog, checkout, payments, and conversion-focused product pages."
                        inputType="radio"
                        radioName="website-tier"
                      />

                      <div className="h-3" />

                      <CheckboxRow
                        id="sel-social-root"
                        label="Social media"
                        checked={selections.social_root}
                        onChange={(next) => setSelection("social_root", next)}
                      />
                      <CheckboxRow
                        id="sel-social-management"
                        label="Monthly Social Management"
                        checked={selections.social_monthly_management}
                        onChange={(next) => setSelection("social_monthly_management", next)}
                        disabled={!selections.social_root}
                        indent={1}
                      />
                      <CheckboxRow
                        id="sel-local-seo"
                        label="Local SEO and Maps"
                        checked={selections.social_local_seo_maps}
                        onChange={(next) => setSelection("social_local_seo_maps", next)}
                        disabled={!selections.social_root}
                        indent={1}
                      />
                      <CheckboxRow
                        id="sel-paid-ads"
                        label="Paid Ads"
                        checked={selections.social_paid_ads}
                        onChange={(next) => setSelection("social_paid_ads", next)}
                        disabled={!selections.social_root}
                        indent={1}
                      />
                    </div>
                  </div>

                  <div className="md:col-span-5 p-6 sm:p-7 md:p-8">
                    {status === "success" ? (
                      <div className="flex flex-col items-center justify-center min-h-[520px] text-center">
                        <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <h3 className="font-serif text-2xl tracking-tight mb-2">Request captured</h3>
                        <p className="text-ink-muted leading-relaxed max-w-sm">
                          We&apos;ve received your estimate request and will send your tailored quote shortly.
                        </p>
                        <Button variant="outline" className="mt-8" onClick={reset}>
                          Build another estimate
                        </Button>
                      </div>
                    ) : (
                      <form
                        className="flex flex-col gap-6"
                        onSubmit={async (e) => {
                          e.preventDefault();
                          setFormError(null);
                          const name = form.name.trim();
                          const email = form.email.trim();
                          const phone = form.phone.trim();
                          const userMessage = form.message.trim();

                          if (!name || !email) {
                            setFormError("Please enter your name and email.");
                            return;
                          }

                          if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                            setFormError("Please provide a valid email address.");
                            return;
                          }

                          const selectedSummary = scope.summary
                            .map((line) =>
                              line.kind === "group"
                                ? `${line.label}:`
                                : `${" ".repeat(line.indent * 2)}- ${line.label}`
                            )
                            .join("\n");

                          const payload = new FormData();
                          payload.append("name", name);
                          payload.append("email", email);
                          payload.append("leadType", "quote_request");
                          payload.append("project", `Pricing Estimate (${scope.level})`);
                          payload.append(
                            "message",
                            [
                              `Phone: ${phone || "N/A"}`,
                              `Scope Level: ${scope.level}`,
                              `Scope Points: ${scope.points}`,
                              `Recommended Next: ${scope.recommendedNext}`,
                              "",
                              "Selected Items:",
                              selectedSummary,
                              "",
                              "Visitor Message:",
                              userMessage || "N/A",
                            ].join("\n")
                          );

                          setStatus("loading");
                          try {
                            const result = await sendEmail(payload);
                            if (result.success) {
                              setStatus("success");
                              return;
                            }

                            setStatus("idle");
                            setFormError(result.error || "Failed to send request. Please try again.");
                          } catch {
                            setStatus("idle");
                            setFormError("Failed to send request. Please try again.");
                          }
                        }}
                      >
                        <div className="border border-grid/15 bg-white p-5">
                          <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-ink-muted">
                            Scope estimate
                          </div>
                          <div className="mt-3 flex items-end justify-between gap-4">
                            <div className="min-w-0">
                              <div className="font-serif text-xl tracking-tight text-ink">
                                {scope.level}
                              </div>
                              <div className="mt-1 text-sm text-ink-muted leading-relaxed">
                                {scope.recommendedNext}
                              </div>
                            </div>
                          </div>
                          <div className="mt-5 border-t border-grid/15 pt-5">
                            <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-ink-muted">
                              Selected items
                            </div>
                            <div className="mt-3 space-y-1">
                              {scope.summary.map((line) => (
                                <div
                                  key={`${line.kind}:${line.indent}:${line.label}`}
                                  className={cn(
                                    line.kind === "group"
                                      ? "pt-3 first:pt-0 font-mono text-[10px] uppercase tracking-[0.35em] text-ink"
                                      : "flex items-start gap-2 text-sm text-ink-muted leading-relaxed"
                                  )}
                                  style={
                                    line.kind === "item" ? { paddingLeft: line.indent * 12 } : undefined
                                  }
                                >
                                  {line.kind === "item" ? (
                                    <>
                                      <span aria-hidden className="mt-[3px] text-ink-muted/70">
                                        •
                                      </span>
                                      <span className="min-w-0">{line.label}</span>
                                    </>
                                  ) : (
                                    <span>{line.label}</span>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="grid gap-5">
                          <div className="space-y-2">
                            <label htmlFor="pricing-name" className="font-mono text-xs uppercase tracking-widest text-ink-muted">
                              Name <span className="text-primary">*</span>
                            </label>
                            <input
                              id="pricing-name"
                              className="w-full h-11 px-4 bg-paper/60 border border-grid/15 focus:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                              value={form.name}
                              onChange={(e) => {
                                setFormError(null);
                                setForm((p) => ({ ...p, name: e.target.value }));
                              }}
                              autoComplete="name"
                              required
                            />
                          </div>

                          <div className="space-y-2">
                            <label htmlFor="pricing-email" className="font-mono text-xs uppercase tracking-widest text-ink-muted">
                              Email <span className="text-primary">*</span>
                            </label>
                            <input
                              id="pricing-email"
                              type="email"
                              className="w-full h-11 px-4 bg-paper/60 border border-grid/15 focus:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                              value={form.email}
                              onChange={(e) => {
                                setFormError(null);
                                setForm((p) => ({ ...p, email: e.target.value }));
                              }}
                              autoComplete="email"
                              required
                            />
                          </div>

                          <div className="space-y-2">
                            <label htmlFor="pricing-phone" className="font-mono text-xs uppercase tracking-widest text-ink-muted">
                              Number
                            </label>
                            <input
                              id="pricing-phone"
                              type="tel"
                              className="w-full h-11 px-4 bg-paper/60 border border-grid/15 focus:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                              value={form.phone}
                              onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                              autoComplete="tel"
                            />
                          </div>

                          <div className="space-y-2">
                            <label htmlFor="pricing-message" className="font-mono text-xs uppercase tracking-widest text-ink-muted">
                              Message
                            </label>
                            <textarea
                              id="pricing-message"
                              className="w-full min-h-[140px] p-4 bg-paper/60 border border-grid/15 focus:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 resize-y text-sm leading-relaxed placeholder:font-mono placeholder:text-[11px] placeholder:tracking-[0.22em] placeholder:text-ink-muted/70"
                              value={form.message}
                              onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                              placeholder={"Share goals, timeline, and anything important.\nExample: We need leads for a clinic in Powai within 30 days."}
                            />
                          </div>
                        </div>

                        <div className="pt-2">
                          <Button
                            type="submit"
                            variant="primary"
                            size="lg"
                            className="w-full"
                            disabled={status === "loading"}
                          >
                            {status === "loading" ? "Sending..." : "Get pricing estimate"}
                          </Button>
                          {calendlyUrl ? (
                            <Button asChild variant="outline" size="lg" className="w-full mt-3">
                              <a
                                href={calendlyUrl}
                                target={calendlyIsExternal ? "_blank" : undefined}
                                rel={calendlyIsExternal ? "noreferrer" : undefined}
                              >
                                Book a call instead
                              </a>
                            </Button>
                          ) : null}
                          {formError ? (
                            <p className="mt-3 text-xs text-red-600 leading-relaxed">{formError}</p>
                          ) : null}
                          <p className="mt-3 text-xs text-ink-muted leading-relaxed">
                            No prices shown on purpose. This estimate calculates scope so we can reply with a tailored strategy and quote.
                          </p>
                        </div>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
