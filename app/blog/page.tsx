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
      <Section className="bg-transparent border-b border-grid/10">
        <Container>
          <div className="border-x border-grid/10 bg-white">
            <div className="p-10 md:p-14 lg:p-20 text-center border-b border-grid/10">
              <Kicker className="mx-auto">NEWSROOM & INSIGHTS</Kicker>
              <h1 className="mt-10 text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-serif-10 leading-[0.85] tracking-tighter text-ink italic">
                Practical guides that <em className="font-serif-20 not-italic">scale.</em>
              </h1>
              <p className="mt-10 text-center text-lg md:text-xl text-ink-muted leading-relaxed max-w-2xl mx-auto font-medium">
                Deep articles on conversion, local SEO, paid ads, and growth systems for serious Indian businesses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 lg:divide-x divide-grid/10">
              {currentPosts.map((post, index) => (
                <article key={post.slug} className={cn(
                  "group flex flex-col bg-white transition-colors duration-500 hover:bg-paper/10",
                  index > 2 && "md:border-t lg:border-t-0", // Handle top border for subsequent rows
                  index % 3 !== 0 && "lg:border-l-0", // Grid lines are handled by divide-x
                  "border-grid/10"
                )}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="relative aspect-[16/10] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 border-b border-grid/10"
                  >
                    {post.heroImage ? (
                      <Image
                        src={post.heroImage}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        priority={currentPosts.indexOf(post) < 3}
                      />
                    ) : (
                      <div className="w-full h-full bg-paper/40 flex items-center justify-center">
                        <span className="text-ink-muted text-[10px] font-mono tracking-widest uppercase opacity-40">BrandBase Blog</span>
                      </div>
                    )}
                  </Link>
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-ink-muted/60 mb-5">
                      {post.category}
                    </div>
                    <h2 className="font-serif-10 text-2xl md:text-3xl leading-[1.1] tracking-tight text-ink group-hover:text-primary transition-colors duration-300">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>
                    <p className="mt-5 text-sm text-ink-muted/80 leading-relaxed line-clamp-3 font-normal">
                      {post.description}
                    </p>
                    
                    <div className="mt-auto pt-10 flex items-center justify-between">
                       <Button asChild variant="link" size="sm" className="px-0 h-auto text-[10px] font-mono font-bold tracking-widest text-ink hover:text-primary transition-colors uppercase">
                           <Link href={`/blog/${post.slug}`}>View Report</Link>
                       </Button>
                       <time className="text-[9px] font-mono text-ink-muted/40 uppercase tracking-widest" dateTime={post.date}>
                           {new Date(post.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'short' })}
                       </time>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="p-16 border-t border-grid/10 bg-paper/5">
              <Pagination 
                 currentPage={currentPage} 
                 totalPages={totalPages} 
                 baseUrl="/blog" 
              />
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
