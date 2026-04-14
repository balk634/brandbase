import Link from "next/link";
import { masterConfig } from "@/config/master";
import Image from "next/image";
import { IconMail, IconPhone, IconMapPin } from "@tabler/icons-react";
import { LinkedInIcon, InstagramIcon } from "@/components/icons/BrandIcons";
import type { ComponentType } from "react";
import { WorldTimeBadgesLazy } from "@/components/ui/WorldTimeBadgesLazy";
import { FOOTER_COLUMNS } from "@/config/navigation";

export function Footer() {
    const year = new Date().getFullYear();
    type SocialKey = keyof typeof masterConfig.contact.social;
    const socialEntries = Object.entries(masterConfig.contact.social) as Array<[SocialKey, string]>;

    // Map social keys to icons
    const socialIcons: Record<SocialKey, ComponentType<{ className?: string }>> = {
        linkedin: LinkedInIcon,
        instagram: InstagramIcon,
    };

    return (
        <footer className="bg-primary text-white border-t border-white/5 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[720px] h-[320px] sm:w-[1000px] sm:h-[500px] bg-white/[0.03] blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px] relative z-10">
                {/* Top Logo Section */}
                <div className="w-full flex items-center justify-center py-16 sm:py-24 border-b border-white/10">
                    <Link href="/" className="w-full block hover:opacity-90 transition-opacity">
                        <img src="/brand/logo-light.svg" alt="BrandBase Logo" className="w-full h-auto" style={{ padding: '0px 30px' }} />
                    </Link>
                </div>

                {/* Main Footer Links */}
                <div className="flex flex-col lg:flex-row items-stretch divide-y lg:divide-y-0 lg:divide-x divide-white/10">
                    {/* Brand Col */}
                    <div className="w-full lg:w-1/3 flex flex-col p-4 sm:p-6 md:p-8 lg:p-12">
                        <div className="flex flex-col gap-6 sm:gap-8">
                            {/* Tagline */}
                            <p className="text-white/90 text-sm leading-relaxed max-w-sm">
                                Conversion-first websites with clean tracking and SEO foundations, then performance marketing that scales. Clear plan. Measurable results.
                            </p>

                            {/* Contact info */}
                            <div className="flex flex-col items-start gap-5">
                                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-white">
                                    <a href={`mailto:${masterConfig.contact.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
                                        <IconMail className="h-4 w-4 shrink-0 text-white" strokeWidth={1.5} />
                                        {masterConfig.contact.email}
                                    </a>
                                    <span className="w-px h-3 bg-white/20 hidden sm:block" />
                                    <a href={`tel:${masterConfig.contact.phone.replace(/\s+/g, '')}`} className="flex items-center gap-2 hover:text-white transition-colors">
                                        <IconPhone className="h-4 w-4 shrink-0 text-white" strokeWidth={1.5} />
                                        {masterConfig.contact.phone}
                                    </a>
                                </div>

                                <div className="flex items-start gap-2 text-[13px] text-white/90 leading-relaxed">
                                    <IconMapPin className="h-4 w-4 shrink-0 text-white mt-1" strokeWidth={1.5} />
                                    <span>
                                        {masterConfig.contact.address.street} {masterConfig.contact.address.locality}, {masterConfig.contact.address.city},<br />
                                        {masterConfig.contact.address.state} {masterConfig.contact.address.postalCode}, {masterConfig.contact.address.country}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {masterConfig.contact.socialMedia.enabled && (
                            <div className="w-full border-t border-white/10 pt-6 mt-8 flex flex-col gap-4">
                                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/60">Connect with us</span>
                                <div className="flex flex-wrap items-center gap-5">
                                    {socialEntries.map(([platform, url]) => {
                                        const Icon = socialIcons[platform];
                                        if (!Icon || !url) return null;
                                        return (
                                            <a
                                                key={platform}
                                                href={url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="mi-nav-item text-white/70 hover:text-white transition-colors"
                                                aria-label={platform}
                                            >
                                                <Icon className="h-5 w-5" />
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                        )}

                        {/* Copyright & GSTIN */}
                        <div className="w-full border-t border-white/10 pt-6 mt-8 flex flex-col gap-1.5">
                            <div className="text-[10px] sm:text-[11px] font-mono text-white/60 uppercase tracking-widest">
                                &copy; {year} BRANDBASE. ALL RIGHTS RESERVED.
                            </div>
                            <div className="text-[10px] sm:text-[11px] font-mono text-white/40 uppercase tracking-widest">
                                GSTIN: 10DHEPB0541R1ZN
                            </div>
                        </div>
                    </div>

                    {/* Links Grid & Time Badges */}
                    <div className="w-full lg:w-2/3 flex flex-col justify-between p-4 sm:p-6 md:p-8 lg:p-12 gap-10 lg:gap-16">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 lg:gap-y-12 w-full">
                            {FOOTER_COLUMNS.map((col) => (
                                <div key={col.title}>
                                    <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/85 mb-6">
                                        {col.title}
                                    </h3>
                                    <ul className="space-y-4 flex flex-col">
                                        {col.links.map((link) => (
                                            <li key={link.name}>
                                                <Link href={link.href} className="mi-link-inline footer-link text-sm text-white/90 hover:text-white transition-colors py-1 inline-block">
                                                    {link.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                        
                        {/* Time Badges */}
                        <div className="w-full flex justify-start sm:justify-end">
                            <WorldTimeBadgesLazy className="w-full sm:w-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
