import Link from "next/link";
import { HeroImage } from "@/components/ui/HeroImage";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Kicker } from "@/components/ui/Kicker";
import { masterConfig } from "@/config/master";
import { buildPageMetadata } from "@/lib/seoMetadata";
import { DigitalMarketingDeferredLoader } from "@/components/sections/DigitalMarketingDeferredLoader";
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
    href: "/digital-marketing/social-media-management",
    Icon: IconHeartbeat,
  },
  {
    label: "CORE LANE 03",
    title: "Local SEO & Google Maps",
    summary:
      "Local search visibility engine focused on calls, bookings, and nearby high-intent discovery.",
    channels: "Google Maps, GBP, local pages",
    timeline: "2-4 weeks setup",
    href: "/digital-marketing/local-seo-google-maps",
    Icon: IconRadar,
  },
];

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
                  Replace channel chaos with one{" "}
                  <em className="font-serif-20 italic">coordinated growth engine.</em>
                </motion.h1>
                <motion.p
                  variants={fadeInLeft}
                  className="mt-6 text-sm md:text-base text-ink-muted leading-relaxed max-w-lg"
                >
                  Paid media, social execution, and local visibility are run as
                  one system so your pipeline grows with less waste.
                </motion.p>
                <motion.div variants={fadeInLeft} className="mt-10 flex flex-wrap gap-3">
                  <Button
                    asChild
                    variant="primary"
                    size="lg"
                    className="sm:min-w-[220px]"
                  >
                    <Link href="#growth-lanes">See growth lanes</Link>
                  </Button>
                  {(() => {
                    const calendlyUrl = masterConfig.contact.calendlyUrl;
                    const isExternal = calendlyUrl?.startsWith("http");
                    const href = calendlyUrl || "/contact";
                    return (
                      <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="sm:min-w-[220px]"
                      >
                        <Link
                          href={href}
                          target={isExternal ? "_blank" : undefined}
                          rel={isExternal ? "noreferrer" : undefined}
                        >
                          Book a call
                        </Link>
                      </Button>
                    );
                  })()}
                </motion.div>
                <motion.div
                  variants={fadeInLeft}
                  className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] font-mono uppercase tracking-[0.2em] text-ink-muted"
                >
                  <span>Paid + organic alignment</span>
                  <span>Weekly optimization loops</span>
                  <span>Attribution clarity</span>
                </motion.div>
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
                  <div className="mt-6 pt-4 border-t border-grid/10 space-y-1.5">
                    <p className="text-xs text-ink-muted">
                      <span className="text-ink font-medium">Channels:</span>{" "}
                      {lane.channels}
                    </p>
                    <p className="text-xs text-ink-muted">
                      <span className="text-ink font-medium">Timeline:</span>{" "}
                      {lane.timeline}
                    </p>
                  </div>
                  <Button asChild variant="outline" size="sm" className="mt-6">
                    <Link href={lane.href}>Explore {lane.title}</Link>
                  </Button>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      <DigitalMarketingDeferredLoader />
    </main>
  );
}
