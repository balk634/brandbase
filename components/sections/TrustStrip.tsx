"use client";

import { Section } from "@/components/ui/Section";
import { useEffect, useRef, useCallback, useState } from "react";

const SERVICES = [
    "Email Marketing",
    "CRM Setup",
    "Custom Dashboards",
    "E-commerce Management",
    "Brand Guidelines",
    "SEO Optimization",
    "Meta Ads",
    "Google Ads",
    "Social Media Management",
    "Content Strategy",
    "Conversion Tracking",
    "Analytics & Reporting",
    "Landing Pages",
    "Marketing Automation",
    "Brand Strategy",
];

// Clone items 8 times for seamless infinite scroll
const CLONE_COUNT = 8;
const MARQUEE_ITEMS = Array.from({ length: SERVICES.length * CLONE_COUNT }, (_, i) =>
    SERVICES[i % SERVICES.length]
);

const BASE_SPEED = 0.1;
const MAX_BOOST = 1;

export function TrustStrip() {
    const trackRef = useRef<HTMLDivElement>(null);
    const offsetRef = useRef(0);
    const speedRef = useRef(BASE_SPEED);
    const boostRef = useRef(0);
    const lastScrollY = useRef(0);
    const itemSetWidth = useRef(0);
    const rafId = useRef<number | undefined>(undefined);
    const [mounted, setMounted] = useState(false);

    const animate = useCallback(() => {
        if (!trackRef.current) return;

        // Decay boost
        boostRef.current *= 0.93;

        // Calculate target speed with boost
        const targetSpeed = BASE_SPEED + boostRef.current;

        // Smooth lerp to target speed
        speedRef.current += (targetSpeed - speedRef.current) * 0.055;

        // Update offset
        offsetRef.current += speedRef.current;

        // Reset offset when one full set width is consumed (seamless loop)
        if (itemSetWidth.current > 0 && offsetRef.current >= itemSetWidth.current) {
            offsetRef.current = 0;
        }

        trackRef.current.style.transform = `translateX(-${offsetRef.current}px)`;

        rafId.current = requestAnimationFrame(animate);
    }, []);

    useEffect(() => {
        setMounted(true);

        // Calculate one set width after render
        if (trackRef.current) {
            const track = trackRef.current;
            const firstItem = track.querySelector("[data-marquee-item]");
            if (firstItem) {
                const itemWidth = (firstItem as HTMLElement).offsetWidth;
                // Account for gap between items (1.5rem = 24px base gap)
                const gap = 24;
                itemSetWidth.current = (itemWidth + gap) * SERVICES.length;
            }
        }

        // Start animation
        rafId.current = requestAnimationFrame(animate);

        // Scroll listener for velocity boost
        const handleScroll = () => {
            const dy = Math.abs(window.scrollY - lastScrollY.current);
            lastScrollY.current = window.scrollY;
            boostRef.current = Math.min(boostRef.current + dy * 0.05, MAX_BOOST);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        lastScrollY.current = window.scrollY;

        return () => {
            if (rafId.current) cancelAnimationFrame(rafId.current);
            window.removeEventListener("scroll", handleScroll);
        };
    }, [animate]);

    return (
        <Section className="py-5 md:py-7 lg:py-8 bg-ink overflow-hidden border-b border-grid/15 flex flex-col items-center cursor-default select-none">
            <div className="relative flex w-full">
                <div className="w-full overflow-hidden">
                    <div
                        ref={trackRef}
                        className="flex w-max whitespace-nowrap will-change-transform"
                        style={{ gap: "1.5rem" }}
                    >
                        {mounted ? (
                            MARQUEE_ITEMS.map((service, idx) => (
                                <div
                                    key={`${service}-${idx}`}
                                    data-marquee-item
                                    className="flex shrink-0 items-center gap-6 md:gap-10 lg:gap-12 opacity-70 hover:opacity-100 transition-opacity cursor-default"
                                >
                                    <span className="font-mono font-semibold text-lg md:text-xl lg:text-2xl tracking-tight uppercase text-white whitespace-nowrap">
                                        {service}
                                    </span>
                                    <span className="w-1.5 h-1.5 bg-white rounded-sm flex-shrink-0" aria-hidden="true" />
                                </div>
                            ))
                        ) : (
                            <div className="flex shrink-0 items-center gap-6 md:gap-10 lg:gap-12 opacity-70">
                                <span className="font-mono font-semibold text-lg md:text-xl lg:text-2xl tracking-tight uppercase text-white whitespace-nowrap">
                                    &nbsp;
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Section>
    );
}
