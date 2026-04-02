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
    IconCalendarEvent, IconPalette, IconMessageCircle, IconTrendingUp,
    IconDeviceDesktop,
    IconBolt, IconHeadset, IconClock, IconUsers,
    IconBrandInstagram, IconPhoto, IconPencil, IconRocket, IconChartBar
} from "@tabler/icons-react";
import type { ComponentType } from "react";
import { motion } from "@/components/ui/motion-lite";

export const metadata = buildPageMetadata({
    title: "Social Media Management | BrandBase",
    description:
        "Strategic social media management that aligns content, brand voice, and growth goals across platforms.",
    path: "/digital-marketing/management",
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
        title: "Content Strategy & Calendars", Icon: IconCalendarEvent, bullets: [
            { text: "Monthly grid planning and content buckets tailored to your brand voice.", Icon: IconCalendarEvent },
            { text: "Scheduled mix of Reels, carousels, and static posts for maximum algorithm reach.", Icon: IconBrandInstagram },
        ]
    },
    {
        title: "High-End Visuals & Copy", Icon: IconPalette, bullets: [
            { text: "Custom graphic design that elevates your brand perception.", Icon: IconPhoto },
            { text: "Engaging, hook-driven captions and targeted hashtag research.", Icon: IconPencil },
        ]
    },
    {
        title: "Active Community Management", Icon: IconMessageCircle, bullets: [
            { text: "Active monitoring and replying to direct messages (DMs) and comments.", Icon: IconMessageCircle },
            { text: "Proactive engagement with your target audience to build real relationships.", Icon: IconUsers },
        ]
    },
    {
        title: "Growth Analytics", Icon: IconTrendingUp, bullets: [
            { text: "Detailed monthly reports tracking follower growth, reach, and profile visits.", Icon: IconChartBar },
            { text: "Data-driven adjustments to the content strategy based on what performs best.", Icon: IconTrendingUp },
        ]
    },
];

const fitItems: { text: string; fit: boolean; Icon: ComponentType<{ className?: string }> }[] = [
    { text: "Founders who are burned out trying to run their own Instagram.", fit: true, Icon: IconUsers },
    { text: "Businesses that know they need social media but don't have time to do it right.", fit: true, Icon: IconClock },
    { text: "Brands that want consistent, high-quality content without hiring in-house.", fit: true, Icon: IconPalette },
    { text: "Brands expecting 10,000 fake followers in a week.", fit: false, Icon: IconTrendingUp },
    { text: "Companies looking for viral stunts instead of sustainable community growth.", fit: false, Icon: IconRocket },
];

const whyUsItems: { Icon: ComponentType<{ className?: string }>; title: string; copy: string }[] = [
    { Icon: IconPalette, title: "Design-First Content", copy: "Every post is designed by real graphic designers — not templated Canva jobs. Your feed will look premium." },
    { Icon: IconBolt, title: "Strategy, Not Just Posting", copy: "We don't just fill a calendar. Every piece of content ties back to a documented strategy with clear business goals." },
    { Icon: IconHeadset, title: "Clear Ownership + Weekly Updates", copy: "A consistent delivery team with clear owners and weekly updates, so context never gets lost." },
    { Icon: IconClock, title: "Engagement That Builds Trust", copy: "We actively engage with your audience daily — responding, commenting, and building genuine relationships on your behalf." },
    { Icon: IconUsers, title: "Transparent Monthly Reporting", copy: "Clear reports showing what grew, what worked, and what we're changing next month. No vanity metrics." },
];

const processSteps: { step: string; title: string; copy: string; Icon: ComponentType<{ className?: string }> }[] = [
    { step: "01", title: "Brand Voice & Strategy", copy: "We learn your brand, audience, and competitors. Then we build a documented content strategy with content pillars, posting cadence, and visual direction.", Icon: IconUsers },
    { step: "02", title: "Content Creation", copy: "Our designers and writers produce a full month of content — graphics, Reels, carousels, and captions — all aligned with your brand guidelines.", Icon: IconPhoto },
    { step: "03", title: "Approval & Scheduling", copy: "You review the content calendar, request any changes, and approve. We schedule everything for optimal posting times.", Icon: IconCalendarEvent },
    { step: "04", title: "Publishing & Engagement", copy: "We publish on schedule, monitor performance, respond to DMs and comments, and proactively engage with your target audience daily.", Icon: IconRocket },
];

