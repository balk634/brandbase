import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import Link from "next/link";
import { motion } from "@/components/ui/motion-lite";
import Image from "next/image";
import type { ComponentType } from "react";
import {
    IconArrowUpRight,
    IconSparkles,
    IconShoppingCart,
    IconReceipt2,
    IconChartBar,
    IconMapPin,
    IconBrandInstagram,
    type IconProps
} from "@tabler/icons-react";

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
};

type ServiceItem = {
    Icon: ComponentType<IconProps>;
    title: string;
    description: string;
    href: string;
    pills: string[];
};

const websiteServices: ServiceItem[] = [
    {
        Icon: IconReceipt2,
        title: "Premium Static Websites",
        description: "Risk-free \"Pay Monthly\" sites with zero upfront cost. Perfect for clinics, salons, and local businesses that need a professional web presence fast.",
        href: "/website-solutions/premium-static-websites",
        pills: ["Zero Upfront", "14-Day Launch", "Fully Managed"],
    },
    {
        Icon: IconSparkles,
        title: "Custom Web Design",
        description: "Bespoke, enterprise-grade builds with custom UI/UX, advanced integrations, and pixel-perfect execution for brands that demand more.",
        href: "/website-solutions/custom-web-design",
        pills: ["Custom UI/UX", "Booking System", "Scalable Architecture"],
    },
    {
        Icon: IconShoppingCart,
        title: "eCommerce Development",
        description: "Scalable online storefronts on Shopify or custom stacks — optimized for conversions, fast checkout, and seamless inventory management.",
        href: "/website-solutions/ecommerce-development",
        pills: ["Shopify & Custom", "Payment Gateways", "Inventory Sync"],
    },
];

const marketingServices: ServiceItem[] = [
    {
        Icon: IconChartBar,
        title: "Performance Marketing",
        description: "Full-funnel Meta and Google ad campaigns built to generate leads, not likes. Every rupee tracked, every decision data-driven.",
        href: "/digital-marketing/performance-marketing",
        pills: ["Meta & Google Ads", "A/B Testing", "ROI Tracking"],
    },
    {
        Icon: IconBrandInstagram,
        title: "Social Media Management",
        description: "End-to-end content strategy with caption writing, community management, premium content creation, and monthly growth reports.",
        href: "/digital-marketing/social-media-management",
        pills: ["Content Strategy", "Community Mgmt", "Monthly Reports"],
    },
    {
        Icon: IconMapPin,
        title: "Local SEO & Google Maps",
        description: "Dominate local search results. We optimize your Google Business Profile, build citations, and drive foot traffic to your door.",
        href: "/digital-marketing/local-seo-google-maps",
        pills: ["Google Maps", "Citation Building", "Review Strategy"],
    },
];

