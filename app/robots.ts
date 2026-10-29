import { MetadataRoute } from 'next'
import { masterConfig } from '@/config/master'

export default function robots(): MetadataRoute.Robots {
    const baseUrl = masterConfig.metadata.baseUrl.replace(/\/+$/, '')
    const protectedPaths = ['/private/', '/admin/']
    const aiUserAgents = [
        'GPTBot',
        'ChatGPT-User',
        'PerplexityBot',
        'ClaudeBot',
        'anthropic-ai',
        'Google-Extended',
        'Bingbot',
    ]

    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: protectedPaths,
            },
            ...aiUserAgents.map((userAgent) => ({
                userAgent,
                allow: '/',
                disallow: protectedPaths,
            })),
            {
                userAgent: 'CCBot',
                disallow: '/',
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
    }
}
