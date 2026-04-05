"use client";

import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { masterConfig } from "@/config/master";
import { StandardFAQSection } from "@/components/sections/StandardFAQSection";
import { BoxPattern } from "@/components/ui/BoxPattern";
import Image from "next/image";
import {
  IconArrowsSplit,
  IconBolt,
  IconBrandFigma,
  IconChartBar,
  IconClock,
  IconCheck,
  IconCode,
  IconDatabase,
  IconDeviceDesktop,
  IconHeadset,
  IconRefresh,
  IconShield,
  IconTargetArrow,
  IconUsers,
  IconX,
  IconRocket,
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

type ImpactPlay = {
  title: string;
  copy: string;
  Icon: ComponentType<{ className?: string }>;
};

type SprintStep = {
  step: string;
  title1: string;
  title2: string;
  copy: string;
  Icon: ComponentType<{ className?: string }>;
};

const impactPlays: ImpactPlay[] = [
  {
    title: "Speed to first lead",
    copy: "Launch-ready architecture and conversion hierarchy reduce time lost between build and measurable lead flow.",
    Icon: IconBolt,
  },
  {
    title: "Higher buyer trust",
    copy: "Sharper UX, cleaner messaging, and stronger technical reliability improve confidence at key decision points.",
    Icon: IconShield,
  },
  {
    title: "Lower conversion leakage",
    copy: "Mobile QA, performance optimization, and intent-led page structure protect every traffic dollar.",
    Icon: IconTargetArrow,
  },
  {
    title: "Compounding iteration loop",
    copy: "Structured tracking and sprint-level improvements let your site improve month over month instead of stalling.",
    Icon: IconArrowsSplit,
  },
];

const sprintSteps: SprintStep[] = [
  {
    step: "01",
    title1: "Commercial",
    title2: "Discovery",
    copy: "Goals, offers, audience behavior, and conversion priorities are mapped before visual work begins.",
    Icon: IconTargetArrow,
  },
  {
    step: "02",
    title1: "Design + Content",
    title2: "Architecture",
    copy: "Page hierarchy, messaging, and interaction structure are built to reduce friction and increase action.",
    Icon: IconBrandFigma,
  },
  {
    step: "03",
    title1: "Build +",
    title2: "Integration",
    copy: "Development includes CMS setup, tracking, forms, and technical QA across key breakpoints.",
    Icon: IconDatabase,
  },
  {
    step: "04",
    title1: "Launch +",
    title2: "Optimization",
    copy: "Post-launch performance is monitored and improved through structured iteration cycles.",
    Icon: IconArrowsSplit,
  },
];

const ownershipWins: { text: string; Icon: ComponentType<{ className?: string }> }[] = [
  {
    text: "Direct communication with strategists, designers, and developers.",
    Icon: IconHeadset,
  },
  {
    text: "Clear scope boundaries and milestone-based delivery updates.",
    Icon: IconTargetArrow,
  },
  {
    text: "Maintainable code and documented handover readiness.",
    Icon: IconCode,
  },
  {
    text: "Support options for updates, experiments, and future expansion.",
    Icon: IconRefresh,
  },
];

const ownershipRisks: { text: string; Icon: ComponentType<{ className?: string }> }[] = [
  {
    text: "Fragmented freelancer stacks with unclear accountability.",
    Icon: IconUsers,
  },
  {
    text: "Template-heavy builds that block future customization.",
    Icon: IconDeviceDesktop,
  },
  {
    text: "Slow pages that leak conversion intent on mobile.",
    Icon: IconBolt,
  },
  {
    text: "Launches without tracking and measurable performance visibility.",
    Icon: IconChartBar,
  },
];

const revenueLeakChecks: { title: string; copy: string; Icon: ComponentType<{ className?: string }> }[] = [
  {
    title: "Traffic arrives, conversions stay flat",
    copy: "Visitors are not moving clearly from interest to inquiry.",
    Icon: IconTargetArrow,
  },
  {
    title: "Sales team gets low-quality leads",
    copy: "Messaging and form flow are attracting the wrong intent.",
    Icon: IconUsers,
  },
  {
    title: "Site updates are slow and risky",
    copy: "Each change takes too long, so growth experiments stall.",
    Icon: IconClock,
  },
  {
    title: "No clear decision data",
    copy: "Without clean tracking, budget and UX decisions become guesswork.",
    Icon: IconChartBar,
  },
];

const contactNowSignals = [
  "You are actively running ads and need better lead quality.",
  "You have growth targets for the next 90 days.",
  "Your team wants one accountable execution partner.",
  "You need a practical roadmap, not another generic redesign.",
];

const faqItems = [
  {
    q: "Which website path should we start with?",
    a: "We recommend the lowest-complexity option that still supports your real growth goal. Most teams start with Premium Static or Custom, then expand based on results.",
  },
  {
    q: "Can we add eCommerce after launching a service site?",
    a: "Yes. We can phase the roadmap so you launch quickly first, then add product catalog and checkout systems in a second stage.",
  },
  {
    q: "Do you only work on new builds?",
    a: "No. We also handle redesign and rescue engagements when existing websites are technically weak or conversion-poor.",
  },
  {
    q: "Will the site be fully responsive?",
    a: "Yes. Every component and page is tested across mobile, tablet, and desktop before launch.",
  },
  {
    q: "Do you provide support after go-live?",
    a: "Yes. Ongoing support and optimization retainers are available for updates, fixes, and performance growth work.",
  },
];

export function WebsiteSolutionsDeferred({ imagePosition = "right" }: { imagePosition?: "left" | "right" }) {
  return (
    <>
      <Section className="bg-transparent py-16 md:py-24 border-b border-grid/10 relative z-10">
        <Container>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <div className="border border-grid/15 bg-white overflow-hidden">
              <div className={`grid lg:grid-cols-[1.05fr_1fr] ${imagePosition === "left" ? "lg:grid-cols-[1fr_1.05fr]" : ""}`}>
                <div className={`p-7 md:p-10 border-b lg:border-b-0 lg:border-r border-grid/15 ${imagePosition === "left" ? "lg:order-last border-r-0 lg:border-l" : ""}`}>
                  <div className="flex items-center gap-2.5 text-ink-muted">
                    <div className="h-8 w-8 border border-primary/25 bg-paper/60 grid place-items-center text-primary">
                      <IconBolt className="h-4 w-4" />
                    </div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.35em]">BUSINESS IMPACT</div>
                  </div>
                  <h2 className="mt-5 text-2xl sm:text-3xl md:text-4xl font-serif tracking-tight text-ink max-w-2xl">
                    The difference between having a website and having a revenue <em className="font-serif-10 italic">asset.</em>
                  </h2>
                  <p className="mt-4 text-sm md:text-base text-ink-muted leading-relaxed max-w-xl">
                    The right website system does not just look better. It improves lead quality, shortens sales friction, and gives your team confidence in every growth decision.
                  </p>

                  <div className="mt-8 divide-y divide-grid/10">
                    {[
                      { label: "Faster market response", value: "ship updates quickly and test offers without technical delays", Icon: IconClock },
                      { label: "Cleaner sales signals", value: "track form intent, page behavior, and funnel quality with precision", Icon: IconChartBar },
                      { label: "Execution confidence", value: "one accountable team from strategy to post-launch optimization", Icon: IconHeadset },
                    ].map((item) => (
                      <div key={item.label} className="mi-row flex items-start gap-3 py-4 first:pt-0 last:pb-0">
                        <div className="mt-0.5 h-8 w-8 border border-primary/25 bg-primary/5 grid place-items-center text-primary shrink-0">
                          <item.Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-ink">{item.label}</p>
                          <p className="text-sm text-ink-muted leading-relaxed">{item.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <CalButton variant="primary" size="lg" className="w-full sm:w-auto sm:min-w-[220px]">
                      Book a call
                    </CalButton>
                  </div>
                </div>

                <div className="p-7 md:p-10 bg-paper/30">
                  <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-ink-muted mb-6">WHAT IMPROVES</div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {impactPlays.map((item) => (
                      <article key={item.title} className="mi-card border border-grid/15 bg-white p-5 md:p-6">
                        <div className="h-9 w-9 border border-primary/25 bg-paper/60 grid place-items-center text-primary">
                          <item.Icon className="h-4.5 w-4.5" />
                        </div>
                        <h3 className="mt-4 text-sm font-semibold text-ink">{item.title}</h3>
                        <p className="mt-2 text-sm text-ink-muted leading-relaxed">{item.copy}</p>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </Section>

      <Section className="bg-transparent py-16 md:py-24 border-b border-grid/10 relative z-10">
        <Container>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <div className="border border-grid/15 bg-white overflow-hidden">
              <div className={`grid lg:grid-cols-[1.1fr_1fr] ${imagePosition === "left" ? "lg:grid-cols-[1fr_1.1fr]" : ""}`}>
                <div className={`p-7 md:p-10 border-b lg:border-b-0 lg:border-r border-grid/15 ${imagePosition === "left" ? "lg:order-last border-r-0 lg:border-l" : ""}`}>
                  <div className="flex items-center gap-2.5 text-ink-muted">
                    <div className="h-8 w-8 border border-primary/25 bg-paper/60 grid place-items-center text-primary">
                      <IconRocket className="h-4 w-4" />
                    </div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.35em]">REVENUE LEAK CHECK</div>
                  </div>
                  <h2 className="mt-5 text-2xl sm:text-3xl md:text-4xl font-serif tracking-tight text-ink max-w-2xl">
                    If these signs are showing up, your website is already costing you <em className="font-serif-10 italic">growth.</em>
                  </h2>
                  <div className="mt-8 grid sm:grid-cols-2 gap-4">
                    {revenueLeakChecks.map((item) => (
                      <article key={item.title} className="mi-card border border-grid/15 bg-paper/40 p-4 md:p-5">
                        <div className="h-8 w-8 border border-primary/25 bg-paper/60 grid place-items-center text-primary">
                          <item.Icon className="h-4 w-4" />
                        </div>
                        <h3 className="mt-3 text-sm font-semibold text-ink">{item.title}</h3>
                        <p className="mt-1.5 text-sm text-ink-muted leading-relaxed">{item.copy}</p>
                      </article>
                    ))}
                  </div>
                </div>
                <div className={`p-7 md:p-10 bg-paper/30 flex flex-col gap-6 h-full justify-center ${imagePosition === "left" ? "lg:order-first" : ""}`}>
                  <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-ink-muted">WHEN TO CONTACT NOW</div>
                  <div className="divide-y divide-grid/10">
                    {contactNowSignals.map((signal) => (
                      <div key={signal} className="mi-row flex items-center gap-3 py-4 first:pt-0 last:pb-0">
                        <div className="mt-0.5 h-8 w-8 border border-green-800/20 bg-green-800/5 text-green-800 grid place-items-center shrink-0">
                          <IconCheck className="h-4 w-4" />
                        </div>
                        <p className="text-sm text-ink leading-relaxed">{signal}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8">
                    <CalButton variant="primary" size="lg" className="w-full sm:w-auto sm:min-w-[220px]">
                      Book a call
                    </CalButton>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3 pt-1">
                    <div className="border border-grid/15 bg-white/80 p-3.5 md:p-4">
                      <div className="flex items-center gap-2 text-ink">
                        <IconClock className="h-4 w-4 text-primary" />
                        <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-ink-muted">Response</span>
                      </div>
                      <p className="mt-2 text-sm font-semibold text-ink">Within 24 hours</p>
                    </div>
                    <div className="border border-grid/15 bg-white/80 p-3.5 md:p-4">
                      <div className="flex items-center gap-2 text-ink">
                        <IconHeadset className="h-4 w-4 text-primary" />
                        <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-ink-muted">Deliverable</span>
                      </div>
                      <p className="mt-2 text-sm font-semibold text-ink">Practical action roadmap</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </Section>

      <Section className="bg-transparent py-16 md:py-24 border-b border-grid/10 relative z-10">
        <Container>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <div className="mb-14">
              <div className="flex items-center gap-2.5 text-ink-muted">
                <div className="h-8 w-8 border border-primary/25 bg-paper/60 grid place-items-center text-primary">
                  <IconArrowsSplit className="h-4 w-4" />
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.35em]">DELIVERY MODEL</div>
              </div>
              <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight text-ink max-w-3xl">
                Four sprint layers that keep execution fast and <em className="font-serif-10 italic">accountable.</em>
              </h2>
            </div>
            <div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-y-0 md:gap-y-8 lg:gap-y-0 relative"
            >
              {sprintSteps.map((step, i) => (
                <div
                  key={step.step}
                  className={`relative flex flex-col items-stretch ${i < sprintSteps.length - 1 ? "pb-0" : ""
                    }`}
                >
                                <motion.div
                                    variants={fadeInUp}
                                    whileHover={{ y: -2, transition: { duration: 0.18 } }}
                                    className="relative border border-grid/15 bg-white p-7 md:p-8 flex flex-col h-full group cursor-default hover:border-primary/30 hover:bg-paper/40 transition-colors duration-300"
                                >
                                    <BoxPattern />
                                    <div className="font-mono text-5xl font-bold tracking-tight text-ink mb-6">
                                        {step.step}
                                    </div>
                                    <div className="h-11 w-11 border border-grid/15 bg-white grid place-items-center text-ink group-hover:text-primary group-hover:border-primary/30 group-hover:bg-primary/5 transition-colors duration-300 mb-6">
                                        <step.Icon className="h-5 w-5" />
                                    </div>
                                    <h3 className="font-serif text-xl sm:text-2xl tracking-tight text-ink mb-3 leading-[1.1]">
                                        {step.title1} <br />
                                        <em className="font-serif-20 italic">{step.title2}</em>
                                    </h3>
                                    <p className="text-[13px] text-ink-muted leading-relaxed flex-1">
                                        {step.copy}
                                    </p>
                                </motion.div>
                  {i < sprintSteps.length - 1 && (
                    <>
                      <div
                        aria-hidden="true"
                        className="flex md:hidden absolute left-1/2 -bottom-4 -translate-x-1/2 z-20 nc-process-connector nc-process-connector--vertical"
                      >
                        <span />
                        <span />
                        <span />
                      </div>

                      <div
                        aria-hidden="true"
                        className="hidden lg:flex absolute top-1/2 -right-12 -translate-y-1/2 z-20 nc-process-connector"
                      >
                        <span />
                        <span />
                        <span />
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      <Section className="bg-transparent py-16 md:py-24 border-b border-grid/10 relative z-10">
        <Container>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <div className="mb-14">
              <div className="flex items-center gap-2.5 text-ink-muted">
                <div className="h-8 w-8 border border-primary/25 bg-paper/60 grid place-items-center text-primary">
                  <IconShield className="h-4 w-4" />
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.35em]">EXECUTION DISCIPLINE</div>
              </div>
              <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight text-ink max-w-3xl">
                What your team gains with structure and what it avoids with the right <em className="font-serif-10 italic">partner.</em>
              </h2>
            </div>
            <div className="border border-grid/15 bg-white">
              <div className="grid lg:grid-cols-2">
                <div className="p-7 md:p-10 border-b lg:border-b-0 lg:border-r border-grid/15">
                  <div className="flex items-center gap-2.5 text-ink-muted mb-6">
                    <div className="h-10 w-10 border border-green-800/20 bg-green-800/5 text-green-800 grid place-items-center">
                      <IconCheck className="h-4 w-4" />
                    </div>
 <h3 className="font-serif text-xl md:text-2xl tracking-tight text-ink">YOU GET</h3>
                  </div>
                  <div className="divide-y divide-grid/10">
                    {ownershipWins.map((item) => (
                      <div key={item.text} className="mi-row flex items-center gap-3 py-4 first:pt-0 last:pb-0">
                        <div className="mt-0.5 h-8 w-8 border border-green-800/20 bg-paper/60 text-green-800 grid place-items-center shrink-0">
                          <item.Icon className="h-4 w-4" />
                        </div>
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
 <h3 className="font-serif text-xl md:text-2xl tracking-tight text-ink">YOU AVOID</h3>
                  </div>
                  <div className="divide-y divide-grid/10">
                    {ownershipRisks.map((item) => (
                      <div key={item.text} className="mi-row flex items-center gap-3 py-4 first:pt-0 last:pb-0">
                        <div className="mt-0.5 h-8 w-8 border border-red-500/25 bg-paper/60 text-red-600 grid place-items-center shrink-0">
                          <item.Icon className="h-4 w-4" />
                        </div>
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
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <div className="border border-grid/15 bg-white overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className={`p-8 md:p-12 lg:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-grid/15 ${imagePosition === "left" ? "lg:order-last border-r-0 lg:border-l" : ""}`}>
                  <motion.div variants={fadeInUp}>
                    <div className="flex items-center gap-2.5 text-ink-muted mb-6">
                      <div className="h-8 w-8 border border-primary/25 bg-primary/5 grid place-items-center text-primary">
                        <IconTargetArrow className="h-4 w-4" />
                      </div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.35em]">NEXT STEP</div>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tighter mb-6">
                      Want us to map your exact website <em className="font-serif-10 italic">track?</em>
                    </h2>
                    <p className="text-ink-muted text-lg leading-relaxed mb-10 max-w-lg">
                      Share your stage, revenue model, and timeline. We will recommend the right scope with no overbuild.
                    </p>
                    <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
                      <CalButton variant="primary" size="lg" className="w-full sm:w-auto sm:min-w-[220px]">
                        Book a call
                      </CalButton>
                      <Button asChild variant="outline" size="lg" className="w-full sm:w-auto sm:min-w-[220px]">
                        <Link href="/pricing">View pricing models</Link>
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>
                <motion.div variants={scaleIn} className={`p-8 md:p-12 lg:p-16 bg-paper/30 flex flex-col justify-center ${imagePosition === "left" ? "lg:order-first" : ""}`}>
                  <div className="divide-y divide-grid/10">
                    {[
                      { label: "Response Time", value: "Within 24 hours" },
                      { label: "Planning Call", value: "15-30 minutes" },
                      { label: "Proposal", value: "Clear scope + timeline" },
                      { label: "Team Access", value: "Direct with builders" },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 py-4 sm:py-5 first:pt-0 last:pb-0"
                      >
                        <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-ink-muted">{stat.label}</span>
 <span className="font-serif text-ink">{stat.value}</span>
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

