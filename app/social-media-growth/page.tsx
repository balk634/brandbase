import Link from "next/link";
import { HeroImage } from "@/components/ui/HeroImage";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Kicker } from "@/components/ui/Kicker";
import { masterConfig } from "@/config/master";
import { StandardFAQSection } from "@/components/sections/StandardFAQSection";
import { buildPageMetadata } from "@/lib/seoMetadata";
import {
  IconAd,
  IconRadar,
  IconClock,
  IconCheck,
  IconDeviceDesktop,
  IconHeartbeat,
  IconReportAnalytics,
  IconPlant2,
  IconTargetArrow,
  IconX,
} from "@tabler/icons-react";
import type { ComponentType } from "react";
import { motion } from "@/components/ui/motion-lite";
import { BoxPattern } from "@/components/ui/BoxPattern";

export const metadata = buildPageMetadata({
  title: "Digital Marketing Services | Nodecraft",
  description:
    "Performance marketing, social media management, and local SEO services focused on measurable lead and revenue growth.",
  path: "/digital-marketing",
});

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};
const fadeInLeft = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};
const fadeInRight = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
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

type GrowthLane = {
  label: string;
  title: string;
  summary: string;
  channels: string;
  timeline: string;
  href: string;
  Icon: ComponentType<{ className?: string }>;
};

type RoadmapStep = {
  phase: string;
  title: string;
  copy: string;
  Icon: ComponentType<{ className?: string }>;
};

type RiskItem = {
  text: string;
  Icon: ComponentType<{ className?: string }>;
};

const growthLanes: GrowthLane[] = [
  {
    label: "CORE LANE 01",
    title: "Performance Marketing",
    summary:
      "Acquisition campaigns engineered around CAC discipline, qualified demand quality, and scalable budget logic.",
    channels: "Meta, Google, retargeting",
    timeline: "2-3 weeks setup",
    href: "/digital-marketing/performance-marketing",
    Icon: IconTargetArrow,
  },
  {
    label: "CORE LANE 02",
    title: "Social Media Management",
    summary:
      "Brand consistency and audience trust systems through strategic content planning, execution, and community handling.",
    channels: "Instagram, LinkedIn, short-form",
    timeline: "2 weeks onboarding",
    href: "/digital-marketing/management",
    Icon: IconHeartbeat,
  },
  {
    label: "CORE LANE 03",
    title: "Local SEO & Google Maps",
    summary:
      "Local search visibility engine focused on calls, bookings, and nearby high-intent discovery.",
    channels: "Google Maps, GBP, local pages",
    timeline: "2-4 weeks setup",
    href: "/digital-marketing/local-seo",
    Icon: IconRadar,
  },
];

const roadmapSteps: RoadmapStep[] = [
  {
    phase: "DAY 01-14",
    title: "Audit + Signal Setup",
    copy: "Tracking validation, baseline diagnostics, and channel prioritization so early spend is controlled.",
    Icon: IconReportAnalytics,
  },
  {
    phase: "DAY 15-45",
    title: "Launch + Controlled Testing",
    copy: "Creative and audience experiments run with strict hypotheses to find repeatable performance patterns.",
    Icon: IconAd,
  },
  {
    phase: "DAY 46-90",
    title: "Scale + Allocation",
    copy: "Budget shifts toward winning channels while weaker segments are rebuilt or paused quickly.",
    Icon: IconPlant2,
  },
];

const riskControls: RiskItem[] = [
  { text: "Budget pacing rules to avoid spend spikes.", Icon: IconTargetArrow },
  { text: "Structured creative testing before major scaling decisions.", Icon: IconAd },
  { text: "Weekly channel reviews for underperforming segments.", Icon: IconClock },
  { text: "Attribution checks to reduce false positive decisions.", Icon: IconReportAnalytics },
];

