import Link from "next/link";
import Image from "next/image";
import { HeroImage } from "@/components/ui/HeroImage";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Kicker } from "@/components/ui/Kicker";
import { masterConfig } from "@/config/master";
import { StandardFAQSection } from "@/components/sections/StandardFAQSection";
import { buildPageMetadata } from "@/lib/seoMetadata";
import {
    IconTargetArrow, IconPencil, IconArrowsSplit, IconRefresh, IconChartBar,
    IconDeviceDesktop,
    IconBolt, IconHeadset, IconClock, IconShieldCheck,
    IconUsers, IconAd, IconReportAnalytics, IconRocket,
    IconBrandMeta, IconBrandGoogle
} from "@tabler/icons-react";
import type { ComponentType } from "react";
import { motion } from "@/components/ui/motion-lite";
import { CalButton } from "@/components/ui/CalBooking";

export const metadata = buildPageMetadata({
    title: "Performance Marketing & Ad Management Services | BrandBase India",
    description:
        "ROI-driven performance marketing for high-growth brands. We manage Meta and Google Ads with a focus on conversion tracking, creative testing, and measurable revenue growth.",
    path: "/digital-marketing/performance-marketing",
});

const fadeInUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } } };
const fadeInLeft = { hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" as const } } };
const fadeInRight = { hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" as const } } };
const scaleIn = { hidden: { opacity: 0, scale: 0.92 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } };
const staggerSlow = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };

/* ── Data ── */
const deliverables: { title: string; image: string; bullets: { text: string; Icon: ComponentType<{ className?: string }> }[]; Icon: ComponentType<{ className?: string }> }[] = [
    {
        title: "Campaign Strategy & Setup", image: "/deliver/ads-strategy.webp", Icon: IconTargetArrow, bullets: [
            { text: "Complete architecture for Google Search, Display, Linkedin Ads and Meta Ads.", Icon: IconBrandGoogle },
            { text: "Flawless installation of tracking pixels and conversion APIs.", Icon: IconBolt },
        ]
    },
    {
        title: "Ad Creative & Copywriting", image: "/deliver/ads-creative.webp", Icon: IconPencil, bullets: [
            { text: "Scroll-stopping graphic design and video ad creatives.", Icon: IconAd },
            { text: "Direct-response copywriting engineered to drive immediate clicks.", Icon: IconPencil },
        ]
    },
    {
        title: "A/B Testing & Scaling", image: "/deliver/ads-testing.webp", Icon: IconArrowsSplit, bullets: [
            { text: "Continuous testing of audiences, headlines, and visuals to find winning combinations.", Icon: IconArrowsSplit },
            { text: "Ruthless budget reallocation to lower your Cost Per Click (CPC) and maximize ROI.", Icon: IconChartBar },
        ]
    },
    {
        title: "Retargeting Systems", image: "/deliver/ads-retargeting.webp", Icon: IconRefresh, bullets: [
            { text: "Automated campaigns to recapture website visitors who didn't convert.", Icon: IconRefresh },
            { text: "Specific cart-abandonment ads for eCommerce and retail clients.", Icon: IconTargetArrow },
        ]
    },
    {
        title: "Analytics & Transparency", image: "/deliver/ads-analytics.webp", Icon: IconReportAnalytics, bullets: [
            { text: "Custom live dashboards so you can see exactly where your money is going.", Icon: IconReportAnalytics },
            { text: "Weekly and monthly performance breakdowns delivered directly to you.", Icon: IconChartBar },
        ]
    },
    {
        title: "Platform Diversification", image: "/deliver/ads-platforms.webp", Icon: IconBrandMeta, bullets: [
            { text: "Strategic spend allocation across Meta, Google, YouTube, and emerging platforms.", Icon: IconBrandMeta },
            { text: "Cross-platform attribution modelling so you know which channel truly drives results.", Icon: IconBrandGoogle },
        ]
    },
];

const fitItems: { text: string; fit: boolean; Icon: ComponentType<{ className?: string }> }[] = [
    { text: "Brands that have a proven product but need to pour fuel on the fire.", fit: true, Icon: IconRocket },
    { text: "Businesses tired of agencies hiding behind vanity metrics like impressions.", fit: true, Icon: IconReportAnalytics },
    { text: "Teams ready to invest some money in ad spend to see real returns.", fit: true, Icon: IconChartBar },
    { text: "Startups with zero budget expecting overnight miracles without testing.", fit: false, Icon: IconBolt },
    { text: "Businesses not willing to let data drive the creative decisions.", fit: false, Icon: IconTargetArrow },
];

const whyUsItems: { Icon: ComponentType<{ className?: string }>; title: string; copy: string }[] = [
    { Icon: IconChartBar, title: "Revenue, Not Vanity Metrics", copy: "We optimize for sales, leads, and booked calls — not impressions. Every dollar is tied to a measurable outcome." },
    { Icon: IconBolt, title: "Daily Optimization", copy: "We don't set campaigns and forget them. Our team monitors performance daily and adjusts bids, budgets, and creatives in real time." },
    { Icon: IconHeadset, title: "Direct Access, Zero Middlemen", copy: "You talk directly to the person managing your campaigns. No account managers relaying messages." },
    { Icon: IconClock, title: "Results Within Weeks, Not Months", copy: "Our launch framework gets campaigns live fast and iterating quickly. Most clients see meaningful data within 14 days." },
    { Icon: IconShieldCheck, title: "Full Transparency", copy: "You own your ad accounts, see every dollar spent, and get access to live dashboards. We have nothing to hide." },
];

const processSteps: { step: string; title1: string; title2: string; copy: string; Icon: ComponentType<{ className?: string }> }[] = [
    {
        step: "01",
        title1: "Audit & Tracking",
        title2: "Setup",
        copy: "We audit your current campaigns (if any), install tracking pixels, set up conversion APIs, and define your key performance indicators.",
        Icon: IconUsers
    },
    {
        step: "02",
        title1: "Creative",
        title2: "Production",
        copy: "We design scroll-stopping ad creatives, write direct-response copy, and build landing pages optimized for conversions.",
        Icon: IconAd
    },
    {
        step: "03",
        title1: "Campaign",
        title2: "Launch",
        copy: "We launch your campaigns across Google, Meta, or both — with structured A/B tests running from day one.",
        Icon: IconRocket
    },
    {
        step: "04",
        title1: "Scaling +",
        title2: "Optimization",
        copy: "We monitor daily, kill underperformers, scale winners, and send you clear weekly reports on exactly what's working.",
        Icon: IconReportAnalytics
    },
];

const faqItems = [
    { q: "How quickly will I see results?", a: "You'll see meaningful data within the first 14 days. Real optimization happens over 30–60 days as we gather conversion data and refine targeting." },
    { q: "Do I own my ad accounts?", a: "Yes, always. We set up campaigns in your own Google Ads and Meta Business Manager accounts. If we part ways, you keep everything." },
    { q: "What platforms do you run ads on?", a: "Google Search, Google Display, YouTube, Meta (Facebook and Instagram), and Linkedin. We recommend the right mix based on your audience and goals." },
    { q: "How is your pricing structured?", a: "We charge a flat monthly management fee — not a percentage of ad spend. This keeps our incentives aligned: we want to make your campaigns more efficient, not more expensive." },
];
export default function PerformanceMarketingPage() {
    return (
        <main className="relative text-ink pb-20">
            {/* ── 1. HERO — Split Two-Column ── */}
            <Section className="bg-transparent pt-4 md:pt-8 lg:pt-12 pb-16 md:pb-24 relative z-10 border-b border-grid/10">
                <Container>
                    <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                            <div>
                                <motion.div variants={fadeInLeft}>
                                    <Kicker>PERFORMANCE MARKETING</Kicker>
                                </motion.div>
 <motion.h1 variants={fadeInLeft} className="mt-8 text-3xl sm:text-4xl md:text-6xl font-serif leading-[0.95] tracking-tighter text-ink">
                                    Turn Ad Spend Into <em className="font-serif-20 italic">Predictable Revenue.</em>
                                </motion.h1>
                                <motion.p variants={fadeInLeft} className="mt-6 text-sm md:text-base text-ink-muted leading-relaxed max-w-lg">
                                    Data-driven Meta and Google Ads campaigns designed to lower your Customer Acquisition Cost (CAC) and scale your leads.
                                </motion.p>
                                <motion.div variants={fadeInLeft} className="NC-Hero-CTA-Group mt-10 flex flex-wrap gap-4">
                                    <CalButton variant="primary" size="lg" className="NC-Hero-CTA-Primary">
                                        Book a call
                                    </CalButton>
                                    <Button asChild variant="outline" size="lg">
                                        <Link href="#deliverables">Explore Performance Ads Deliverables</Link>
                                    </Button>
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
                                            src={`/${masterConfig.ui.heroImages.socialMediaGrowthPerformanceMarketing}`}
                                            alt="High-performance ad management and conversion marketing systems"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </Container>
            </Section>

            {/* ── 2. WHAT WE DELIVER — 3×2 Grid ── */}
            <Section id="deliverables" className="bg-transparent relative z-10 py-16 md:py-24 border-b border-grid/10">
                <Container>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
                        <div className="mb-16 md:mb-20">
                            <Kicker>DELIVERABLES</Kicker>
 <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight text-ink max-w-3xl">Everything included in your ad <em className="font-serif-10 italic">campaigns.</em></h2>
                        </div>
                        <div className="border border-grid/15 bg-white">
                            {[0, 3].map((startIdx) => (
                                <div key={startIdx} className={`grid md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-grid/15 ${startIdx > 0 ? "border-t border-grid/15" : ""}`}>
                                    {deliverables.slice(startIdx, startIdx + 3).map((item) => (
                                        <motion.div key={item.title} variants={scaleIn} whileHover={{ y: -2, transition: { duration: 0.18 } }} className="p-7 md:p-8 flex flex-col group cursor-default">
                                            {/* Image at top */}
                                            <div className="w-full aspect-video mb-6 border border-grid/15 bg-paper/40 flex items-center justify-center overflow-hidden relative">
                                                <Image 
                                                    src={item.image} 
                                                    alt={item.title}
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, 33vw"
                                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                            </div>
                                            <div className="flex items-center justify-between gap-4 mb-6">
                                                <h3 className="font-serif text-xl md:text-2xl tracking-tight text-ink">{item.title}</h3>
                                            </div>
                                            <div className="space-y-4 flex-1">
                                                {item.bullets.map((b) => (
                                                    <div key={b.text} className="flex items-center gap-3">
                                                        <span className="h-7 w-7 shrink-0 border border-grid/15 bg-paper/60 grid place-items-center text-ink-muted group-hover:text-primary group-hover:border-primary/20 transition-colors duration-300">
                                                            <b.Icon className="h-3.5 w-3.5" />
                                                        </span>
                                                        <span className="text-sm text-ink-muted leading-relaxed">{b.text}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </Container>
            </Section>

            {/* ── 3. IS THIS FOR YOU? + WHY US ── */}
            <Section className="bg-transparent py-16 md:py-24 border-b border-grid/10 relative z-10">
                <Container>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
                        <div className="border border-grid/15 bg-white">
                            <div className="grid lg:grid-cols-2">
                                <div className="p-7 md:p-10 border-b lg:border-b-0 lg:border-r border-grid/15 flex flex-col">
                                    <motion.div variants={fadeInUp}>
                                        <Kicker className="mb-6">IS THIS FOR YOU?</Kicker>
 <h3 className="h3 text-2xl md:text-3xl font-serif tracking-tight text-ink mb-8">The right <em className="font-serif-10 italic">fit.</em></h3>
                                    </motion.div>
                                    <div className="flex-1 divide-y divide-grid/10">
                                        {fitItems.map((item) => (
                                            <motion.div key={item.text} variants={fadeInLeft} whileHover={{ x: 3, transition: { duration: 0.16 } }} className="mi-row flex items-center gap-4 py-4 first:pt-0 last:pb-0 cursor-default">
                                                <div className={`h-8 w-8 grid place-items-center shrink-0 ${item.fit ? "border border-green-800/20 bg-green-800/5 text-green-800" : "border border-red-500/25 bg-red-500/10 text-red-600"}`}>
                                                    <item.Icon className="h-4 w-4" />
                                                </div>
                                                <div>
                                                    <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-ink-muted">{item.fit ? "Perfect for" : "Not for"}</span>
                                                    <p className="text-sm text-ink mt-0.5 leading-relaxed">{item.text}</p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                    <motion.div variants={fadeInUp} className="mt-8 pt-6 border-t border-grid/10">
                                        <div className="flex items-center gap-3 text-sm text-ink-muted">
                                            <div className="h-8 w-8 border border-primary/25 bg-primary/5 grid place-items-center text-primary shrink-0"><IconDeviceDesktop className="h-4 w-4" /></div>
                                            <span className="italic">Not sure? Book a free 15-minute strategy call and we&apos;ll tell you honestly.</span>
                                        </div>
                                    </motion.div>
                                </div>
                                <div className="p-7 md:p-10 flex flex-col">
                                    <motion.div variants={fadeInUp}>
                                        <Kicker className="mb-6">WHY BRANDBASE</Kicker>
 <h3 className="h3 text-2xl md:text-3xl font-serif tracking-tight text-ink mb-8">Why growth teams choose <em className="font-serif-10 italic">us.</em></h3>
                                    </motion.div>
                                    <div className="flex-1 divide-y divide-grid/10">
                                        {whyUsItems.map((item) => (
                                            <motion.div key={item.title} variants={fadeInLeft} whileHover={{ x: 3, transition: { duration: 0.16 } }} className="mi-row flex items-center gap-4 py-4 first:pt-0 last:pb-0 cursor-default">
                                                <div className="h-8 w-8 border border-primary/25 bg-paper/60 grid place-items-center text-primary shrink-0"><item.Icon className="h-4 w-4" /></div>
                                                <div>
                                                    <p className="text-sm font-semibold text-ink">{item.title}</p>
                                                    <p className="text-sm text-ink-muted mt-0.5 leading-relaxed">{item.copy}</p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </Container>
            </Section>

            {/* ── 4. OUR PROCESS — Boxes with Flowing Dots ── */}
            <Section className="bg-transparent border-b border-grid/10 py-16 md:py-24 relative z-10">
                <Container>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerSlow}>
                        <div className="mb-16">
                            <Kicker>OUR PROCESS</Kicker>
 <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight text-ink max-w-3xl">From audit to <em className="font-serif-10 italic">scaling.</em></h2>
                            <p className="mt-4 text-ink-muted max-w-2xl leading-relaxed">A structured, transparent process that turns ad budgets into predictable revenue streams.</p>
                        </div>
                        <div className="relative">
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-y-0 md:gap-y-8 lg:gap-y-0 relative" style={{ columnGap: "3rem" }}>
                                {processSteps.map((item, i) => (
                                    <div
                                        key={item.step}
                                        className={`relative flex flex-col items-stretch ${i < processSteps.length - 1 ? "pb-0" : ""}`}
                                    >
                                        <motion.div variants={fadeInUp} whileHover={{ y: -2, transition: { duration: 0.18 } }} className="relative border border-grid/15 bg-white p-7 md:p-8 flex flex-col h-full group cursor-default hover:border-primary/30 hover:bg-paper/40 transition-colors duration-300">
                                            <div className="flex flex-col items-start gap-5 mb-8">
                                                <div className="font-mono text-5xl font-bold tracking-tight text-ink group-hover:text-primary transition-colors duration-300">
                                                    {item.step}
                                                </div>
                                                <div className="h-10 w-10 shrink-0 border border-grid/15 bg-paper/60 grid place-items-center text-primary group-hover:border-primary/30 transition-colors duration-300">
                                                    <item.Icon className="h-5 w-5" />
                                                </div>
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

            <StandardFAQSection items={faqItems} withBottomBorder />

            {/* ── 6. CTA ── */}
            <Section className="bg-transparent py-16 md:py-24 relative z-10">
                <Container>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
                        <div className="border border-grid/15 bg-white overflow-hidden">
                            <div className="grid lg:grid-cols-2">
                                <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-grid/15">
                                    <motion.div variants={fadeInUp}>
                                        <Kicker className="mb-6">NEXT STEP</Kicker>
 <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tighter mb-6">Ready to stop guessing and start <em className="font-serif-10 italic">scaling?</em></h2>
                                        <p className="text-ink-muted text-lg leading-relaxed mb-10 max-w-lg">Book a free strategy call. We&apos;ll audit your current setup and show you exactly where you&apos;re leaving money on the table.</p>
                                        <motion.div variants={fadeInUp} className="NC-CTA-Action-Group mt-10 flex flex-wrap gap-4">
                                            <CalButton variant="primary" size="lg" className="NC-CTA-Action-Primary w-full sm:w-auto sm:min-w-[220px]">
                                                Book a call
                                            </CalButton>
                                            <Button asChild variant="outline" size="lg" className="NC-CTA-Action-Secondary">
                                                <Link href="/digital-marketing">View all services</Link>
                                            </Button>
                                        </motion.div>
                                    </motion.div>
                                </div>
                                <motion.div variants={scaleIn} className="p-8 md:p-12 lg:p-16 bg-paper/30 flex flex-col justify-center">
                                    <div className="divide-y divide-grid/10">
                                        {[
                                            { label: "Response Time", value: "Within 24 hours" },
                                            { label: "Campaign Live In", value: "5 – 7 days" },
                                            { label: "Min. Ad Spend", value: "Depends on the client" },
                                            { label: "Reporting", value: "Weekly + monthly" },
                                        ].map((stat) => (
                                            <div key={stat.label} className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 py-4 sm:py-5 first:pt-0 last:pb-0">
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
        </main>
    );
}