const faqItems = [
    { q: "Which platforms do you manage?", a: "We specialize in Instagram, Facebook, YouTube, LinkedIn, and X (Twitter). We'll recommend the right platforms based on where your audience actually spends time." },
    { q: "How many posts per month do you create?", a: "It depends on your plan, but most clients get 12–20 posts per month across formats (Reels, carousels, static). Quality always comes before quantity." },
    { q: "Do I get to approve content before it goes live?", a: "Always. You receive the full content calendar for review and approval before anything is published. We don't post without your sign-off." },
    { q: "Can you handle DMs and comments for my brand?", a: "Yes. We monitor and respond to comments and DMs daily, following brand guidelines you approve. We escalate important conversations directly to you." },
    { q: "How do you measure success?", a: "We track follower growth, engagement rate, reach, profile visits, and website clicks. Monthly reports break down what's working and what we're optimizing next." },
];
export default function SocialMediaManagementPage() {
    return (
        <main className="relative text-ink pb-20">
            {/* ── 1. HERO — Split Two-Column ── */}
            <Section className="bg-transparent pt-4 md:pt-8 lg:pt-12 pb-16 md:pb-24 relative z-10 border-b border-grid/10">
                <Container>
                    <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                            <div>
                                <motion.div variants={fadeInLeft}>
                                    <Kicker className="text-[10px] md:text-xs px-4 py-2 bg-primary/5 border-primary/30 text-primary"> SOCIAL MEDIA MANAGEMENT </Kicker>
                                </motion.div>
 <motion.h1 variants={fadeInLeft} className="mt-8 text-3xl sm:text-4xl md:text-6xl font-serif-20 leading-[0.95] tracking-tighter text-ink">
                                    Stop Posting. <span className="text-primary">Start Building a Community.</span>
                                </motion.h1>
                                <motion.p variants={fadeInLeft} className="mt-6 text-sm md:text-base text-ink-muted leading-relaxed max-w-lg">
                                    End-to-end social media management. We handle the strategy, the design, uploads, and the daily engagement so you can run your business.
                                </motion.p>
                                <motion.div variants={fadeInLeft} className="NC-Hero-CTA-Group mt-10 flex flex-wrap gap-4">
                                    {(() => {
                                        const calendlyUrl = masterConfig.contact.calendlyUrl;
                                        const isExternal = calendlyUrl?.startsWith('http');
                                        const href = calendlyUrl || "/contact";
                                        return (
                                            <Button asChild variant="primary" size="lg" className="NC-Hero-CTA-Primary">
                                                <Link href={href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noreferrer" : undefined}>Book a call</Link>
                                            </Button>
                                        );
                                    })()}
                                    <Button asChild variant="outline" size="lg" className="NC-Hero-CTA-Secondary">
                                        <Link href="#deliverables">See Deliverables</Link>
                                    </Button>
                                </motion.div>
                            </div>
                            <motion.div variants={fadeInRight} className="relative order-first lg:order-none">
                                <div className="border border-grid/15 bg-white overflow-hidden">
                                    <div className="relative aspect-square bg-white">
                                        <HeroImage
                                            src={`/${masterConfig.ui.heroImages.socialMediaGrowthManagement}`}
                                            alt="Social media management hero"
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
 <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-serif-10 tracking-tight text-ink max-w-3xl">Everything included in your social media package.</h2>
                        </div>
                        <div className="border border-grid/15 bg-white">
                            {[0, 2].map((startIdx) => (
                                <div key={startIdx} className={`grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-grid/15 ${startIdx > 0 ? "border-t border-grid/15" : ""}`}>
                                    {deliverables.slice(startIdx, startIdx + 2).map((item) => (
                                        <motion.div key={item.title} variants={scaleIn} whileHover={{ y: -2, transition: { duration: 0.18 } }} className="p-7 md:p-8 flex flex-col group cursor-default">
                                            <div className="flex items-center justify-between gap-4 mb-6">
 <h4 className="font-serif text-xl md:text-2xl tracking-tight text-ink">{item.title}</h4>
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
 <h3 className="h3 text-2xl md:text-3xl font-serif tracking-tight text-ink mb-8">The right fit.</h3>
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
                                        <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-ink-muted mb-6">WHY BRANDBASE</div>
 <h3 className="h3 text-2xl md:text-3xl font-serif tracking-tight text-ink mb-8">Why brands trust us with their social.</h3>
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
 <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-serif-10 tracking-tight text-ink max-w-3xl">From strategy to engagement.</h2>
                            <p className="mt-4 text-ink-muted max-w-2xl leading-relaxed">A repeatable monthly cycle that keeps your social presence consistent, professional, and growing.</p>
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
                                        <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-ink-muted mb-6">NEXT STEP</div>
 <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-10 tracking-tighter mb-6">Ready to hand off your social media?</h2>
                                        <p className="text-ink-muted text-lg leading-relaxed mb-10 max-w-lg">Tell us about your brand. We&apos;ll send you a tailored content strategy proposal within 24 hours.</p>
                                        <motion.div variants={fadeInUp} className="NC-CTA-Action-Group mt-10 flex flex-wrap gap-4">
                                            {(() => {
                                                const calendlyUrl = masterConfig.contact.calendlyUrl;
                                                const isExternal = calendlyUrl?.startsWith('http');
                                                const href = calendlyUrl || "/contact";
                                                return (
                                                    <Button asChild variant="primary" size="lg" className="NC-CTA-Action-Primary w-full sm:w-auto sm:min-w-[220px]">
                                                        <Link href={href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noreferrer" : undefined}>Book a call</Link>
                                                    </Button>
                                                );
                                            })()}
                                            <Button asChild variant="outline" size="lg" className="NC-CTA-Action-Secondary">
                                                <Link href="/digital-marketing">View All Services</Link>
                                            </Button>
                                        </motion.div>
                                    </motion.div>
                                </div>
                                <motion.div variants={scaleIn} className="p-8 md:p-12 lg:p-16 bg-paper/30 flex flex-col justify-center">
                                    <div className="divide-y divide-grid/10">
                                        {[
                                            { label: "Response Time", value: "Within 24 hours" },
                                            { label: "Content Starts In", value: "Week 2" },
                                            { label: "Monthly Posts", value: "12 – 20" },
                                            { label: "Reporting", value: "Monthly deep-dive" },
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


