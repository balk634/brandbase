import React from "react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HeroImage } from "@/components/ui/HeroImage";
import { masterConfig } from "@/config/master";
import Link from "next/link";
import { motion } from "@/components/ui/motion-lite";
import { CalButton } from "@/components/ui/CalBooking";
import { Kicker } from "@/components/ui/Kicker";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IconArrowRight, IconStack2, IconArrowDown } from "@tabler/icons-react";

export function Hero({ imagePosition = "right" }: { imagePosition?: "left" | "right" }) {
    const { hero } = masterConfig.sections;

    // Memoize headline processing to prevent unnecessary recalculations
    const headlineContent = React.useMemo(() => {
        return hero.headline.split(' ').map((word, i, arr) => 
            i === arr.length - 1 ? <em key={i} className="font-serif-20 italic">{word}</em> : <span key={i}>{word} </span>
        );
    }, [hero.headline]);

    return (
        <Section 
            className="relative min-h-[calc(100vh-4rem)] min-h-[calc(100svh-4rem)] flex items-start bg-transparent py-0 pt-14 md:pt-16 pb-16"
            style={{ contentVisibility: 'visible' }}
        >
            <Container className="relative z-20 grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Column */}
                <div className={`space-y-8 order-2 ${imagePosition === "left" ? "lg:order-2" : "lg:order-1"}`}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <Kicker>{hero.tag}</Kicker>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                        className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif leading-[0.9] tracking-tighter text-ink"
                    >
                        {headlineContent}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
                        className="text-sm sm:text-base md:text-base text-ink-muted leading-relaxed max-w-xl pl-6 border-l border-primary/20"
                    >
                        {hero.subheadline}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
                        className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                    >
                        <CalButton variant="primary" size="lg" className="sm:min-w-[180px]">
                            Book a call
                        </CalButton>
                        <Button asChild variant="outline" size="lg" className="sm:min-w-[180px]">
                            <Link href="#services">
                                Explore services
                            </Link>
                        </Button>
                    </motion.div>
                </div>

                {/* Hero Image Column */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className={`relative order-first ${imagePosition === "left" ? "lg:order-1" : "lg:order-2"}`}
                >
                    <div className="relative overflow-hidden">
                        <div
                            className={`relative ${masterConfig.ui.heroImages.className}`}
                            style={{
                                maxWidth: masterConfig.ui.heroImages.maxWidth,
                                aspectRatio: masterConfig.ui.heroImages.aspectRatio,
                            }}
                        >
                            <HeroImage
                                src={`/${masterConfig.ui.heroImages.home}`}
                                alt="BrandBase — Conversion-first websites and performance marketing"
                                priority={true}
                            />
                        </div>
                    </div>
                </motion.div>
            </Container>
        </Section>
    );
}
