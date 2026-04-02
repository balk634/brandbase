import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

type FAQItem = {
  q: string;
  a: string;
};

type StandardFAQSectionProps = {
  items: readonly FAQItem[];
  title?: string;
  kicker?: string;
  className?: string;
  withBottomBorder?: boolean;
};

export function StandardFAQSection({
  items,
  title = "Common Questions.",
  kicker = "FAQ",
  className,
  withBottomBorder = false,
}: StandardFAQSectionProps) {
  const faqSchema =
    items.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: items.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.a,
            },
          })),
        }
      : null;

  return (
    <Section
      className={cn(
        "bg-transparent py-14 sm:py-16 md:py-20 relative z-10",
        withBottomBorder && "border-b border-grid/10",
        className
      )}
    >
      {faqSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }}
        />
      ) : null}
      <Container>
        <div className="border border-grid/15 bg-white">
          <div className="p-5 sm:p-6 md:p-8 border-b border-grid/15">
            <Kicker>{kicker}</Kicker>
 <h2 className="mt-4 text-xl sm:text-2xl md:text-3xl font-serif-10 tracking-tight">
              {title.split("\n").map((line, index) => (
                <span key={`${line}-${index}`}>
                  {index > 0 ? <br /> : null}
                  {line}
                </span>
              ))}
            </h2>
          </div>
          <div className="grid md:grid-cols-2">
            {items.map((item, i) => (
              <div
                key={item.q}
                className={cn(
                  "mi-row mi-row-faq p-4 sm:p-5 md:p-6 cursor-default border-t border-grid/15 first:border-t-0 md:[&:nth-child(-n+2)]:border-t-0",
                  "md:[&:nth-child(odd)]:border-r"
                )}
              >
                <h3 className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.22em] text-ink-muted mb-1.5 break-words">
                  {String(i + 1).padStart(2, "0")}
                  {" // "}
                  {item.q}
                </h3>
                <p className="font-sans text-[13px] sm:text-sm md:text-[15px] font-medium leading-relaxed pl-3 border-l-2 border-grid/20">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
