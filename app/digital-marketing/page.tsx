import Link from "next/link";
import { HeroImage } from "@/components/ui/HeroImage";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Kicker } from "@/components/ui/Kicker";
import { masterConfig } from "@/config/master";
import { buildPageMetadata } from "@/lib/seoMetadata";
import { DigitalMarketingDeferredLoader } from "@/components/sections/DigitalMarketingDeferredLoader";
import { CalButton } from "@/components/ui/CalBooking";
import {
  IconHeartbeat,
  IconRadar,
  IconTargetArrow,
} from "@tabler/icons-react";
import type { ComponentType } from "react";
import { motion } from "@/components/ui/motion-lite";

export const metadata = buildPageMetadata({
  title: "Digital Marketing Services | BrandBase",
  description:
    "Performance marketing, social media management, and local SEO services focused on measurable lead and revenue growth.",
  path: "/digital-marketing",
});

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
  image: string;
};

const growthLanes: GrowthLane[] = [
  {
    label: "CORE LANE 01",
    title: "Paid Advertising",
    summary:
      "We put your message in front of people ready to spend money, with a strict focus on getting you a return on every dollar.",
    channels: "Meta, Google, retargeting",
    timeline: "2-3 weeks setup",
    href: "/digital-marketing/performance-marketing",
    Icon: IconTargetArrow,
    image: masterConfig.ui.heroImages.socialMediaGrowthPerformanceMarketing,
  },
  {
    label: "CORE LANE 02",
    title: "Social Presence",
    summary:
      "We make your brand look active and professional so that when customers find you, they trust you immediately.",
    channels: "Instagram, LinkedIn, short-form",
    timeline: "2 weeks onboarding",
    href: "/digital-marketing/social-media-management",
    Icon: IconHeartbeat,
    image: masterConfig.ui.heroImages.socialMediaGrowthManagement,
  },
  {
    label: "CORE LANE 03",
    title: "The Google Map",
    summary:
      "We make sure you are the first choice when local customers search for your services near them.",
    channels: "Google Maps, GBP, local pages",
    timeline: "2-4 weeks setup",
    href: "/digital-marketing/local-seo-google-maps",
    Icon: IconRadar,
    image: masterConfig.ui.heroImages.socialMediaGrowthLocalSeo,
  },
];

const LaneContent = ({ lane }: { lane: GrowthLane }) => (
  <div className="flex flex-col h-full justify-between">
    <div>
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink-muted">
            {lane.label}
          </div>
          <h3 className="h3 mt-3 text-xl font-serif tracking-tight text-ink">
            {lane.title}
          </h3>
        </div>
        <div className="h-10 w-10 border border-primary/25 bg-paper/60 grid place-items-center text-primary shrink-0">
          <lane.Icon className="h-5 w-5" />
        </div>
      </div>
      <p className="mt-4 text-sm text-ink-muted leading-relaxed flex-1">
        {lane.summary}
      </p>
    </div>
    <div className="mt-6">
      <div className="pt-4 border-t border-grid/10 space-y-1.5">
        <p className="text-xs text-ink-muted">
          <span className="text-ink font-medium">Channels:</span>{" "}
          {lane.channels}
        </p>
        <p className="text-xs text-ink-muted">
          <span className="text-ink font-medium">Timeline:</span>{" "}
          {lane.timeline}
        </p>
      </div>
      <Button asChild variant="outline" size="sm" className="mt-6 w-auto inline-flex">
        <Link href={lane.href}>Explore {lane.title}</Link>
      </Button>
    </div>
  </div>
);

