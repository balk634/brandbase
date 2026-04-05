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
    IconTargetArrow, IconBolt, IconMail, IconCloud, IconHeartHandshake, IconPalette,

    IconCurrencyDollar, IconShieldCheck, IconDeviceLaptop, IconHeadset,
    IconAward, IconBrandFigma, IconDeviceDesktop, IconChartDots, IconChartBar,
    IconMailForward, IconMailOpened, IconServer, IconCreditCard, IconBug, IconPaint,
    IconArrowsMaximize, IconColorSwatch, IconUsers, IconArrowsSplit, IconDatabase,

} from "@tabler/icons-react";
import type { ComponentType } from "react";
import { motion } from "@/components/ui/motion-lite";
import { CalButton } from "@/components/ui/CalBooking";

export const metadata = buildPageMetadata({
    title: "Premium Static Websites | BrandBase",
    description:
        "Fast, premium static websites built for conversion with SEO foundations, clean tracking, and ongoing support options.",
    path: "/website-solutions/premium-static-websites",
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
        title: "Identity & Discovery", image: "/deliver/static-discovery.webp", Icon: IconTargetArrow, bullets: [
            { text: "Professional Logo & Brand Guidelines included.", Icon: IconAward },
            { text: "Modern, static website design tailored to your industry.", Icon: IconBrandFigma },
        ]
    },
    {
        title: "Performance & SEO", image: "/deliver/static-performance.webp", Icon: IconBolt, bullets: [
            { text: "Lightning-fast load times optimized for Google and AI search.", Icon: IconChartDots },
            { text: "Monthly analytics updates so you know exactly who is visiting.", Icon: IconChartBar },
        ]
    },
    {
        title: "Marketing & Engagement", image: "/deliver/static-marketing.webp", Icon: IconMail, bullets: [
            { text: "Integrated newsletter and email capture forms.", Icon: IconMailOpened },
            { text: "Automated email forwarding to connect with your clients.", Icon: IconMailForward },
        ]
    },
    {
        title: "Tech & Hosting", image: "/deliver/static-hosting.webp", Icon: IconCloud, bullets: [
            { text: "Free hosting setup and professional business email (domain billed separately).", Icon: IconServer },
            { text: "Pay flexibly with simple monthly or yearly subscription options.", Icon: IconCreditCard },
        ]
    },
    {
        title: "Peace of Mind", image: "/deliver/static-peace.webp", Icon: IconHeartHandshake, bullets: [
            { text: "Complete website support, security patches, and future maintenance.", Icon: IconBug },
            { text: "2 free revisions to get the look and feel exactly right before launch.", Icon: IconPaint },
        ]
    },
    {
        title: "Design & Branding", image: "/deliver/static-design.webp", Icon: IconPalette, bullets: [
            { text: "Fully responsive design optimized for mobile, tablet, and desktop.", Icon: IconArrowsMaximize },
            { text: "On-brand color palette, typography, and visual system tuned to your audience.", Icon: IconColorSwatch },
        ]
    },
];

const fitItems: { text: string; fit: boolean; Icon: ComponentType<{ className?: string }> }[] = [
    { text: "Local service businesses, consultants, and new startups.", fit: true, Icon: IconTargetArrow },
    { text: "Founders who want to preserve cash flow and avoid technical headaches.", fit: true, Icon: IconCreditCard },
    { text: "Solo professionals who need a polished online presence fast.", fit: true, Icon: IconDeviceLaptop },
    { text: "Massive stores with thousands of products.", fit: false, Icon: IconChartBar },
    { text: "Businesses needing complex custom web applications.", fit: false, Icon: IconServer },
];

const whyUsItems: { Icon: ComponentType<{ className?: string }>; title: string; copy: string }[] = [
    { Icon: IconCurrencyDollar, title: "Zero Upfront Risk", copy: "No massive invoices before you see results. Pay a simple monthly fee and invest your capital elsewhere." },
    { Icon: IconShieldCheck, title: "We Handle Everything Technical", copy: "Hosting, SSL, DNS, security patches, speed optimisation, you never have to touch a dashboard." },
    { Icon: IconDeviceLaptop, title: "Built Fast, Not Cheap", copy: "We use the same premium code and design standards as our custom builds — just scoped for speed." },
    { Icon: IconHeadset, title: "Real Support, Not a Ticket Queue", copy: "Need a text change or a new photo? Reach out directly, usually handled within 24 hours." },
    { Icon: IconUsers, title: "Dedicated Team, Not Outsourced", copy: "Your project stays in-house from start to finish. No freelancers, no hand-offs, no surprises." },
];

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

