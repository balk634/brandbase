import Link from "next/link";
import Image from "next/image";
import { HeroImage } from "@/components/ui/HeroImage";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { masterConfig } from "@/config/master";
import { ServiceSchema } from "@/components/seo/ServiceSchema";
import { StandardFAQSection } from "@/components/sections/StandardFAQSection";
import { buildPageMetadata } from "@/lib/seoMetadata";
import {
    IconCrown, IconFlame, IconTargetArrow,
    IconCheck, IconDeviceDesktop, IconUsers, IconRocket,
    IconBrandFigma, IconShieldCheck,
    IconAward, IconHeartHandshake,
    IconCalendarEvent, IconDatabase,
    IconTrendingUp,
    IconVideo, IconSearch, IconMessageCircle, IconLayersLinked,
    IconChartBar, IconFolderCheck, IconClock, IconPalette, IconSparkles
} from "@tabler/icons-react";
import type { ComponentType } from "react";
import { motion } from "@/components/ui/motion-lite";
import { CalButton } from "@/components/ui/CalBooking";

export const metadata = buildPageMetadata({
    title: "Brand Management & Social Media Growth | Strategy-Led Creative Engine",
    description:
        "We take complete ownership of your brand presence. Visual identity kits, high-retention video production, narrative copywriting, and hands-off publishing that build compounding authority.",
    path: "/growth-solutions/brand-management",
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
        title: "Brand & Visual Kit", image: "/deliverables/social-visuals.webp", Icon: IconCrown, bullets: [
            { text: "Curated typography hierarchies, exact chromatic palette, and grid rules.", Icon: IconPalette },
            { text: "Reusable master templates in Figma built for instant mobile recognition.", Icon: IconBrandFigma },
        ]
    },
    {
        title: "High-Retention Video", image: "/deliverables/ads-creative.webp", Icon: IconVideo, bullets: [
            { text: "Psychological hook scripting, narrative pacing cuts, and dynamic typography.", Icon: IconFlame },
            { text: "Sound curation that transforms raw phone clips into polished visual stories.", Icon: IconSparkles },
        ]
    },
    {
        title: "Strategy & Calendar", image: "/deliverables/social-calendar.webp", Icon: IconTargetArrow, bullets: [
            { text: "90-day narrative roadmap and monthly visual calendars submitted for approval.", Icon: IconCalendarEvent },
            { text: "Thumb-stopping hooks and captions optimized for in-app search indexing.", Icon: IconSearch },
        ]
    },
    {
        title: "Publishing & Community", image: "/deliverables/social-community.webp", Icon: IconMessageCircle, bullets: [
            { text: "Native publication timed to your audience's peak engagement windows.", Icon: IconClock },
            { text: "Active comment moderation, DM screening, and priority inquiry routing.", Icon: IconUsers },
        ]
    },
    {
        title: "Executive Authority", image: "/deliverables/web-brand.webp", Icon: IconAward, bullets: [
            { text: "Founder personal branding and LinkedIn thought leadership ghostwriting.", Icon: IconSparkles },
            { text: "Omni-channel cohesion aligning social media with your website and offline presence.", Icon: IconLayersLinked },
        ]
    },
    {
        title: "Asset Bank & Insights", image: "/deliverables/social-analytics.webp", Icon: IconChartBar, bullets: [
            { text: "Executive monthly performance report covering reach, visits, and intent.", Icon: IconTrendingUp },
            { text: "All 4K video masters, PNGs, and Figma source files saved permanently in your Drive.", Icon: IconFolderCheck },
        ]
    },
];

const fitItems: { text: string; fit: boolean; Icon: ComponentType<{ className?: string }> }[] = [
    { text: "Established service businesses, clinics, and founders with a proven offer.", fit: true, Icon: IconTargetArrow },
    { text: "Brands ready to completely delegate their social channels to a senior creative team.", fit: true, Icon: IconHeartHandshake },
    { text: "Teams looking for compounding category authority, not one-off disconnected posts.", fit: true, Icon: IconAward },
    { text: "Businesses looking for cheap $50 viral meme recycling with zero commercial relevance.", fit: false, Icon: IconFlame },
    { text: "Teams expecting overnight viral miracles without brand foundation or audience patience.", fit: false, Icon: IconClock },
];

