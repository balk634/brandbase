"use client";

import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

// ─── Types ──────────────────────────────────────────────────────────────────

type SocialOption = "none" | "5" | "10" | "15";
type DurationOption = 1 | 3 | 6 | 12;

interface CalculatorState {
  branches: number;
  software: boolean;
  website: boolean;
  social: SocialOption;
  duration: DurationOption;
}

// ─── Pricing Data ───────────────────────────────────────────────────────────

const SOFTWARE_BY_BRANCH: Record<number, Record<DurationOption, number>> = {
  1: { 1: 1500, 3: 4200, 6: 7800, 12: 15000 },
  2: { 1: 2500, 3: 7000, 6: 13000, 12: 25000 },
  3: { 1: 3400, 3: 9500, 6: 17700, 12: 34000 },
  4: { 1: 4200, 3: 11700, 6: 21900, 12: 42000 },
  5: { 1: 4900, 3: 13700, 6: 25600, 12: 49000 },
};

const WEBSITE: Record<DurationOption, number> = {
  1: 500,
  3: 1400,
  6: 2600,
  12: 5000,
};

const SOCIAL: Record<string, Record<DurationOption, number>> = {
  5: { 1: 500, 3: 1400, 6: 2600, 12: 5000 },
  10: { 1: 800, 3: 2200, 6: 4200, 12: 8000 },
  15: { 1: 1100, 3: 3000, 6: 5700, 12: 11000 },
};

const DURATION_LABELS: Record<DurationOption, string> = {
  1: "1 month",
  3: "3 months",
  6: "6 months",
  12: "12 months",
};

// ─── Helper Functions ───────────────────────────────────────────────────────

function currency(n: number): string {
  return "₹" + n.toLocaleString("en-IN");
}

function computeQuote(state: CalculatorState) {
  const d = state.duration;
  const softwareCost = state.software ? SOFTWARE_BY_BRANCH[state.branches][d] : 0;
  const websiteCost = state.website ? WEBSITE[d] : 0;
  const socialCost = state.social !== "none" ? SOCIAL[state.social][d] : 0;

  const servicesCount =
    (state.software ? 1 : 0) +
    (state.website ? 1 : 0) +
    (state.social !== "none" ? 1 : 0);
  const discountRate =
    servicesCount >= 3 ? 0.1 : servicesCount === 2 ? 0.05 : 0;

  const subtotal = softwareCost + websiteCost + socialCost;
  const discountAmt = subtotal * discountRate;
  const afterDiscount = subtotal - discountAmt;
  const rounded = Math.round(afterDiscount / 100) * 100;
  const total = rounded;
  const freeSocialMonth = d === 12 && state.social !== "none";

  return {
    softwareCost,
    websiteCost,
    socialCost,
    servicesCount,
    discountRate,
    subtotal,
    discountAmt,
    rounded,
    total,
    freeSocialMonth,
  };
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function Stepper({
  value,
  min,
  max,
  onDecrease,
  onIncrease,
  label,
}: {
  value: number;
  min: number;
  max: number;
  onDecrease: () => void;
  onIncrease: () => void;
  label: string;
}) {
  return (
    <div className="flex items-center gap-2 sm:gap-3">
      <button
        type="button"
        onClick={onDecrease}
        disabled={value <= min}
        className="h-8 w-8 sm:h-8 sm:w-8 border border-grid/15 bg-paper/60 flex items-center justify-center text-ink-muted hover:border-primary/40 hover:text-primary disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
      >
        −
      </button>
      <span className="text-sm font-medium min-w-[60px] sm:min-w-[70px] text-center">{label}</span>
      <button
        type="button"
        onClick={onIncrease}
        disabled={value >= max}
        className="h-8 w-8 sm:h-8 sm:w-8 border border-grid/15 bg-paper/60 flex items-center justify-center text-ink-muted hover:border-primary/40 hover:text-primary disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
      >
        +
      </button>
    </div>
  );
}

function CheckboxRow({
  checked,
  onChange,
  label,
  sublabel,
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
  sublabel: string;
}) {
  return (
    <label className="flex items-center gap-3 p-3 border border-grid/15 bg-paper/40 rounded-sm cursor-pointer hover:border-primary/30 transition-colors">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="w-4 h-4 accent-primary flex-shrink-0"
      />
      <div className="flex-1 min-w-0">
        <span className="text-sm font-medium text-ink block truncate">{label}</span>
        <small className="block text-xs text-ink-muted/70 truncate">{sublabel}</small>
      </div>
    </label>
  );
}

function PillButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "px-3 sm:px-4 py-2 border text-xs sm:text-sm font-medium transition-colors",
        active
          ? "border-primary bg-primary text-white"
          : "border-grid/15 bg-paper/60 text-ink hover:border-primary/40"
      )}
    >
      {children}
    </button>
  );
}

// ─── Page ───────────────────────────────────────────────────────────────────

