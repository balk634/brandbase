"use client";

import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "@/components/ui/motion-lite";
import { DashboardShowcaseFull } from "@/components/sections/DashboardShowcaseFull";
import { CalButton } from "@/components/ui/CalBooking";
import {
    IconToolsKitchen2,
    IconHeartbeat,
    IconSchool,
    IconBarbell,
    IconPlane,
    IconBuildingSkyscraper,
    IconScissors,
    IconShoppingBag,
    IconCamera,
    IconCar,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import type { ComponentType } from "react";

/* ────────────────────────────────────────────────────────────
   DATA
   ──────────────────────────────────────────────────────────── */

type Category =
    | "All"
    | "Food & Hospitality"
    | "Healthcare & Wellness"
    | "Education & Coaching"
    | "Sports & Fitness"
    | "Travel & Hospitality";


type Project = {
    name: string;
    tagline: string;
    url: string;
    category: Exclude<Category, "All">;
    services: string[];
    screenshot: string;
};

const PROJECTS: Project[] = [
    {
        name: "Lumen Clinic",
        tagline: "Precision healthcare with a premium, trustworthy digital presence.",
        url: "https://lumen-clinic.vercel.app/",
        category: "Healthcare & Wellness",
        services: ["Custom Web Design", "Booking System", "Patient Portal"],
        screenshot: "/portfolio/clinic.jpg",
    },
    {
        name: "SunBliss Hotel",
        tagline: "Luxury hospitality that converts first-time visitors into confirmed guests.",
        url: "https://sunblisspatna.vercel.app/",
        category: "Travel & Hospitality",
        services: ["Custom Web Design", "Room Booking", "Custom Dashboard"],
        screenshot: "/portfolio/sunbliss.jpg",
    },
    {
        name: "Make My Day Café",
        tagline: "Warm, inviting digital identity for a beloved local café.",
        url: "https://make-my-day-cafe.vercel.app/",
        category: "Food & Hospitality",
        services: ["Premium Static", "Menu Management", "Local SEO"],
        screenshot: "/portfolio/cafe coffee.jpg",
    },
    {
        name: "Baaroq Mumbai",
        tagline: "Contemporary café culture with a modern, high-end digital identity.",
        url: "https://baaroq-mumbai.vercel.app/",
        category: "Food & Hospitality",
        services: ["Custom Web Design", "Table Reservations", "Custom Dashboard"],
        screenshot: "/portfolio/barooq.jpg",
    },
    {
        name: "Caelum Patna",
        tagline: "Fine dining elevated through an exquisite restaurant web experience.",
        url: "https://caelum-patna.vercel.app/",
        category: "Food & Hospitality",
        services: ["Custom Web Design", "Order Management", "Custom Dashboard"],
        screenshot: "/portfolio/caelum.jpg",
    },
    {
        name: "EduRise",
        tagline: "A coaching centre built for the next generation of competitive learners.",
        url: "https://edurise-neon.vercel.app/",
        category: "Education & Coaching",
        services: ["Custom Web Design", "Admissions Portal", "Local SEO"],
        screenshot: "/portfolio/edurise.jpg",
    },
    {
        name: "Muscle Fitness Gym",
        tagline: "Performance-first digital presence for a serious training facility.",
        url: "https://muscle-fitness-gym.vercel.app/",
        category: "Sports & Fitness",
        services: ["Custom Web Design", "Membership System", "Class Bookings"],
        screenshot: "/portfolio/gym.jpg",
    },
    {
        name: "SG International Hotel",
        tagline: "A full-scale hospitality platform built for discerning travellers.",
        url: "https://sg-international.vercel.app/",
        category: "Travel & Hospitality",
        services: ["Custom Web Design", "Room Booking", "Custom Dashboard"],
        screenshot: "/portfolio/sg inter.jpg",
    },
    {
        name: "St. Karen's School",
        tagline: "A trusted institution, now with a world-class digital home.",
        url: "https://stkarens.vercel.app/",
        category: "Education & Coaching",
        services: ["Custom Web Design", "Gallery & News", "School Dashboard"],
        screenshot: "/portfolio/stkarens.jpg",
    },
];

type Industry = {
    name: string;
    desc: string;
    Icon: ComponentType<{ className?: string; strokeWidth?: number }>;
    image: string;
};

const INDUSTRIES: Industry[] = [
    { name: "Food & Hospitality", desc: "Restaurants, cafés, cloud kitchens, catering, QSR chains", Icon: IconToolsKitchen2, image: "https://images.unsplash.com/photo-1414235077428-338988a9e8c1?w=600&q=70" },
    { name: "Healthcare & Wellness", desc: "Clinics, hospitals, dental, dermatology, physiotherapy", Icon: IconHeartbeat, image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&q=70" },
    { name: "Education & Coaching", desc: "Schools, coaching centres, universities, EdTech platforms", Icon: IconSchool, image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=70" },
    { name: "Sports & Fitness", desc: "Gyms, yoga studios, personal trainers, sports academies", Icon: IconBarbell, image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=70" },
    { name: "Travel & Hospitality", desc: "Hotels, guesthouses, resorts, travel agencies, B&Bs", Icon: IconPlane, image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=70" },
    { name: "Real Estate", desc: "Builders, brokers, co-working spaces, commercial property", Icon: IconBuildingSkyscraper, image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=70" },
    { name: "Fashion & Beauty", desc: "Salons, spas, clothing brands, jewellery, lifestyle retail", Icon: IconScissors, image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=70" },
    { name: "Retail & Local Business", desc: "Shops, supermarkets, pharmacies, service businesses", Icon: IconShoppingBag, image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=70" },
    { name: "Media & Creative", desc: "Photography studios, agencies, production houses, artists", Icon: IconCamera, image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?w=600&q=70" },
    { name: "Automotive & Transport", desc: "Dealerships, rentals, logistics, driving schools, garages", Icon: IconCar, image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&q=70" },
];

/* ────────────────────────────────────────────────────────────
   PROJECT CARD
   ──────────────────────────────────────────────────────────── */

function ProjectCard({ project, index }: { project: Project; index: number }) {
    const formattedIdx = String(index + 1).padStart(2, "0");

    return (
        <motion.article
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
            className="mi-surface group border border-grid/15 bg-white overflow-hidden flex flex-col"
        >
            {/* Screenshot */}
            <div className="relative w-full overflow-hidden border-b border-grid/10" style={{ aspectRatio: "2.27 / 1" }}>
                <Image
                    src={project.screenshot}
                    alt={`${project.name} website`}
                    fill
                    className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-[600ms] ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={55}
                />
                {/* Number badge */}
                <div className="absolute top-0 left-0 bg-ink text-white font-mono text-[10px] tracking-[0.2em] px-3 py-1.5">
                    {formattedIdx}
                </div>
            </div>

            {/* Body */}
            <div className="flex flex-col flex-1 p-5 md:p-6">
                {/* Category mono kicker */}
                <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-ink-muted/60 mb-3">
                    {project.category}
                </span>

                <h3 className="font-serif text-xl md:text-2xl tracking-tight text-ink leading-tight group-hover:text-primary transition-colors duration-300">
                    {project.name}
                </h3>

                <p className="mt-2 text-[13px] text-ink-muted leading-relaxed flex-1">
                    {project.tagline}
                </p>



                {/* CTA */}
                <div className="mt-5 pt-4 border-t border-grid/10">
                    <Button asChild variant="outline" size="sm" className="w-full text-[10px]">
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                            Visit Website
                        </a>
                    </Button>
                </div>
            </div>
        </motion.article>
    );
}

/* ────────────────────────────────────────────────────────────
   INDUSTRY CARD
   ──────────────────────────────────────────────────────────── */

function IndustryCard({ industry, index }: { industry: Industry; index: number }) {
    const Icon = industry.Icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
            className="mi-surface group relative border border-grid/15 bg-primary overflow-hidden h-full min-h-[220px] sm:min-h-[260px] lg:min-h-[240px] xl:min-h-[260px] flex flex-col"
        >
            {/* Background image */}
            <Image
                src={industry.image}
                alt={industry.name}
                fill
                className="object-cover opacity-[0.08] mix-blend-luminosity group-hover:opacity-[0.15] group-hover:scale-105 transition-all duration-700 ease-out"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                quality={40}
            />

            {/* Content overlay */}
            <div className="relative z-10 flex flex-col justify-between p-5 md:p-6 lg:p-5 xl:p-6 flex-1">
                <div className="flex items-start justify-between">
                    <div className="h-10 w-10 border border-white/20 bg-white/5 grid place-items-center text-white mi-card-icon backdrop-blur-sm transition-colors duration-300 group-hover:bg-white/10 group-hover:border-white/30">
                        <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/50 mt-1 transition-colors duration-300 group-hover:text-white/70">
                        {String(index + 1).padStart(2, "0")}
                    </span>
                </div>
                <div className="mt-4">
                    <h3 className="font-serif text-base sm:text-lg lg:text-[13px] xl:text-base tracking-tight leading-tight text-white transition-colors duration-200">
                        {industry.name}
                    </h3>
                    <p className="mt-2 text-[11px] leading-relaxed text-white/70 max-w-[90%] transition-colors duration-300 group-hover:text-white/90">
                        {industry.desc}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

/* ────────────────────────────────────────────────────────────
   PAGE
   ──────────────────────────────────────────────────────────── */

export default function OurWorkPage() {
    return (
        <main className="relative text-ink">
            {/* ── Hero ── */}
            <Section className="bg-transparent pt-6 md:pt-14 pb-14 md:pb-20 border-b border-grid/10">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    >
                        

                        <h1 className="mt-8 text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif leading-[0.9] tracking-tighter text-ink max-w-3xl">
                            Work we&apos;re{" "}
                            <em className="font-serif-20 italic bg-primary text-white px-4 py-1.5 inline-block align-baseline select-none transform animate-tilt-hero">
                                proud of.
                            </em>
                        </h1>

                        <p className="mt-8 text-sm md:text-base text-ink-muted leading-relaxed max-w-xl pl-6 border-l border-primary/20">
                            Every project here is a complete business system, designed for the
                            industry, optimised for Google AI Search, and shipped with a custom
                            admin dashboard tailored to how that business actually operates.
                        </p>

                        <div className="mt-10 flex flex-wrap items-center gap-2 text-[10px] font-mono uppercase tracking-[0.1em] text-ink-muted">
                            <span className="border border-grid/10 px-2.5 py-1 bg-paper/40">10+ Industries</span>
                            <span className="border border-grid/10 px-2.5 py-1 bg-paper/40">Custom Dashboard on Every Build</span>
                        </div>
                    </motion.div>
                </Container>
            </Section>

            {/* ── Portfolio Grid ── */}
            <Section id="portfolio" className="bg-paper py-16 md:py-24 scroll-mt-24 border-b border-grid/10">
                <Container>
                    {/* Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <AnimatePresence>
                            {PROJECTS.map((project, idx) => (
                                <ProjectCard key={project.name} project={project} index={idx} />
                            ))}
                        </AnimatePresence>
                    </div>
                </Container>
            </Section>

            {/* ── Industries We Serve ── */}
            <Section className="bg-white py-16 md:py-24 border-b border-grid/10">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="mb-14 max-w-3xl">
                            
                            <h2 className="mt-6 text-2xl sm:text-3xl md:text-5xl font-serif tracking-tight text-ink">
                                Built for every business,{" "}
                                <em className="font-serif-10 italic">tailored for yours.</em>
                            </h2>
                            <p className="mt-4 text-sm md:text-base text-ink-muted leading-relaxed max-w-2xl">
                                We don&apos;t use templates. Every industry has different workflows,
                                different customers, and different things to manage. We study
                                your business and build a website and dashboard that fits it precisely.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                            {INDUSTRIES.map((industry, idx) => (
                                <IndustryCard key={industry.name} industry={industry} index={idx} />
                            ))}
                        </div>
                    </motion.div>
                </Container>
            </Section>

            {/* ── Dashboard Showcase (Full) ── */}
            <div id="dashboard">
                <DashboardShowcaseFull />
            </div>

            {/* ── CTA ── */}
            <Section className="bg-paper py-20 md:py-28 border-b-0">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.5 }}
                        className="border border-grid/15 bg-white p-8 md:p-14 flex flex-col items-center text-center"
                    >
                        

                        <h2 className="mt-6 text-2xl sm:text-3xl md:text-5xl font-serif tracking-tight text-ink max-w-2xl">
                            Let&apos;s build something{" "}
                            <em className="font-serif-10 italic">worth showing off.</em>
                        </h2>

                        <p className="mt-4 text-sm text-ink-muted leading-relaxed max-w-lg">
                            Book a free strategy call. We&apos;ll review your business, scope the
                            right website, and show you exactly what a custom dashboard for your
                            industry would look like.
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <CalButton variant="primary" size="lg" className="sm:min-w-[200px]">
                                Start a Project
                            </CalButton>
                            <Button asChild variant="outline" size="lg" className="sm:min-w-[200px]">
                                <Link href="/pricing">
                                    View Pricing
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                </Container>
            </Section>
        </main>
    );
}
