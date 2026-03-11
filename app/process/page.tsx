import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { buildPageMetadata } from "@/lib/seoMetadata";

export const metadata = buildPageMetadata({
  title: "Our Process | Nodecraft",
  description:
    "See Nodecraft’s delivery process from strategy and design to launch, measurement, and ongoing growth.",
  path: "/process",
});

export default function ProcessPage() {
  return (
    <main className="relative">
      <Section className="py-16 md:py-24 bg-paper">
        <Container>
          <h1 className="text-4xl md:text-6xl font-sans font-bold tracking-tighter">
            Process
          </h1>
        </Container>
      </Section>
    </main>
  );
}


