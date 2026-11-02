"use client";

import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { motion, AnimatePresence } from "@/components/ui/motion-lite";
import {
    IconCalendar,
    IconBrandGoogleFilled,
    IconVideo,
    IconChefHat,
    IconClipboardList,
    IconSchool,
    IconPhoto,
    IconNews,
    IconCheck,
} from "@tabler/icons-react";
import Image from "next/image";

/* ────────────────────────────────────────────────────────────
   DATA STRUCTURES
   ──────────────────────────────────────────────────────────── */

type DashboardModule = {
    id: string;
    label: string;
    Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
    src: string;
    alt: string;
};

const BOOKING_MODULES: DashboardModule[] = [
    { id: "calendar", label: "Calendar View", Icon: IconCalendar, src: "/dashboard/medbase.jpg", alt: "Appointment booking calendar view" },
    { id: "list", label: "Booking List", Icon: IconClipboardList, src: "/dashboard/med base.jpg", alt: "All bookings filterable list" },
    { id: "new", label: "Direct Meet Sync", Icon: IconBrandGoogleFilled, src: "/dashboard/medbase.jpg", alt: "New appointment sync with Google Meet" },
];

const RESTAURANT_MODULES: DashboardModule[] = [
    { id: "orders", label: "Live Queue", Icon: IconChefHat, src: "/dashboard/table-reservation.jpg", alt: "Live order receipt and management queue" },
    { id: "reservations", label: "Reservations", Icon: IconCalendar, src: "/dashboard/table-menu.jpg", alt: "Table reservation management calendar" },
    { id: "menu", label: "Menu Editor", Icon: IconClipboardList, src: "/dashboard/table-reservation.jpg", alt: "Menu pricing and availability panel" },
];

const SCHOOL_MODULES: DashboardModule[] = [
    { id: "overview", label: "Admin Overview", Icon: IconSchool, src: "/dashboard/edu dashboard 1.jpg", alt: "School administration panel key stats" },
    { id: "gallery", label: "Media Gallery", Icon: IconPhoto, src: "/dashboard/edu dashboard 2.jpg", alt: "Media gallery management console" },
    { id: "news", label: "News & Events", Icon: IconNews, src: "/dashboard/edu dashboard 1.jpg", alt: "News and calendar update console" },
];

/* ────────────────────────────────────────────────────────────
   BROWSER WORKSPACE VIEWER
   ──────────────────────────────────────────────────────────── */

function DashboardViewer({
    modules,
    accentColor,
    urlPrefix,
}: {
    modules: DashboardModule[];
    accentColor: string;
    urlPrefix: string;
}) {
    const [active, setActive] = useState(0);

    return (
        <div className="flex flex-col gap-4 w-full">
            {/* Top Workspace Tab Selector */}
            <div className="flex flex-wrap gap-1 border border-white/5 bg-white/[0.02] p-1">
                {modules.map((mod, idx) => {
                    const Icon = mod.Icon;
                    const isActive = active === idx;
                    return (
                        <button
                            key={mod.id}
                            onClick={() => setActive(idx)}
                            className={[
                                "flex items-center gap-2 px-4 py-2 text-[10px] font-mono uppercase tracking-[0.15em] border transition-all duration-300",
                                isActive
                                    ? "bg-white/10 text-white border-white/20"
                                    : "text-white/40 border-transparent hover:text-white/75 hover:bg-white/[0.03]",
                            ].join(" ")}
                        >
                            <Icon className={["h-3.5 w-3.5", isActive ? accentColor : "text-white/30"].join(" ")} strokeWidth={1.5} />
                            {mod.label}
                        </button>
                    );
                })}
            </div>

            {/* High-Fidelity OS Browser Mockup */}
            <div className="relative w-full border border-white/10 bg-[#16161a] shadow-2xl overflow-hidden flex flex-col">
                {/* Title Bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#0d0d11] border-b border-white/5 select-none">
                    {/* Window Controls */}
                    <div className="flex items-center gap-1.5 shrink-0">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/60" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]/60" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]/60" />
                    </div>
                    {/* Address bar */}
                    <div className="flex-1 max-w-md mx-4 bg-white/5 border border-white/[0.06] py-1 px-3 text-[10px] font-mono text-white/40 text-center truncate select-all">
                        admin.{urlPrefix}.com/dashboard/{modules[active].id}
                    </div>
                    {/* Settings dots */}
                    <div className="flex items-center gap-1 shrink-0 opacity-40">
                        <span className="w-1 h-1 rounded-full bg-white" />
                        <span className="w-1 h-1 rounded-full bg-white" />
                        <span className="w-1 h-1 rounded-full bg-white" />
                    </div>
                </div>

                {/* Screenshot Area */}
                <div className="relative w-full bg-white/[0.02]" style={{ aspectRatio: "1920 / 912" }}>
                    <AnimatePresence>
                        <motion.div
                            key={modules[active].id}
                            initial={{ opacity: 0, scale: 1.01 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.22, ease: "easeInOut" }}
                            className="absolute inset-0"
                        >
                            <Image
                                src={modules[active].src}
                                alt={modules[active].alt}
                                fill
                                className="object-contain object-top"
                                sizes="(max-width: 1024px) 100vw, 60vw"
                                quality={75}
                            />
                        </motion.div>
                    </AnimatePresence>
                    {/* Inner bezel shadow */}
                    <div className="absolute inset-0 border border-white/5 pointer-events-none" />
                </div>
            </div>
        </div>
    );
}

