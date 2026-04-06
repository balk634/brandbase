import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { Button } from "@/components/ui/Button";
import { IconArrowUpRight } from "@tabler/icons-react";
import { masterConfig } from "@/config/master";
import { buildPageMetadata } from "@/lib/seoMetadata";

export const metadata = buildPageMetadata({
    title: "Careers at BrandBase India | Join our High-Performance Agency",
    description:
        "Join BrandBase. We are currently hiring for design, engineering, and growth roles in Mumbai and globally. Join a team focused on conversion and craft.",
    path: "/careers",
});

export default function CareersPage() {
    return (
        <main className="relative pt-16 md:pt-24 pb-16 min-h-screen min-h-svh border-b border-grid/15">
            <Section className="pb-16 pt-12 md:pb-24 bg-transparent border-b border-grid/15">
                <Container>
                    <div className="max-w-4xl">
                        <Kicker>JOIN THE CRAFT</Kicker>
 <h1 className="mt-6 font-serif-20 text-4xl md:text-6xl tracking-tight leading-tight text-ink mb-8">
                            We&apos;re building the new standard for digital experiences.
                        </h1>
                        <p className="font-mono text-sm md:text-base text-ink-muted leading-relaxed max-w-2xl">
                            BrandBase is a fast-moving, design-led technology firm. We look for high-agency individuals who treat their work as a craft and thrive at the intersection of brand, product, and strategy.
                        </p>
                    </div>
                </Container>
            </Section>

            <Section className="py-16 md:py-24 bg-paper/50">
                <Container>
                    <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
                        <div className="w-full md:w-1/3">
                            <Kicker className="mb-4">OPEN ROLES</Kicker>
 <h2 className="font-serif-10 text-2xl md:text-3xl tracking-tight text-ink">
                                Currently hiring
                            </h2>
                            <p className="mt-4 font-mono text-sm text-ink-muted">
                                Don&apos;t see a fit? We&apos;re always looking for exceptional talent. Send your portfolio to <a href="mailto:careers@brandbase.in" className="text-primary hover:underline">careers@brandbase.in</a>.
                            </p>
                        </div>

                        <div className="w-full md:w-2/3">
                            <div className="border-t border-grid/15">
                                {masterConfig.careers.openRoles.map((job, idx) => (
                                    <div key={idx} className="group relative border-b border-grid/15 py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 px-4 -mx-4 hover:bg-white/40 transition-colors rounded-sm cursor-default">
                                        <div>
                                            <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-ink-muted mb-2">
                                                {job.department}
                                            </div>
 <h3 className="font-serif text-xl md:text-2xl text-ink group-hover:text-primary transition-colors">
                                                {job.title}
                                            </h3>
                                            <div className="mt-2 flex flex-wrap items-center gap-3 font-mono text-sm text-ink-muted">
                                                <span>{job.location}</span>
                                                <span className="h-1 w-1 rounded-full bg-grid/30" />
                                                <span>{job.type}</span>
                                            </div>
                                        </div>
                                        <div className="shrink-0 mt-4 sm:mt-0">
                                            <Button variant="outline" className="opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity bg-white">
                                                Apply Now <IconArrowUpRight className="ml-2 h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
        </main>
    );
}

