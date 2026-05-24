"use client";

import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "@/components/ui/motion-lite";
import { CalButton } from "@/components/ui/CalBooking";
import {
    IconCalendar,
    IconChefHat,
    IconSchool,
    IconCheck,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

/* ────────────────────────────────────────────────────────────
   DATA – Three dashboard types as selectable tabs
   ──────────────────────────────────────────────────────────── */

const DASHBOARD_TYPES = [
    {
        id: "restaurant",
        label: "RESTAURANT",
        Icon: IconChefHat,
        heading: "RESTAURANT",
        copy: "Live orders, table bookings & menu management — everything in one place.",
        activeBorder: "border-amber-500/50",
        activeBg: "bg-amber-500/10",
        activeText: "text-amber-400",
        arrowColor: "text-amber-400",
        thumbnails: [
            { src: "/dashboard/table-order.jpg", alt: "Restaurant live order manager screenshot", label: "Orders" },
            { src: "/dashboard/table-reservation.jpg", alt: "Table reservation calendar view screenshot", label: "Reservations" },
        ],
    },
    {
        id: "booking",
        label: "BOOKINGS",
        Icon: IconCalendar,
        heading: "BOOKINGS",
        copy: "Appointments, Google Meet links & intake forms — all managed from one screen.",
        activeBorder: "border-[#8284ff]/50",
        activeBg: "bg-[#8284ff]/10",
        activeText: "text-[#8284ff]",
        arrowColor: "text-[#8284ff]",
        thumbnails: [
            { src: "/dashboard/booking.jpg", alt: "Appointment schedule overview screenshot", label: "Overview" },
            { src: "/dashboard/booking2.jpg", alt: "Calendar slots and timing settings screenshot", label: "Appointment Slots" },
        ],
    },
    {
        id: "school",
        label: "SCHOOL MANAGEMENT",
        Icon: IconSchool,
        heading: "SCHOOL MANAGEMENT",
        copy: "Gallery, notices, admissions & news — updated by staff, no tech needed.",
        activeBorder: "border-emerald-500/50",
        activeBg: "bg-emerald-500/10",
        activeText: "text-emerald-400",
        arrowColor: "text-emerald-400",
        thumbnails: [
            { src: "/dashboard/school-dashboard.jpg", alt: "School overview metrics dashboard screenshot", label: "Metrics" },
            { src: "/dashboard/school-gallery.jpg", alt: "School media gallery administrator page screenshot", label: "Gallery Manager" },
        ],
    },
];

const FEATURES = [
    "Live sync with your website",
    "Built for your industry",
    "No developer needed",
    "Works on any device",
    "Team access controls",
    "100% custom — no generic CMS",
];

/* ────────────────────────────────────────────────────────────
   COMPONENT
   ──────────────────────────────────────────────────────────── */

export function DashboardShowcase() {
    const [active, setActive] = useState(0);
    const [activeThumbnailIndex, setActiveThumbnailIndex] = useState(0);
    const current = DASHBOARD_TYPES[active];
    const currentImage = current.thumbnails[activeThumbnailIndex];



    const handleTabClick = (idx: number) => {
        setActive(idx);
        setActiveThumbnailIndex(0);
    };

    const handleThumbnailClick = (idx: number) => {
        setActiveThumbnailIndex(idx);
    };

    return (
        <Section id="dashboard" className="bg-ink py-16 md:py-24 overflow-hidden scroll-mt-24 border-b-0">
            <Container>
                {/* ── Header row ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-14 max-w-3xl"
                >
                    <Kicker className="border-white/15 bg-white/8 text-white/80">
                        CUSTOM ADMIN DASHBOARD
                    </Kicker>
                    <h2 className="mt-6 text-2xl sm:text-3xl md:text-5xl font-serif tracking-tight text-white leading-[1.05]">
                        Custom dashboard management{" "}
                        <em className="font-serif-10 italic text-white/50">suited for your business needs.</em>
                    </h2>
                    <p className="mt-4 text-sm text-white/45 leading-relaxed max-w-2xl">
                        Not a generic CMS. A custom admin panel built around how your business actually runs — and synced live to your website.
                    </p>
                </motion.div>

                {/* ── Main 2-col layout ── */}
                <div className="grid lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-16 items-start">

                    {/* Left: tabs + features */}
                    <motion.div
                        initial={{ opacity: 0, x: -16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="flex flex-col gap-6 order-2 lg:order-1"
                    >
                        {/* Tab selector */}
                        <div className="flex flex-col gap-2">
                            {DASHBOARD_TYPES.map((type, idx) => {
                                const Icon = type.Icon;
                                const isActive = active === idx;
                                return (
                                    <button
                                        key={type.id}
                                        onClick={() => handleTabClick(idx)}
                                        className={[
                                            "mi-btn flex items-start gap-4 p-4 border text-left transition-all duration-300 w-full relative group",
                                            isActive
                                                ? "border-white/15 bg-white/5"
                                                : "border-white/5 bg-transparent hover:border-white/10 hover:bg-white/[0.02]",
                                        ].join(" ")}
                                    >
                                        <div className={[
                                            "h-10 w-10 shrink-0 grid place-items-center border transition-all duration-300 rounded-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]",
                                            isActive
                                                ? `${type.activeBorder} ${type.activeBg} ${type.activeText}`
                                                : "border-white/15 bg-white/[0.03] text-white/40 group-hover:border-white/25 group-hover:bg-white/[0.05] group-hover:text-white/60",
                                        ].join(" ")}>
                                            <Icon className="h-4.5 w-4.5" strokeWidth={1.5} />
                                        </div>
                                        <div className="flex-1 min-w-0 pr-6">
                                            <span className={[
                                                "block font-mono text-[10px] uppercase tracking-[0.25em] transition-colors duration-300",
                                                isActive ? "text-white" : "text-white/40",
                                            ].join(" ")}>
                                                {type.heading}
                                            </span>
                                            <p className={[
                                                "mt-1.5 text-[12px] leading-relaxed transition-all duration-300 line-clamp-2",
                                                isActive ? "text-white/60" : "text-white/30 group-hover:text-white/45",
                                            ].join(" ")}>
                                                {type.copy}
                                            </p>
                                        </div>
                                        {isActive && (
                                            <span className={["absolute right-4 top-5 text-[15px] font-medium transition-transform duration-300", type.arrowColor].join(" ")}>
                                                →
                                            </span>
                                        )}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Feature list */}
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                            {FEATURES.map((f) => (
                                <li key={f} className="flex items-start gap-2">
                                    <span className="mt-0.5 h-4 w-4 shrink-0 bg-white/10 border border-white/20 grid place-items-center">
                                        <IconCheck className="h-2.5 w-2.5 text-white" strokeWidth={2.5} />
                                    </span>
                                    <span className="text-[12px] text-white/50 leading-snug">{f}</span>
                                </li>
                            ))}
                        </ul>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-3 pt-2">
                            <CalButton variant="primary" size="lg">
                                Get a Custom Dashboard
                            </CalButton>
                            <Button
                                asChild
                                variant="ghost"
                                size="lg"
                                className="border border-white/10 text-white/50 hover:text-white hover:border-white/25"
                            >
                                <Link href="/our-work#dashboard">
                                    See Full Examples
                                </Link>
                            </Button>
                        </div>
                    </motion.div>

                    {/* Right: screenshot preview with interactive thumbnails */}
                    <motion.div
                        initial={{ opacity: 0, x: 16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
                        className="flex flex-col gap-4 order-1 lg:order-2"
                    >
                        {/* Main Image View */}
                        <div className="relative w-full border border-white/10 overflow-hidden bg-white/5" style={{ aspectRatio: "1920 / 912" }}>
                            <AnimatePresence>
                                <motion.div
                                    key={`${current.id}-${activeThumbnailIndex}`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute inset-0"
                                >
                                    <Image
                                        src={currentImage.src}
                                        alt={currentImage.alt}
                                        fill
                                        className="object-contain object-top"
                                        sizes="(max-width: 768px) 100vw, 55vw"
                                        quality={70}
                                        priority
                                    />
                                </motion.div>
                            </AnimatePresence>
                            <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-ink/40 to-transparent pointer-events-none" />
                        </div>

                        {/* Clickable Sub-thumbnails (Two columns with 5-second progress indicator) */}
                        <div className="grid grid-cols-2 gap-3">
                            {current.thumbnails.map((thumb, idx) => {
                                const isThumbActive = activeThumbnailIndex === idx;
                                return (
                                    <button
                                        key={idx}
                                        onClick={() => handleThumbnailClick(idx)}
                                        className={[
                                            "relative aspect-[16/9] border transition-all duration-300 overflow-hidden bg-white/5 text-left group",
                                            isThumbActive
                                                ? `${current.activeBorder} ring-1 ring-white/5`
                                                : "border-white/5 hover:border-white/15",
                                        ].join(" ")}
                                    >
                                        <Image
                                            src={thumb.src}
                                            alt={thumb.alt}
                                            fill
                                            className={[
                                                "object-cover object-top transition-all duration-500 opacity-40 group-hover:opacity-75",
                                                isThumbActive ? "scale-100" : "scale-95 group-hover:scale-100"
                                            ].join(" ")}
                                            sizes="(max-width: 768px) 30vw, 15vw"
                                        />

                                    </button>
                                );
                            })}
                        </div>

                        <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/20">
                            {current.heading} — {currentImage.label} · Live screenshot
                        </p>
                    </motion.div>
                </div>
            </Container>
        </Section>
    );
}
