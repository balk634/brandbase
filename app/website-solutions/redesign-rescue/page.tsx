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
    IconAlertTriangle, IconTrendingDown, IconEyeOff, IconClockOff,
    IconUserOff, IconCashOff, IconArrowRight,
    IconCheck, IconBolt, IconShieldCheck, IconSearch, IconTarget,
    IconLayoutDashboard, IconActivity, IconDeviceDesktop, IconBrandGoogle,
    IconMailOpened
} from "@tabler/icons-react";
import type { ComponentType } from "react";
import { motion } from "@/components/ui/motion-lite";

export const metadata = buildPageMetadata({
    title: "Website Redesign & Rescue | Nodecraft",
    description:
        "Rescue underperforming websites with conversion-first redesign, technical cleanup, and measurable growth improvements.",
    path: "/website-solutions/redesign-rescue",
});

const fadeInUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } } };
const fadeInLeft = { hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" as const } } };
const fadeInRight = { hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" as const } } };
const scaleIn = { hidden: { opacity: 0, scale: 0.92 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } };
const staggerSlow = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };

/* ── Data ── */
const serviceOptions: {
    title: string;
    tag: string;
    bestFor: string;
    copy: string;
    href: string;
    highlights: string[];
}[] = [
        {
            title: "Premium Static",
            tag: "FAST & AFFORDABLE",
            bestFor: "Startups, Local Businesses, Solo Founders",
            copy: "A clean, lightning-fast website built on a modern static framework. Ideal if you want a polished presence without the complexity.",
            href: "/website-solutions/premium-static",
            highlights: ["Launch in 14 days", "Monthly subscription", "Zero upfront cost"],
        },
        {
            title: "Custom Enterprise",
            tag: "FULL CUSTOM BUILD",
            bestFor: "Agencies, Clinics, Growing Brands",
            copy: "Fully custom design with CMS, booking integrations, and lead capture. Built from scratch around your specific business goals.",
            href: "/website-solutions/custom-enterprise",
            highlights: ["Strategy-led design", "CMS & booking built-in", "Ongoing partnership"],
        },
        {
            title: "E-Commerce",
            tag: "BUILT TO SELL",
            bestFor: "Product Brands, DTC, Online Stores",
            copy: "A conversion-optimized storefront with payment gateways, inventory management, and everything your store needs to scale.",
            href: "/website-solutions/ecommerce",
            highlights: ["Checkout optimization", "Inventory & shipping", "Multi-gateway payments"],
        },
    ];

const whyRedesignReasons: { Icon: ComponentType<{ className?: string }>; title: string; copy: string }[] = [
    {
        Icon: IconTrendingDown,
        title: "Your website is silently losing you customers",
        copy: "Studies show 75% of people judge a company's credibility based on their website. An outdated site tells visitors you're not serious — and they leave before ever reading your offer.",
    },
    {
        Icon: IconClockOff,
        title: "Slow sites kill conversions",
        copy: "Every extra second of load time drops conversion rates by 7%. If your site takes more than 3 seconds to load, you're losing nearly half your potential customers to competitors.",
    },
    {
        Icon: IconEyeOff,
        title: "Google has already moved on without you",
        copy: "Search engines penalize slow, outdated websites. If your competitors have modern sites and you don't, they're showing up in search results where you used to be.",
    },
    {
        Icon: IconUserOff,
        title: "First impressions happen in 0.05 seconds",
        copy: "That's all the time a visitor needs to decide if they trust you. A dated design with clunky navigation sends people straight to your competitor — even if your product is better.",
    },
    {
        Icon: IconCashOff,
        title: "You're spending money driving traffic to a broken funnel",
        copy: "Ads, SEO, social media — they're all useless if your website can't convert visitors into leads. Fixing the site first multiplies the ROI of everything else you're doing.",
    },
    {
        Icon: IconAlertTriangle,
        title: "Security vulnerabilities put your business at risk",
        copy: "Outdated platforms are prime targets for hackers. A single data breach or defacement can destroy years of customer trust overnight.",
    },
];

const whatYouGet: { Icon: ComponentType<{ className?: string }>; title: string; copy: string }[] = [
    { Icon: IconLayoutDashboard, title: "Complete Design Overhaul", copy: "Modern, conversion-focused design that builds instant credibility and trust with your visitors." },
    { Icon: IconBolt, title: "Blazing Fast Performance", copy: "Page loads under 2 seconds. No bloated plugins, no database lag — just fast, clean code." },
    { Icon: IconSearch, title: "SEO Built From the Ground Up", copy: "Proper URL structure, meta tags, schema markup, and Core Web Vitals — so Google actually ranks you." },
    { Icon: IconTarget, title: "Lead Generation Wired In", copy: "Contact forms, newsletter capture, booking calendars, and CTAs placed where they actually convert." },
    { Icon: IconShieldCheck, title: "Security & Maintenance", copy: "SSL, automated backups, and ongoing security patches. We handle the technical stuff so you can focus on your business." },
    { Icon: IconActivity, title: "Analytics & Monitoring", copy: "Real-time performance dashboards and monthly reports so you always know what's working." },
    { Icon: IconDeviceDesktop, title: "Mobile-First, Responsive", copy: "Looks and works perfectly on every device — phone, tablet, and desktop." },
    { Icon: IconBrandGoogle, title: "AI & Voice Search Ready", copy: "Structured data and semantic HTML that makes your business visible in AI-powered search results." },
    { Icon: IconMailOpened, title: "Email & Marketing Setup", copy: "Newsletter capture, automated forwarding, and CRM integration — all wired from day one." },
];

const faqItems = [
    { q: "Can you fix my current site without rebuilding?", a: "Sometimes. We start with an honest assessment. If the foundation is solid, we patch and upgrade it. If it's built on something outdated or bloated, a clean rebuild is faster and cheaper than endless patching." },
    { q: "Will a redesign drop my Google rankings?", a: "Done correctly, no. Rankings typically improve because of better speed and structure. We map all old URLs to new ones using proper redirects to preserve your existing authority." },
    { q: "How long does a redesign take?", a: "Depends on the path you choose. Premium Static launches in 14 days. Custom and E-Commerce builds typically take 4–10 weeks. We'll give you an honest timeline after our first conversation." },
    { q: "How do I know which service is right for me?", a: "Book a free consultation. We'll look at your current site, understand your goals, and recommend the path that makes the most sense for your budget and needs." },
    { q: "What if I just need small fixes, not a full redesign?", a: "We offer that too. After the initial audit, if we find your site only needs performance tuning, SEO fixes, or minor design updates, we'll scope it accordingly. We won't upsell you on what you don't need." },
];
export default function RedesignRescuePage() {
    return (
        <main className="relative text-ink pb-20">

            {/* ── 1. HERO — Split Two-Column ── */}
            <Section className="bg-transparent pt-4 md:pt-8 lg:pt-12 pb-16 md:pb-24 relative z-10 border-b border-grid/10">
                <Container>
                    <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                            {/* Left: Copy */}
                            <div>
                                <motion.div variants={fadeInLeft}>
                                    <Kicker className="text-xs md:text-sm px-6 py-2.5 bg-primary/5 border-primary/30 text-primary"> WEBSITE REVAMP </Kicker>
                                </motion.div>
                                <motion.h1 variants={fadeInLeft} className="mt-8 text-3xl sm:text-4xl md:text-6xl font-sans font-bold leading-[0.95] tracking-tighter text-ink">
                                    Your Website Is Costing You <span className="text-primary">Customers.</span>
                                </motion.h1>
                                <motion.p variants={fadeInLeft} className="mt-6 text-base md:text-lg text-ink-muted leading-relaxed max-w-lg">
                                    An outdated website doesn&apos;t just look bad, it actively drives away potential customers. We&apos;ll rebuild it into a fast, modern site that earns trust and generates leads.
                                </motion.p>
                                <motion.div variants={fadeInLeft} className="mt-10 flex flex-wrap gap-4">
                                    <Button asChild variant="primary" size="lg">
                                        <Link href="/contact">Book a call</Link>
                                    </Button>
                                    <Button asChild variant="outline" size="lg">
                                        <Link href="#choose-service">Choose Your Path</Link>
                                    </Button>
                                </motion.div>
                            </div>
                            {/* Right: Pain Points Preview */}
                            <motion.div variants={fadeInRight} className="relative order-first lg:order-none">
                                <div className="border border-grid/15 bg-white overflow-hidden">
                                    <div className="relative aspect-square bg-white">
                                        <HeroImage
                                            src={`/${masterConfig.ui.heroImages.websiteSolutionsRedesignRescue}`}
                                            alt="Website redesign hero"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </Container>
            </Section>

            {/* ── 2. CHOOSE YOUR SERVICE ── */}
            <Section id="choose-service" className="bg-transparent py-16 md:py-24 border-b border-grid/10 relative z-10">
                <Container>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
                        <div className="mb-16">
                            <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-ink-muted">CHOOSE YOUR PATH</div>
                            <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold font-sans tracking-tight text-ink max-w-3xl">
                                Three paths. One goal: a website that works.
                            </h2>
                            <p className="mt-4 text-ink-muted max-w-2xl leading-relaxed">
                                Every business is different. Pick the option that fits your stage, budget, and goals — we&apos;ll handle everything else.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                            {serviceOptions.map((option) => (
                                <motion.div key={option.title} variants={fadeInUp} whileHover={{ y: -2, transition: { duration: 0.18 } }} className="border border-grid/15 bg-white p-7 md:p-8 flex flex-col group cursor-default hover:border-primary/30 transition-all duration-300">
                                    <div className="flex items-center justify-between gap-3 mb-4">
                                        <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-primary/60">{option.tag}</span>
                                    </div>
                                    <h3 className="font-sans font-bold text-2xl tracking-tight text-ink mb-3">{option.title}</h3>
                                    <p className="text-sm text-ink-muted leading-relaxed mb-4">{option.copy}</p>
                                    <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-ink-muted mb-3">BEST FOR</div>
                                    <p className="text-sm font-medium text-ink mb-5">{option.bestFor}</p>
                                    <div className="space-y-2.5 mb-8 flex-1">
                                        {option.highlights.map((h) => (
                                            <div key={h} className="flex items-center gap-2.5">
                                                <div className="h-5 w-5 shrink-0 border border-green-800/20 bg-green-800/5 grid place-items-center text-green-800">
                                                    <IconCheck className="h-3 w-3" />
                                                </div>
                                                <span className="text-sm text-ink-muted">{h}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <Link href={option.href} className="inline-flex items-center text-sm font-bold text-ink hover:text-primary transition-colors uppercase tracking-wider group-hover:text-primary">
                                        Explore This Option
                                        <IconArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </Container>
            </Section>

            {/* ── 3. WHY YOU SHOULD REDESIGN — Marketing Psychology ── */}
            <Section className="bg-transparent py-16 md:py-24 border-b border-grid/10 relative z-10">
                <Container>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerSlow}>
                        <div className="mb-16">
                            <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-ink-muted">THE REAL COST</div>
                            <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold font-sans tracking-tight text-ink max-w-4xl">
                                Your outdated website is costing you more than you think.
                            </h2>
                            <p className="mt-4 text-ink-muted max-w-2xl leading-relaxed">
                                It&apos;s not just about looks. A bad website quietly destroys credibility, burns ad spend, and hands customers to your competitors.
                            </p>
                        </div>
                        <div className="border border-grid/15 bg-white">
                            <div className="grid md:grid-cols-2 lg:grid-cols-3">
                                {whyRedesignReasons.map((reason, i) => (
                                    <motion.div
                                        key={reason.title}
                                        variants={fadeInUp}
                                        whileHover={{ y: -2, transition: { duration: 0.18 } }}
                                        className={`p-7 md:p-8 flex flex-col cursor-default group
                                            ${i < 3 ? "border-b border-grid/15" : ""}
                                            ${i % 3 !== 2 ? "md:border-r border-grid/15" : ""}
                                            ${i < 3 && i % 3 !== 0 ? "" : ""}
                                        `}
                                    >
                                        <div className="flex items-center gap-4 mb-5">
                                            <div className="h-10 w-10 border border-red-500/20 bg-red-500/5 grid place-items-center text-red-500 shrink-0 group-hover:border-red-500/40 group-hover:bg-red-500/10 transition-colors duration-300">
                                                <reason.Icon className="h-5 w-5" />
                                            </div>
                                            <h3 className="font-sans font-semibold text-base tracking-tight text-ink leading-tight">{reason.title}</h3>
                                        </div>
                                        <p className="text-sm text-ink-muted leading-relaxed">{reason.copy}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </Container>
            </Section>

            {/* ── 4. WHAT YOU GET FROM US — 3×3 Grid ── */}
            <Section className="bg-transparent py-16 md:py-24 border-b border-grid/10 relative z-10">
                <Container>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
                        <div className="mb-16">
                            <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-ink-muted">WHAT YOU GET</div>
                            <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold font-sans tracking-tight text-ink max-w-3xl">
                                Everything included. No hidden costs.
                            </h2>
                            <p className="mt-4 text-ink-muted max-w-2xl leading-relaxed">
                                Regardless of which path you choose, every redesign comes with these essentials.
                            </p>
                        </div>
                        <div className="border border-grid/15 bg-white">
                            <div className="grid md:grid-cols-2 lg:grid-cols-3">
                                {whatYouGet.map((item, i) => (
                                    <motion.div
                                        key={item.title}
                                        variants={scaleIn}
                                        whileHover={{ y: -2, transition: { duration: 0.18 } }}
                                        className={`p-7 md:p-8 flex flex-col cursor-default group
                                            ${i < 6 ? "border-b border-grid/15" : ""}
                                            ${i % 3 !== 2 ? "md:border-r border-grid/15" : ""}
                                        `}
                                    >
                                        <div className="flex items-center justify-between gap-4 mb-5">
                                            <h4 className="font-sans font-semibold text-base tracking-tight text-ink">{item.title}</h4>
                                            <div className="h-10 w-10 border border-primary/25 bg-paper/60 grid place-items-center text-primary shrink-0 group-hover:bg-primary/5 group-hover:border-primary/40 transition-colors duration-300">
                                                <item.Icon className="h-5 w-5" />
                                            </div>
                                        </div>
                                        <p className="text-sm text-ink-muted leading-relaxed">{item.copy}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </Container>
            </Section>

            <StandardFAQSection items={faqItems} withBottomBorder />

            {/* ── 6. CTA ── */}
            <Section className="bg-transparent py-16 md:py-24 relative z-10">
                <Container>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
                        <div className="border border-grid/15 bg-white overflow-hidden">
                            <div className="grid lg:grid-cols-2">
                                <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-grid/15">
                                    <motion.div variants={fadeInUp}>
                                        <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-ink-muted mb-6">NEXT STEP</div>
                                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold tracking-tighter mb-6">
                                            Stop losing customers to a bad website.
                                        </h2>
                                        <p className="text-ink-muted text-lg leading-relaxed mb-10 max-w-lg">
                                            Book a call. We&apos;ll review what&apos;s broken, what it&apos;s costing you, and the fastest path to fix it.
                                        </p>
                                        <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                                            <Button asChild variant="primary" size="lg" className="w-full sm:w-auto sm:min-w-[220px]">
                                                <Link href="/contact">Book a call</Link>
                                            </Button>
                                            <Button asChild variant="outline" size="lg">
                                                <Link href="/website-solutions">View All Services</Link>
                                            </Button>
                                        </motion.div>
                                    </motion.div>
                                </div>
                                <motion.div variants={scaleIn} className="p-8 md:p-12 lg:p-16 bg-paper/30 flex flex-col justify-center">
                                    <div className="divide-y divide-grid/10">
                                        {[
                                            { label: "Audit Turnaround", value: "Within 24 hours" },
                                            { label: "Cost of Audit", value: "Free" },
                                            { label: "Average Timeline", value: "2 – 10 weeks" },
                                            { label: "Support After Launch", value: "Monthly plans available" },
                                        ].map((stat) => (
                                            <div key={stat.label} className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 py-4 sm:py-5 first:pt-0 last:pb-0">
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






