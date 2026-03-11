import Link from "next/link";
import { HeroImage } from "@/components/ui/HeroImage";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Kicker } from "@/components/ui/Kicker";
import { masterConfig } from "@/config/master";
import { buildPageMetadata } from "@/lib/seoMetadata";
import { WebsiteSolutionsDeferredLoader } from "@/components/sections/WebsiteSolutionsDeferredLoader";
import {
  IconChartBar,
  IconCode,
  IconDeviceDesktop,
  IconRefresh,
} from "@tabler/icons-react";
import type { ComponentType } from "react";
import { motion } from "@/components/ui/motion-lite";

export const metadata = buildPageMetadata({
  title: "Website Solutions | Nodecraft",
  description:
    "Conversion-first website strategy, design, and development services for startups, SMBs, and scaling brands.",
  path: "/website-solutions",
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

type SolutionPath = {
  label: string;
  title: string;
  summary: string;
  outcome: string;
  href: string;
  Icon: ComponentType<{ className?: string }>;
};

const solutionPaths: SolutionPath[] = [
  {
    label: "CORE TRACK 01",
    title: "Premium Static Websites",
    summary:
      "Launch fast with premium design, clean messaging hierarchy, and lead-ready architecture.",
    outcome: "Get live quickly and start collecting qualified leads.",
    href: "/website-solutions/premium-static",
    Icon: IconDeviceDesktop,
  },
  {
    label: "CORE TRACK 02",
    title: "Custom Web Design",
    summary:
      "Bespoke user journeys, stronger brand control, and technical flexibility for scaling teams.",
    outcome: "Own custom flows and reduce operational bottlenecks.",
    href: "/website-solutions/custom-enterprise",
    Icon: IconCode,
  },
  {
    label: "CORE TRACK 03",
    title: "eCommerce Development",
    summary:
      "Commerce systems optimized for conversion rate, checkout completion, and repeat purchase behavior.",
    outcome: "Increase checkout completion and repeat customer revenue.",
    href: "/website-solutions/ecommerce",
    Icon: IconChartBar,
  },
  {
    label: "SPECIALIZED TRACK",
    title: "Redesign & Rescue",
    summary:
      "Repair speed, UX, and conversion performance on sites that already exist but underperform.",
    outcome: "Recover lost conversions without overbuilding from scratch.",
    href: "/website-solutions/redesign-rescue",
    Icon: IconRefresh,
  },
];

export default function WebsiteSolutionsPage() {
  return (
    <main className="relative text-ink pb-20">
      <Section className="bg-transparent pt-6 md:pt-10 lg:pt-14 pb-14 md:pb-20 relative z-10 border-b border-grid/10">
        <Container>
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <motion.div variants={fadeInLeft}>
                  <Kicker className="text-xs md:text-sm px-6 py-2.5 bg-primary/5 border-primary/30 text-primary">
                    WEBSITE SOLUTIONS
                  </Kicker>
                </motion.div>
                <motion.h1
                  variants={fadeInLeft}
                  className="mt-8 text-3xl sm:text-4xl md:text-6xl font-sans font-bold leading-[0.95] tracking-tighter text-ink max-w-2xl"
                >
                  Build the right website system for your{" "}
                  <span className="text-primary">current growth stage.</span>
                </motion.h1>
                <motion.p
                  variants={fadeInLeft}
                  className="mt-6 text-base md:text-lg text-ink-muted leading-relaxed max-w-lg"
                >
                  Instead of forcing one package for everyone, choose a focused
                  track and execute with one accountable team from strategy to
                  launch.
                </motion.p>
                <motion.div variants={fadeInLeft} className="mt-10 flex flex-wrap gap-3">
                  <Button
                    asChild
                    variant="primary"
                    size="lg"
                    className="w-full sm:w-auto sm:min-w-[220px]"
                  >
                    <Link href="#solution-paths">See Solution Paths</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto sm:min-w-[220px]"
                  >
                    {(() => {
                      const calendlyUrl = masterConfig.contact.calendlyUrl;
                      const isExternal = calendlyUrl?.startsWith("http");
                      const href = calendlyUrl || "/contact";
                      return (
                        <Link
                          href={href}
                          target={isExternal ? "_blank" : undefined}
                          rel={isExternal ? "noreferrer" : undefined}
                        >
                          Book a call
                        </Link>
                      );
                    })()}
                  </Button>
                </motion.div>
                <motion.div
                  variants={fadeInLeft}
                  className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] font-mono uppercase tracking-[0.2em] text-ink-muted"
                >
                  <span>Fast launch options</span>
                  <span>Conversion-first structure</span>
                  <span>Scalable architecture</span>
                </motion.div>
              </div>
              <motion.div variants={fadeInRight} className="relative order-first lg:order-none">
                <div className="border border-grid/15 bg-white overflow-hidden">
                  <div className="relative aspect-square bg-white">
                    <HeroImage
                      src={`/${masterConfig.ui.heroImages.websiteSolutions}`}
                      alt="Website solutions overview hero"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </Section>

      <Section
        id="solution-paths"
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
                SOLUTION PATHS
              </div>
              <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold font-sans tracking-tight text-ink max-w-3xl">
                Choose your path based on business model, urgency, and technical
                depth.
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {solutionPaths.map((path) => (
                <motion.article
                  key={path.title}
                  variants={scaleIn}
                  whileHover={{ y: -2, transition: { duration: 0.18 } }}
                  className="mi-card border border-grid/15 bg-white p-6 md:p-8 flex flex-col"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink-muted">
                        {path.label}
                      </div>
                      <h3 className="mt-3 text-xl font-sans font-semibold tracking-tight text-ink">
                        {path.title}
                      </h3>
                    </div>
                    <div className="h-10 w-10 border border-primary/25 bg-paper/60 grid place-items-center text-primary shrink-0">
                      <path.Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-ink-muted leading-relaxed flex-1">
                    {path.summary}
                  </p>
                  <div className="mt-6 pt-4 border-t border-grid/10">
                    <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink-muted">
                      Primary outcome
                    </div>
                    <div className="mt-2 text-sm text-ink">{path.outcome}</div>
                  </div>
                  <Button asChild variant="outline" size="sm" className="mt-6 w-full">
                    <Link href={path.href}>Explore {path.title}</Link>
                  </Button>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      <WebsiteSolutionsDeferredLoader />
    </main>
  );
}
