import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { Button } from "@/components/ui/Button";
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
        href: "/website-solutions/premium-static",
        pills: ["Zero Upfront", "14-Day Launch", "Fully Managed"],
    },
    {
        Icon: IconSparkles,
        title: "Custom Web Design",
        description: "Bespoke, enterprise-grade builds with custom UI/UX, advanced integrations, and pixel-perfect execution for brands that demand more.",
        href: "/website-solutions/custom-enterprise",
        pills: ["Custom UI/UX", "Booking System", "Scalable Architecture"],
    },
    {
        Icon: IconShoppingCart,
        title: "eCommerce Development",
        description: "Scalable online storefronts on Shopify or custom stacks — optimized for conversions, fast checkout, and seamless inventory management.",
        href: "/website-solutions/ecommerce",
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
        href: "/digital-marketing/management",
        pills: ["Content Strategy", "Community Mgmt", "Monthly Reports"],
    },
    {
        Icon: IconMapPin,
        title: "Local SEO & Google Maps",
        description: "Dominate local search results. We optimize your Google Business Profile, build citations, and drive foot traffic to your door.",
        href: "/digital-marketing/local-seo",
        pills: ["Google Maps", "Citation Building", "Review Strategy"],
    },
];

function ServiceRow({ item, index, isDark }: { item: ServiceItem, index: number, isDark: boolean }) {
    const formattedIndex = String(index + 1).padStart(2, '0');
    // split title to italicize the last word
    const words = item.title.split(' ');
    const lastWord = words.pop();
    const restTitle = words.join(' ');

    return (
        <motion.li 
            variants={fadeInUp}
            className={`flex flex-col md:flex-row md:items-stretch border-t group transition-colors duration-300 overflow-hidden
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
            
            {/* Content after the number */}
            <div className={`flex-1 flex flex-col md:flex-row md:items-start gap-4 md:gap-8 p-6 md:p-8 lg:p-10 transition-colors
                ${isDark ? "hover:bg-premium-800/40" : "hover:bg-ink/[0.02]"}`}>
                <div className="flex-1 min-w-0 md:pr-10 lg:pr-16">
                    <div className="flex items-center gap-3">
                        <div className={`hidden sm:flex h-10 w-10 shrink-0 items-center justify-center border transition-colors
                            ${isDark 
                                ? "border-white/10 bg-white/5 text-white/70 group-hover:bg-white/10 group-hover:text-white group-hover:border-white/30" 
                                : "border-ink/10 bg-ink/5 text-ink-muted group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/30"
                            }`}
                        >
                            <item.Icon className="h-5 w-5" strokeWidth={1.5} />
                        </div>
                        <h3 className={`font-serif text-2xl md:text-3xl lg:text-4xl tracking-tight leading-[1.1] transition-colors
                            ${isDark ? "text-white group-hover:text-white/80" : "text-ink group-hover:text-primary"}`}>
                            {restTitle} <em className={`font-serif-10 italic ${isDark ? "text-white/80" : "text-ink/80"}`}>{lastWord}</em>
                        </h3>
                    </div>
                    
                    <p className={`mt-4 text-[14px] leading-relaxed max-w-lg ${isDark ? "text-white/60" : "text-ink-muted"} sm:pl-14`}>
                        {item.description}
                    </p>
                </div>

            <div className="w-full md:w-48 lg:w-56 shrink-0 flex flex-wrap gap-2 pt-2 md:pt-4 md:justify-end">
                {item.pills.map((pill) => (
                    <span 
                        key={pill} 
                        className={`text-[9px] font-mono tracking-[0.15em] uppercase px-2.5 py-1 transition-colors
                            ${isDark 
                                ? "border border-premium-600 text-white/80 bg-premium-800/30 group-hover:border-white/30 group-hover:text-white" 
                                : "border border-grid/15 text-ink-muted bg-paper/50 group-hover:border-ink/20 group-hover:text-ink/80"
                            }`}
                    >
                        {pill}
                    </span>
                ))}
                </div>
            </div>
        </motion.li>
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

                    {/* ── Pillar 1: Website Solutions (White Box) ── */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-60px" }}
                        variants={stagger}
                        className="bg-white border border-grid/15 overflow-hidden"
                    >
                        <div className="p-8 md:p-12 lg:p-16">
                            <div className="mb-6">
                                <span className="inline-block border border-ink/15 px-3 py-1.5 text-[9px] md:text-[10px] uppercase font-mono tracking-[0.2em] font-medium text-ink-muted">
                                    Pillar 01 — Digital Real Estate
                                </span>
                            </div>

                            <div className="grid md:grid-cols-[1fr_1.4fr] gap-8 lg:gap-12 items-center pb-6">
                                <motion.div variants={fadeInUp} className="flex flex-col items-start gap-8">
                                    <h3 
                                        className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-ink/90"
                                    >
                                        Website<br /><em className="font-serif-20 italic text-ink">Solutions</em>
                                    </h3>
                                    
                                    <Button variant="primary" size="lg" asChild>
                                        <Link href="/website-solutions">
                                            Explore Solutions
                                            <IconArrowUpRight className="w-4 h-4 ml-2" strokeWidth={1.5} />
                                        </Link>
                                    </Button>
                                </motion.div>
                                
                                <motion.div variants={fadeInUp} className="relative aspect-[16/10] w-full overflow-hidden">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img 
                                        src={`/website-sec.png?t=${Date.now()}`}
                                        alt="Website Solutions" 
                                        className="w-full h-full object-contain"
                                    />
                                </motion.div>
                            </div>

                            {/* Services List */}
                            <ul className="mt-0 pt-2 list-none m-0 p-0">
                                {websiteServices.map((service, idx) => (
                                    <ServiceRow key={service.title} item={service} index={idx} isDark={false} />
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* ── Pillar 2: Digital Marketing (White Box) ── */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-60px" }}
                        variants={stagger}
                        className="bg-white border border-grid/15 overflow-hidden"
                    >
                        <div className="p-8 md:p-12 lg:p-16">
                            <div className="mb-6">
                                <span className="inline-block border border-ink/15 px-3 py-1.5 text-[9px] md:text-[10px] uppercase font-mono tracking-[0.2em] font-medium text-ink-muted">
                                    Pillar 02 — The Traffic Engine
                                </span>
                            </div>

                            <div className="grid md:grid-cols-[1.4fr_1fr] gap-8 lg:gap-12 items-center pb-6">
                                <motion.div variants={fadeInUp} className="relative aspect-[16/10] w-full overflow-hidden bg-ink/[0.03] border border-ink/10 flex items-center justify-center order-2 md:order-1">
                                    <span className="text-ink-muted/40 font-mono text-xs uppercase tracking-widest">Coming Soon</span>
                                </motion.div>

                                <motion.div variants={fadeInUp} className="flex flex-col items-start gap-8 order-1 md:order-2">
                                    <h3 
                                        className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-ink/90"
                                    >
                                        Digital<br /><em className="font-serif-20 italic text-ink">Marketing</em>
                                    </h3>
                                    
                                    <Button variant="primary" size="lg" asChild>
                                        <Link href="/digital-marketing">
                                            Explore Growth
                                            <IconArrowUpRight className="w-4 h-4 ml-2" strokeWidth={1.5} />
                                        </Link>
                                    </Button>
                                </motion.div>
                            </div>

                            {/* Services List */}
                            <ul className="mt-0 pt-2 list-none m-0 p-0">
                                {marketingServices.map((service, idx) => (
                                    <ServiceRow key={service.title} item={service} index={idx} isDark={false} />
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </Section>
    );
}
