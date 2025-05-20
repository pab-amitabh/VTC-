import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/private/',
        '/admin/',
      ],
    },
    sitemap: 'https://your-domain.com/sitemap.xml', // Replace with your actual domain
  }
} 