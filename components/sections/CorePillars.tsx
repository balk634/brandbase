import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { motion } from "@/components/ui/motion-lite";
import type { ComponentType } from "react";
import {
    IconWorld, IconSpeakerphone, IconArrowUpRight, IconSparkles, IconShoppingCart,
    IconReceipt2, IconChartBar, IconMapPin, IconBrandInstagram, type IconProps
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
        description: "End-to-end content strategy with caption writing, community management, Premium content creation, and monthly growth reports.",
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

function ServiceCard({ item }: { item: ServiceItem }) {
    return (
        <motion.div variants={fadeInUp}>
            <Link
                href={item.href}
                className="block p-4 border border-transparent hover:border-grid/15 hover:bg-paper/40 transition-all duration-300 group -mx-4"
            >
                <div className="flex items-start gap-4">
                    <div className="h-9 w-9 shrink-0 border border-primary/20 bg-primary/5 grid place-items-center text-primary group-hover:bg-primary/10 group-hover:border-primary/35 transition-colors duration-300">
                        <item.Icon className="h-4 w-4" strokeWidth={1.5} />
                    </div>
                    <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                            <h4 className="font-sans font-semibold text-[15px] tracking-tight text-ink group-hover:text-primary transition-colors">
                                {item.title}
                            </h4>
                            <IconArrowUpRight className="h-3.5 w-3.5 text-ink-muted opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                        </div>
                        <p className="mt-1 text-[13px] text-ink-muted leading-relaxed">
                            {item.description}
                        </p>
                        <div className="mt-2.5 flex flex-wrap gap-1.5">
                            {item.pills.map((pill) => (
                                <span key={pill} className="px-2 py-0.5 border border-grid/15 bg-paper/50 font-mono text-[9px] uppercase tracking-[0.15em] text-ink-muted">
                                    {pill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}

export function CorePillars() {
    return (
        <Section id="services" className="bg-transparent">
            <Container>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={stagger}
                    className="space-y-14"
                >
                    <motion.div variants={fadeInUp} className="max-w-3xl">
                        <Kicker>THE NODECRAFT SOLUTION</Kicker>
                        <h2 className="mt-6 text-2xl sm:text-3xl md:text-5xl font-sans font-bold tracking-tight text-ink">
                            Two Pillars. One Outcome: Outsized Growth.
                        </h2>
                        <p className="mt-4 text-ink-muted text-sm max-w-2xl leading-relaxed">
                            We don&apos;t sell isolated services. We build integrated systems where your website and marketing engine work together to compound results.
                        </p>
                    </motion.div>

                    <motion.div variants={stagger} className="grid lg:grid-cols-2 gap-0 border border-grid/15 bg-white overflow-hidden">
                        {/* ── Pillar 1: Website Solutions ── */}
                        <motion.div
                            variants={fadeInUp}
                            className="p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-grid/15 flex flex-col"
                        >
                            <div className="flex items-center gap-4 mb-2">
                                <div className="h-12 w-12 border border-primary/25 bg-primary/5 grid place-items-center text-primary">
                                    <IconWorld className="h-6 w-6" strokeWidth={1.5} />
                                </div>
                                <div>
                                    <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-ink-muted block">
                                        Pillar 01 — Digital Real Estate
                                    </span>
                                    <h3 className="font-sans font-bold text-2xl tracking-tight text-ink mt-1">
                                        Website Solutions
                                    </h3>
                                </div>
                            </div>

                            <p className="text-sm text-ink-muted leading-relaxed mb-6 mt-4">
                                From risk-free &ldquo;Pay Monthly&rdquo; starter sites to complex Custom Enterprise builds and E-Commerce storefronts. Fast, secure, and SEO-optimized.
                            </p>

                            <div className="border-t border-grid/15 pt-5 mb-2">
                                <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-ink-muted">
                                    What we build
                                </span>
                            </div>

                            <motion.div variants={stagger} className="space-y-0 flex-1">
                                {websiteServices.map((s) => (
                                    <ServiceCard key={s.title} item={s} />
                                ))}
                            </motion.div>

                            <div className="mt-6 pt-5 border-t border-grid/15">
                                <Button asChild variant="primary" size="sm" className="gap-2">
                                    <Link href="/website-solutions">
                                        Explore Website Solutions
                                        <IconArrowUpRight className="h-3.5 w-3.5" />
                                    </Link>
                                </Button>
                            </div>
                        </motion.div>

                        {/* ── Pillar 2: Digital Marketing ── */}
                        <motion.div
                            variants={fadeInUp}
                            className="p-8 md:p-10 flex flex-col"
                        >
                            <div className="flex items-center gap-4 mb-2">
                                <div className="h-12 w-12 border border-primary/25 bg-primary/5 grid place-items-center text-primary">
                                    <IconSpeakerphone className="h-6 w-6" strokeWidth={1.5} />
                                </div>
                                <div>
                                    <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-ink-muted block">
                                        Pillar 02 — The Traffic Engine
                                    </span>
                                    <h3 className="font-sans font-bold text-2xl tracking-tight text-ink mt-1">
                                        Digital Marketing
                                    </h3>
                                </div>
                            </div>

                            <p className="text-sm text-ink-muted leading-relaxed mb-6 mt-4">
                                We don&apos;t optimize for &ldquo;likes.&rdquo; We run high-ROI campaigns, authentic social content, and hyper-local SEO to dominate your market.
                            </p>

                            <div className="border-t border-grid/15 pt-5 mb-2">
                                <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-ink-muted">
                                    What we run
                                </span>
                            </div>

                            <motion.div variants={stagger} className="space-y-0 flex-1">
                                {marketingServices.map((s) => (
                                    <ServiceCard key={s.title} item={s} />
                                ))}
                            </motion.div>

                            <div className="mt-6 pt-5 border-t border-grid/15">
                                <Button asChild variant="primary" size="sm" className="gap-2">
                                    <Link href="/digital-marketing">
                                        Explore Growth Solutions
                                        <IconArrowUpRight className="h-3.5 w-3.5" />
                                    </Link>
                                </Button>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </Container>
        </Section>
    );
}
