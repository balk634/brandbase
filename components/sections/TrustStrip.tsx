"use client";

import { Section } from "@/components/ui/Section";
import { useEffect, useRef } from "react";

const ITEMS = [
  "80% Admin Time Cut",
  "Paper Register → Digital",
  "Auto WhatsApp Recalls",
  "GST in One Click",
  "Patient Queue Tracking",
  "Batch Fee Reminders",
  "Digital Job Cards",
  "Stock Alerts",
  "No Per-Seat Fees",
  "Live Kitchen Display",
  "Staff Role Access",
  "Your Data, Your Server",
  "14-Day Launch",
  "Zero Upfront Websites",
  "WhatsApp API Built-in",
];

const CLONE_COUNT = 8;
const MARQUEE_ITEMS = Array.from({ length: ITEMS.length * CLONE_COUNT }, (_, i) =>
  ITEMS[i % ITEMS.length]
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

  useEffect(() => {
    if (trackRef.current) {
      const track = trackRef.current;
      const firstItem = track.querySelector("[data-marquee-item]");
      if (firstItem) {
        const itemWidth = (firstItem as HTMLElement).offsetWidth;
        const gap = 24;
        itemSetWidth.current = (itemWidth + gap) * ITEMS.length;
      }
    }

    function animate() {
      if (!trackRef.current) return;
      boostRef.current *= 0.93;
      const targetSpeed = BASE_SPEED + boostRef.current;
      speedRef.current += (targetSpeed - speedRef.current) * 0.055;
      offsetRef.current += speedRef.current;
      if (itemSetWidth.current > 0 && offsetRef.current >= itemSetWidth.current) {
        offsetRef.current = 0;
      }
      trackRef.current.style.transform = `translateX(-${offsetRef.current}px)`;
      rafId.current = requestAnimationFrame(animate);
    }

    rafId.current = requestAnimationFrame(animate);

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
  }, []);

  return (
    <Section className="py-5 md:py-7 lg:py-8 bg-ink overflow-hidden border-b border-grid/15 flex flex-col items-center cursor-default select-none">
      <div className="relative flex w-full">
        <div className="w-full overflow-hidden">
          <div
            ref={trackRef}
            className="flex w-max whitespace-nowrap will-change-transform"
            style={{ gap: "1.5rem" }}
          >
            {MARQUEE_ITEMS.map((item, idx) => (
              <div
                key={`${item}-${idx}`}
                data-marquee-item
                className="flex shrink-0 items-center gap-6 md:gap-10 lg:gap-12 opacity-70 hover:opacity-100 transition-opacity cursor-default"
              >
                <span className="font-mono font-semibold text-lg md:text-xl lg:text-2xl tracking-tight uppercase text-white whitespace-nowrap">
                  {item}
                </span>
                <span className="w-1.5 h-1.5 bg-primary rounded-sm flex-shrink-0" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