const whyUsItems: { Icon: ComponentType<{ className?: string }>; title: string; copy: string }[] = [
    { Icon: IconUsers, title: "Human Storytelling Meets Smart Workflows", copy: "We use AI for rapid trend research, and experienced creative directors for authentic human voice and taste." },
    { Icon: IconShieldCheck, title: "Zero Surprises, 100% Pre-Approved", copy: "Nothing goes live without your sign-off. You review full monthly visual calendars and scripts in advance." },
    { Icon: IconFolderCheck, title: "Permanent Cloud Asset Vault", copy: "All high-resolution video masters, graphics, and design kit files belong to you permanently in Google Drive." },
    { Icon: IconDeviceDesktop, title: "Raw Phone Footage to Master Cut", copy: "No expensive film crews needed. Send raw smartphone clips or photos, and we craft them into polished stories." },
    { Icon: IconLayersLinked, title: "One Unified Digital Partner", copy: "Your operations systems, website, and brand managed by one cohesive team with zero vendor misalignment." },
];

const processSteps: { step: string; title1: string; title2: string; copy: string; Icon: ComponentType<{ className?: string }> }[] = [
    {
        step: "01",
        title1: "Channel",
        title2: "Audit",
        copy: "We diagnose your profiles, benchmark category leaders, identify audience leakage, and map your 90-day narrative direction.",
        Icon: IconTargetArrow,
    },
    {
        step: "02",
        title1: "Visual Kit +",
        title2: "Architecture",
        copy: "We construct your Master Visual Design Kit in Figma, rewrite bios for in-app search, and optimize your link-in-bio funnel.",
        Icon: IconBrandFigma,
    },
    {
        step: "03",
        title1: "Production +",
        title2: "Approval",
        copy: "We draft monthly scripts, cut short-form video, design carousels, and submit everything for your review before scheduling.",
        Icon: IconVideo,
    },
    {
        step: "04",
        title1: "Native Launch +",
        title2: "Stewardship",
        copy: "We publish at peak engagement windows, monitor comments and DMs, route customer inquiries, and deliver monthly intelligence.",
        Icon: IconRocket,
    },
];

const faqItems = [
    { q: "How does the content approval process work?", a: "Zero surprises. Nothing goes live without your explicit approval. Every month, we deliver a complete visual calendar with hooks, scripts, graphics, and captions well in advance. You can approve in one click or request adjustments before scheduled publishing." },
    { q: "Do we need professional camera equipment or studio setups?", a: "Not at all. Audiences today reject hyper-staged, sterile commercial ads. Authentic, high-resolution smartphone clips filmed in your natural working environment outperform expensive studio shoots when paired with our hook scripting, narrative pacing, dynamic typography, and clean audio treatment." },
    { q: "Who owns the created assets, videos, and graphics?", a: "You do. 100% of final rendered videos (MP4), graphics (PNG/JPG), and your Visual Design Kit are stored in a dedicated, permanently accessible Google Drive folder that belongs to your organization from day one." },
    { q: "How do you capture our brand voice without sounding generic?", a: "We start every partnership with a structured Brand Voice Discovery Sprint. We dissect your existing materials, listen to how you speak with clients, extract your natural vocabulary, and define strict guardrails. No generic AI platitudes; every script sounds unmistakably human." },
    { q: "What happens during Month 1?", a: "Month 1 is your Brand Foundation Sprint. Before publishing, we audit your existing presence, optimize profile bios and link funnels, construct your Master Visual Design Kit, and deliver your first 90-day roadmap. Real growth requires a solid foundation." },
    { q: "Can we combine Brand Management with a Website or Management System?", a: "Yes. BrandBase was built specifically to unify backend business management systems with frontend brand growth. Having your operational system, website, and brand managed under one roof eliminates misaligned vendors and ensures seamless customer journeys." },
];

