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
import { BoxPattern } from "@/components/ui/BoxPattern";
import {
    IconCrown, IconFlame, IconTimeline, IconNetwork, IconShieldCheck, IconMailFast,
    IconBuildingSkyscraper, IconLayoutGridAdd, IconCodeDots, IconRocket,
    IconMap, IconTargetArrow, IconHeartHandshake, IconHourglassHigh,
    IconAward, IconBrandFigma, IconDeviceDesktop, IconTrendingUp,
    IconCalendarEvent, IconMailOpened, IconDatabase, IconMailForward,
    IconHeartbeat, IconPaint, IconForms, IconAddressBook
} from "@tabler/icons-react";
import type { ComponentType } from "react";
import { motion } from "@/components/ui/motion-lite";
import { CalButton } from "@/components/ui/CalBooking";

export const metadata = buildPageMetadata({
    title: "Custom Enterprise Websites | BrandBase",
    description:
        "Custom enterprise website design and development for complex requirements, integrations, and long-term growth.",
    path: "/website-solutions/custom-web-design",
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
        title: "Brand & Design", image: "/deliver/web-brand.webp", Icon: IconCrown, bullets: [
            { text: "Complete Logo & Brand Guidelines created from scratch.", Icon: IconAward },
            { text: "Custom-made design tailored specifically to your business goals.", Icon: IconBrandFigma },
        ]
    },
    {
        title: "Traffic & Analytics", image: "/deliver/web-traffic.webp", Icon: IconFlame, bullets: [
            { text: "Fully optimized for Google SEO and emerging AI search engines.", Icon: IconTrendingUp },
            { text: "Weekly and monthly analytics reports delivered to your inbox.", Icon: IconMap },
        ]
    },
    {
        title: "Leads & Bookings", image: "/deliver/web-leads.webp", Icon: IconTimeline, bullets: [
            { text: "Integrated booking engine for seamless client appointments.", Icon: IconCalendarEvent },
            { text: "Newsletter and email marketing setup to nurture your leads.", Icon: IconMailOpened },
        ]
    },
    {
        title: "Infrastructure & CMS", image: "/deliver/web-cms.webp", Icon: IconNetwork, bullets: [
            { text: "Dynamic CMS allowing you to easily update text and images.", Icon: IconDatabase },
            { text: "Free hosting setup and branded business email (domain billed separately).", Icon: IconMailForward },
        ]
    },
    {
        title: "Support & Guarantee", image: "/deliver/web-support.webp", Icon: IconShieldCheck, bullets: [
            { text: "Ongoing website support and technical maintenance.", Icon: IconHeartbeat },
            { text: "2 free design revisions included to ensure perfect alignment.", Icon: IconPaint },
        ]
    },
    {
        title: "Email & Marketing", image: "/deliver/web-marketing.webp", Icon: IconMailFast, bullets: [
            { text: "Automated email forwarding and contact forms wired from day one.", Icon: IconForms },
            { text: "CRM-ready lead capture to grow your pipeline on autopilot.", Icon: IconAddressBook },
        ]
    },
];

const fitItems: { text: string; fit: boolean; Icon: ComponentType<{ className?: string }> }[] = [
    { text: "Established businesses, clinics, and agencies scaling their operations.", fit: true, Icon: IconBuildingSkyscraper },
    { text: "Teams that need specific features like custom booking or dynamic portfolios.", fit: true, Icon: IconCodeDots },
    { text: "Brands looking for a long-term digital partner, not a one-off contractor.", fit: true, Icon: IconHeartHandshake },
    { text: "People looking for a cheap $100 weekend template.", fit: false, Icon: IconLayoutGridAdd },
    { text: "Projects with no defined goals or timeline.", fit: false, Icon: IconHourglassHigh },
];

const whyUsItems: { Icon: ComponentType<{ className?: string }>; title: string; copy: string }[] = [
    { Icon: IconMap, title: "Strategy-Led, Not Template-Led", copy: "Every project starts with understanding your market, competitors, and conversion goals." },
    { Icon: IconTargetArrow, title: "Built for Lead Generation", copy: "We wire in booking engines, newsletter capture, and CRM integrations from the start." },
    { Icon: IconHeartHandshake, title: "One Team, Zero Middlemen", copy: "You work directly with the designers, developers, and strategists who build your product." },
    { Icon: IconHourglassHigh, title: "Launch-Ready in Weeks", copy: "Our proven 4-step process eliminates scope creep. Most custom builds ship within 4–8 weeks." },
    { Icon: IconHeartbeat, title: "Ongoing Partnership", copy: "We don't disappear after launch. Monthly maintenance, support, and growth consulting included." },
];

const processSteps: { step: string; title: string; copy: string; Icon: ComponentType<{ className?: string }> }[] = [
    { step: "01", title: "Discovery & Branding", copy: "We learn your business inside out — competitors, audience, and goals. Then we build your logo, brand guidelines, and visual identity from scratch.", Icon: IconMap },
    { step: "02", title: "Custom UI Design", copy: "High-fidelity mockups tailored to your brand. You review every screen before a single line of code is written.", Icon: IconLayoutGridAdd },
    { step: "03", title: "Development & Integrations", copy: "We code the site, wire up the CMS, booking engine, analytics, and email marketing tools. Everything tested across devices.", Icon: IconCodeDots },
    { step: "04", title: "Launch & Training", copy: "We deploy to production, set up hosting and email, then walk your team through how to manage the site independently.", Icon: IconRocket },
];

