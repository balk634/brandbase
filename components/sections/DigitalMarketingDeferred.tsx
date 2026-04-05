"use client";

import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Kicker } from "@/components/ui/Kicker";
import { StandardFAQSection } from "@/components/sections/StandardFAQSection";

import {
  IconAd,
  IconCheck,
  IconClock,
  IconDeviceDesktop,
  IconHeartbeat,
  IconRadar,
  IconReportAnalytics,
  IconTargetArrow,
  IconX,
} from "@tabler/icons-react";
import type { ComponentType } from "react";
import { motion } from "@/components/ui/motion-lite";
import { CalButton } from "@/components/ui/CalBooking";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

type RiskItem = {
  text: string;
  Icon: ComponentType<{ className?: string }>;
};

const growthLevers: RiskItem[] = [
  { text: "We update your ad's look and message every few days so people don't start ignoring you.", Icon: IconAd },
  { text: "We show your ads to local customers exactly when they are ready to call or visit.", Icon: IconRadar },
  { text: "We only increase your budget when the data proves you are making a clear profit.", Icon: IconReportAnalytics },
  { text: "Every ad leads to a fast, simple page that gives customers exactly what they need.", Icon: IconTargetArrow },
];

const budgetDrains: RiskItem[] = [
  { text: "Spending money on 'likes' or 'shares' that never turn into a real sale.", Icon: IconHeartbeat },
  { text: "Paying the platform to show your ads to people who click by mistake or are just 'looking.'", Icon: IconX },
  { text: "Running multiple ads without knowing which one is actually bringing in the money.", Icon: IconClock },
  { text: "Bidding on expensive search words that bring visitors but zero new business.", Icon: IconDeviceDesktop },
];

const faqItems = [
  {
    q: "Do we need all three services from day one?",
    a: "No. We typically start with the highest-leverage channel first, then layer additional services once baseline performance is stable.",
  },
  {
    q: "How soon will we see meaningful signal?",
    a: "Paid channels often show early signal in weeks. Social authority and local search usually compound over a longer window.",
  },
  {
    q: "How do you report performance?",
    a: "We report channel performance and connect execution changes to business metrics like qualified leads, calls, and revenue trend impact.",
  },
  {
    q: "Can this model work for both local and wider markets?",
    a: "Yes. Channel mix and optimization depth are adapted based on geography, competition, and your sales process.",
  },
  {
    q: "Do you align landing pages and conversion flow too?",
    a: "Yes. We align traffic strategy with page experience so marketing performance does not leak after the click.",
  },
];

