import { MetadataRoute } from "next";
import { masterConfig } from "@/config/master";
import { blogPosts } from "@/lib/blogPosts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = masterConfig.metadata.baseUrl;

  const datedPosts = blogPosts
    .map((post) => Date.parse(post.date))
    .filter((value) => Number.isFinite(value));
  const siteLastModified = datedPosts.length ? new Date(Math.max(...datedPosts)) : new Date();

  const staticPaths = new Set<string>();
  const addPath = (path: string) => {
    if (!path || typeof path !== "string") return;
    if (!path.startsWith("/")) return;
    const normalized = path !== "/" ? path.replace(/\/+$/, "") : "/";
    staticPaths.add(normalized);
  };

  addPath("/");
  addPath("/blog");
  addPath("/process");
  addPath("/pitchdecks");

  for (const item of masterConfig.navigation) {
    addPath(item.href);
    for (const sub of item.subItems ?? []) addPath(sub.href);
  }

  for (const col of masterConfig.footerColumns) {
    for (const link of col.links) addPath(link.href);
  }

  const staticRoutes = Array.from(staticPaths).map((path) => {
    const depth = path === "/" ? 0 : path.split("/").filter(Boolean).length;
    const priority = path === "/" ? 1 : depth === 1 ? 0.9 : 0.8;

    return {
      url: `${baseUrl}${path}`,
      lastModified: siteLastModified,
      changeFrequency: "weekly" as const,
      priority,
    };
  });

  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}
