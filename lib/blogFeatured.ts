export type FeaturedBlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  cardHeadline: string;
  heroImage: string;
};

export const featuredBlogPost: FeaturedBlogPost = {
  slug: "reduce-no-show-appointments-clinic",
  title: "How to Reduce No-Show Appointments in a Clinic Without Hiring More Staff",
  description:
    "Practical strategies for small Indian clinics to cut missed visits using smart reminders, queue discipline, and follow-up timing — no extra headcount needed.",
  category: "Clinic Operations",
  cardHeadline: "Cut no-shows without extra staff",
  heroImage:
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1800&q=80",
};
