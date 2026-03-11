import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { masterConfig } from "@/config/master";
import { blogPosts, getBlogPost } from "@/lib/blogPosts";
import Image from "next/image";
import { buildPageMetadata } from "@/lib/seoMetadata";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) {
    return buildPageMetadata({
      title: "Nodecraft Blog",
      description: "Growth playbooks and practical website strategy guides from Nodecraft.",
      path: "/blog",
      noIndex: true,
    });
  }

  const pageMetadata = buildPageMetadata({
    title: `${post.title} | Nodecraft`,
    description: post.description,
    path: `/blog/${post.slug}`,
  });
  const baseUrl = masterConfig.metadata.baseUrl.replace(/\/+$/, "");
  const heroImageUrl = /^https?:\/\//i.test(post.heroImage)
    ? post.heroImage
    : `${baseUrl}${post.heroImage.startsWith("/") ? post.heroImage : `/${post.heroImage}`}`;

  return {
    ...pageMetadata,
    openGraph: {
      type: "article",
      url: `${baseUrl}/blog/${post.slug}`,
      siteName: masterConfig.metadata.openGraph.siteName,
      locale: masterConfig.metadata.openGraph.locale,
      title: `${post.title} | Nodecraft`,
      description: post.description,
      publishedTime: post.date,
      modifiedTime: post.date,
      section: post.category,
      tags: [post.category],
      images: [
        {
          url: heroImageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      ...masterConfig.metadata.twitter,
      title: `${post.title} | Nodecraft`,
      description: post.description,
      images: heroImageUrl,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();
  const baseUrl = masterConfig.metadata.baseUrl.replace(/\/+$/, "");
  const articleUrl = `${baseUrl}/blog/${post.slug}`;
  const heroImageUrl = /^https?:\/\//i.test(post.heroImage)
    ? post.heroImage
    : `${baseUrl}${post.heroImage.startsWith("/") ? post.heroImage : `/${post.heroImage}`}`;
  const articleWordCount = post.contentHtml
    .replace(/<[^>]+>/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${articleUrl}#article`,
    mainEntityOfPage: articleUrl,
    headline: post.title,
    description: post.description,
    image: [heroImageUrl],
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "en-IN",
    articleSection: post.category,
    wordCount: articleWordCount,
    author: {
      "@type": "Organization",
      name: "Nodecraft",
      url: baseUrl,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      name: "Nodecraft",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/brand/logo.svg`,
      },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${baseUrl}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: articleUrl,
      },
    ],
  };

  return (
    <main className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([blogPostingSchema, breadcrumbSchema]).replace(/</g, "\\u003c"),
        }}
      />
      <Section className="bg-transparent">
        <Container>
          <div className="border border-grid/15 bg-white overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="flex flex-row-reverse sm:flex-row items-center justify-end sm:justify-start gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/blog">Back to Blog</Link>
                </Button>
              </div>

              <div className="mt-10 grid lg:grid-cols-12 gap-10 items-end">
                <div className="lg:col-span-8 min-w-0">
                  <h1 className="text-3xl sm:text-4xl md:text-6xl font-sans font-bold leading-[0.95] tracking-tighter text-ink">
                    {post.title}
                  </h1>
                  <p className="mt-6 text-lg md:text-xl text-ink-muted leading-relaxed max-w-3xl">
                    {post.description}
                  </p>
                </div>

                <div className="lg:col-span-4 min-w-0">
                  <div className="border border-grid/15 bg-paper/40 p-6">
                    <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-ink-muted">
                      Topic
                    </div>
                    <div className="mt-4 font-sans font-semibold tracking-tight text-ink text-xl">
                      {post.category}
                    </div>
                    <div className="mt-6 border-t border-grid/15 pt-5">
                      <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-ink-muted">
                        Time to read
                      </div>
                      <div className="mt-2 text-sm text-ink">{post.readingTimeMinutes} min read</div>
                    </div>
                    <div className="mt-6 border-t border-grid/15 pt-5">
                      <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-ink-muted">
                        Posted
                      </div>
                      <div className="mt-2 text-sm text-ink">{post.date}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-grid/15 p-8 md:p-12">
              <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-ink-muted">
                Cover
              </div>
              <div className="mt-4 relative border border-grid/15 bg-paper/40 aspect-[16/10] md:aspect-[21/9] overflow-hidden">
                {post.heroImage ? (
                  <Image
                    src={post.heroImage}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 90vw"
                  />
                ) : null}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-transparent">
        <Container>
          <div className="border border-grid/15 bg-white p-7 md:p-10">
            <div
              className="rich-content w-full max-w-none"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />

            <div className="mt-10 flex justify-end">
              <Button asChild variant="primary" size="lg" className="w-full sm:w-auto sm:min-w-[260px]">
                {(() => {
                  const calendlyUrl = masterConfig.contact.calendlyUrl?.trim();
                  const isExternal = /^https?:\/\//i.test(calendlyUrl);
                  const href = calendlyUrl || "/contact";
                  return (
                    <Link 
                      href={href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noreferrer" : undefined}
                    >
                      Book a call
                    </Link>
                  );
                })()}
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}


