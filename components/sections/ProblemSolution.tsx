import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { motion } from "@/components/ui/motion-lite";
import { IconX, IconCheck, IconAlertTriangle, IconShield, IconThumbDown, IconTargetArrow, IconPuzzle, IconHeartHandshake, type IconProps } from "@tabler/icons-react";
import type { ComponentType } from "react";

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
};

type Row = {
    label: string;
    problemIcon: ComponentType<IconProps>;
    solutionIcon: ComponentType<IconProps>;
    problemTitle: string;
    problemBody: string;
    solutionTitle: string;
    solutionBody: string;
};

const rows: Row[] = [
    {
        label: "THE INFRASTRUCTURE BOTTLENECK",
        problemIcon: IconAlertTriangle,
        solutionIcon: IconShield,
        problemTitle: "Expensive, Broken Tech.",
        problemBody:
            "You pay high upfront fees for a clunky template, and the freelancer disappears. When the site breaks or needs an update, you are left completely stranded.",
        solutionTitle: "Zero-Hassle Web Systems.",
        solutionBody:
            "We build lightning-fast, secure websites with zero technical headaches. Whether Pay-Monthly or Custom, we handle all hosting, security, and ongoing updates for you.",
    },
    {
        label: "THE TRAFFIC BOTTLENECK",
        problemIcon: IconThumbDown,
        solutionIcon: IconTargetArrow,
        problemTitle: "Paying for \"Likes\", Not Leads.",
        problemBody:
            "Traditional agencies drain your budget on generic ads and boring stock photos. They chase vanity metrics instead of actual sales, bookings, and foot traffic.",
        solutionTitle: "Performance & Local Dominance.",
        solutionBody:
            "We run strict, ROI-driven Meta and Google ad campaigns. We combine this with rapid creative testing, conversion-focused landing pages, and hyper-local SEO to dominate your market.",
    },
    {
        label: "THE ECOSYSTEM BOTTLENECK",
        problemIcon: IconPuzzle,
        solutionIcon: IconHeartHandshake,
        problemTitle: "The Fragmented Mess.",
        problemBody:
            "You juggle a fragmented team of developers, ad guys, and social interns who never communicate. The result is a confused brand, delayed launches, and wasted money.",
        solutionTitle: "One Integrated Partner.",
        solutionBody:
            "Nodecraft acts as your single, fully accountable growth partner. We align your website and marketing engine to lower your acquisition costs and scale revenue seamlessly.",
    },
];

export function ProblemSolution() {
    return (
        <Section className="bg-transparent">
            <Container>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={stagger}
                >
                    <motion.div variants={fadeInUp} className="mb-14 max-w-3xl mx-auto text-center">
                        <Kicker>THE OLD WAY VS. THE NODECRAFT WAY</Kicker>
                        <h2 className="mt-6 text-2xl sm:text-3xl md:text-5xl font-sans font-bold tracking-tight text-ink mb-4">
                            Why Your Current Growth Strategy is Leaking Money.
                        </h2>
                        <p className="text-ink-muted font-mono text-sm max-w-2xl mx-auto">
                            The standard agency model is broken. Here is how we fix the three biggest bottlenecks choking your business.
                        </p>
                    </motion.div>

                    <div className="space-y-6">
                        {rows.map((row) => (
                            <motion.div
                                key={row.label}
                                variants={fadeInUp}
                                className="border border-grid/15 bg-white overflow-hidden"
                            >
                                {/* Row label */}
                                <div className="px-6 py-3 border-b border-grid/15 bg-paper/40">
                                    <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-ink-muted">
                                        {row.label}
                                    </span>
                                </div>

                                <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-grid/15">
                                    {/* Left: The Problem */}
                                    <div className="p-6 md:p-8 group">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="h-9 w-9 border border-red-500/25 bg-red-500/8 grid place-items-center text-red-600">
                                                <IconX className="h-4 w-4" strokeWidth={2.5} />
                                            </div>
                                            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-red-700">
                                                The Problem
                                            </span>
                                        </div>
                                        <h3 className="font-sans font-semibold text-xl tracking-tight text-ink mb-3">
                                            {row.problemTitle}
                                        </h3>
                                        <p className="text-sm text-ink-muted leading-relaxed">
                                            {row.problemBody}
                                        </p>
                                    </div>

                                    {/* Right: The Solution */}
                                    <div className="p-6 md:p-8 group bg-green-50/30">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="h-9 w-9 border border-green-600/25 bg-green-600/8 grid place-items-center text-green-700">
                                                <IconCheck className="h-4 w-4" strokeWidth={2.5} />
                                            </div>
                                            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-green-800">
                                                The Nodecraft Way
                                            </span>
                                        </div>
                                        <h3 className="font-sans font-semibold text-xl tracking-tight text-ink mb-3">
                                            {row.solutionTitle}
                                        </h3>
                                        <p className="text-sm text-ink-muted leading-relaxed">
                                            {row.solutionBody}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </Container>
        </Section>
    );
}