const faqItems = [
    { q: "How long does a custom website take to build?", a: "Typically 14 to 28 days from kickoff to launch. Timeline depends on page count, integration complexity, and how quickly you provide feedback during design reviews." },
    { q: "Do I need to provide my own copy and images?", a: "We can work with what you have. If you need professional copywriting or photography, we offer that as an add-on or can recommend trusted partners." },
    { q: "Will I be able to edit my website after launch?", a: "Yes. We set up a dynamic CMS tailored to your needs so your team can update text, images, and blog posts without touching any code." },
    { q: "What happens if I need changes after the 2 free revisions?", a: "Additional revisions are billed at our standard hourly rate. Most clients get it right within the 2 included rounds." },
    { q: "Do you offer ongoing support after the site goes live?", a: "Yes. We offer monthly maintenance packages covering security patches, performance updates, backups, and priority support." },
];
export default function CustomEnterprisePage() {
    return (
        <main className="relative text-ink pb-20">
            {/* ── 1. HERO — Split Two-Column ── */}
            <Section className="bg-transparent pt-4 md:pt-8 lg:pt-12 pb-16 md:pb-24 relative z-10 border-b border-grid/10">
                <Container>
                    <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                            <div>
                                <motion.div variants={fadeInLeft}>
                                    <Kicker className="text-[10px] md:text-xs px-4 py-2 bg-primary/5 border-primary/30 text-primary"> CUSTOM WEBSITES </Kicker>
                                </motion.div>
 <motion.h1 variants={fadeInLeft} className="mt-8 text-3xl sm:text-4xl md:text-6xl font-serif leading-[0.95] tracking-tighter text-ink">
                                    Custom Websites <em className="font-serif-20 italic">Built to Scale.</em>
                                </motion.h1>
                                <motion.p variants={fadeInLeft} className="mt-6 text-sm md:text-base text-ink-muted leading-relaxed max-w-lg">
                                    Stop fighting with templates. Get a custom-designed website with built-in booking, SEO, and lead generation.
                                </motion.p>
                                <motion.div variants={fadeInLeft} className="NC-Hero-CTA-Group mt-10 flex flex-wrap gap-4">
                                    <CalButton variant="primary" size="lg" className="NC-Hero-CTA-Primary">
                                        Book a call
                                    </CalButton>
                                    <Button asChild variant="outline" size="lg" className="NC-Hero-CTA-Secondary">
                                        <Link href="#deliverables">See deliverables</Link>
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
                                            src={`/${masterConfig.ui.heroImages.websiteSolutionsCustomEnterprise}`}
                                            alt="Custom enterprise website hero"
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
 <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight text-ink max-w-3xl">Everything included in your custom <em className="font-serif-10 italic">build.</em></h2>
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
                                                <h4 className="font-serif text-xl md:text-2xl tracking-tight text-ink">{item.title}</h4>
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
                                            <span className="italic">Not sure? Book a free 15-minute consultation and we&apos;ll tell you honestly.</span>
                                        </div>
                                    </motion.div>
                                </div>
                                <div className="p-7 md:p-10 flex flex-col">
                                    <motion.div variants={fadeInUp}>
                                        <Kicker className="mb-6">WHY BRANDBASE</Kicker>
 <h3 className="h3 text-2xl md:text-3xl font-serif tracking-tight text-ink mb-8">Why growing businesses choose <em className="font-serif-10 italic">us.</em></h3>
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

            {/* ── 4. OUR PROCESS — Boxes with Animated Dashed Connectors ── */}
            <Section className="bg-transparent border-b border-grid/10 py-16 md:py-24 relative z-10">
                <Container>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerSlow}>
                        <div className="mb-16">
                            <Kicker>OUR PROCESS</Kicker>
 <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight text-ink max-w-3xl">From brief to live <em className="font-serif-10 italic">website.</em></h2>
                            <p className="mt-4 text-ink-muted max-w-2xl leading-relaxed">A transparent, 4-step workflow designed to eliminate surprises and deliver on time, every time.</p>
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
 <h3 className="font-serif text-lg tracking-tight text-ink mb-3">
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
                                        <Kicker className="mb-6">NEXT STEP</Kicker>
 <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tighter mb-6">Ready to build something that actually <em className="font-serif-10 italic">works?</em></h2>
                                        <p className="text-ink-muted text-lg leading-relaxed mb-10 max-w-lg">Tell us about your project. We&apos;ll get back to you within 24 hours with a clear scope and honest quote.</p>
                                        <motion.div variants={fadeInUp} className="NC-CTA-Action-Group mt-10 flex flex-wrap gap-4">
                                            <CalButton variant="primary" size="lg" className="NC-CTA-Action-Primary w-full sm:w-auto sm:min-w-[220px]">
                                                Book a call
                                            </CalButton>
                                            <Button asChild variant="outline" size="lg" className="NC-CTA-Action-Secondary">
                                                <Link href="/website-solutions">View all services</Link>
                                            </Button>
                                        </motion.div>
                                    </motion.div>
                                </div>
                                <motion.div variants={scaleIn} className="p-8 md:p-12 lg:p-16 bg-paper/30 flex flex-col justify-center">
                                    <div className="divide-y divide-grid/10">
                                        {[
                                            { label: "Response Time", value: "Within 24 hours" },
                                            { label: "Typical Timeline", value: "14 to 28 days" },
                                            { label: "Revisions Included", value: "2 rounds free" },
                                            { label: "Post-Launch Support", value: "Monthly plans available" },
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



