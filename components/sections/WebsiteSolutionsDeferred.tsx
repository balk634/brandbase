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
  IconDatabase,
  IconShield,
  IconTargetArrow,
  IconShieldCheck,
  IconChartDots,
  IconMagnet,
  IconSitemap,
  IconRefresh,
  IconTrendingUp,
  IconLayoutGrid,
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

const staggerSlow = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};


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

type SprintStep = {
  step: string;
  title1: string;
  title2: string;
  copy: string;
  Icon: ComponentType<{ className?: string }>;
};

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

const bentoItems = [
  {
    title: "Trust is instantaneous",
    copy: "50ms is the window for a first impression. A weak site signals a weak product and immediately increases bounce rate.",
    Icon: IconShieldCheck,
    statNumber: "50",
    statUnit: "ms",
    statLabel: "First impression window",
  },
  {
    title: "Performance is revenue",
    copy: "Every fraction of a second in load time is a direct cost to your ad spend and conversion rate.",
    Icon: IconBolt,
  },
  {
    title: "Scalable sales asset",
    copy: "Your site is a 24/7 sales engine that qualifies leads, answers objections, and handles friction while your team sleeps.",
    Icon: IconChartDots,
  },
  {
    title: "Frictionless decisions",
    copy: "Based on Hick's Law, eliminating noise ensures your buyer only sees the next actionable step. Fewer choices, more conversions.",
    Icon: IconMagnet,
  },
  {
    title: "Conversion architecture",
    copy: "Every page follows a deliberate hierarchy — attention, interest, desire, action — built into the layout from the start.",
    Icon: IconSitemap,
  },
  {
    title: "First-party data capture",
    copy: "Every visit is a structured opportunity to capture intent signals and enrich your CRM with qualified lead data.",
    Icon: IconDatabase,
  },
  {
    title: "Built for iteration",
    copy: "Modular systems let you launch fast and compound improvements over time — no full rebuild required when your strategy evolves.",
    Icon: IconRefresh,
  },
  {
    title: "SEO as a compounding asset",
    copy: "Structured foundations turn search into a channel that pays back over time.",
    Icon: IconTrendingUp,
  },
  {
    title: "System over template",
    copy: "Every component adapts as your product and team evolve.",
    Icon: IconLayoutGrid,
  },
];

