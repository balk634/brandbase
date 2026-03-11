import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";

import type { ComponentType } from "react";
import {
    IconUsers,
    IconEye,
    IconTrendingUp,
    IconUserOff,
    IconUserCheck,
    IconEyeOff,
    IconSparkles,
    IconFlame,
    IconTargetArrow,
    type IconProps,
} from "@tabler/icons-react";

type Pain = {
    label: string;
    title: string;
    copy: string;
    Icon: ComponentType<IconProps>;
    bad: string;
    badIcon: ComponentType<IconProps>;
    good: string;
    goodIcon: ComponentType<IconProps>;
};

const pains: Pain[] = [
    {
        label: "SCATTERED VENDORS",
        title: "Five vendors. Zero alignment.",
        copy: "You\u2019ve got one freelancer for brand, another for web, and a third for ads. None of them talk to each other. The result: a fragmented identity that confuses your market.",
        Icon: IconUsers,
        bad: "Mismatched brand \u2192 customers don\u2019t trust you",
        badIcon: IconUserOff,
        good: "One partner \u2192 consistent brand across every touchpoint",
        goodIcon: IconUserCheck,
    },
    {
        label: "INVISIBLE BRAND",
        title: "Your brand blends in instead of standing out.",
        copy: "In a market of lookalike competitors, your brand is your moat. Without a distinct identity and strategic positioning, you\u2019re competing on price alone.",
        Icon: IconEye,
        bad: "Generic look \u2192 lost in the noise",
        badIcon: IconEyeOff,
        good: "Distinct brand \u2192 recognized and remembered",
        goodIcon: IconSparkles,
    },
    {
        label: "NO GROWTH ENGINE",
        title: "Traffic without conversion is just noise.",
        copy: "You\u2019re spending on ads and posting on social, but nothing converts. Without proper funnels, landing pages, and CRO, you\u2019re lighting money on fire.",
        Icon: IconTrendingUp,
        bad: "Ads running \u2192 no measurable ROI",
        badIcon: IconFlame,
        good: "Optimized funnel \u2192 every dollar tracked",
        goodIcon: IconTargetArrow,
    },
];

function Diagnostic({
    bad,
    good,
    BadIcon,
    GoodIcon,
}: {
    bad: string;
    good: string;
    BadIcon: ComponentType<IconProps>;
    GoodIcon: ComponentType<IconProps>;
}) {
    return (
        <div className="relative border border-grid/15 bg-paper/40 overflow-hidden text-left">
            <div className="p-4 space-y-2">
                <div className="flex items-center gap-3 border border-red-500/20 bg-red-500/10 px-3 py-2 transition-colors group-hover:bg-red-500/15">
                    <BadIcon className="h-4 w-4 text-red-600 shrink-0" />
                    <div className="min-w-0">
                        <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-red-800">
                            Before
                        </div>
                        <div className="mt-1 font-mono text-xs text-red-700">{bad}</div>
                    </div>
                </div>
                <div className="flex items-center gap-3 border border-green-600/20 bg-green-600/10 px-3 py-2 transition-colors group-hover:bg-green-600/15">
                    <GoodIcon className="h-4 w-4 text-green-700 shrink-0" />
                    <div className="min-w-0">
                        <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-green-900">
                            After
                        </div>
                        <div className="mt-1 font-mono text-xs text-green-800">{good}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function FeaturesGrid() {
    return (
        <Section className="bg-transparent">
            <Container>
                <div className="mb-12 max-w-3xl mx-auto text-center">
                    <Kicker>THE SILENT COST</Kicker>
                    <h2 className="mt-6 text-2xl sm:text-3xl md:text-5xl font-sans font-bold leading-tight tracking-tight text-ink mb-4 scroll-mt-20">
                        Is your growth strategy working against you?
                    </h2>
                    <p className="mx-auto text-ink-muted font-mono text-sm max-w-2xl">
                        Most businesses don&apos;t realize how much revenue they lose to fragmented vendors, weak branding, and unoptimized funnels until a competitor takes their market share.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {pains.map((pain) => (
                        <div
                            key={pain.label}
                            className="border border-grid/15 bg-white p-7 hover:border-primary/60 hover:-translate-y-0.5 transition-all duration-300 group text-center flex flex-col"
                        >
                            <div className="mb-6 flex flex-col items-center">
                                <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-ink-muted mb-4">
                                    {pain.label}
                                </div>
                                <div className="p-3 bg-primary/5 rounded-full mb-4 group-hover:scale-110 transition-transform duration-500">
                                    <pain.Icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                                </div>
                                <h3 className="font-sans font-semibold text-xl tracking-tight leading-snug">
                                    {pain.title}
                                </h3>
                            </div>

                            <p className="text-ink-muted text-sm leading-relaxed mb-6 flex-grow">
                                {pain.copy}
                            </p>

                            <div className="mt-auto pt-6 border-t border-grid/15 w-full">
                                <Diagnostic
                                    bad={pain.bad}
                                    good={pain.good}
                                    BadIcon={pain.badIcon}
                                    GoodIcon={pain.goodIcon}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
