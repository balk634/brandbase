"use client";

import React, { useEffect, useState, useRef } from "react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HeroImage } from "@/components/ui/HeroImage";
import { masterConfig } from "@/config/master";
import Link from "next/link";
import { motion } from "@/components/ui/motion-lite";
import { CalButton } from "@/components/ui/CalBooking";
import { Kicker } from "@/components/ui/Kicker";

// ─── Animated Counter Component ──────────────────────────────────────────

function AnimatedCounter({ value, duration = 1200 }: { value: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  const numericMatch = value.match(/(\d+)/);
  const suffix = value.replace(/\d+/g, "");
  const target = numericMatch ? parseInt(numericMatch[0], 10) : 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const start = 0;
          const end = target;
          if (start === end) {
            setCount(end);
            return;
          }
          const startTime = performance.now();

          const updateCount = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const easeProgress = progress * (2 - progress);
            const current = Math.floor(easeProgress * (end - start) + start);
            setCount(current);

            if (progress < 1) {
              requestAnimationFrame(updateCount);
            }
          };

          requestAnimationFrame(updateCount);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref}>
      {suffix === "×" ? `${count}×` : `${count}${suffix}`}
    </span>
  );
}

// ─── Component ─────────────────────────────────────────────────────────────

export function Hero({ imagePosition = "right" }: { imagePosition?: "left" | "right" }) {
  const { hero } = masterConfig.sections;

  const headlineContent = React.useMemo(() => {
    return hero.headline.split(' ').map((word, i, arr) => 
      i === arr.length - 1 ? (
        <em key={i} className="font-serif-20 italic bg-ink text-white px-4 py-1.5 inline-block align-baseline select-none transform animate-tilt-hero">
          {word.slice(0, -1)}
          <span className="animate-cursor-blink font-sans">.</span>
        </em>
      ) : <span key={i}>{word} </span>
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
              Start a Project
            </CalButton>
            <Button asChild variant="outline" size="lg" className="sm:min-w-[180px]">
              <Link href="#services">
                Explore services
              </Link>
            </Button>
          </motion.div>

          {/* Animated Hero Stats */}
          {hero.stats && hero.stats.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className={`pt-8 border-t border-grid/10 grid grid-cols-2 ${
                hero.stats.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-4"
              } gap-6`}
            >
              {hero.stats.map((stat, i) => (
                <div key={i} className="space-y-1">
                  <div className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-ink">
                    <AnimatedCounter value={stat.value} />
                  </div>
                  <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-ink-muted/80 leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
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
                alt="BrandBase: Custom industry business management systems and websites"
                priority={true}
              />
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
