import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { blogPosts } from "@/lib/blogPosts";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { buildPageMetadata } from "@/lib/seoMetadata";
import { masterConfig } from "@/config/master";

export const metadata = buildPageMetadata({
  title: "BrandBase Blog | Website & Growth Playbooks",
  description:
    "Practical guides on websites, local SEO, paid ads, and conversion systems for Indian SMBs and high-growth brands.",
  path: "/blog",
});

export default function BlogPage() {
  const baseUrl = masterConfig.metadata.baseUrl.replace(/\/+$/, "");
  const blogUrl = `${baseUrl}/blog`;
  const toAbsoluteUrl = (url: string) =>
    /^https?:\/\//i.test(url) ? url : `${baseUrl}${url.startsWith("/") ? url : `/${url}`}`;

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${blogUrl}#blog`,
    url: blogUrl,
    name: "BrandBase Blog",
    description: "Practical guides on websites, local SEO, paid ads, and conversion systems.",
    inLanguage: "en-IN",
    publisher: {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      name: "BrandBase",
      url: baseUrl,
    },
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      dateModified: post.date,
      url: `${baseUrl}/blog/${post.slug}`,
      image: toAbsoluteUrl(post.heroImage),
      author: {
        "@type": "Organization",
        name: "BrandBase",
      },
    })),
  };

  const blogItemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: blogPosts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${baseUrl}/blog/${post.slug}`,
      name: post.title,
    })),
  };

  return (
    <main className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([blogSchema, blogItemListSchema]).replace(/</g, "\\u003c"),
        }}
      />
      <Section className="bg-transparent">
        <Container>
          <div className="border border-grid/15 bg-white overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="text-center">
                <Kicker className="mx-auto text-[10px] md:text-xs px-4 py-2 bg-primary/5 border-primary/30 text-primary"> BLOG </Kicker>
              </div>

 <h1 className="mt-8 text-center text-3xl sm:text-4xl md:text-6xl font-serif-20 leading-[0.95] tracking-tighter text-ink">
                Guides that help you grow.
              </h1>
              <p className="mt-6 text-center text-lg md:text-xl text-ink-muted leading-relaxed max-w-3xl mx-auto">
                Deep, practical articles on websites, local search, content, and
                measurement. Written for Indian SMBs and serious brands.
              </p>
            </div>

            <div className="border-t border-grid/15 p-7 md:p-8">
              <div className="grid gap-4 md:grid-cols-2">
                {blogPosts.map((post) => (
                  <div key={post.slug} className="border border-grid/15 bg-white p-7 md:p-8">
                    <div className="grid grid-cols-12 gap-6 items-center">
                      <div className="col-span-12 lg:col-span-7 min-w-0">
                        <div className="inline-flex items-center px-3 py-1 rounded-full border border-grid/25 bg-paper/40 text-[10px] font-mono uppercase tracking-[0.35em] text-ink-muted">
                          {post.category}
                        </div>
 <h2 className="mt-4 font-serif-10 text-2xl md:text-3xl tracking-tight text-ink">
                          <Link
                            href={`/blog/${post.slug}`}
                            className="text-ink hover:text-ink underline-offset-4 hover:underline decoration-ink/30"
                          >
                            {post.title}
                          </Link>
                        </h2>
                        <p className="mt-3 text-sm text-ink-muted leading-relaxed">
                          {post.description}
                        </p>

                        <div className="mt-6 flex flex-wrap items-center gap-3">
                          <Button asChild variant="primary" size="sm">
                            <Link href={`/blog/${post.slug}`}>Read story</Link>
                          </Button>
                        </div>
                      </div>

                      <div className="col-span-12 lg:col-span-5 min-w-0">
                        <Link
                          href={`/blog/${post.slug}`}
                          aria-label={`Open article: ${post.title}`}
                          className="block relative border border-grid/15 bg-paper/40 aspect-[4/5] lg:aspect-square overflow-hidden"
                        >
                          {post.heroImage ? (
                            <Image
                              src={post.heroImage}
                              alt={post.title}
                              fill
                              className="object-cover"
                              sizes="(max-width: 1024px) 100vw, 420px"
                            />
                          ) : null}
                        </Link>
                      </div>
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

