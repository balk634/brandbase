import { StandardFAQSection } from "@/components/sections/StandardFAQSection";

const items = [
  {
    q: "What does a typical engagement look like?",
    a: "Every project starts with a free strategy call. We learn your business, define scope, and deliver a tailored proposal - no templates, no generic packages. From there, you work directly with senior strategists and builders from brief to delivery.",
  },
  {
    q: "Do you work with startups or established businesses?",
    a: "Both. We've helped pre-revenue startups raise seed rounds and repositioned 15-year-old firms to dominate their market. The approach adapts to where you are; the standard doesn't.",
  },
  {
    q: "How is BrandBase different from a traditional agency?",
    a: "No layers of account managers. No inflated retainers. No offshore handoffs. You work directly with the people who built the strategy and wrote the code. We own the outcome from brief to delivery.",
  },
] as const;

export function ServicesFAQ() {
  return (
    <StandardFAQSection items={items} title="Quick\nAnswers." />
  );
}