export default function DigitalMarketingPage() {
  return (
    <main className="relative text-ink pb-20">
      <Section className="bg-transparent pt-6 md:pt-10 lg:pt-14 pb-14 md:pb-20 relative z-10 border-b border-grid/10">
        <Container>
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <motion.div variants={fadeInLeft}>
                  <Kicker className="text-[10px] md:text-xs px-4 py-2 bg-primary/5 border-primary/30 text-primary">
                    DIGITAL MARKETING
                  </Kicker>
                </motion.div>
                <motion.h1
                  variants={fadeInLeft}
                  className="mt-8 text-3xl sm:text-4xl md:text-6xl font-serif leading-[0.95] tracking-tighter text-ink max-w-2xl"
                >
                  Finally, a marketing partner that cares about your{" "}
                  <em className="font-serif-20 italic">profit, not just your clicks.</em>
                </motion.h1>
                <motion.p
                  variants={fadeInLeft}
                  className="mt-6 text-sm md:text-base text-ink-muted leading-relaxed max-w-lg"
                >
                  We run your ads, social, and local search as one simple system
                  designed to grow your revenue, not just your social following.
                </motion.p>
                <div className="flex flex-col">
                  <motion.div
                    variants={fadeInLeft}
                    className="mt-10 flex flex-wrap items-center gap-2 text-[10px] font-mono uppercase tracking-[0.1em] text-ink-muted order-1 sm:order-2"
                  >
                    <span className="border border-grid/10 px-2.5 py-1 bg-paper/40">Paid + organic alignment</span>
                    <span className="border border-grid/10 px-2.5 py-1 bg-paper/40">Weekly optimization loops</span>
                    <span className="border border-grid/10 px-2.5 py-1 bg-paper/40">Attribution clarity</span>
                  </motion.div>
                  <motion.div variants={fadeInLeft} className="mt-8 flex flex-wrap gap-3 order-2 sm:order-1">
                    <Button
                      asChild
                      variant="primary"
                      size="lg"
                      className="sm:min-w-[220px]"
                    >
                      <Link href="#growth-lanes">See growth lanes</Link>
                    </Button>
                    <CalButton
                      variant="outline"
                      size="lg"
                      className="sm:min-w-[220px]"
                    >
                      Book a call
                    </CalButton>
                  </motion.div>
                </div>
              </div>
              <motion.div variants={fadeInRight} className="relative order-first lg:order-none">
                <div className="relative overflow-hidden">
                  <div
                    className={`relative ${masterConfig.ui.heroImages.className}`}
                    style={{
                      maxWidth: masterConfig.ui.heroImages.maxWidth,
                      aspectRatio: masterConfig.ui.heroImages.aspectRatio,
                    }}
                  >
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

      <Section
        id="growth-lanes"
        className="scroll-mt-24 bg-transparent py-16 md:py-24 border-b border-grid/10 relative z-10"
      >
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="mb-14 md:mb-16">
              <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-ink-muted">
                GROWTH LANES
              </div>
              <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight text-ink max-w-3xl">
                Three specialist services orchestrated as one integrated <em className="font-serif-10 italic">system.</em>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-5 items-stretch">
              {/* Left Column: Social Presence */}
              <motion.article
                variants={scaleIn}
                whileHover={{ y: -2, transition: { duration: 0.18 } }}
                className="lg:col-span-2 mi-card border border-grid/15 bg-white overflow-hidden flex flex-col h-full"
              >
                {/* Image Section */}
                <div className="relative w-full flex-1 min-h-[300px] sm:min-h-[400px] bg-primary/5 p-4 sm:p-6 flex items-center justify-center border-b border-grid/10">
                  <div className="relative w-full h-full">
                    <HeroImage src={`/${growthLanes[1].image}`} alt={growthLanes[1].title} className="object-contain object-center" />
                  </div>
                </div>
                {/* Text Section */}
                <div className="p-6 md:p-8 shrink-0">
                  <LaneContent lane={growthLanes[1]} />
                </div>
              </motion.article>

              {/* Right Column: Paid Ads & Google Map */}
              <div className="lg:col-span-3 flex flex-col gap-4 lg:gap-5">
                {/* Top Card: Paid Advertising */}
                <motion.article
                  variants={scaleIn}
                  whileHover={{ y: -2, transition: { duration: 0.18 } }}
                  className="mi-card border border-grid/15 bg-white overflow-hidden flex flex-col sm:flex-row gap-0 h-full flex-1"
                >
                  {/* Text Section (Left on Desktop) */}
                  <div className="flex-1 p-6 lg:p-8 flex flex-col order-2 sm:order-1 justify-center">
                    <LaneContent lane={growthLanes[0]} />
                  </div>
                  {/* Image Section (Right on Desktop) */}
                  <div className="relative w-full sm:w-[45%] shrink-0 min-h-[260px] sm:min-h-0 bg-primary/5 border-b sm:border-b-0 sm:border-l border-grid/10 order-1 sm:order-2 p-4 sm:p-6 flex items-center justify-center">
                     <div className="relative w-full h-full">
                       <HeroImage src={`/${growthLanes[0].image}`} alt={growthLanes[0].title} className="object-contain object-center" />
                     </div>
                  </div>
                </motion.article>

                {/* Bottom Card: The Google Map */}
                <motion.article
                  variants={scaleIn}
                  whileHover={{ y: -2, transition: { duration: 0.18 } }}
                  className="mi-card border border-grid/15 bg-white overflow-hidden flex flex-col sm:flex-row gap-0 h-full flex-1"
                >
                  {/* Text Section (Left on Desktop) */}
                  <div className="flex-1 p-6 lg:p-8 flex flex-col order-2 sm:order-1 justify-center">
                    <LaneContent lane={growthLanes[2]} />
                  </div>
                  {/* Image Section (Right on Desktop) */}
                  <div className="relative w-full sm:w-[45%] shrink-0 min-h-[260px] sm:min-h-0 bg-primary/5 border-b sm:border-b-0 sm:border-l border-grid/10 order-1 sm:order-2 p-4 sm:p-6 flex items-center justify-center">
                     <div className="relative w-full h-full">
                       <HeroImage src={`/${growthLanes[2].image}`} alt={growthLanes[2].title} className="object-contain object-center" />
                     </div>
                  </div>
                </motion.article>
              </div>
            </div>

          </motion.div>
        </Container>
      </Section>

      <DigitalMarketingDeferredLoader />
    </main>
  );
}
