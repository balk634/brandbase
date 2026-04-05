import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { OurProcess } from "@/components/sections/OurProcess";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seoMetadata";
import { CalButton } from "@/components/ui/CalBooking";

export const metadata = buildPageMetadata({
  title: "Our Process | BrandBase",
  description:
    "See BrandBase’s delivery process from strategy and design to launch, measurement, and ongoing growth.",
  path: "/process",
});

export default function ProcessPage() {

  return (
    <main className="relative">
      <Section className="py-16 md:py-24 bg-paper border-b border-grid/10">
        <Container>
 <h1 className="text-4xl md:text-6xl font-serif tracking-tighter max-w-3xl">
            A clear delivery process from first call to measurable <em className="font-serif-20 italic">growth.</em>
          </h1>
          <p className="mt-6 max-w-2xl text-sm md:text-base text-ink-muted leading-relaxed">
            Every project follows the same accountable framework: discovery,
            design and build, launch, then optimization. You always know what
            happens next and what outcome each phase is responsible for.
          </p>
        </Container>
      </Section>

      <OurProcess />

      <Section className="py-14 md:py-20 border-t border-grid/10">
        <Container>
          <div className="border border-grid/15 bg-white p-8 md:p-12 flex flex-col lg:flex-row gap-8 lg:items-center lg:justify-between">
            <div>
 <h2 className="text-2xl md:text-4xl font-serif tracking-tight text-ink">
                Want your project mapped to this <em className="font-serif-10 italic">process?</em>
              </h2>
              <p className="mt-3 text-sm md:text-base text-ink-muted max-w-2xl">
                Share your goals and timeline. We will recommend scope,
                milestones, and expected delivery windows in one call.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <CalButton variant="primary" size="lg" className="w-full sm:w-auto sm:min-w-[220px]">
                Book a call
              </CalButton>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto sm:min-w-[220px]">
                <Link href="/contact">Contact us</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}