export default function BrandManagementPage() {
    return (
        <main className="relative text-ink pb-20">
            <ServiceSchema
                name="Brand Management & Social Media Growth"
                description="We take complete ownership of your brand presence. Visual identity kits, high-retention video production, narrative copywriting, and hands-off publishing that build compounding authority."
                path="/growth-solutions/brand-management"
                offers={[
                    {
                        name: "Full Brand Management Retainer",
                        description: "Complete hands-off stewardship of social channels, video production, visual identity, and community engagement.",
                    },
                    {
                        name: "Brand Foundation & Creative Engine",
                        description: "Month 1 visual identity kit, channel makeover, 90-day content blueprint, and high-retention video assets.",
                    }
                ]}
            />

            {/* ── 1. HERO: Split Two-Column ── */}
            <Section className="bg-transparent pt-4 md:pt-8 lg:pt-12 pb-16 md:pb-24 relative z-10 border-b border-grid/10">
                <Container>
                    <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                            {/* Left: Copy */}
                            <div>
                                <motion.h1 variants={fadeInLeft} className="mt-8 text-3xl sm:text-4xl md:text-6xl font-serif leading-[0.95] tracking-tighter text-ink">
                                    Brand Management <em className="font-serif-20 italic">Built for Trust.</em>
                                </motion.h1>
                                <motion.p variants={fadeInLeft} className="mt-6 text-sm md:text-base text-ink-muted leading-relaxed max-w-lg">
                                    Most organizations treat social media like a notice board. We take complete ownership of your brand presence, combining human storytelling with smart workflows to turn channels into reliable engines for reach, trust, and growth.
                                </motion.p>
                                <motion.div variants={fadeInLeft} className="mt-10 flex flex-wrap gap-4">
                                    <CalButton variant="primary" size="lg">
                                        Book a call
                                    </CalButton>
                                    <Button asChild variant="outline" size="lg">
                                        <Link href="#deliverables">Explore Brand Deliverables</Link>
                                    </Button>
                                </motion.div>
                            </div>

                            {/* Right: Visual */}
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
                                            src="/hero/social-management-hero.webp"
                                            alt="Brand management, social media growth, and creative content strategy"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </Container>
            </Section>

            {/* ── 2. WHAT WE DELIVER: 3×2 Grid ── */}
            <Section id="deliverables" className="bg-transparent relative z-10 py-16 md:py-24 border-b border-grid/10">
                <Container>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
                        <div className="mb-16 md:mb-20 text-left">
                            <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight text-ink max-w-3xl">
                                Everything you get. No hidden <em className="font-serif-10 italic">extras.</em>
                            </h2>
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

            {/* ── 3. IS THIS FOR YOU? + WHY US: Split Section ── */}
            <Section className="bg-transparent py-16 md:py-24 border-b border-grid/10 relative z-10">
                <Container>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
                        <div className="border border-grid/15 bg-white">
                            <div className="grid lg:grid-cols-2">
                                <div className="p-7 md:p-10 border-b lg:border-b-0 lg:border-r border-grid/15 flex flex-col">
                                    <motion.div variants={fadeInUp}>
                                        <h3 className="h3 text-2xl md:text-3xl font-serif tracking-tight text-ink mb-8">The right <em className="font-serif-10 italic">fit.</em></h3>
                                    </motion.div>
                                    <div className="flex-1 divide-y divide-grid/10">
                                        {fitItems.map((item) => (
                                            <motion.div key={item.text} variants={fadeInLeft} whileHover={{ x: 3, transition: { duration: 0.16 } }} className="mi-row flex items-center gap-4 py-4 first:pt-0 last:pb-0 cursor-default">
                                                <div className={`h-8 w-8 grid place-items-center shrink-0 transition-transform duration-200 ${item.fit ? "border border-emerald-500/25 bg-emerald-500/5 text-emerald-600" : "border border-red-500/25 bg-red-500/10 text-red-600"}`}>
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
                                            <div className="h-8 w-8 border border-primary/25 bg-primary/5 grid place-items-center text-primary shrink-0">
                                                <IconDeviceDesktop className="h-4 w-4" />
                                            </div>
                                            <span className="italic">Not sure? Book a free 15-minute consultation and we&apos;ll tell you honestly.</span>
                                        </div>
                                    </motion.div>
                                </div>
                                <div className="p-7 md:p-10 flex flex-col">
                                    <motion.div variants={fadeInUp}>
                                        <h3 className="h3 text-2xl md:text-3xl font-serif tracking-tight text-ink mb-8">Why brands choose this <em className="font-serif-10 italic">model.</em></h3>
                                    </motion.div>
                                    <div className="flex-1 divide-y divide-grid/10">
                                        {whyUsItems.map((item) => (
                                            <motion.div key={item.title} variants={fadeInLeft} whileHover={{ x: 3, transition: { duration: 0.16 } }} className="mi-row flex items-center gap-4 py-4 first:pt-0 last:pb-0 cursor-default">
                                                <div className="h-8 w-8 border border-primary/25 bg-paper/60 grid place-items-center text-primary shrink-0">
                                                    <item.Icon className="h-4 w-4" />
                                                </div>
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

            {/* ── 4. Strategic Foundation (Signature Dark Section) ── */}
            <Section id="foundation" className="bg-ink py-16 md:py-24 border-b-0 text-white scroll-mt-24">
                <Container>
                    {/* Header Row */}
                    <div className="mb-16 max-w-3xl">
                        <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight text-white leading-[1.05]">
                            Your brand presence is either compounding trust{" "}
                            <em className="font-serif-10 italic text-white/50">or silently leaking credibility.</em>
                        </h2>
                        <p className="mt-4 text-sm text-white/45 leading-relaxed">
                            Every brand we manage operates on two core pillars: a signature visual design kit in Figma that makes your brand unmistakable, and algorithmic search optimization that captures high-intent attention.
                        </p>
                    </div>

                    {/* Grid Layout of the two pillars */}
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                        {/* Pillar 1: Master Visual Design Kit */}
                        <div className="flex flex-col gap-6">
                            <div className="inline-flex items-center gap-2 border border-white/10 px-3 py-1.5 w-fit bg-white/5">
                                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/50">PILLAR 01</span>
                            </div>
                            <h3 className="text-2xl font-serif text-white">
                                Master Visual Design Kit
                            </h3>
                            <p className="text-[13px] text-white/50 leading-relaxed">
                                A bespoke brand kit built in Figma: typography hierarchies, chromatic color codes, editorial layout rules, and reusable story components so every asset looks unmistakably yours.
                            </p>

                            {/* Dynamic Aspect Ratio 2.27:1 Mini Viewer */}
                            <div className="relative w-full border border-white/10 overflow-hidden bg-white/5" style={{ aspectRatio: "1920 / 912" }}>
                                <Image
                                    src="/deliverables/social-visuals.webp"
                                    alt="Master brand design kit preview"
                                    fill
                                    className="object-cover object-center"
                                    sizes="(max-width: 768px) 100vw, 45vw"
                                    quality={70}
                                />
                            </div>

                            <ul className="flex flex-col gap-2.5">
                                {[
                                    "Curated typography hierarchies and chromatic palette tokens",
                                    "Reusable master components formatted for mobile thumb-stopping",
                                    "Story highlight covers, profile banners, and link-funnel styling",
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

                        {/* Pillar 2: Algorithmic In-App SEO & Pacing */}
                        <div className="flex flex-col gap-6">
                            <div className="inline-flex items-center gap-2 border border-white/10 px-3 py-1.5 w-fit bg-white/5">
                                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/50">PILLAR 02</span>
                            </div>
                            <h3 className="text-2xl font-serif text-white">
                                Algorithmic In-App Search & Pacing
                            </h3>
                            <p className="text-[13px] text-white/50 leading-relaxed">
                                Hook scripting, kinetic typography, and semantic keyword indexing structured so Instagram, LinkedIn, and TikTok search algorithms recommend your brand to prospective clients.
                            </p>

                            {/* Editor Mockup: Syntax-highlighted script timing viewer */}
                            <div className="relative w-full border border-white/10 overflow-hidden bg-[#0d0d11] flex flex-col aspect-[4/3] sm:aspect-[1920/912]">
                                {/* Editor title bar */}
                                <div className="flex items-center gap-3 px-3 py-2 bg-[#07070a] border-b border-white/[0.06] shrink-0">
                                    <div className="flex items-center gap-1.5">
                                        <span className="w-2 h-2 rounded-full bg-[#ef4444]/50" />
                                        <span className="w-2 h-2 rounded-full bg-[#f59e0b]/50" />
                                        <span className="w-2 h-2 rounded-full bg-[#10b981]/50" />
                                    </div>
                                    <div className="flex items-center gap-1 px-3 py-0.5 bg-white/[0.04] border border-white/[0.06] text-white/30 font-mono text-[9px]">
                                        hook-script.json
                                    </div>
                                    {/* Pulsing validated dot */}
                                    <div className="ml-auto flex items-center gap-1.5">
                                        <span className="relative flex h-1.5 w-1.5">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                                        </span>
                                        <span className="font-mono text-[8px] text-emerald-400 uppercase tracking-wider">Pre-Approved</span>
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
                                        <div><span className="text-white/20 ml-2">{"  "}</span><span className="text-[#7dd3fc]">&quot;hook&quot;</span><span className="text-white/30">: </span><span className="text-[#86efac]">&quot;The 3-second mistake costing your practice daily&quot;</span><span className="text-white/30">,</span></div>
                                        <div><span className="text-white/20 ml-2">{"  "}</span><span className="text-[#7dd3fc]">&quot;targetAudience&quot;</span><span className="text-white/30">: </span><span className="text-[#fcd34d]">&quot;High-Intent Inbound&quot;</span><span className="text-white/30">,</span></div>
                                        <div><span className="text-white/20 ml-2">{"  "}</span><span className="text-[#7dd3fc]">&quot;pacingCut&quot;</span><span className="text-white/30">: </span><span className="text-[#67e8f9]">&quot;1.2s narrative cadence&quot;</span><span className="text-white/30">,</span></div>
                                        <div><span className="text-white/20 ml-2">{"  "}</span><span className="text-[#7dd3fc]">&quot;inAppKeywords&quot;</span><span className="text-white/30">: [</span><span className="text-[#86efac]">&quot;authority&quot;</span><span className="text-white/30">, </span><span className="text-[#86efac]">&quot;consultations&quot;</span><span className="text-white/30">],</span></div>
                                        <div><span className="text-white/20 ml-2">{"  "}</span><span className="text-[#7dd3fc]">&quot;callToAction&quot;</span><span className="text-white/30">: </span><span className="text-[#fcd34d]">&quot;Book Discovery Call&quot;</span><span className="text-white/30">,</span></div>
                                        <div><span className="text-white/20 ml-2">{"  "}</span><span className="text-[#7dd3fc]">&quot;assetOwnership&quot;</span><span className="text-white/30">: </span><span className="text-[#a78bfa]">&quot;100% Client Vault&quot;</span></div>
                                        <div><span className="text-white/40">{"}"}</span></div>
                                    </div>
                                </div>

                                {/* Bottom status bar */}
                                <div className="flex items-center justify-between px-3 py-1.5 bg-[#07070a] border-t border-white/[0.04] shrink-0">
                                    <span className="font-mono text-[8px] text-white/20 uppercase tracking-wider">Human Storytelling · In-App Search Index</span>
                                    <div className="flex items-center gap-1.5 border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5">
                                        <span className="font-mono text-[8px] text-emerald-400 uppercase tracking-wider">● 100% Pre-Approved</span>
                                    </div>
                                </div>
                            </div>

                            <ul className="flex flex-col gap-2.5">
                                {[
                                    "Hook timing and pacing cuts calibrated for maximum watch-through",
                                    "In-app semantic keywords matching long-tail prospective search queries",
                                    "Zero raw automated filler: every script is crafted by a human writer",
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

            {/* ── 5. OUR PROCESS: Boxes with Animated Dashed Connectors ── */}
            <Section className="bg-transparent py-16 md:py-24 border-b border-grid/10 relative z-10">
                <Container>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerSlow}>
                        <div className="mb-14">
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

            {/* ── 6. FAQ ── */}
            <StandardFAQSection items={faqItems} withBottomBorder />

            {/* ── 7. CTA: Expanded Section ── */}
            <Section className="bg-transparent py-16 md:py-24 relative z-10">
                <Container>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
                        <div className="border border-grid/15 bg-white overflow-hidden">
                            <div className="grid lg:grid-cols-2">
                                <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-grid/15">
                                    <motion.div variants={fadeInUp}>
                                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tighter mb-6">
                                            Turn market attention into <em className="font-serif-10 italic">authority.</em>
                                        </h2>
                                        <p className="text-ink-muted text-lg leading-relaxed mb-10 max-w-lg">
                                            Tell us about your organization, current channels, and goals. We&apos;ll get back to you within 24 hours with a clear roadmap and brand scope.
                                        </p>
                                        <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                                            <CalButton variant="primary" size="lg" className="w-full sm:w-auto sm:min-w-[220px]">
                                                Book a call
                                            </CalButton>
                                            <Button asChild variant="outline" size="lg">
                                                <Link href="/contact">Get in Touch</Link>
                                            </Button>
                                        </motion.div>
                                    </motion.div>
                                </div>
                                <motion.div variants={scaleIn} className="p-8 md:p-12 lg:p-16 bg-paper/30 flex flex-col justify-center">
                                    <div className="divide-y divide-grid/10">
                                        {[
                                            { label: "Response Time", value: "Within 24 hours" },
                                            { label: "Scoping Call", value: "15 minutes, no commitment" },
                                            { label: "Month 1 Onboarding", value: "Full Foundation & Design Kit" },
                                            { label: "Content Approvals", value: "100% pre-approved by you" },
                                            { label: "Asset Ownership", value: "Permanently yours in Google Drive" },
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