function ServiceRow({ item, index, isDark, startIndex = 1 }: { item: ServiceItem, index: number, isDark: boolean, startIndex?: number }) {
    const formattedIndex = String(startIndex + index).padStart(2, '0');
    // split title to italicize the last word
    const words = item.title.split(' ');
    const lastWord = words.pop();
    const restTitle = words.join(' ');

    return (
        <motion.li
            variants={fadeInUp}
            className={`flex flex-col md:flex-row md:items-stretch border-t last:border-b group transition-colors duration-300 overflow-hidden
                ${isDark
                    ? "border-premium-600"
                    : "border-grid/15"
                } -mx-6 md:-mx-8 lg:-mx-10`}
        >
            {/* Number section with primary background */}
            <div className={`shrink-0 w-full md:w-24 lg:w-28 flex items-center justify-center py-4 md:py-0 font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight transition-colors
                ${isDark
                    ? "bg-white/10 text-white/80"
                    : "bg-primary text-white"
                }`}
            >
                {formattedIndex}
            </div>

            {/* Content area: Three-column split layout */}
            <div className={`flex-1 p-6 md:p-8 lg:p-10 transition-colors
                ${isDark ? "hover:bg-premium-800/40" : "hover:bg-ink/[0.02]"}`}>

                <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-8 items-center h-full">
                    {/* Left Column: Icon Box */}
                    <div className={`hidden md:flex h-16 w-16 items-center justify-center border transition-colors shrink-0
                        ${isDark
                            ? "border-white/10 bg-white/5 text-white/70 group-hover:bg-white/10 group-hover:text-white group-hover:border-white/30"
                            : "border-ink/10 bg-ink/5 text-ink-muted group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/30"
                        }`}
                    >
                        <item.Icon className="h-8 w-8" strokeWidth={1.2} />
                    </div>

                    {/* Middle Column: Content stack */}
                    <div className="flex flex-col h-full justify-center">
                        <div className="flex items-center gap-4">
                            {/* Mobile Icon */}
                            <div className={`md:hidden h-14 w-14 flex items-center justify-center border transition-colors shrink-0
                                ${isDark
                                    ? "border-white/10 bg-white/5 text-white/70"
                                    : "border-ink/10 bg-ink/5 text-ink-muted"
                                }`}
                            >
                                <item.Icon className="h-7 w-7" strokeWidth={1.2} />
                            </div>
                            <h3 className={`font-serif text-2xl md:text-3xl lg:text-4xl tracking-tight leading-[1.1] transition-colors
                                ${isDark ? "text-white group-hover:text-white/80" : "text-ink group-hover:text-primary"}`}>
                                {restTitle} <em className={`font-serif-10 italic ${isDark ? "text-white/80" : "text-ink/80"}`}>{lastWord}</em>
                            </h3>
                        </div>

                        <p className={`mt-4 text-[14px] leading-relaxed max-w-lg ${isDark ? "text-white/60" : "text-ink-muted"}`}>
                            {item.description}
                        </p>

                        <div className="mt-6 flex flex-wrap gap-2">
                            {item.pills.map((pill) => (
                                <span
                                    key={pill}
                                    className={`text-[9px] font-mono tracking-[0.15em] uppercase px-2 py-0.5 transition-colors
                                        ${isDark
                                            ? "border border-white/10 text-white/50 bg-white/5"
                                            : "border border-ink/5 text-ink-muted/70 bg-ink/[0.02]"
                                        }`}
                                >
                                    {pill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: CTA (Vertically Centered & Responsive) */}
                    <div className="flex items-center justify-center md:justify-end mt-8 md:mt-0 w-full md:w-auto">
                        <Link
                            href={item.href}
                            className={`w-full md:w-auto text-[10px] font-mono font-medium tracking-[0.2em] uppercase px-5 py-4 border transition-all flex items-center justify-center gap-2 group/link whitespace-nowrap
                                ${isDark
                                    ? "border-white/10 text-white/60 hover:border-white/30 hover:text-white"
                                    : "border-ink/10 text-ink-muted hover:border-primary hover:text-primary hover:bg-primary/5"
                                }`}
                        >
                            Explore more
                            <IconArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>
        </motion.li>
    );
}
type PillarCardProps = {
    kicker: string;
    titleLine1: string;
    titleLine2: string;
    ctaLabel: string;
    ctaHref: string;
    imageSrc: string;
    imageAlt: string;
    imagePosition: "left" | "right" | "center";
    services: ServiceItem[];
    startIndex: number;
};

function PillarCard({
    kicker,
    titleLine1,
    titleLine2,
    ctaLabel,
    ctaHref,
    imageSrc,
    imageAlt,
    imagePosition,
    services,
    startIndex,
}: PillarCardProps) {
    const isImageLeft = imagePosition === "left";
    const isImageRight = imagePosition === "right";
    const isImageCenter = imagePosition === "center";


    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="bg-white border border-grid/15 overflow-hidden"
        >
            <div className="pt-6 md:pt-8 lg:pt-10 pb-12 md:pb-16 px-8 md:px-12 lg:px-16">
                {/* Hero: two-column grid, text before image on mobile */}
                <div className={`grid gap-12 md:gap-24 items-center mb-8 md:mb-12 ${
                    isImageCenter ? "grid-cols-1 max-w-4xl mx-auto" : "grid-cols-1 md:grid-cols-2"
                }`}>
                    {/* Text Column */}
                    {(() => {
                        let alignmentClasses = "";
                        if (isImageLeft) {
                            alignmentClasses = "items-start text-left md:items-end md:text-right";
                        } else if (isImageRight) {
                            alignmentClasses = "items-start text-left md:items-start md:text-left";
                        } else if (isImageCenter) {
                            alignmentClasses = "items-center text-center max-w-2xl mx-auto";
                        }

                        return (
                            <motion.div
                                variants={fadeInUp}
                                className={`flex flex-col gap-10 md:gap-12 ${alignmentClasses} ${
                                    isImageLeft ? "md:order-last" : isImageRight ? "md:order-first" : ""
                                }`}
                            >
                                <span className="inline-block border border-ink/15 px-3 py-1.5 text-[9px] md:text-[10px] uppercase font-mono tracking-[0.2em] font-medium text-ink-muted">
                                    {kicker}
                                </span>

                                <h3 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-ink/90">
                                    {titleLine1}<br />
                                    <em className="font-serif-20 italic text-ink">{titleLine2}</em>
                                </h3>

                                <Link
                                    href={ctaHref}
                                    className="text-[11px] md:text-[12px] font-mono font-medium tracking-[0.2em] uppercase text-primary hover:text-primary/80 transition-colors flex items-center gap-2 group/cta"
                                >
                                    {ctaLabel}
                                    <IconArrowUpRight className="w-4 h-4 transition-transform group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" strokeWidth={1.5} />
                                </Link>
                            </motion.div>
                        );
                    })()}

                    {/* Image Column (Below text on mobile) */}
                    <motion.div
                        variants={fadeInUp}
                        className={`relative aspect-[16/10] w-full overflow-hidden order-last ${
                            isImageLeft ? "md:order-first" : isImageRight ? "md:order-last" : "mx-auto max-w-3xl"
                        }`}
                    >
                        <Image
                            src={imageSrc}
                            alt={imageAlt}
                            fill
                            className={`object-contain ${
                                isImageLeft ? "object-left" : isImageRight ? "object-right" : "object-center"
                            }`}
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </motion.div>
                </div>

                {/* Services List */}
                <ul className="mt-0 pt-2 list-none m-0 p-0">
                    {services.map((service, idx) => (
                        <ServiceRow
                            key={service.title}
                            item={service}
                            index={idx}
                            isDark={false}
                            startIndex={startIndex}
                        />
                    ))}
                </ul>
            </div>
        </motion.div>
    );
}

export function CorePillars() {
    return (
        <Section id="services" className="bg-paper py-20 overflow-hidden">
            <Container>
                <div className="max-w-[1280px] mx-auto flex flex-col gap-12 lg:gap-16">
                    {/* Header connecting both */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-60px" }}
                        variants={stagger}
                        className="text-center md:text-left flex flex-col items-center md:items-start"
                    >
                        <Kicker>THE BRANDBASE SOLUTION</Kicker>
                        <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight text-ink max-w-2xl">
                            Two Pillars. One Outcome: Outsized <em className="font-serif-10 italic">Growth.</em>
                        </h2>
                    </motion.div>

                    {/* ── Pillar 1: Website Solutions ── */}
                    <PillarCard
                        kicker="Pillar 01 — Digital Real Estate"
                        titleLine1="Website"
                        titleLine2="Solutions"
                        ctaLabel="Explore Solutions"
                        ctaHref="/website-solutions"
                        imageSrc="/home-website.webp"
                        imageAlt="Website Solutions"
                        imagePosition="right"
                        services={websiteServices}
                        startIndex={1}
                    />

                    {/* ── Pillar 2: Digital Marketing ── */}
                    <PillarCard
                        kicker="Pillar 02 — The Traffic Engine"
                        titleLine1="Digital"
                        titleLine2="Marketing"
                        ctaLabel="Explore Growth"
                        ctaHref="/digital-marketing"
                        imageSrc="/home-social.webp"
                        imageAlt="Social media marketing"
                        imagePosition="left"
                        services={marketingServices}
                        startIndex={4}
                    />
                </div>
            </Container>
        </Section>
    );
}
