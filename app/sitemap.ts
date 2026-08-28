import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://shekhardental.in';

  // Use real static dates — avoids the 'lastModified: new Date()' anti-pattern
  // which causes Google to think content changes on every server restart
  const corePagesDate = new Date('2025-06-01');
  const servicesPagesDate = new Date('2025-05-15');
  const legalPagesDate = new Date('2024-12-01');
  const galleryDate = new Date('2025-07-01');

  return [
    // ── Core pages ──────────────────────────────────────────────────────────
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
      priority: 0.85,
    },
    {
      url: `${baseUrl}/team`,
      lastModified: corePagesDate,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: corePagesDate,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: galleryDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    // ── Individual service pages (deep links for Google indexing) ───────────
    {
      url: `${baseUrl}/services#dental-implants`,
      lastModified: servicesPagesDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services#root-canal-treatment`,
      lastModified: servicesPagesDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services#braces-treatment`,
      lastModified: servicesPagesDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services#zirconia-cap`,
      lastModified: servicesPagesDate,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/services#dental-bleach`,
      lastModified: servicesPagesDate,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/services#ultrasonic-scaling`,
      lastModified: servicesPagesDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services#surgical-wisdom-tooth`,
      lastModified: servicesPagesDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services#pfm-crown-bridges`,
      lastModified: servicesPagesDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services#composite-filling`,
      lastModified: servicesPagesDate,
      changeFrequency: 'monthly',
      priority: 0.65,
    },
    {
      url: `${baseUrl}/services#removable-dentures`,
      lastModified: servicesPagesDate,
      changeFrequency: 'monthly',
      priority: 0.65,
    },
    {
      url: `${baseUrl}/services#implant-based-dentures`,
      lastModified: servicesPagesDate,
      changeFrequency: 'monthly',
      priority: 0.65,
    },
    {
      url: `${baseUrl}/services#night-guard`,
      lastModified: servicesPagesDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },

    // ── Legal pages ─────────────────────────────────────────────────────────
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
}