/* ────────────────────────────────────────────────────────────
   MAIN COMPONENT
   ──────────────────────────────────────────────────────────── */

export function DashboardShowcaseFull() {
    return (
        <div className="bg-ink scroll-mt-24 border-t border-white/[0.08]">
            {/* ── Section Intro Header ── */}
            <Section className="bg-transparent py-16 md:py-24 border-b border-white/[0.06]">
                <Container>
                    <div className="grid md:grid-cols-[1.2fr_1fr] gap-10 items-end">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        >
                            
                            <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight text-white leading-[1.05]">
                                Custom dashboard management
                                <br />
                                <em className="font-serif-10 italic text-white/50">suited for your business needs.</em>
                            </h2>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                            className="flex flex-col gap-6"
                        >
                            <p className="text-[14px] text-white/45 leading-relaxed">
                                Every website we build includes a custom admin dashboard designed for your exact business. No slow page builders, generic plugins, or confusing settings. Just clean, fast website management.
                            </p>
                        </motion.div>
                    </div>
                </Container>
            </Section>

            {/* ── Type 01: Booking & Appointments ── */}
            <Section className="bg-transparent py-20 md:py-28 border-b border-white/[0.06]">
                <Container>
                    <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className="flex flex-col gap-6"
                        >
                            <div className="inline-flex items-center gap-2 border border-white/10 px-3 py-1.5 w-fit bg-white/5">
                                <IconCalendar className="h-3.5 w-3.5 text-[#8284ff]" strokeWidth={1.5} />
                                <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-white/50">SYSTEM TYPE 01</span>
                            </div>

                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif tracking-tight text-white leading-tight">
                                Booking &amp; <em className="font-serif-10 italic text-white/50">Appointments</em>
                            </h3>

                            <p className="text-[14px] text-white/45 leading-relaxed">
                                Engineered specifically for clinics, wellness centers, coaches, and private practices. 
                                Patients and clients book services on the frontend, which syncs directly into your calendar. 
                                Automated links, confirmation workflows, and intake forms keep operations seamless.
                            </p>

                            <ul className="flex flex-col gap-3">
                                {[
                                    "Interactive calendar view (day, week, month schedules)",
                                    "Google Meet integration automatically generated per session",
                                    "Automatic dual-party instant confirmations & SMS alerts",
                                    "Direct rescheduling & client cancellation portals",
                                    "Custom modular intake questions per appointment class",
                                ].map((feature) => (
                                    <li key={feature} className="flex items-start gap-3">
                                        <span className="mt-0.5 h-4 w-4 shrink-0 bg-white/10 border border-white/20 grid place-items-center">
                                            <IconCheck className="h-2.5 w-2.5 text-white" strokeWidth={2.5} />
                                        </span>
                                        <span className="text-[13px] text-white/60 leading-snug">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap items-center gap-2 pt-2">
                                <span className="inline-flex items-center gap-1.5 border border-white/10 px-3 py-1.5 text-[9px] font-mono text-white/35 uppercase tracking-wider bg-white/5">
                                    <IconBrandGoogleFilled className="h-3 w-3 text-blue-400" />
                                    Google Calendar Sync
                                </span>
                                <span className="inline-flex items-center gap-1.5 border border-white/10 px-3 py-1.5 text-[9px] font-mono text-white/35 uppercase tracking-wider bg-white/5">
                                    <IconVideo className="h-3 w-3 text-white/30" strokeWidth={1.5} />
                                    Telehealth Ready
                                </span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <DashboardViewer
                                modules={BOOKING_MODULES}
                                accentColor="text-[#8284ff]"
                                urlPrefix="clinic"
                            />
                        </motion.div>
                    </div>
                </Container>
            </Section>

            {/* ── Type 02: Restaurant Orders & Tables ── */}
            <Section className="bg-transparent py-20 md:py-28 border-b border-white/[0.06]">
                <Container>
                    <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-20 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className="order-2 lg:order-1"
                        >
                            <DashboardViewer
                                modules={RESTAURANT_MODULES}
                                accentColor="text-amber-400"
                                urlPrefix="bistro"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                            className="order-1 lg:order-2 flex flex-col gap-6"
                        >
                            <div className="inline-flex items-center gap-2 border border-white/10 px-3 py-1.5 w-fit bg-white/5">
                                <IconChefHat className="h-3.5 w-3.5 text-amber-400" strokeWidth={1.5} />
                                <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-white/50">SYSTEM TYPE 02</span>
                            </div>

                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif tracking-tight text-white leading-tight">
                                Orders &amp; <em className="font-serif-10 italic text-white/50">Reservations</em>
                            </h3>

                            <p className="text-[14px] text-white/45 leading-relaxed">
                                Tailored to upscale dining, cafés, cloud kitchens, and bar operations. 
                                Keep kitchen queues flowing in real time, modify digital menus instantly, 
                                and accept online table reservations directly on the site with custom covers and capacity limit parameters.
                            </p>

                            <ul className="flex flex-col gap-3">
                                {[
                                    "Live incoming orders dashboard with state-managed order tracking",
                                    "Table allocation & reservation planner syncing with frontend",
                                    "Dynamic menu builder to toggle availability and edit pricing instantly",
                                    "Sound alert triggers for new orders on active browser states",
                                    "Automated receipt generation and printer integration support",
                                ].map((feature) => (
                                    <li key={feature} className="flex items-start gap-3">
                                        <span className="mt-0.5 h-4 w-4 shrink-0 bg-white/10 border border-white/20 grid place-items-center">
                                            <IconCheck className="h-2.5 w-2.5 text-white" strokeWidth={2.5} />
                                        </span>
                                        <span className="text-[13px] text-white/60 leading-snug">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-2 pt-2">
                                {["Fine Dining", "Cocktail Bars", "Artisan Cafés", "QSR Chains"].map((tag) => (
                                    <span
                                        key={tag}
                                        className="border border-white/10 px-3 py-1 text-[9px] font-mono uppercase tracking-wider text-white/40 bg-white/5"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </Container>
            </Section>

            {/* ── Type 03: School & Institution ── */}
            <Section className="bg-transparent py-20 md:py-28 border-b-0">
                <Container>
                    <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className="flex flex-col gap-6"
                        >
                            <div className="inline-flex items-center gap-2 border border-white/10 px-3 py-1.5 w-fit bg-white/5">
                                <IconSchool className="h-3.5 w-3.5 text-emerald-400" strokeWidth={1.5} />
                                <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-white/50">SYSTEM TYPE 03</span>
                            </div>

                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif tracking-tight text-white leading-tight">
                                Institutional <em className="font-serif-10 italic text-white/50">Portals</em>
                            </h3>

                            <p className="text-[14px] text-white/45 leading-relaxed">
                                Formed for schools, academies, universities, and coaching institutes. 
                                Power administrative operations, manage comprehensive public media galleries, 
                                handle academic calendar notices, and view online course admissions requests.
                            </p>

                            <ul className="flex flex-col gap-3">
                                {[
                                    "Comprehensive administrative dashboard for key operational metrics",
                                    "Media manager to instantly structure galleries and campus activities",
                                    "Rich-text editor interface for real-time news publishing",
                                    "Admissions and course inquiries management control center",
                                    "Multi-user roles with secure permissions for teachers and admin staff",
                                ].map((feature) => (
                                    <li key={feature} className="flex items-start gap-3">
                                        <span className="mt-0.5 h-4 w-4 shrink-0 bg-white/10 border border-white/20 grid place-items-center">
                                            <IconCheck className="h-2.5 w-2.5 text-white" strokeWidth={2.5} />
                                        </span>
                                        <span className="text-[13px] text-white/60 leading-snug">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-2 pt-2">
                                {["Private Academies", "School Boards", "EdTech Labs", "Colleges"].map((tag) => (
                                    <span
                                        key={tag}
                                        className="border border-white/10 px-3 py-1 text-[9px] font-mono uppercase tracking-wider text-white/40 bg-white/5"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <DashboardViewer
                                modules={SCHOOL_MODULES}
                                accentColor="text-emerald-400"
                                urlPrefix="academy"
                            />
                        </motion.div>
                    </div>
                </Container>
            </Section>
        </div>
    );
}
