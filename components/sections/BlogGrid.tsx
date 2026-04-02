import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { featuredBlogPost } from "@/lib/blogFeatured";
import Image from "next/image";

export function BlogGrid() {
  const featured = featuredBlogPost;

  return (
    <Section id="blog" className="bg-transparent">
      <Container>
        <div className="border border-grid/15 bg-white overflow-hidden">
          <div className="grid grid-cols-12 gap-0">
            <div className="col-span-12 lg:col-span-4 min-w-0 p-8 md:p-10 border-b border-grid/15 lg:border-b-0 lg:border-r">
              <Kicker>BLOG</Kicker>
              <h2
                className="mt-6 text-2xl sm:text-3xl md:text-5xl font-serif font-bold tracking-tight scroll-mt-20"
                id="blog-heading"
              >
                Playbooks built for growth in India.
              </h2>
              <p className="mt-4 text-ink-muted leading-relaxed">
                Deep, practical guides on websites, local search, paid ads, and
                content that turns attention into revenue.
              </p>
            </div>

            <div className="col-span-12 lg:col-span-8 min-w-0 relative p-7 md:p-8">
              {featured ? (
                <div className="border border-grid/15 bg-white p-7 md:p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
                    <div className="col-span-1 lg:col-span-7 min-w-0">
                      <div className="inline-flex items-center px-3 py-1 rounded-full border border-grid/25 bg-paper/40 text-[10px] font-mono uppercase tracking-[0.35em] text-ink-muted break-words">
                        {featured.category}
                      </div>
                      <h3 className="mt-4 font-sans text-2xl md:text-3xl font-semibold tracking-tight text-ink break-words">
                        <Link
                          href={`/blog/${featured.slug}`}
                          className="text-ink hover:text-ink underline-offset-4 hover:underline decoration-ink/30"
                        >
                          {featured.cardHeadline}
                        </Link>
                      </h3>
                      <p className="mt-3 text-sm text-ink-muted leading-relaxed">
                        {featured.description}
                      </p>

                      <div className="mt-6 flex flex-wrap items-center gap-3">
                        <Button asChild variant="primary" size="sm">
                          <Link href={`/blog/${featured.slug}`}>Read story</Link>
                        </Button>
                      </div>
                    </div>

                    <div className="col-span-1 lg:col-span-5 min-w-0">
                      <Link
                        href={`/blog/${featured.slug}`}
                        aria-label={`Open article: ${featured.title}`}
                        className="block relative border border-grid/15 bg-paper/40 aspect-[4/5] lg:aspect-square overflow-hidden"
                      >
                        {featured.heroImage ? (
                          <Image
                            src={featured.heroImage}
                            alt={featured.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 420px"
                          />
                        ) : null}
                      </Link>
                    </div>
                  </div>
                </div>
              ) : null}

              <div className="mt-6 flex justify-end lg:hidden">
                <Button asChild variant="outline" size="sm" className="gap-2 bg-white">
                  <Link href="/blog">View all stories →</Link>
                </Button>
              </div>

              <div className="hidden lg:flex absolute inset-y-0 right-0 w-44 md:w-48 bg-gradient-to-l from-white via-white to-transparent items-center justify-end pr-6 z-10">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="pointer-events-auto gap-2 bg-white"
                >
                  <Link href="/blog">View all stories →</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
