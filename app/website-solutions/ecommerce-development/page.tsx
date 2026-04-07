import Link from "next/link";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { HeroImage } from "@/components/ui/HeroImage";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Kicker } from "@/components/ui/Kicker";
import { masterConfig } from "@/config/master";
import { StandardFAQSection } from "@/components/sections/StandardFAQSection";
import { buildPageMetadata } from "@/lib/seoMetadata";
import {
    IconBuildingStore, IconReceipt2, IconShoppingCart, IconLayoutDashboard, IconDatabase, IconBolt,
    IconFlame, IconMap, IconLayoutGridAdd, IconCodeDots, IconRocket,
    IconTargetArrow, IconHeartHandshake, IconHourglassHigh, IconShieldCheck,
    IconAward, IconBrandFigma, IconDeviceDesktop, IconTrendingUp,
    IconBoxSeam, IconDiscount, IconHeartbeat, IconPaint, IconNetwork
} from "@tabler/icons-react";
import type { ComponentType } from "react";
import { motion } from "@/components/ui/motion-lite";
import { CalButton } from "@/components/ui/CalBooking";

export const metadata = buildPageMetadata({
    title: "Ecommerce Website Development | Conversion-First Online Stores",
    description:
        "Custom ecommerce design and development for high-growth brands. We build conversion-focused stores with seamless checkout, inventory sync, and SEO foundations.",
    path: "/website-solutions/ecommerce-development",
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
        title: "Storefront & Branding", image: "/deliver/ecommerce-store.webp", Icon: IconBuildingStore, bullets: [
            { text: "Complete Logo & Brand Guidelines built from scratch.", Icon: IconAward },
            { text: "Custom e-commerce UI designed for maximum conversions.", Icon: IconBrandFigma },
        ]
    },
    {
        title: "Payment & Checkout", image: "/deliver/ecommerce-payment.webp", Icon: IconReceipt2, bullets: [
            { text: "Stripe, PayPal, or your preferred payment gateway integrated.", Icon: IconReceipt2 },
            { text: "Promotional engine for discounts, coupons, and seasonal campaigns.", Icon: IconDiscount },
        ]
    },
    {
        title: "Analytics & Growth", image: "/deliver/ecommerce-analytics.webp", Icon: IconFlame, bullets: [
            { text: "Full SEO optimization for Google Shopping and AI search.", Icon: IconTrendingUp },
            { text: "Conversion tracking, heatmaps, and monthly performance reports.", Icon: IconMap },
        ]
    },
    {
        title: "Inventory & Shipping", image: "/deliver/ecommerce-inventory.webp", Icon: IconBoxSeam, bullets: [
            { text: "Real-time inventory management synced across all channels.", Icon: IconBoxSeam },
            { text: "Automated shipping calculations and label generation.", Icon: IconRocket },
        ]
    },
    {
        title: "Support & Security", image: "/deliver/ecommerce-security.webp", Icon: IconShieldCheck, bullets: [
            { text: "PCI-compliant security, SSL, and automated backups.", Icon: IconHeartbeat },
            { text: "Ongoing maintenance and 2 free revision rounds included.", Icon: IconPaint },
        ]
    },
    {
        title: "Infrastructure", image: "/deliver/ecommerce-host.webp", Icon: IconNetwork, bullets: [
            { text: "Blazing-fast hosting optimized for e-commerce workloads.", Icon: IconNetwork },
            { text: "CMS for managing products, categories, and blog content.", Icon: IconDatabase },
        ]
    },
];

const fitItems: { text: string; fit: boolean; Icon: ComponentType<{ className?: string }> }[] = [
    { text: "Brands launching their first online store or migrating from a marketplace.", fit: true, Icon: IconBuildingStore },
    { text: "Businesses selling physical or digital products up to 500+ SKUs.", fit: true, Icon: IconBoxSeam },
    { text: "Founders who want full ownership and control over their store.", fit: true, Icon: IconShieldCheck },
    { text: "Businesses needing a basic brochure site with no commerce.", fit: false, Icon: IconDeviceDesktop },
    { text: "Marketplace sellers happy staying on Amazon or Etsy only.", fit: false, Icon: IconLayoutGridAdd },
];

const whyUsItems: { Icon: ComponentType<{ className?: string }>; title: string; copy: string }[] = [
    { Icon: IconTargetArrow, title: "Conversion-First Design", copy: "Every pixel is optimized for purchases — from product pages to checkout flow." },
    { Icon: IconShieldCheck, title: "Enterprise-Grade Security", copy: "PCI compliance, SSL certificates, and automated backups come standard." },
    { Icon: IconHeartHandshake, title: "Dedicated E-Commerce Team", copy: "Specialists in online retail, not generalists who dabble in everything." },
    { Icon: IconHourglassHigh, title: "Fast Launch, Rapid Iteration", copy: "Go live in 6–10 weeks, then continuously optimize based on real sales data." },
    { Icon: IconHeartbeat, title: "Post-Launch Growth Support", copy: "We don't just build stores — we help you grow revenue month over month." },
];

