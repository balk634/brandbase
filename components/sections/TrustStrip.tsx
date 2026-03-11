import { Section } from "@/components/ui/Section";
import { masterConfig } from "@/config/master";
import { cn } from "@/lib/utils";
import type { CSSProperties } from "react";
import { TrustStripIconSlot } from "@/components/sections/TrustStripIconSlot";

const TECHNOLOGIES = masterConfig.sections.techStackStrip;

const MARQUEE_TECHNOLOGIES =
    TECHNOLOGIES.length < 12 ? [...TECHNOLOGIES, ...TECHNOLOGIES] : TECHNOLOGIES;

function getTechAbbreviation(tech: string) {
    const tokens = tech.split(/[\s./_-]+/).filter(Boolean);
    const abbreviation = tokens.map((token) => token[0]).join("");
    return (abbreviation || tech.slice(0, 2)).toUpperCase().slice(0, 2);
}

function TechIcon({ tech }: { tech: string }) {
    return (
        <span className="relative h-6 w-6 grid place-items-center overflow-hidden">
            <span className="font-mono text-[8px] leading-none text-ink-muted">
                {getTechAbbreviation(tech)}
            </span>
            <TrustStripIconSlot
                tech={tech}
                className="absolute inset-0 grid place-items-center text-ink"
                iconClassName="h-5 w-5"
            />
        </span>
    );
}

export function TrustStrip() {
    const { autoScroll, durationSeconds } = masterConfig.ui.motion.trustStrip;

    return (
        <Section className="py-7 md:py-8 bg-transparent overflow-hidden border-b border-grid/15 flex flex-col items-center cursor-default select-none">
            <div className="text-[10px] font-mono tracking-[0.3em] text-ink-muted uppercase mb-4 text-center">
                Powered by enterprise-grade infrastructure
            </div>
            <div className="relative flex w-full">
                <div className="w-full overflow-hidden">
                    <div
                        className={cn("flex w-max whitespace-nowrap", autoScroll && "trust-strip-track")}
                        style={{ "--truststrip-duration": `${durationSeconds}s` } as CSSProperties}
                    >
                        {[0, 1].map((i) => (
                            <div key={i} className="flex shrink-0 items-center" aria-hidden={i > 0}>
                                {MARQUEE_TECHNOLOGIES.map((tech, idx) => (
                                    <div
                                        key={`${i}-${tech}-${idx}`}
                                        className="mx-8 flex items-center gap-3 opacity-55 hover:opacity-100 transition-opacity grayscale cursor-default"
                                    >
                                        <TechIcon tech={tech} />
                                        <span className="font-mono font-semibold text-lg tracking-tight">{tech}</span>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}
