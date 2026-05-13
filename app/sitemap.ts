import type { MetadataRoute } from 'next'

const baseUrl = 'https://frankmesa.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [{ url: `${baseUrl}/`, lastModified }]
}
