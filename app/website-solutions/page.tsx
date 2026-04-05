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
import { motion } from "@/components/ui/motion-lite";

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
              <div className="order-2 lg:order-1">
                <motion.div variants={fadeInLeft}>
                  <Kicker>
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
                <div className="flex flex-col">
                  <motion.div
                    variants={fadeInLeft}
                    className="mt-10 flex flex-wrap items-center gap-2 text-[10px] font-mono uppercase tracking-[0.1em] text-ink-muted order-1 sm:order-2"
                  >
                    <span className="border border-grid/10 px-2.5 py-1 bg-paper/40">Strategy-first design</span>
                    <span className="border border-grid/10 px-2.5 py-1 bg-paper/40">Speed-optimized code</span>
                    <span className="border border-grid/10 px-2.5 py-1 bg-paper/40">Lead-focused architecture</span>
                  </motion.div>
                  <motion.div variants={fadeInLeft} className="mt-8 flex flex-wrap gap-4 order-2 sm:order-1">
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
                </div>
              </div>

              <motion.div variants={fadeInRight} className="relative order-1 lg:order-2">
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
              <Kicker className="mb-6">
                SOLUTION PATHS
              </Kicker>
              <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight text-ink max-w-3xl">
                Choose your path based on business model, urgency, and technical
                <em className="font-serif-10 italic"> depth.</em>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {solutionPaths.map((path) => (
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
                        <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.35em] text-ink-muted">
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
                          <Link href={path.href}>Explore {path.title}</Link>
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
