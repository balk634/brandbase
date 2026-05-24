import Link from "next/link";
import { HeroImage } from "@/components/ui/HeroImage";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Kicker } from "@/components/ui/Kicker";
import { masterConfig } from "@/config/master";
import { buildPageMetadata } from "@/lib/seoMetadata";
import { WebsiteSolutionsDeferredLoader } from "@/components/sections/WebsiteSolutionsDeferredLoader";
import { AISearchBanner } from "@/components/sections/AISearchBanner";
import { CalButton } from "@/components/ui/CalBooking";
import { motion } from "@/components/ui/motion-lite";
import Image from "next/image";
import {
  IconBolt,
  IconBrandFigma,
  IconShoppingCart,
  IconRefresh,
  IconCheck,
} from "@tabler/icons-react";
import type { ComponentType } from "react";

export const metadata = buildPageMetadata({
  title: "Website Solutions | Conversion-First Design & Development",
  description:
    "BrandBase provides conversion-first website strategy, design, and development services for startups and scaling brands. Choice of pay-monthly or custom tracks.",
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
  Icon: ComponentType<{ className?: string }>;
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
    Icon: IconBolt,
  },
  {
    label: "CORE TRACK 02",
    title: "Custom Web Design",
    summary:
      "Bespoke user journeys, stronger brand control, and technical flexibility for scaling teams.",
    outcome: "Own custom flows and reduce operational bottlenecks.",
    href: "/website-solutions/custom-web-design",
    image: masterConfig.ui.heroImages.websiteSolutionsCustomEnterprise,
    Icon: IconBrandFigma,
  },
  {
    label: "CORE TRACK 03",
    title: "eCommerce Development",
    summary:
      "Commerce systems optimized for conversion rate, checkout completion, and repeat purchase behavior.",
    outcome: "Increase checkout completion and repeat customer revenue.",
    href: "/website-solutions/ecommerce-development",
    image: masterConfig.ui.heroImages.websiteSolutionsEcommerce,
    Icon: IconShoppingCart,
  },
  {
    label: "SPECIALIZED TRACK",
    title: "Redesign & Rescue",
    summary:
      "Repair speed, UX, and conversion performance on sites that already exist but underperform.",
    outcome: "Recover lost conversions without overbuilding from scratch.",
    href: "/website-solutions/website-redesign",
    image: masterConfig.ui.heroImages.websiteSolutionsRedesignRescue,
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
                    <span className="border border-primary/20 px-2.5 py-1 bg-primary/5 text-primary">Custom Dashboard Included</span>
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
                        <div className="flex items-center justify-between mb-4">
                          <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-ink-muted">
                            {path.label}
                          </div>
                          <div className="h-8 w-8 border border-grid/15 bg-paper/60 grid place-items-center text-primary group-hover:border-primary/30 transition-colors duration-300">
                            <path.Icon className="h-4 w-4" />
                          </div>
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

      {/* ── Strategic Foundation ── */}
      <Section id="foundation" className="bg-ink py-16 md:py-24 border-b-0 text-white scroll-mt-24">
        <Container>
          {/* Header Row */}
          <div className="mb-16 max-w-3xl">
            <Kicker className="border-white/15 bg-white/8 text-white/80">
              STRATEGIC FOUNDATION
            </Kicker>
            <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight text-white leading-[1.05]">
              Your website is either a revenue asset{" "}
              <em className="font-serif-10 italic text-white/50">or a silent liability.</em>
            </h2>
            <p className="mt-4 text-sm text-white/45 leading-relaxed">
              Every website we build includes two core features: a custom dashboard to manage your daily business easily, and high-performance SEO optimized for Google and new AI search tools.
            </p>
          </div>

          {/* Grid Layout of the two pillars */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Pillar 1: Custom Admin Dashboard */}
            <div className="flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 border border-white/10 px-3 py-1.5 w-fit bg-white/5">
                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/50">PILLAR 01</span>
              </div>
              <h3 className="text-2xl font-serif text-white">
                Custom Admin Dashboard
              </h3>
              <p className="text-[13px] text-white/50 leading-relaxed">
                An easy-to-use admin panel built just for your business. Easily manage bookings, customer orders, and website menus without slow page builders or complicated settings.
              </p>

              {/* Dynamic Aspect Ratio 2.27:1 Mini Viewer */}
              <div className="relative w-full border border-white/10 overflow-hidden bg-white/5" style={{ aspectRatio: "1920 / 912" }}>
                <Image
                  src="/dashboard/table-order.jpg"
                  alt="Custom admin dashboard mockup"
                  fill
                  className="object-contain object-top"
                  sizes="(max-width: 768px) 100vw, 45vw"
                  quality={70}
                />
              </div>

              <ul className="flex flex-col gap-2.5">
                {[
                  "Syncs instantly with your live website",
                  "Custom access rights for your staff or managers",
                  "Fast database engine for instantaneous page loading",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-0.5 h-4 w-4 shrink-0 bg-white/10 border border-white/20 grid place-items-center">
                      <IconCheck className="h-2.5 w-2.5 text-white" strokeWidth={2.5} />
                    </span>
                    <span className="text-[12px] text-white/60 leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pillar 2: Google & AI Search Optimization */}
            <div className="flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 border border-white/10 px-3 py-1.5 w-fit bg-white/5">
                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/50">PILLAR 02</span>
              </div>
              <h3 className="text-2xl font-serif text-white">
                Google & AI Search Optimization
              </h3>
              <p className="text-[13px] text-white/50 leading-relaxed">
                Custom schema and structured data so standard Google search and new AI models (like Google Overviews and ChatGPT) cite and recommend your brand.
              </p>

              {/* Editor Mockup: Syntax-highlighted schema viewer */}
              <div className="relative w-full border border-white/10 overflow-hidden bg-[#0d0d11] flex flex-col aspect-[4/3] sm:aspect-[1920/912]">
                {/* Editor title bar */}
                <div className="flex items-center gap-3 px-3 py-2 bg-[#07070a] border-b border-white/[0.06] shrink-0">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#ef4444]/50" />
                    <span className="w-2 h-2 rounded-full bg-[#f59e0b]/50" />
                    <span className="w-2 h-2 rounded-full bg-[#10b981]/50" />
                  </div>
                  <div className="flex items-center gap-1 px-3 py-0.5 bg-white/[0.04] border border-white/[0.06] text-white/30 font-mono text-[9px]">
                    schema.json
                  </div>
                  {/* Pulsing validated dot */}
                  <div className="ml-auto flex items-center gap-1.5">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                    </span>
                    <span className="font-mono text-[8px] text-emerald-400 uppercase tracking-wider">Validated</span>
                  </div>
                </div>

                {/* Code area with line numbers */}
                <div className="flex flex-1 overflow-hidden">
                  {/* Line numbers */}
                  <div className="flex flex-col px-3 py-2 text-white/15 font-mono text-[9px] leading-[1.7] select-none border-r border-white/[0.04] shrink-0 text-right min-w-[2rem]">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => <span key={n}>{n}</span>)}
                  </div>

                  {/* Syntax-highlighted code */}
                  <div className="py-2 px-4 font-mono text-[9px] leading-[1.7] overflow-hidden select-none">
                    <div><span className="text-white/40">{"{"}</span></div>
                    <div><span className="text-white/20 ml-2">{"  "}</span><span className="text-[#7dd3fc]">&quot;@context&quot;</span><span className="text-white/30">: </span><span className="text-[#86efac]">&quot;https://schema.org&quot;</span><span className="text-white/30">,</span></div>
                    <div><span className="text-white/20 ml-2">{"  "}</span><span className="text-[#7dd3fc]">&quot;@type&quot;</span><span className="text-white/30">: </span><span className="text-[#fcd34d]">&quot;LocalBusiness&quot;</span><span className="text-white/30">,</span></div>
                    <div><span className="text-white/20 ml-2">{"  "}</span><span className="text-[#7dd3fc]">&quot;name&quot;</span><span className="text-white/30">: </span><span className="text-[#86efac]">&quot;YourBrand&quot;</span><span className="text-white/30">,</span></div>
                    <div><span className="text-white/20 ml-2">{"  "}</span><span className="text-[#7dd3fc]">&quot;knowsAbout&quot;</span><span className="text-white/30">: [</span><span className="text-[#86efac]">&quot;E-E-A-T&quot;</span><span className="text-white/30">, </span><span className="text-[#86efac]">&quot;AI Citations&quot;</span><span className="text-white/30">],</span></div>
                    <div><span className="text-white/20 ml-2">{"  "}</span><span className="text-[#7dd3fc]">&quot;aggregateRating&quot;</span><span className="text-white/30">: {"{"}</span></div>
                    <div><span className="text-white/20 ml-2">{"    "}</span><span className="text-[#7dd3fc]">&quot;@type&quot;</span><span className="text-white/30">: </span><span className="text-[#fcd34d]">&quot;AggregateRating&quot;</span><span className="text-white/30">,</span></div>
                    <div><span className="text-white/20 ml-2">{"    "}</span><span className="text-[#7dd3fc]">&quot;ratingValue&quot;</span><span className="text-white/30">: </span><span className="text-[#67e8f9]">&quot;4.9&quot;</span><span className="text-white/30">,</span></div>
                    <div><span className="text-white/20 ml-2">{"    "}</span><span className="text-[#7dd3fc]">&quot;reviewCount&quot;</span><span className="text-white/30">: </span><span className="text-[#a78bfa]">87</span></div>
                    <div><span className="text-white/40">{"}"}</span></div>
                  </div>
                </div>

                {/* Bottom status bar */}
                <div className="flex items-center justify-between px-3 py-1.5 bg-[#07070a] border-t border-white/[0.04] shrink-0">
                  <span className="font-mono text-[8px] text-white/20 uppercase tracking-wider">JSON-LD · schema.org</span>
                  <div className="flex items-center gap-1.5 border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5">
                    <span className="font-mono text-[8px] text-emerald-400 uppercase tracking-wider">● Google Rich Results</span>
                  </div>
                </div>
              </div>

              <ul className="flex flex-col gap-2.5">
                {[
                  "Rich schema validation baked directly into the code template",
                  "EEAT entity signals structured to trigger AI citations",
                  "Conversational search alignment matching long user query paths",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-0.5 h-4 w-4 shrink-0 bg-white/10 border border-white/20 grid place-items-center">
                      <IconCheck className="h-2.5 w-2.5 text-white" strokeWidth={2.5} />
                    </span>
                    <span className="text-[12px] text-white/60 leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <AISearchBanner />
      <WebsiteSolutionsDeferredLoader />
    </main>
  );
}
