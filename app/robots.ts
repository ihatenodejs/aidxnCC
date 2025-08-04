import type { MetadataRoute } from 'next'

export const robots: MetadataRoute.Robots = {
  rules: {
    userAgent: '*',
    allow: '/',
  },
  sitemap: 'https://aidxn.cc/sitemap.xml',
}

export default function handler(): MetadataRoute.Robots {
  return robots
}