export default function CalcPage() {
  const [state, setState] = useState<CalculatorState>({
    branches: 1,
    software: true,
    website: false,
    social: "none",
    duration: 12,
  });

  const [copied, setCopied] = useState(false);
  const [lastTotal, setLastTotal] = useState<number | null>(null);

  const quote = computeQuote(state);

  function updateBranches(delta: number) {
    setState((prev) => ({
      ...prev,
      branches: Math.max(1, Math.min(5, prev.branches + delta)),
    }));
  }

  function toggleSoftware(checked: boolean) {
    setState((prev) => ({ ...prev, software: checked }));
  }

  function toggleWebsite(checked: boolean) {
    setState((prev) => ({ ...prev, website: checked }));
  }

  function setSocial(option: SocialOption) {
    setState((prev) => ({ ...prev, social: option }));
  }

  function setDuration(duration: DurationOption) {
    setState((prev) => ({ ...prev, duration }));
  }

  async function copyQuote() {
    if (quote.servicesCount === 0) return;

    const lines = [
      "MEDBASE QUOTE",
      `Branches: ${state.branches}`,
      `Duration: ${DURATION_LABELS[state.duration]}`,
      "—",
    ];

    if (state.software) {
      lines.push(`Medbase software: ${currency(quote.softwareCost)}`);
    }
    if (state.website) {
      lines.push(`Website: ${currency(quote.websiteCost)}`);
    }
    if (state.social !== "none") {
      lines.push(
        `Social (${state.social} posts/mo): ${currency(quote.socialCost)}`
      );
    }
    if (quote.discountRate > 0) {
      lines.push(
        `Bundle discount (${Math.round(quote.discountRate * 100)}%): −${currency(
          Math.round(quote.discountAmt)
        )}`
      );
    }
    lines.push("—");
    lines.push(
      `TOTAL: ${currency(quote.total)} (≈${currency(
        Math.round(quote.rounded / state.duration)
      )}/mo)`
    );
    if (quote.freeSocialMonth) {
      lines.push("+ First month of social posts free");
    }

    const text = lines.join("\n");

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (e) {
      // Fallback for older browsers
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand("copy");
        setCopied(true);
        setTimeout(() => setCopied(false), 1800);
      } catch (e2) {
        console.error("Copy failed", e2);
      }
      document.body.removeChild(textarea);
    }
  }

  // Flash effect when total changes
  if (lastTotal !== null && lastTotal !== quote.total) {
    setTimeout(() => setLastTotal(quote.total), 350);
  }

  return (
    <main className="relative">
      <Section className="bg-transparent pt-6 md:pt-10 lg:pt-14 pb-4 md:pb-6 lg:pb-8 relative z-10 border-b border-grid/10">
        <Container>
          <div className="max-w-3xl">
            <Kicker>MEDBASE</Kicker>
            <h1 className="mt-6 sm:mt-8 text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-serif leading-[0.95] tracking-tighter text-ink">
              Pricing,{" "}
              <em className="font-serif-20 italic">plainly.</em>
            </h1>
            <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-ink-muted leading-relaxed max-w-xl">
              Every tier includes the full software — unlimited, no feature caps.
              The only thing that changes between tiers is what else comes bundled
              with it.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-transparent py-8 border-b border-grid/10 relative z-10">
        <Container>
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-5 md:gap-6 lg:gap-6 items-start">
            {/* Calculator Form */}
            <div className="border border-grid/15 bg-white p-4 sm:p-5 md:p-6">
              <h3 className="font-serif text-lg sm:text-xl tracking-tight text-ink mb-5 md:mb-6">
                Build a custom quote
              </h3>

              <div className="space-y-4 md:space-y-5">
                {/* Branches */}
                <div>
                  <label className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-ink-muted mb-2 block">
                    Branches / clinic locations
                  </label>
                  <Stepper
                    value={state.branches}
                    min={1}
                    max={5}
                    onDecrease={() => updateBranches(-1)}
                    onIncrease={() => updateBranches(1)}
                    label={`${state.branches} branch${state.branches > 1 ? "es" : ""}`}
                  />
                  <p className="mt-2 text-[11px] sm:text-xs text-ink-muted/70 leading-relaxed">
                    Software scales per branch. Website & social stay flat per clinic
                    brand.
                  </p>
                </div>

                {/* Services */}
                <div>
                  <label className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-ink-muted mb-2 block">
                    Services included
                  </label>
                  <div className="space-y-2">
                    <CheckboxRow
                      checked={state.software}
                      onChange={toggleSoftware}
                      label="Medbase software"
                      sublabel="Full & unlimited, every time"
                    />
                    <CheckboxRow
                      checked={state.website}
                      onChange={toggleWebsite}
                      label="Website"
                      sublabel="Fully integrated with the backend"
                    />
                  </div>
                </div>

                {/* Social Media */}
                <div>
                  <label className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-ink-muted mb-2 block">
                    Social media posts / month
                  </label>
                  <div className="flex flex-wrap gap-2">
                    <PillButton
                      active={state.social === "none"}
                      onClick={() => setSocial("none")}
                    >
                      None
                    </PillButton>
                    <PillButton
                      active={state.social === "5"}
                      onClick={() => setSocial("5")}
                    >
                      5 posts
                    </PillButton>
                    <PillButton
                      active={state.social === "10"}
                      onClick={() => setSocial("10")}
                    >
                      10 posts
                    </PillButton>
                    <PillButton
                      active={state.social === "15"}
                      onClick={() => setSocial("15")}
                    >
                      15 posts
                    </PillButton>
                  </div>
                </div>

                {/* Duration */}
                <div>
                  <label className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-ink-muted mb-2 block">
                    Subscription length
                  </label>
                  <div className="flex flex-wrap gap-2">
                    <PillButton
                      active={state.duration === 1}
                      onClick={() => setDuration(1)}
                    >
                      1 month
                    </PillButton>
                    <PillButton
                      active={state.duration === 3}
                      onClick={() => setDuration(3)}
                    >
                      3 months
                    </PillButton>
                    <PillButton
                      active={state.duration === 6}
                      onClick={() => setDuration(6)}
                    >
                      6 months
                    </PillButton>
                    <PillButton
                      active={state.duration === 12}
                      onClick={() => setDuration(12)}
                    >
                      12 months
                    </PillButton>
                  </div>
                </div>

              </div>
            </div>

            {/* Quote Receipt */}
            <div className="border border-grid/15 bg-white p-4 sm:p-5 md:p-6">
              <h3 className="font-serif text-lg sm:text-xl tracking-tight text-ink mb-5 md:mb-6">
                Quote
              </h3>

              {quote.servicesCount === 0 ? (
                <p className="text-sm text-ink-muted leading-relaxed py-16 sm:py-20 text-center">
                  Select at least one service to build a quote.
                </p>
              ) : (
                <div>
                  <div className="space-y-0">
                    {state.software && (
                      <div className="flex justify-between items-baseline py-2 sm:py-3 border-b border-dashed border-grid/15 text-xs sm:text-sm">
                        <div className="flex-1 min-w-0 mr-2">
                          <span className="text-ink block truncate">Medbase software</span>
                          <span className="block text-[10px] sm:text-xs text-ink-muted/70 mt-1 truncate">
                            {state.branches} branch
                            {state.branches > 1 ? "es" : ""} ·{" "}
                            {DURATION_LABELS[state.duration]}
                          </span>
                        </div>
                        <span className="font-medium flex-shrink-0">{currency(quote.softwareCost)}</span>
                      </div>
                    )}
                    {state.website && (
                      <div className="flex justify-between items-baseline py-2 sm:py-3 border-b border-dashed border-grid/15 text-xs sm:text-sm">
                        <div className="flex-1 min-w-0 mr-2">
                          <span className="text-ink block truncate">Website</span>
                          <span className="block text-[10px] sm:text-xs text-ink-muted/70 mt-1 truncate">
                            {DURATION_LABELS[state.duration]}
                          </span>
                        </div>
                        <span className="font-medium flex-shrink-0">{currency(quote.websiteCost)}</span>
                      </div>
                    )}
                    {state.social !== "none" && (
                      <div className="flex justify-between items-baseline py-2 sm:py-3 border-b border-dashed border-grid/15 text-xs sm:text-sm">
                        <div className="flex-1 min-w-0 mr-2">
                          <span className="text-ink block truncate">
                            Social media — {state.social} posts/mo
                          </span>
                          <span className="block text-[10px] sm:text-xs text-ink-muted/70 mt-1 truncate">
                            {DURATION_LABELS[state.duration]}
                          </span>
                        </div>
                        <span className="font-medium flex-shrink-0">{currency(quote.socialCost)}</span>
                      </div>
                    )}
                    {quote.discountRate > 0 && (
                      <div className="flex justify-between items-baseline py-2 sm:py-3 border-b border-dashed border-grid/15 text-xs sm:text-sm">
                        <span className="text-primary">Bundle discount ({Math.round(quote.discountRate * 100)}%)</span>
                        <span className="font-medium text-primary flex-shrink-0">
                          −{currency(Math.round(quote.discountAmt))}
                        </span>
                      </div>
                    )}

                    <div className="flex justify-between items-baseline mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-grid/30">
                      <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-ink font-medium">
                        Total
                      </span>
                      <span
                        className={cn(
                          "font-serif text-xl sm:text-2xl font-medium",
                          lastTotal !== null && lastTotal !== quote.total
                            ? "bg-primary/5"
                            : ""
                        )}
                      >
                        {currency(quote.total)}
                      </span>
                    </div>
                    <div className="text-right text-[10px] sm:text-xs text-ink-muted/70 mt-1">
                      ≈ {currency(Math.round(quote.rounded / state.duration))}/month
                      equivalent
                    </div>

                    {quote.freeSocialMonth && (
                      <div className="mt-2 sm:mt-3 text-[10px] sm:text-xs text-primary bg-primary/5 p-2 font-medium">
                        + First month of social posts free (12-month plan)
                      </div>
                    )}
                  </div>

                  <Button
                    type="button"
                    onClick={copyQuote}
                    variant="primary"
                    className="w-full mt-3 sm:mt-4 text-xs sm:text-sm"
                  >
                    {copied ? "Copied!" : "Copy quote as text"}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}