import Link from "next/link";
import { HeroImage } from "@/components/ui/HeroImage";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Kicker } from "@/components/ui/Kicker";
import { masterConfig } from "@/config/master";
import { StandardFAQSection } from "@/components/sections/StandardFAQSection";
import { buildPageMetadata } from "@/lib/seoMetadata";
import { BoxPattern } from "@/components/ui/BoxPattern";
import {
    IconMapPin, IconSearch, IconStar, IconRobot,
    IconDeviceDesktop,
    IconBolt, IconHeadset, IconClock, IconUsers,
    IconBuildingStore, IconMap, IconChartBar,
    IconBrandGoogle, IconMessageCircle
} from "@tabler/icons-react";
import type { ComponentType } from "react";
import { motion } from "@/components/ui/motion-lite";

export const metadata = buildPageMetadata({
    title: "Local SEO & Google Maps Growth | Nodecraft",
    description:
        "Local SEO and Google Business Profile optimization to increase map visibility, calls, and high-intent local leads.",
    path: "/digital-marketing/local-seo",
});

const fadeInUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } } };
const fadeInLeft = { hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" as const } } };
const fadeInRight = { hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" as const } } };
const scaleIn = { hidden: { opacity: 0, scale: 0.92 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } };
const staggerSlow = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };

/* ── Data ── */
const deliverables: { title: string; bullets: { text: string; Icon: ComponentType<{ className?: string }> }[]; Icon: ComponentType<{ className?: string }> }[] = [
    {
        title: "Google Business Profile Mastery", Icon: IconMapPin, bullets: [
            { text: "Complete setup, verification, and optimization of your Google Maps listing.", Icon: IconBrandGoogle },
            { text: "Weekly updates, Q&A management, and photo uploads to keep the profile active.", Icon: IconMapPin },
        ]
    },
    {
        title: "Local Keyword Dominance", Icon: IconSearch, bullets: [
            { text: "Deep keyword research for your specific city, neighborhood, and services.", Icon: IconSearch },
            { text: "On-page website optimization to align perfectly with local search intent.", Icon: IconBolt },
        ]
    },
    {
        title: "Review Generation Systems", Icon: IconStar, bullets: [
            { text: "Automated email and SMS systems to request reviews from happy customers.", Icon: IconMessageCircle },
            { text: "Professional, timely responses to all reviews — both positive and negative.", Icon: IconStar },
        ]
    },
    {
        title: "AI-Optimized Local Search", Icon: IconRobot, bullets: [
            { text: "Structured data and schema markup so AI assistants (Siri, Alexa, ChatGPT) recommend you.", Icon: IconRobot },
            { text: "Voice search optimization for \"near me\" queries that drive immediate foot traffic.", Icon: IconBuildingStore },
        ]
    },
];

const fitItems: { text: string; fit: boolean; Icon: ComponentType<{ className?: string }> }[] = [
    { text: "Clinics, salons, real estate brokers, restaurants, and retail stores.", fit: true, Icon: IconBuildingStore },
    { text: "Any business that relies on foot traffic or local service calls.", fit: true, Icon: IconMapPin },
    { text: "Service providers who want to dominate their city's search results.", fit: true, Icon: IconBrandGoogle },
    { text: "Fully remote, global SaaS companies.", fit: false, Icon: IconRobot },
    { text: "Businesses with no physical location or service area.", fit: false, Icon: IconMap },
];

const whyUsItems: { Icon: ComponentType<{ className?: string }>; title: string; copy: string }[] = [
    { Icon: IconMap, title: "46% of Searches Are Local", copy: "We don't just optimize your website — we optimize your geographic footprint so you capture high-intent local buyers." },
    { Icon: IconBolt, title: "Google Maps Is the New Homepage", copy: "Your Google Business Profile is often the first thing customers see. We make sure it's complete, active, and converting." },
    { Icon: IconHeadset, title: "Review Management Built-In", copy: "Reviews drive 93% of local purchase decisions. We build automated systems to generate and respond to reviews consistently." },
    { Icon: IconClock, title: "Results You Can See on the Map", copy: "We track your position in the Local Pack and show you exactly how your visibility is improving month over month." },
    { Icon: IconUsers, title: "Hyper-Local Expertise", copy: "We understand neighborhood-level targeting. Whether it's one city or twenty locations, we scale local SEO methodically." },
];

const processSteps: { step: string; title: string; copy: string; Icon: ComponentType<{ className?: string }> }[] = [
    { step: "01", title: "Competitor Geo-Audit", copy: "We analyze your local competitors, assess their Google rankings, review their profiles, and identify the gaps you can exploit.", Icon: IconSearch },
    { step: "02", title: "Profile & On-Page Optimization", copy: "We optimize your Google Business Profile, fix your website's local SEO, add schema markup, and build citations across directories.", Icon: IconMapPin },
    { step: "03", title: "Review Strategy Deployment", copy: "We set up automated review request systems, craft response templates, and train your team on review management best practices.", Icon: IconStar },
    { step: "04", title: "Monthly Local Monitoring", copy: "We track your Local Pack rankings, review volume, website traffic from local searches, and send you a clear monthly report.", Icon: IconChartBar },
];

const faqItems = [
    { q: "How long does it take to rank in the Google Local Pack?", a: "Most businesses see meaningful improvement within 60–90 days. Ranking speed depends on competition in your area, the state of your current profile, and how actively we can generate reviews." },
    { q: "Do I need a physical address to use Local SEO?", a: "Not necessarily. Service-area businesses (plumbers, cleaners, consultants) can use Google's service-area feature instead. We'll configure the right setup for your business type." },
    { q: "How do you generate reviews without being spammy?", a: "We use timed, personalized email and SMS sequences triggered after a positive customer experience. It feels natural, not pushy — and it's fully compliant with Google's review policies." },
    { q: "Can you manage multiple locations?", a: "Yes. We've managed multi-location campaigns across cities and states. Each location gets its own optimized profile, localized content, and dedicated tracking." },
    { q: "What's the difference between Local SEO and regular SEO?", a: "Regular SEO targets organic search rankings globally. Local SEO focuses on Google Maps, the Local Pack, and location-specific queries. If your customers search with city names or \"near me,\" you need Local SEO." },
];
export default function LocalSEOPage() {
    return (
        <main className="relative text-ink pb-20">
            {/* ── 1. HERO — Split Two-Column ── */}
            <Section className="bg-transparent pt-4 md:pt-8 lg:pt-12 pb-16 md:pb-24 relative z-10 border-b border-grid/10">
                <Container>
                    <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                            <div>
                                <motion.div variants={fadeInLeft}>
                                    <Kicker className="text-xs md:text-sm px-6 py-2.5 bg-primary/5 border-primary/30 text-primary"> LOCAL SEO & GOOGLE MAPS </Kicker>
                                </motion.div>
                                <motion.h1 variants={fadeInLeft} className="mt-8 text-3xl sm:text-4xl md:text-6xl font-sans font-bold leading-[0.95] tracking-tighter text-ink">
                                    Own the &ldquo;Near Me&rdquo; <span className="text-primary">Search Results.</span>
                                </motion.h1>
                                <motion.p variants={fadeInLeft} className="mt-6 text-base md:text-lg text-ink-muted leading-relaxed max-w-lg">
                                    Hyper-local SEO strategies and Google Maps optimization to ensure your local business ranks #1 when customers in your city are ready to buy.
                                </motion.p>
                                <motion.div variants={fadeInLeft} className="mt-10 flex flex-wrap gap-4">
                                    <Button asChild variant="primary" size="lg">
                                        <Link href="/contact">Book a call</Link>
                                    </Button>
                                    <Button asChild variant="outline" size="lg">
                                        <Link href="#deliverables">See Deliverables</Link>
                                    </Button>
                                </motion.div>
                            </div>
                            <motion.div variants={fadeInRight} className="relative order-first lg:order-none">
                                <div className="border border-grid/15 bg-white overflow-hidden">
                                    <div className="relative aspect-square bg-white">
                                        <HeroImage
                                            src={`/${masterConfig.ui.heroImages.socialMediaGrowthLocalSeo}`}
                                            alt="Local SEO hero"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </Container>
            </Section>

            {/* ── 2. WHAT WE DELIVER — 2×2 Grid ── */}
            <Section id="deliverables" className="bg-transparent relative z-10 py-16 md:py-24 border-b border-grid/10">
                <Container>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
                        <div className="mb-16 md:mb-20">
                            <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-ink-muted">DELIVERABLES</div>
                            <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold font-sans tracking-tight text-ink max-w-3xl">Everything included in your local SEO package.</h2>
                        </div>
                        <div className="border border-grid/15 bg-white">
                            {[0, 2].map((startIdx) => (
                                <div key={startIdx} className={`grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-grid/15 ${startIdx > 0 ? "border-t border-grid/15" : ""}`}>
                                    {deliverables.slice(startIdx, startIdx + 2).map((item) => (
                                        <motion.div key={item.title} variants={scaleIn} whileHover={{ y: -2, transition: { duration: 0.18 } }} className="p-7 md:p-8 flex flex-col group cursor-default">
                                            <div className="flex items-center justify-between gap-4 mb-6">
                                                <h4 className="font-sans font-semibold text-lg tracking-tight text-ink">{item.title}</h4>
                                                <div className="h-12 w-12 border border-primary/25 bg-paper/60 grid place-items-center text-primary shrink-0 group-hover:bg-primary/5 group-hover:border-primary/40 transition-colors duration-300">
                                                    <item.Icon className="h-6 w-6" />
                                                </div>
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
                                        <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-ink-muted mb-6">IS THIS FOR YOU?</div>
                                        <h3 className="text-2xl md:text-3xl font-sans font-bold tracking-tight text-ink mb-8">The right fit.</h3>
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
                                            <span className="italic">Not sure? Book a free consultation and we&apos;ll tell you honestly.</span>
                                        </div>
                                    </motion.div>
                                </div>
                                <div className="p-7 md:p-10 flex flex-col">
                                    <motion.div variants={fadeInUp}>
                                        <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-ink-muted mb-6">WHY NODECRAFT</div>
                                        <h3 className="text-2xl md:text-3xl font-sans font-bold tracking-tight text-ink mb-8">Why local businesses choose us.</h3>
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
                            <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-ink-muted">OUR PROCESS</div>
                            <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold font-sans tracking-tight text-ink max-w-3xl">From audit to local dominance.</h2>
                            <p className="mt-4 text-ink-muted max-w-2xl leading-relaxed">A methodical, 4-step approach to putting your business at the top of local search results.</p>
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
                                            <h3 className="font-sans font-semibold text-lg tracking-tight text-ink mb-3">
                                                {item.title}
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
                                        <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-ink-muted mb-6">NEXT STEP</div>
                                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold tracking-tighter mb-6">Ready to own your local search results?</h2>
                                        <p className="text-ink-muted text-lg leading-relaxed mb-10 max-w-lg">Book a free local audit. We&apos;ll show you exactly where you rank, who&apos;s beating you, and how to take the top spot.</p>
                                        <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                                            <Button asChild variant="primary" size="lg" className="w-full sm:w-auto sm:min-w-[220px]"><Link href="/contact">Book a call</Link></Button>
                                            <Button asChild variant="outline" size="lg"><Link href="/digital-marketing">View All Services</Link></Button>
                                        </motion.div>
                                    </motion.div>
                                </div>
                                <motion.div variants={scaleIn} className="p-8 md:p-12 lg:p-16 bg-paper/30 flex flex-col justify-center">
                                    <div className="divide-y divide-grid/10">
                                        {[
                                            { label: "Free Audit", value: "Within 24 hours" },
                                            { label: "Results Timeline", value: "60 – 90 days" },
                                            { label: "Review Automation", value: "Included" },
                                            { label: "Reporting", value: "Monthly" },
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



