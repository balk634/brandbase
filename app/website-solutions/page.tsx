import Link from "next/link";
import { HeroImage } from "@/components/ui/HeroImage";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Kicker } from "@/components/ui/Kicker";
import { masterConfig } from "@/config/master";
import { buildPageMetadata } from "@/lib/seoMetadata";
import { WebsiteSolutionsDeferredLoader } from "@/components/sections/WebsiteSolutionsDeferredLoader";
import { CalButton } from "@/components/ui/CalBooking";
import { IconTargetArrow, IconBrandFigma, IconDatabase, IconArrowsSplit } from "@tabler/icons-react";
import type { ComponentType } from "react";
import { motion } from "@/components/ui/motion-lite";
import { BoxPattern } from "@/components/ui/BoxPattern";

export const metadata = buildPageMetadata({
  title: "Website Solutions | BrandBase",
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

const staggerSlow = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };

const fadeInUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } } };

const processSteps: { step: string; title1: string; title2: string; copy: string; Icon: ComponentType<{ className?: string }> }[] = [
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

type SolutionPath = {
  label: string;
  title: string;
  summary: string;
  outcome: string;
  href: string;
  image: string;
};

const solutionPaths: SolutionPath[] = [
  {
    label: "CORE TRACK 01",
    title: "Premium Static Websites",
    summary:
      "Launch fast with premium design, clean messaging hierarchy, and lead-ready architecture.",
    outcome: "Get live quickly and start collecting qualified leads.",
    href: "/website-solutions/premium-static-websites",
    image: masterConfig.ui.heroImages.websiteSolutionsPremiumStatic,
  },
  {
    label: "CORE TRACK 02",
    title: "Custom Web Design",
    summary:
      "Bespoke user journeys, stronger brand control, and technical flexibility for scaling teams.",
    outcome: "Own custom flows and reduce operational bottlenecks.",
    href: "/website-solutions/custom-web-design",
    image: masterConfig.ui.heroImages.websiteSolutionsCustomEnterprise,
  },
  {
    label: "CORE TRACK 03",
    title: "eCommerce Development",
    summary:
      "Commerce systems optimized for conversion rate, checkout completion, and repeat purchase behavior.",
    outcome: "Increase checkout completion and repeat customer revenue.",
    href: "/website-solutions/ecommerce-development",
    image: masterConfig.ui.heroImages.websiteSolutionsEcommerce,
  },
  {
    label: "SPECIALIZED TRACK",
    title: "Redesign & Rescue",
    summary:
      "Repair speed, UX, and conversion performance on sites that already exist but underperform.",
    outcome: "Recover lost conversions without overbuilding from scratch.",
    href: "/website-solutions/website-redesign",
    image: masterConfig.ui.heroImages.websiteSolutionsRedesignRescue,
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
                  <Kicker className="text-[10px] md:text-xs px-4 py-2 bg-primary/5 border-primary/30 text-primary">
                    WEBSITE SOLUTIONS
                  </Kicker>
                </motion.div>
                <motion.h1
                  variants={fadeInLeft}
                  className="mt-8 text-3xl sm:text-4xl md:text-6xl font-serif leading-[0.95] tracking-tighter text-ink max-w-2xl"
                >
                  Build the right website system for your{" "}
                  <em className="font-serif-20 italic">current growth stage.</em>
                </motion.h1>
                <motion.p
                  variants={fadeInLeft}
                  className="mt-6 text-sm md:text-base text-ink-muted leading-relaxed max-w-lg"
                >
                  Instead of forcing one package for everyone, choose a focused
                  track and execute with one accountable team from strategy to
                  launch.
                </motion.p>
                <motion.div variants={fadeInLeft} className="mt-10 flex flex-wrap gap-4">
                  <CalButton
                    variant="primary"
                    size="lg"
                    className="sm:min-w-[220px]"
                  >
                    Book a call
                  </CalButton>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="sm:min-w-[220px]"
                  >
                    <Link href="#solution-paths">See solution paths</Link>
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

              <motion.div variants={fadeInRight} className="relative">
                <div className="relative overflow-hidden">
                  <div
                    className={`relative ${masterConfig.ui.heroImages.className}`}
                    style={{
                      maxWidth: masterConfig.ui.heroImages.maxWidth,
                      aspectRatio: masterConfig.ui.heroImages.aspectRatio,
                    }}
                  >
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
                {processSteps.map((item, i) => (
                  <div
                    key={item.step}
                    className={`relative flex flex-col items-stretch ${i < processSteps.length - 1 ? "pb-0" : ""}`}
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
                    {i < processSteps.length - 1 && (
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
              <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight text-ink max-w-3xl">
                Choose your path based on business model, urgency, and technical
                <em className="font-serif-10 italic"> depth.</em>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {solutionPaths.map((path, idx) => (
                <motion.article
                  key={path.title}
                  variants={fadeInLeft}
                  whileHover={{ y: -2, transition: { duration: 0.18 } }}
                  className="mi-card border border-grid/15 bg-white overflow-hidden p-5 sm:p-6"
                >
                  <div className="grid grid-cols-[1fr_1.3fr] gap-5 h-full items-start">
                    {/* Left: Image (4:5) */}
                    <div className="relative aspect-[4/5] bg-paper/40 overflow-hidden border border-grid/10">
                      <HeroImage
                        src={`/${path.image}`}
                        alt={path.title}
                      />
                    </div>

                    {/* Right: Content */}
                    <div className="flex flex-col h-full justify-between">
                      <div>
                        <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-ink-muted">
                          {path.label}
                        </div>
                        <h3 className="mt-2 text-lg sm:text-xl font-serif tracking-tight text-ink leading-tight">
                          {path.title}
                        </h3>
                        <p className="mt-3 text-[13px] text-ink-muted leading-relaxed line-clamp-3">
                          {path.summary}
                        </p>
                      </div>

                      <div className="mt-4 pt-4 border-t border-grid/10">
                        <div className="font-mono text-[9px] uppercase tracking-[0.35em] text-ink-muted mb-2">
                          PRIMARY OUTCOME
                        </div>
                        <div className="text-[13px] text-ink font-medium leading-snug">
                          {path.outcome}
                        </div>
                        
                        <Button asChild variant="outline" size="sm" className="mt-5 text-[11px] uppercase tracking-wider font-bold">
                          <Link href={path.href}>Explore Path</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
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
