import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HeroImage } from "@/components/ui/HeroImage";
import { masterConfig } from "@/config/master";
import Link from "next/link";
import { motion } from "@/components/ui/motion-lite";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IconArrowRight, IconStack2, IconArrowDown } from "@tabler/icons-react";

export function Hero() {
    const { hero } = masterConfig.sections;
    const calendlyUrl = masterConfig.contact.calendlyUrl?.trim();
    const isCalendlyExternal = /^https?:\/\//i.test(calendlyUrl);
    const calendlyHref = calendlyUrl || "/contact";

    return (
        <Section 
            className="relative min-h-[calc(100vh-4rem)] min-h-[calc(100svh-4rem)] flex items-start bg-transparent py-0 pt-14 md:pt-16 pb-16"
            style={{ contentVisibility: 'visible' }}
        >
            <Container className="relative z-20 grid lg:grid-cols-2 gap-12 items-center">
                {/* Left: Text */}
                <div className="space-y-8 order-2 lg:order-1">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 border border-ink/20 bg-ink/5 text-ink"
                    >
                        <IconStack2 className="h-3.5 w-3.5" strokeWidth={2} />
                        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
                            {hero.tag}
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif leading-[0.9] tracking-tighter text-ink"
                    >
                        {hero.headline.split(' ').map((word, i, arr) => 
                            i === arr.length - 1 ? <em key={i} className="font-serif-20 italic">{word}</em> : <span key={i}>{word} </span>
                        )}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-sm sm:text-base md:text-base text-ink-muted leading-relaxed max-w-xl pl-6 border-l border-primary/20"
                    >
                        {hero.subheadline}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                    >
                        <Button asChild variant="primary" size="lg" className="w-full sm:w-auto sm:min-w-[180px]">
                            <Link 
                                href={calendlyHref} 
                                className="gap-2"
                                target={isCalendlyExternal ? "_blank" : undefined}
                                rel={isCalendlyExternal ? "noreferrer" : undefined}
                            >
                                Book a call
                                <IconArrowRight className="h-4 w-4" />
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="w-full sm:w-auto sm:min-w-[180px]">
                            <Link href="#services" className="gap-2">
                                Explore services
                                <IconArrowDown className="h-4 w-4" />
                            </Link>
                        </Button>
                    </motion.div>
                </div>

                {/* Right: Hero Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="relative order-first lg:order-2"
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
                            />
                        </div>
                    </div>
                </motion.div>
            </Container>
        </Section>
    );
}