const commonFailurePatterns: RiskItem[] = [
  { text: "Treating paid ads as a one-time setup with no optimization.", Icon: IconPlant2 },
  { text: "Publishing social content without clear intent or feedback loops.", Icon: IconHeartbeat },
  { text: "Ignoring local ranking hygiene and review velocity.", Icon: IconRadar },
  { text: "Scaling spend without landing page and funnel alignment.", Icon: IconDeviceDesktop },
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

export default function SocialMediaGrowthPage() {
  return (
    <main className="relative text-ink pb-20">
      <Section className="bg-transparent pt-6 md:pt-10 lg:pt-14 pb-14 md:pb-20 relative z-10 border-b border-grid/10">
        <Container>
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <motion.div variants={fadeInLeft}>
                  <Kicker className="text-xs md:text-sm px-6 py-2.5 bg-primary/5 border-primary/30 text-primary"> DIGITAL MARKETING </Kicker>
                </motion.div>
                <motion.h1
                  variants={fadeInLeft}
                  className="mt-8 text-3xl sm:text-4xl md:text-6xl font-sans font-bold leading-[0.95] tracking-tighter text-ink max-w-2xl"
                >
                  Replace channel chaos with one <span className="text-primary">coordinated growth engine.</span>
                </motion.h1>
                <motion.p
                  variants={fadeInLeft}
                  className="mt-6 text-base md:text-lg text-ink-muted leading-relaxed max-w-lg"
                >
                  Paid media, social execution, and local visibility are run as one system so your pipeline grows with less waste.
                </motion.p>
                <motion.div variants={fadeInLeft} className="mt-10 flex flex-wrap gap-3">
                  <Button asChild variant="primary" size="lg" className="w-full sm:w-auto sm:min-w-[220px]">
                    <Link href="#growth-lanes">See Growth Lanes</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="w-full sm:w-auto sm:min-w-[220px]">
                    <Link href="/contact">Book a call</Link>
                  </Button>
                </motion.div>
                <motion.div variants={fadeInLeft} className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] font-mono uppercase tracking-[0.2em] text-ink-muted">
                  <span>Paid + organic alignment</span>
                  <span>Weekly optimization loops</span>
                  <span>Attribution clarity</span>
                </motion.div>
              </div>
              <motion.div variants={fadeInRight} className="relative order-first lg:order-none">
                <div className="border border-grid/15 bg-white overflow-hidden">
                  <div className="relative aspect-square bg-white">
                    <HeroImage
                      src={`/${masterConfig.ui.heroImages.socialMediaGrowth}`}
                      alt="Digital marketing services overview hero"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </Section>

      <Section id="growth-lanes" className="scroll-mt-24 bg-transparent py-16 md:py-24 border-b border-grid/10 relative z-10">
        <Container>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
            <div className="mb-14 md:mb-16">
              <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-ink-muted">GROWTH LANES</div>
              <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold font-sans tracking-tight text-ink max-w-3xl">
                Three specialist services orchestrated as one integrated system.
              </h2>
            </div>
            <div className="grid lg:grid-cols-3 gap-5">
              {growthLanes.map((lane) => (
                <motion.article
                  key={lane.title}
                  variants={scaleIn}
                  whileHover={{ y: -2, transition: { duration: 0.18 } }}
                  className="mi-card border border-grid/15 bg-white p-6 md:p-8 flex flex-col"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink-muted">{lane.label}</div>
                      <h3 className="mt-3 text-xl font-sans font-semibold tracking-tight text-ink">{lane.title}</h3>
                    </div>
                    <div className="h-10 w-10 border border-primary/25 bg-paper/60 grid place-items-center text-primary shrink-0">
                      <lane.Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-ink-muted leading-relaxed flex-1">{lane.summary}</p>
                  <div className="mt-6 pt-4 border-t border-grid/10 space-y-1.5">
                    <p className="text-xs text-ink-muted"><span className="text-ink font-medium">Channels:</span> {lane.channels}</p>
                    <p className="text-xs text-ink-muted"><span className="text-ink font-medium">Timeline:</span> {lane.timeline}</p>
                  </div>
                  <Button asChild variant="outline" size="sm" className="mt-6 w-full">
                    <Link href={lane.href}>Explore {lane.title}</Link>
                  </Button>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      <Section className="bg-transparent py-16 md:py-24 border-b border-grid/10 relative z-10">
        <Container>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <div className="border border-grid/15 bg-white overflow-hidden">
              <div className="p-7 md:p-10 border-b border-grid/15">
                <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-ink-muted">90-DAY EXECUTION MAP</div>
                <h2 className="mt-5 text-2xl sm:text-3xl md:text-4xl font-sans font-bold tracking-tight text-ink max-w-3xl">
                  What we prioritize in the first 90 days to build predictable momentum.
                </h2>
              </div>
              <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-grid/15">
                {roadmapSteps.map((step) => (
                  <motion.article key={step.phase} variants={scaleIn} className="relative mi-card p-6 md:p-8">
                    <BoxPattern />
                    <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink-muted">{step.phase}</div>
                    <div className="mt-4 h-10 w-10 border border-primary/25 bg-paper/60 grid place-items-center text-primary">
                      <step.Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 font-sans font-semibold text-lg tracking-tight text-ink">{step.title}</h3>
                    <p className="mt-2.5 text-sm text-ink-muted leading-relaxed">{step.copy}</p>
                  </motion.article>
                ))}
              </div>
            </div>
          </motion.div>
        </Container>
      </Section>

      <Section className="bg-transparent py-16 md:py-24 border-b border-grid/10 relative z-10">
        <Container>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <div className="grid lg:grid-cols-[1.1fr_1fr] gap-6">
              <motion.div variants={fadeInUp} className="border border-grid/15 bg-white p-7 md:p-10">
                <div className="flex items-center gap-2.5 text-ink-muted">
                  <div className="h-8 w-8 border border-primary/25 bg-paper/60 grid place-items-center text-primary">
                    <IconTargetArrow className="h-4 w-4" />
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.35em]">CHANNEL COMPASS</div>
                </div>
                <h2 className="mt-5 text-2xl sm:text-3xl md:text-4xl font-sans font-bold tracking-tight text-ink">
                  How each channel contributes across demand, trust, and intent capture.
                </h2>
                <div className="mt-8 divide-y divide-grid/10">
                  {[
                    {
                      lane: "Performance Marketing",
                      role: "Demand capture",
                      win: "Fast signal loops for acquisition",
                      Icon: IconTargetArrow,
                    },
                    {
                      lane: "Social Management",
                      role: "Trust compounding",
                      win: "Brand consistency between campaigns",
                      Icon: IconHeartbeat,
                    },
                    {
                      lane: "Local SEO",
                      role: "Intent capture",
                      win: "High-intent discovery for nearby buyers",
                      Icon: IconRadar,
                    },
                  ].map((item) => (
                    <div key={item.lane} className="mi-row flex items-start gap-3 py-4 first:pt-0 last:pb-0">
                      <div className="mt-0.5 h-8 w-8 border border-primary/25 bg-paper/60 grid place-items-center text-primary shrink-0">
                        <item.Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-ink">{item.lane}</p>
                        <p className="mt-1 text-sm text-ink-muted"><span className="text-ink">Role:</span> {item.role}</p>
                        <p className="mt-0.5 text-sm text-ink-muted"><span className="text-ink">Outcome:</span> {item.win}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div variants={fadeInUp} className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    label: "Optimization cadence",
                    value: "Weekly",
                    Icon: IconClock,
                    note: "7-day tuning loop",
                    detail: "Creative, audience, and budget adjustments every week.",
                  },
                  {
                    label: "Reporting layers",
                    value: "Channel + funnel",
                    Icon: IconReportAnalytics,
                    note: "Decision-ready clarity",
                    detail: "Spend, lead quality, and conversion movement in one view.",
                  },
                  {
                    label: "Creative velocity",
                    value: "Iterative",
                    Icon: IconAd,
                    note: "Constant test cycles",
                    detail: "New hooks, formats, and messaging tested continuously.",
                  },
                  {
                    label: "Budget governance",
                    value: "Rule-based",
                    Icon: IconTargetArrow,
                    note: "Waste control",
                    detail: "Scaling and pause rules keep spend aligned to performance.",
                  },
                ].map((stat) => (
                  <div key={stat.label} className="mi-card border border-grid/15 bg-white p-5 md:p-6">
                    <div className="flex items-center justify-between gap-2">
                      <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink-muted">{stat.label}</div>
                      <div className="h-7 w-7 border border-primary/20 bg-primary/5 grid place-items-center text-primary shrink-0">
                        <stat.Icon className="h-3.5 w-3.5" />
                      </div>
                    </div>
                    <div className="mt-3 font-sans text-xl md:text-2xl font-bold tracking-tight text-ink">{stat.value}</div>
                    <div className="mt-5 pt-4 border-t border-grid/10">
                      <div className="flex items-center gap-2 text-xs font-medium text-ink">
                        <IconCheck className="h-3.5 w-3.5 text-green-800" />
                        <span>{stat.note}</span>
                      </div>
                      <p className="mt-2 text-xs text-ink-muted leading-relaxed">{stat.detail}</p>
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
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <div className="mb-14">
              <div className="flex items-center gap-2.5 text-ink-muted">
                <div className="h-8 w-8 border border-primary/25 bg-paper/60 grid place-items-center text-primary">
                  <IconReportAnalytics className="h-4 w-4" />
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.35em]">EXECUTION DISCIPLINE</div>
              </div>
              <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold font-sans tracking-tight text-ink max-w-3xl">
                What keeps your growth system stable and what quietly breaks it.
              </h2>
            </div>
            <div className="border border-grid/15 bg-white">
              <div className="grid lg:grid-cols-2">
                <div className="p-7 md:p-10 border-b lg:border-b-0 lg:border-r border-grid/15">
                  <div className="flex items-center gap-2.5 text-ink-muted mb-6">
                    <div className="h-10 w-10 border border-green-800/20 bg-green-800/5 text-green-800 grid place-items-center">
                      <IconCheck className="h-4 w-4" />
                    </div>
                    <h3 className="font-sans text-xl md:text-2xl font-bold tracking-tight text-ink">RISK CONTROLS</h3>
                  </div>
                  <div className="divide-y divide-grid/10">
                    {riskControls.map((item) => (
                      <div key={item.text} className="mi-row flex items-center gap-3 py-4 first:pt-0 last:pb-0">
                        <div className="h-8 w-8 border border-green-800/20 bg-paper/60 text-green-800 grid place-items-center shrink-0">
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
                    <h3 className="font-sans text-xl md:text-2xl font-bold tracking-tight text-ink">COMMON FAILURE PATTERNS</h3>
                  </div>
                  <div className="divide-y divide-grid/10">
                    {commonFailurePatterns.map((item) => (
                      <div key={item.text} className="mi-row flex items-center gap-3 py-4 first:pt-0 last:pb-0">
                        <div className="h-8 w-8 border border-red-500/25 bg-paper/60 text-red-600 grid place-items-center shrink-0">
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
                <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-grid/15">
                  <motion.div variants={fadeInUp}>
                    <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-ink-muted mb-6">NEXT STEP</div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold tracking-tighter mb-6">
                      Want us to map your digital growth stack?
                    </h2>
                    <p className="text-ink-muted text-lg leading-relaxed mb-10 max-w-lg">
                      Share your current channels and goals. We will design a focused execution plan across paid, social, and local visibility.
                    </p>
                    <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
                      <Button asChild variant="primary" size="lg" className="w-full sm:w-auto sm:min-w-[220px]">
                        <Link href="/contact">Book a call</Link>
                      </Button>
                      <Button asChild variant="outline" size="lg" className="w-full sm:w-auto sm:min-w-[220px]">
                        <Link href="/pricing">View Pricing Models</Link>
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>
                <motion.div variants={scaleIn} className="p-8 md:p-12 lg:p-16 bg-paper/30 flex flex-col justify-center">
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
                        <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-ink-muted">{stat.label}</span>
                        <span className="font-sans font-semibold text-ink">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </Container>
      </Section>
    </main>
  );
}


