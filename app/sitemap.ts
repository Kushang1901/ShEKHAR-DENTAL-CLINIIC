import { MetadataRoute } from 'next';
import { servicesData } from '@/data/services';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://shekhardental.in';

  // Use static dates to prevent unnecessary recrawl churn
  const corePagesDate = new Date('2025-06-01');
  const servicesPagesDate = new Date('2025-05-15');
  const legalPagesDate = new Date('2024-12-01');
  const galleryDate = new Date('2025-07-01');

  const corePages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: corePagesDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: servicesPagesDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/appointment`,
      lastModified: corePagesDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: corePagesDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/team`,
      lastModified: corePagesDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: corePagesDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: galleryDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
  ];

  // Dedicated, crawlable service landing pages (no '#' fragments per Google sitemap standard)
  const servicePages: MetadataRoute.Sitemap = servicesData.map((s) => ({
    url: `${baseUrl}/services/${s.id}`,
    lastModified: servicesPagesDate,
    changeFrequency: 'monthly',
    priority: s.popular ? 0.9 : 0.85,
  }));

  const legalPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: legalPagesDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: legalPagesDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  return [...corePages, ...servicePages, ...legalPages];
}