export function DigitalMarketingDeferred({ imagePosition = "right" }: { imagePosition?: "left" | "right" }) {
  return (
    <>
      <Section className="bg-transparent py-16 md:py-24 border-b border-grid/10 relative z-10">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <div className="grid lg:grid-cols-[1.1fr_1fr] gap-6">
              <motion.div
                variants={fadeInUp}
                className={`border border-grid/15 bg-white p-7 md:p-10 ${imagePosition === "left" ? "lg:order-last" : ""}`}
              >
                <Kicker>CHANNEL COMPASS</Kicker>
                <h2 className="mt-5 text-2xl sm:text-3xl md:text-4xl font-serif tracking-tight text-ink">
                  How we use each channel to grow your
                  <em className="font-serif-10 italic"> revenue.</em>
                </h2>
                <div className="mt-8 divide-y divide-grid/10">
                  {[
                    {
                      lane: "Paid Advertising",
                      role: "Generating Leads",
                      win: "Turn ad spend into new customers in days, not months.",
                      Icon: IconTargetArrow,
                    },
                    {
                      lane: "Social Presence",
                      role: "Building Trust",
                      win: "Stay top-of-mind and look established when customers search for you.",
                      Icon: IconHeartbeat,
                    },
                    {
                      lane: "Local Search",
                      role: "Capturing Intent",
                      win: "Appear first when people are searching for someone they can hire right now.",
                      Icon: IconRadar,
                    },
                  ].map((item) => (
                    <div
                      key={item.lane}
                      className="mi-row py-4 first:pt-0 last:pb-0"
                    >
                      <div>
                        <p className="text-sm font-semibold text-ink">{item.lane}</p>
                        <p className="mt-1 text-sm text-ink-muted">
                          <span className="text-ink">Role:</span> {item.role}
                        </p>
                        <p className="mt-0.5 text-sm text-ink-muted">
                          <span className="text-ink">Outcome:</span> {item.win}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div variants={fadeInUp} className={`grid sm:grid-cols-2 gap-4 ${imagePosition === "left" ? "lg:order-first" : ""}`}>
                {[
                  {
                    label: "Update Rhythm",
                    value: "Weekly",
                    Icon: IconClock,
                    note: "Constant Tuning",
                    detail:
                      "We're in your account every week so you never overpay for clicks.",
                  },
                  {
                    label: "Simple Reporting",
                    value: "Total Clarity",
                    Icon: IconReportAnalytics,
                    note: "The Full Picture",
                    detail:
                      "No more wondering if it's working. We show you the exact revenue your ads generated.",
                  },
                  {
                    label: "Fresh Content",
                    value: "Always Active",
                    Icon: IconAd,
                    note: "Zero Ad Fatigue",
                    detail:
                      "We rotate images and headlines constantly so your ads never get stale.",
                  },
                  {
                    label: "Spend Controls",
                    value: "Total Safety",
                    Icon: IconTargetArrow,
                    note: "No Wasted Money",
                    detail:
                      "We set strict rules to pause expensive ads and scale the ones that are bringing in profit.",
                  },
                ].map((stat) => (
                    <div
                      key={stat.label}
                      className="mi-card border border-grid/15 bg-white p-5 md:p-6"
                    >
                      <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink-muted">
                        {stat.label}
                      </div>
                    <div className="mt-3 font-serif text-xl md:text-2xl tracking-tight text-ink">
                      {stat.value}
                    </div>
                    <div className="mt-5 pt-4 border-t border-grid/10">
                      <div className="flex items-center gap-2 text-xs font-medium text-ink">
                        <IconCheck className="h-3.5 w-3.5 text-green-800" />
                        <span>{stat.note}</span>
                      </div>
                      <p className="mt-2 text-xs text-ink-muted leading-relaxed">
                        {stat.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </Section>

      <Section className="bg-transparent py-16 md:py-24 border-b border-grid/10 relative z-10">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <div className="mb-14">
              <Kicker>SMART ACQUISITION</Kicker>
              <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight text-ink max-w-3xl">
                How we grow your business and stop your budget from <em className="font-serif-10 italic">leaking.</em>
              </h2>
            </div>
            <div className="border border-grid/15 bg-white">
              <div className="grid lg:grid-cols-2">
                <div className="p-7 md:p-10 border-b lg:border-b-0 lg:border-r border-grid/15">
                  <div className="flex items-center gap-2.5 text-ink-muted mb-6">
                    <div className="h-10 w-10 border border-green-800/20 bg-green-800/5 text-green-800 grid place-items-center">
                      <IconCheck className="h-4 w-4" />
                    </div>
 <h3 className="font-serif text-xl md:text-2xl tracking-tight text-ink">
                      WHAT GROWS REVENUE
                    </h3>
                  </div>
                      <div className="divide-y divide-grid/10">
                        {growthLevers.map((item) => (
                          <div
                            key={item.text}
                            className="mi-row py-4 first:pt-0 last:pb-0"
                          >
                        <p className="text-sm text-ink leading-relaxed">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-7 md:p-10">
                  <div className="flex items-center gap-2.5 text-ink-muted mb-6">
                    <div className="h-10 w-10 border border-red-500/25 bg-red-500/10 text-red-600 grid place-items-center">
                      <IconX className="h-4 w-4" />
                    </div>
 <h3 className="font-serif text-xl md:text-2xl tracking-tight text-ink">
                      WHERE MONEY IS WASTED
                    </h3>
                  </div>
                  <div className="divide-y divide-grid/10">
                    {budgetDrains.map((item) => (
                      <div
                        key={item.text}
                        className="mi-row py-4 first:pt-0 last:pb-0"
                      >
                        <p className="text-sm text-ink leading-relaxed">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </Section>

      <StandardFAQSection items={faqItems} withBottomBorder />

      <Section className="bg-transparent py-16 md:py-24 relative z-10">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <div className="border border-grid/15 bg-white overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className={`p-8 md:p-12 lg:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-grid/15 ${imagePosition === "left" ? "lg:order-last border-r-0 lg:border-l" : ""}`}>
                  <motion.div variants={fadeInUp}>
                    <Kicker className="mb-6">NEXT STEP</Kicker>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tighter mb-6">
                      Ready for a marketing system that actually pays for <em className="font-serif-10 italic">itself?</em>
                    </h2>
                    <p className="text-ink-muted text-lg leading-relaxed mb-10 max-w-lg">
                      Tell us about your business goals and we will show you exactly how we will get you there.
                    </p>
                    <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
                      <CalButton
                        variant="primary"
                        size="lg"
                        className="w-full sm:w-auto sm:min-w-[220px]"
                      >
                        Book a call
                      </CalButton>
                      <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="w-full sm:w-auto sm:min-w-[220px]"
                      >
                        <Link href="/pricing">View pricing models</Link>
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>
                <motion.div
                  variants={scaleIn}
                  className={`p-8 md:p-12 lg:p-16 bg-paper/30 flex flex-col justify-center ${imagePosition === "left" ? "lg:order-first" : ""}`}
                >
                  <div className="divide-y divide-grid/10">
                    {[
                      { label: "Response Time", value: "Within 24 hours" },
                      { label: "Initial Audit", value: "Within first call" },
                      { label: "Execution Plan", value: "Prioritized by ROI" },
                      { label: "Review Rhythm", value: "Weekly + monthly" },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 py-4 sm:py-5 first:pt-0 last:pb-0"
                      >
                        <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-ink-muted">
                          {stat.label}
                        </span>
 <span className="font-serif text-ink">
                          {stat.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
