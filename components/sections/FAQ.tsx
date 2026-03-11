import { masterConfig } from "@/config/master";
import { StandardFAQSection } from "@/components/sections/StandardFAQSection";

export function FAQ() {
    const { faq } = masterConfig.sections;

    return (
        <StandardFAQSection items={faq} />
    );
}
