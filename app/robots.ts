import { MetadataRoute } from 'next'
import { masterConfig } from '@/config/master'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/private/', '/admin/'],
        },
        sitemap: `${masterConfig.metadata.baseUrl}/sitemap.xml`,
    }
}