export function WebsiteSolutionsDeferred({ imagePosition = "right" }: { imagePosition?: "left" | "right" }) {
  return (
    <>
      <Section className="bg-transparent py-16 md:py-24 border-b border-grid/10 relative z-10">
        <Container>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerSlow}>
            <div className="mb-14">
              <div className="flex items-center gap-2.5 text-ink-muted">
                <div className="h-8 w-8 border border-primary/25 bg-paper/60 grid place-items-center text-primary">
                  <IconShield className="h-4 w-4" />
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.35em]">STRATEGIC FOUNDATION</div>
              </div>
              <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight text-ink max-w-3xl">
                Your website is either a revenue asset or a silent <em className="font-serif-10 italic">liability.</em>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 md:gap-4 relative z-10">
              {bentoItems.map((pillar, idx) => {
                let layoutClass = "";
                switch(idx) {
                  case 0: layoutClass = "lg:col-start-1 lg:col-span-2 lg:row-start-1 lg:row-span-2"; break;
                  case 1: layoutClass = "lg:col-start-3 lg:col-span-2 lg:row-start-1 lg:row-span-1"; break;
                  case 2: layoutClass = "lg:col-start-5 lg:col-span-2 lg:row-start-1 lg:row-span-1"; break;
                  case 3: layoutClass = "lg:col-start-3 lg:col-span-2 lg:row-start-2 lg:row-span-1"; break;
                  case 4: layoutClass = "lg:col-start-3 lg:col-span-2 lg:row-start-3 lg:row-span-1"; break;
                  case 5: layoutClass = "lg:col-start-5 lg:col-span-2 lg:row-start-2 lg:row-span-1"; break;
                  case 6: layoutClass = "lg:col-start-1 lg:col-span-2 lg:row-start-3 lg:row-span-1"; break;
                  case 7: layoutClass = "lg:col-start-5 lg:col-span-1 lg:row-start-3 lg:row-span-1"; break;
                  case 8: layoutClass = "lg:col-start-6 lg:col-span-1 lg:row-start-3 lg:row-span-1"; break;
                }

                const isMini = idx === 7 || idx === 8;
                const isLarge = idx === 0;

                return (
                  <motion.article
                    key={pillar.title}
                    variants={fadeInUp}
                    className={`relative border border-grid/15 bg-white flex flex-col group hover:border-primary/30 hover:bg-paper/40 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-md col-span-1 ${layoutClass} ${isMini ? "p-5 md:p-6" : "p-6 md:p-8"}`}
                  >
                  <BoxPattern />
                  <div className="relative z-10 flex flex-col h-full">
                    <div className={`border border-primary/25 bg-paper/60 grid place-items-center text-primary group-hover:bg-primary/5 group-hover:border-primary/40 transition-colors duration-300 shadow-sm flex-shrink-0 ${isMini ? "h-8 w-8 rounded-md mb-4" : "h-10 w-10 mb-6"}`}>
                      <pillar.Icon className={isMini ? "h-4 w-4" : "h-5 w-5"} />
                    </div>
                    <div className={isLarge ? "" : "mt-auto"}>
                      <h3 className={`font-serif tracking-tight text-ink mb-2 md:mb-3 leading-tight ${isMini ? "text-lg md:text-xl" : "text-xl md:text-2xl"}`}>
                        {pillar.title}
                      </h3>
                      <p className={`text-ink-muted leading-relaxed ${isMini ? "text-[12px] md:text-[13px]" : "text-[13px] md:text-sm"}`}>
                        {pillar.copy}
                      </p>
                    </div>
                    
                    {isLarge && (
                      <div className="mt-auto pt-8">
                        <div className="font-serif text-[3.2rem] md:text-[3.8rem] tracking-tight leading-none text-ink mb-2">
                          {pillar.statNumber}<span className="text-3xl md:text-[2.1rem] ml-1">{pillar.statUnit}</span>
                        </div>
                        <div className="text-[10px] tracking-[0.1em] uppercase text-ink-muted/80 font-medium">
                          {pillar.statLabel}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.article>
                );
              })}
            </div>
          </motion.div>
        </Container>
      </Section>
      <Section className="bg-transparent py-16 md:py-24 border-b border-grid/10 relative z-10">
        <Container>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerSlow}>
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
            <div className="relative">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-y-0 md:gap-y-8 lg:gap-y-0 relative" style={{ columnGap: "3rem" }}>
                {sprintSteps.map((item, i) => (
                  <div
                    key={item.step}
                    className={`relative flex flex-col items-stretch ${i < sprintSteps.length - 1 ? "pb-0" : ""}`}
                  >
                    <motion.div variants={fadeInUp} whileHover={{ y: -2, transition: { duration: 0.18 } }} className="relative border border-grid/15 bg-white p-7 md:p-8 flex flex-col h-full group cursor-default hover:border-primary/30 hover:bg-paper/40 transition-colors duration-300">
                      <BoxPattern />
                      <div className="font-mono text-5xl font-bold tracking-tight text-ink mb-6">
                        {item.step}
                      </div>
                      <div className="h-11 w-11 border border-grid/15 bg-white grid place-items-center text-ink group-hover:text-primary group-hover:border-primary/30 group-hover:bg-primary/5 transition-colors duration-300 mb-6">
                        <item.Icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-serif text-xl sm:text-2xl tracking-tight text-ink mb-3 leading-[1.1]">
                        {item.title1} <br />
                        <em className="font-serif-20 italic">{item.title2}</em>
                      </h3>
                      <p className="text-[13px] text-ink-muted leading-relaxed flex-1">
                        {item.copy}
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

