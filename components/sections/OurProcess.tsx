import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { motion } from "@/components/ui/motion-lite";
import type { ComponentType } from "react";
import {
    IconSearch, IconPalette, IconRocket, IconTrendingUp, type IconProps
} from "@tabler/icons-react";
import { BoxPatternServer } from "@/components/ui/BoxPatternServer";
import Image from "next/image";

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
};

type Step = {
    number: string;
    Icon: ComponentType<IconProps>;
    title: string;
    description: string;
    image: string;
};

const steps: Step[] = [
    {
        number: "01",
        Icon: IconSearch,
        title: "Discovery & Strategy",
        description:
            "We audit your current setup, study your market, and define clear KPIs. You walk away with a custom growth roadmap — not a generic pitch deck.",
        image: "/01.jpg"
    },
    {
        number: "02",
        Icon: IconPalette,
        title: "Design & Build",
        description:
            "Our team designs pixel-perfect interfaces and builds production-grade code. Every page is optimized for speed, SEO, and conversions from day one.",
        image: "/02.jpg"
    },
    {
        number: "03",
        Icon: IconRocket,
        title: "Launch & Activate",
        description:
            "We deploy your website to enterprise-grade infrastructure and activate your marketing campaigns. Tracking pixels, conversion APIs, and A/B tests go live simultaneously.",
        image: "/03.jpg"
    },
    {
        number: "04",
        Icon: IconTrendingUp,
        title: "Optimize & Scale",
        description:
            "Weekly performance reviews, ongoing SEO improvements, and campaign optimization. We kill underperformers, scale winners, and send you clear reports on what’s working.",
        image: "/04.jpg"
    },
];

export function OurProcess() {
    return (
        <Section className="bg-transparent">
            <Container>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={stagger}
                >
                    <motion.div variants={fadeInUp} className="mb-14 max-w-3xl">
                        <Kicker>OUR PROCESS</Kicker>
                        <h2 className="mt-6 text-2xl sm:text-3xl md:text-5xl font-serif tracking-tight text-ink">
                            From Brief to Revenue in Four <em className="font-serif-10 italic">Steps.</em>
                        </h2>
                        <p className="mt-4 text-ink-muted text-sm max-w-2xl leading-relaxed">
                            A proven, no-nonsense workflow that takes you from strategy to measurable growth — with zero guesswork in between.
                        </p>
                    </motion.div>

                    <div className="relative">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-y-0 md:gap-y-8 lg:gap-y-0 relative" style={{ columnGap: "3rem" }}>
                            {steps.map((step, i) => (
                                <div
                                    key={step.number}
                                    className={`relative flex flex-col items-stretch ${i < steps.length - 1 ? "pb-0" : ""}`}
                                >
                                    <motion.div
                                        variants={fadeInUp}
                                        whileHover={{ y: -2, transition: { duration: 0.18 } }}
                                        className="relative border border-grid/15 bg-white p-4 md:p-5 flex flex-col h-full group cursor-default hover:border-primary/30 hover:bg-paper/40 transition-colors duration-300"
                                    >
                                        <BoxPatternServer />
                                        
                                        {/* Process Step Image */}
                                        <div className="w-full aspect-video mb-6 bg-paper/40 flex items-center justify-center overflow-hidden relative">
                                            <Image 
                                              src={step.image} 
                                              alt={step.title} 
                                              fill 
                                              className="object-cover"
                                            />
                                        </div>

                                        <h3 className="font-serif text-lg tracking-tight text-ink mb-3">
                                            {step.title.split(' ').map((word, i, arr) => 
                                                i === arr.length - 1 ? <em key={i} className="font-serif-10 italic">{word}</em> : <span key={i}>{word} </span>
                                            )}
                                        </h3>

                                        <p className="text-[13px] text-ink-muted leading-relaxed flex-1">
                                            {step.description}
                                        </p>
                                    </motion.div>

                                    {i < steps.length - 1 && (
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
    );
}
