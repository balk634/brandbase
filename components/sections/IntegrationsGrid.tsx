"use client";

import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { motion } from "@/components/ui/motion-lite";

export function IntegrationsGrid() {
    return (
        <section className="w-full bg-ink pt-0 pb-16 md:pb-24 relative z-10 overflow-hidden">
            <Container>
                <div className="pt-12 border-t border-white/10">
                    <div className="grid lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-5">
                            <div className="inline-flex items-center gap-2 border border-white/10 px-3 py-1.5 w-fit bg-white/5 mb-4">
                                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/50">INTEGRATIONS</span>
                            </div>
                            <h3 className="text-xl md:text-2xl font-serif text-white mb-3">
                                CRM, Data Management & Automations
                            </h3>
                            <p className="text-[13px] text-white/50 leading-relaxed">
                                We connect your website forms and lead flows directly into your customer databases, task trackers, and team workspaces. We configure native syncs for Zoho, HubSpot, Pipedrive, Notion, and ClickUp, with highly functional free tiers available to keep your monthly overhead at zero.
                            </p>
                        </div>
                        <div className="lg:col-span-7">
                            {/* Bento Outer Box */}
                            <div className="border border-white/5 bg-white overflow-hidden rounded-none">
                                {/* Top Row: 2 Items */}
                                <div className="grid grid-cols-2 divide-x divide-neutral-200 border-b border-neutral-200 bg-white">
                                    {[
                                        { name: "Zoho", logo: "/brandstrip/zoho.svg" },
                                        { name: "Notion", logo: "/brandstrip/notion.svg" },
                                    ].map((item) => (
                                        <div key={item.name} className="p-4 sm:p-8 flex flex-col items-center justify-center text-center group hover:bg-neutral-50 transition-colors duration-300">
                                            <div className="h-8 w-20 sm:h-12 sm:w-32 relative flex items-center justify-center">
                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                <img src={item.logo} alt={`${item.name} Integration`} className="max-h-full max-w-full object-contain" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {/* Bottom Row: 3 Items */}
                                <div className="grid grid-cols-3 divide-x divide-neutral-200 bg-white">
                                    {[
                                        { name: "HubSpot", logo: "/brandstrip/hubspot.svg" },
                                        { name: "Pipedrive", logo: "/brandstrip/pipedrive.svg" },
                                        { name: "ClickUp", logo: "/brandstrip/clickup.svg" },
                                    ].map((item) => (
                                        <div key={item.name} className="p-3 sm:p-6 flex flex-col items-center justify-center text-center group hover:bg-neutral-50 transition-colors duration-300">
                                            <div className="h-6 w-16 sm:h-10 sm:w-24 relative flex items-center justify-center">
                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                <img src={item.logo} alt={`${item.name} Integration`} className="max-h-full max-w-full object-contain" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
