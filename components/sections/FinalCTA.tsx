import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Kicker } from "@/components/ui/Kicker";
import { masterConfig } from "@/config/master";
import { CalButton } from "@/components/ui/CalBooking";
import { IconArrowRight, IconClock, IconSparkles } from "@tabler/icons-react";
import Link from "next/link";

export function FinalCTA() {
    return (
        <Section id="final-cta" className="bg-transparent border-b-0">
            <Container>
                <div className="border border-grid/15 bg-white overflow-hidden">
                    <div className="p-8 md:p-12 lg:p-14 flex flex-col items-center text-center">
                        <Kicker>READY TO START?</Kicker>
                        <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-serif tracking-tighter text-ink">
                            Get in Touch.<br />Get a clear website <em className="font-serif-10 italic">plan.</em>
                        </h2>
                        <p className="mt-4 text-ink-muted leading-relaxed max-w-2xl">
                            We&apos;ll review your current setup, spot the biggest conversion wins, and outline the right website scope to build first, then scale with marketing.
                        </p>

                        <div className="mt-8 w-full max-w-2xl flex flex-col sm:flex-row gap-4 justify-center">
                            <CalButton variant="primary" size="lg" className="sm:min-w-[200px]">
                                Start a Project
                            </CalButton>
                        </div>

                        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-ink-muted">
                            <div className="flex items-center gap-2">
                                <IconClock className="h-4 w-4 text-primary" strokeWidth={1.5} />
                                <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Response within 24h</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <IconSparkles className="h-4 w-4 text-primary" strokeWidth={1.5} />
                                <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Website-first roadmap</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