const faqItems = [
    { q: "What is the minimum contract length?", a: "No long-term contracts. Pay month-to-month or save with an annual plan. Cancel anytime. If you cancel within the first 12 months, you will not own the source code." },
    { q: "Can I switch to a one-time payment later?", a: "Yes. After 12 months on the subscription, you can buy out the code at a discounted rate and take full ownership of everything." },
    { q: "How fast will my website load?", a: "Extremely fast. We build static sites that score 95+ on Google PageSpeed. No bloated WordPress databases slowing things down." },
    { q: "Do I own my domain?", a: "Yes. We either help you purchase it in your name or manage it for you. You are the sole owner of the domain at all times." },
    { q: "How long does it take to go live?", a: "Under 14 business days from kickoff to launch, depending on how quickly you provide your logo, copy, and images." },
];
export default function PremiumStaticPage() {
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
                                    <Kicker className="text-[10px] md:text-xs px-4 py-2 bg-primary/5 border-primary/30 text-primary"> PREMIUM STATIC </Kicker>
                                </motion.div>
                                <motion.h1 variants={fadeInLeft} className="mt-8 text-3xl sm:text-4xl md:text-6xl font-serif leading-[0.95] tracking-tighter text-ink">
                                    Premium Websites. <em className="font-serif-20 italic">Zero Upfront Cost.</em>
                                </motion.h1>
                                <motion.p variants={fadeInLeft} className="mt-6 text-sm md:text-base text-ink-muted leading-relaxed max-w-lg">
                                    Stop paying thousands upfront. Get a high-performing, beautifully designed static website with a simple monthly or yearly plan.
                                </motion.p>
                                <motion.div variants={fadeInLeft} className="mt-10 flex flex-wrap gap-4">
                                    <CalButton variant="primary" size="lg">
                                        Book a call
                                    </CalButton>
                                    <Button asChild variant="outline" size="lg">
                                        <Link href="#deliverables">See deliverables</Link>
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
                                            src={`/${masterConfig.ui.heroImages.websiteSolutionsPremiumStatic}`}
                                            alt="Premium static website hero"
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
                        <div className="mb-16 md:mb-20 text-left">
                            <Kicker>DELIVERABLES</Kicker>
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

            {/* ── 3. IS THIS FOR YOU? + WHY US — Split Section ── */}
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
                                                <div className={`h-8 w-8 grid place-items-center shrink-0 transition-transform duration-200 ${item.fit ? "border border-green-800/20 bg-green-800/5 text-green-800" : "border border-red-500/25 bg-red-500/10 text-red-600"}`}>
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
                                        <Kicker className="mb-6">WHY BRANDBASE</Kicker>
 <h3 className="h3 text-2xl md:text-3xl font-serif tracking-tight text-ink mb-8">Why small businesses love this <em className="font-serif-10 italic">model.</em></h3>
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

            <Section className="bg-transparent py-16 md:py-24 border-b border-grid/10 relative z-10">
                <Container>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerSlow}>
                        <div className="mb-14">
                            <Kicker>DELIVERY MODEL</Kicker>
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

            {/* ── 6. CTA — Expanded Section ── */}
            <Section className="bg-transparent py-16 md:py-24 relative z-10">
                <Container>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
                        <div className="border border-grid/15 bg-white overflow-hidden">
                            <div className="grid lg:grid-cols-2">
                                <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-grid/15">
                                    <motion.div variants={fadeInUp}>
                                        <Kicker className="mb-6">NEXT STEP</Kicker>
 <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tighter mb-6">
                                            Get online without the upfront <em className="font-serif-10 italic">bill.</em>
                                        </h2>
                                        <p className="text-ink-muted text-lg leading-relaxed mb-10 max-w-lg">
                                            Tell us about your business. We&apos;ll send you a clear monthly quote within 24 hours.
                                        </p>
                                        <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                                            <CalButton variant="primary" size="lg" className="w-full sm:w-auto sm:min-w-[220px]">
                                                Book a call
                                            </CalButton>
                                            <Button asChild variant="outline" size="lg">
                                                <Link href="/website-solutions">View all services</Link>
                                            </Button>
                                        </motion.div>
                                    </motion.div>
                                </div>
                                <motion.div variants={scaleIn} className="p-8 md:p-12 lg:p-16 bg-paper/30 flex flex-col justify-center">
                                    <div className="divide-y divide-grid/10">
                                        {[
                                            { label: "Response Time", value: "Within 24 hours" },
                                            { label: "Typical Timeline", value: "Under 14 days" },
                                            { label: "Revisions Included", value: "2 rounds free" },
                                            { label: "Monthly Subscription", value: "Cancel anytime" },
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



