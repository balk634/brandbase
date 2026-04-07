import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { blogPosts } from "@/lib/blogPosts";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { buildPageMetadata } from "@/lib/seoMetadata";
import { masterConfig } from "@/config/master";
import { Pagination } from "@/components/ui/Pagination";

export const metadata = buildPageMetadata({
  title: "BrandBase Blog | Website Strategy & Growth Marketing Playbooks",
  description:
    "Practical guides on website strategy, local SEO, paid ads, and conversion systems for high-growth brands and Indian SMBs. Learn how to scale your business today.",
  path: "/blog",
});

interface BlogPageProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams;
  const currentPage = Math.max(1, Number(params.page) || 1);
  const postsPerPage = 9;
  const totalPosts = blogPosts.length;
  const totalPages = Math.max(1, Math.ceil(totalPosts / postsPerPage));
  
  const currentPosts = blogPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

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
    blogPost: currentPosts.map((post) => ({
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
    itemListElement: currentPosts.map((post, index) => ({
      "@type": "ListItem",
      position: (currentPage - 1) * postsPerPage + index + 1,
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
          <div className="border border-grid/15 bg-white overflow-hidden shadow-sm">
            <div className="p-10 md:p-14 lg:p-16">
              <div className="text-center">
                <Kicker className="mx-auto">NEWSROOM & INSIGHTS</Kicker>
              </div>

              <h1 className="mt-8 text-center text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif-20 leading-[0.95] tracking-tighter text-ink max-w-4xl mx-auto">
                Practical guides that <em className="font-serif-10 italic">scale brands.</em>
              </h1>
              <p className="mt-8 text-center text-lg md:text-xl text-ink-muted leading-relaxed max-w-2xl mx-auto font-medium">
                Deep articles on conversion, local SEO, paid ads, and growth systems for serious Indian businesses.
              </p>
            </div>

            <div className="border-t border-grid/10 p-4 sm:p-6 md:p-8 lg:p-10 bg-paper/10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {currentPosts.map((post) => (
                  <div key={post.slug} className="group flex flex-col border border-grid/10 bg-white overflow-hidden transition-all duration-500 hover:border-grid/30 hover:shadow-xl hover:-translate-y-1">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="relative aspect-[16/10] overflow-hidden border-b border-grid/10"
                    >
                      {post.heroImage ? (
                        <Image
                          src={post.heroImage}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          priority={currentPosts.indexOf(post) < 3}
                        />
                      ) : (
                          <div className="w-full h-full bg-paper/40 flex items-center justify-center">
                              <span className="text-ink-muted text-xs font-mono tracking-widest uppercase opacity-40">BrandBase Blog</span>
                          </div>
                      )}
                    </Link>
                    <div className="p-6 md:p-8 flex flex-col flex-grow">
                      <div className="inline-flex items-center px-2.5 py-1 rounded border border-grid/15 bg-paper/50 text-[10px] font-mono uppercase tracking-[0.2em] text-ink-muted/80 w-fit">
                        {post.category}
                      </div>
                      <h2 className="mt-5 font-serif-10 text-xl md:text-2xl leading-tight tracking-tight text-ink group-hover:text-primary transition-colors duration-300">
                        <Link href={`/blog/${post.slug}`} className="hover:underline underline-offset-4 decoration-primary/20">
                          {post.title}
                        </Link>
                      </h2>
                      <p className="mt-4 text-sm text-ink-muted leading-relaxed line-clamp-3 font-normal opacity-85">
                        {post.description}
                      </p>
                      
                      <div className="mt-auto pt-8 flex items-center justify-between">
                         <Button asChild variant="link" size="sm" className="px-0 h-auto text-[11px] font-bold text-ink hover:text-primary transition-colors">
                             <Link href={`/blog/${post.slug}`}>READ POST</Link>
                         </Button>
                         <time className="text-[10px] font-mono text-ink-muted/50 uppercase tracking-tighter" dateTime={post.date}>
                             {new Date(post.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' })}
                         </time>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {totalPages > 1 && (
                <div className="mt-8 pt-8 border-t border-grid/5">
                  <Pagination 
                     currentPage={currentPage} 
                     totalPages={totalPages} 
                     baseUrl="/blog" 
                  />
                </div>
              )}
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
