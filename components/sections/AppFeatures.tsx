import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

export function AppFeatures() {
  const features = [
    {
      title: "Website Development",
      description: "Build high-performance, conversion-first websites with clean code and modern frameworks."
    },
    {
      title: "SEO Services",
      description: "Optimize your website for search engines with technical SEO and content strategies."
    },
    {
      title: "Performance Marketing",
      description: "Run data-driven ad campaigns on Meta and Google to scale customer acquisition."
    },
    {
      title: "Analytics & Tracking",
      description: "Integrated analytics setup to measure conversions and ROI across all channels."
    }
  ];

  return (
    <Section className="py-16 bg-paper border-t border-grid/10">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-serif text-ink mb-8">Application Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-white border border-grid/10 rounded-lg">
                <h3 className="font-mono text-sm uppercase tracking-wider text-primary mb-2">{feature.title}</h3>
                <p className="text-sm text-ink-muted">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
