"use client";

import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { CalButton } from "@/components/ui/CalBooking";
import { motion } from "@/components/ui/motion-lite";
import {
    IconCode,
    IconAward,
    IconBuildingSkyscraper,
    IconMessageChatbot,
    IconGauge,
    IconMapPin,
} from "@tabler/icons-react";

const pillars = [
    {
        title: "Schema & Structured Data",
        desc: "We build FAQ, HowTo, LocalBusiness, and Organization schema into every site so Google's AI knows exactly what you do.",
        Icon: IconCode,
    },
    {
        title: "E-E-A-T Signals",
        desc: "Real staff bios, credentials, outcomes, and original content — the signals AI Overviews use to decide who gets cited.",
        Icon: IconAward,
    },
    {
        title: "Entity & Authority Building",
        desc: "Consistent NAP, Google Business Profile, and third-party mentions that establish Brandbase-built sites as authoritative sources.",
        Icon: IconBuildingSkyscraper,
    },
    {
        title: "Conversational Content",
        desc: "Content structured to answer longer, specific questions that AI Mode users are now asking — not just 2-word keywords.",
        Icon: IconMessageChatbot,
    },
    {
        title: "Core Web Vitals & Speed",
        desc: "Fast, crawlable pages that Google's AI can index and surface in background agent results within hours of going live.",
        Icon: IconGauge,
    },
    {
        title: "Local SEO & Google Maps",
        desc: "Fully built-out Google Business Profiles and local citation networks — a key factor in AI-powered local search answers.",
        Icon: IconMapPin,
    },
];

export function AISearchBanner() {
    return (
        <Section id="ai-search" className="bg-paper py-20 md:py-28 border-t border-grid/10 scroll-mt-24">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    {/* Header */}
                    <div className="mb-14 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                        <div>
                            <Kicker>AI Search Optimization</Kicker>
                            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight text-ink leading-[1.1]">
                                Google Search is now <em className="font-serif-20 italic">AI Search.</em>
                                <br />
                                Is your business ready?
                            </h2>
                            <p className="mt-6 text-sm md:text-base text-ink-muted leading-relaxed">
                                Google Search has transitioned into an AI-first ecosystem powered by AI Overviews and proactive search agents. They don&apos;t just index keywords — they cite and recommend authoritative sources. We build the exact schema, E-E-A-T signals, and entity frameworks required to guarantee your business gets cited.
                            </p>
                        </div>

                        {/* AI Search visualisation image */}
                        <div className="relative w-full border border-grid/15 overflow-hidden" style={{ aspectRatio: "16 / 9" }}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/ai-search.jpg"
                                alt="AI Search Visualisation"
                                className="absolute inset-0 w-full h-full object-cover object-center"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    {/* Pillars Grid — BrandBase design system */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        {pillars.map((pillar, idx) => (
                            <motion.div
                                key={pillar.title}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-40px" }}
                                transition={{ duration: 0.5, delay: idx * 0.05 }}
                                whileHover={{ y: -4, transition: { duration: 0.2, ease: "easeOut" } }}
                                className="mi-card group relative border border-grid/15 bg-white p-6 md:p-8 flex flex-col gap-5 hover:border-primary/25 hover:bg-paper/5 transition-all duration-300 cursor-default"
                                style={{ borderRadius: 0 }}
                            >
                                {/* Top row: icon + number */}
                                <div className="flex items-start justify-between">
                                    <div
                                        className="h-10 w-10 border border-primary/20 bg-primary/5 text-primary grid place-items-center mi-card-icon"
                                        style={{ borderRadius: 0 }}
                                    >
                                        <pillar.Icon className="h-5 w-5" strokeWidth={1.5} />
                                    </div>
                                    <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-ink-muted/40 mt-1">
                                        {String(idx + 1).padStart(2, "0")}
                                    </span>
                                </div>

                                {/* Text */}
                                <div>
                                    <h4 className="font-serif text-lg tracking-tight text-ink group-hover:text-primary transition-colors duration-300">
                                        {pillar.title}
                                    </h4>
                                    <p className="mt-2 text-[12px] text-ink-muted leading-relaxed">
                                        {pillar.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-16 flex justify-center">
                        <CalButton variant="primary" size="lg">
                            Prepare for AI Search
                        </CalButton>
                    </div>
                </motion.div>
            </Container>
        </Section>
    );
}
