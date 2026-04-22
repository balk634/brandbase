import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

export function Purpose() {
    return (
        <Section className="py-12 bg-paper/50 border-t border-grid/5">
            <Container>
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary mb-4">Our Purpose</h2>
                    <p className="text-sm md:text-base text-ink-muted leading-relaxed">
                        BrandBase is a digital growth platform dedicated to helping businesses scale through high-performance websites and data-driven marketing. We simplify the path from visitor to customer with integrated tracking, conversion-first design, and transparent results.
                    </p>
                </div>
            </Container>
        </Section>
    );
}