const processSteps: { step: string; title1: string; title2: string; copy: string; Icon: ComponentType<{ className?: string }> }[] = [
    { step: "01", title1: "Commercial", title2: "Discovery", copy: "We map your inventory, margins, and customer journeys before a single line of code is written.", Icon: IconShoppingCart },
    { step: "02", title1: "Design +", title2: "Prototype", copy: "High-fidelity commerce designs focused on mobile-first checkout and brand storytelling.", Icon: IconLayoutDashboard },
    { step: "03", title1: "Platform", title2: "Build", copy: "Clean, lightning-fast development on Shopify, WooCommerce, or custom headless stacks.", Icon: IconDatabase },
    { step: "04", title1: "Growth &", title2: "Handover", copy: "Launch with full training, analytics integration, and a clear roadmap for scaling your sales.", Icon: IconBolt },
];

const faqItems = [
    { q: "What e-commerce platforms do you build on?", a: "We build custom storefronts using Next.js with headless commerce backends like Shopify, Saleor, or Medusa — giving you the speed of a custom site with the reliability of a proven commerce engine." },
    { q: "How many products can my store handle?", a: "There's no hard limit. Our architecture supports stores from 10 products to 10,000+ SKUs with fast page loads and real-time inventory sync." },
    { q: "Can I manage products myself after launch?", a: "Yes. We set up an intuitive CMS dashboard where you can add, edit, and remove products, update pricing, and manage orders without any coding." },
    { q: "Do you handle payment gateway setup?", a: "Yes. We integrate Stripe, PayPal, or your preferred gateway. We handle all the technical configuration including test transactions before going live." },
    { q: "What about ongoing support after launch?", a: "We offer monthly maintenance packages that include security updates, performance monitoring, feature additions, and priority support." },
];
export default function EcommercePage() {
    return (
        <main className="relative text-ink pb-20">
            {/* ── 1. HERO — Split Two-Column ── */}
            <Section className="bg-transparent pt-4 md:pt-8 lg:pt-12 pb-16 md:pb-24 relative z-10 border-b border-grid/10">
                <Container>
                    <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                            <div>
                                <motion.div variants={fadeInLeft}>
                                    <Kicker>E-COMMERCE</Kicker>
                                </motion.div>
 <motion.h1 variants={fadeInLeft} className="mt-8 text-3xl sm:text-4xl md:text-6xl font-serif leading-[0.95] tracking-tighter text-ink">
                                    Online Stores <em className="font-serif-20 italic">That Actually Sell.</em>
                                </motion.h1>
                                <motion.p variants={fadeInLeft} className="mt-6 text-sm md:text-base text-ink-muted leading-relaxed max-w-lg">
                                    Custom-built e-commerce experiences designed for conversions, not just looks. From product pages to checkout, every detail optimized.
                                </motion.p>
                                <motion.div variants={fadeInLeft} className="NC-Hero-CTA-Group mt-10 flex flex-wrap gap-4">
                                    <CalButton variant="primary" size="lg" className="NC-Hero-CTA-Primary">
                                        Book a call
                                    </CalButton>
                                    <Button asChild variant="outline" size="lg" className="NC-Hero-CTA-Secondary">
                                        <Link href="#deliverables">Explore Ecommerce Store Deliverables</Link>
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
                                            src={`/${masterConfig.ui.heroImages.websiteSolutionsEcommerce}`}
                                            alt="Conversion-focused ecommerce store development and technical retail systems"
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
 <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight text-ink max-w-3xl">Everything your store needs to launch and <em className="font-serif-10 italic">grow.</em></h2>
                        </div>
                        <div className="border border-grid/15 bg-white">
                            {[0, 3].map((startIdx) => (
                                <div key={startIdx} className={`grid md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-grid/15 ${startIdx > 0 ? "border-t border-grid/15" : ""}`}>
                                    {deliverables.slice(startIdx, startIdx + 3).map((item) => (
                                        <motion.div key={item.title} variants={scaleIn} whileHover={{ y: -2, transition: { duration: 0.18 } }} className="p-7 md:p-8 flex flex-col group cursor-default">
                                            {/* Image at top */}
                                            <div className="w-full aspect-video mb-6 border border-grid/15 bg-paper/40 flex items-center justify-center overflow-hidden relative">
                                                <OptimizedImage 
                                                    src={item.image} 
                                                    alt={item.title}
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 426px"
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
                                            <div className="h-8 w-8 border border-grid/15 bg-paper/60 grid place-items-center text-ink shrink-0"><IconDeviceDesktop className="h-4 w-4" /></div>
                                            <span className="italic">Not sure? Book a free 15-minute consultation and we&apos;ll tell you honestly.</span>
                                        </div>
                                    </motion.div>
                                </div>
                                <div className="p-7 md:p-10 flex flex-col">
                                    <motion.div variants={fadeInUp}>
                                        <Kicker className="mb-6">WHY BRANDBASE</Kicker>
 <h3 className="h3 text-2xl md:text-3xl font-serif tracking-tight text-ink mb-8">Why brands trust us with their <em className="font-serif-10 italic">store.</em></h3>
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
 <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight text-ink max-w-3xl">From idea to live <em className="font-serif-10 italic">store.</em></h2>
                            <p className="mt-4 text-ink-muted max-w-2xl leading-relaxed">A battle-tested workflow that takes your store from concept to revenue in weeks, not months.</p>
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
 <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tighter mb-6">Ready to start selling <em className="font-serif-10 italic">online?</em></h2>
                                        <p className="text-ink-muted text-lg leading-relaxed mb-10 max-w-lg">Tell us about your products and goals. We&apos;ll send you a detailed proposal within 24 hours.</p>

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
                                            { label: "Typical Timeline", value: "4 – 8 weeks" },
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



