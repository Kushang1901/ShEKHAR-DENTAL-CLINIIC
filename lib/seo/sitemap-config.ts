import { MetadataRoute } from 'next';
import { servicesData, getServiceSlug } from '@/data/services';
import { blogsData, getBlogSlug } from '@/data/blogs';
import { normalizeSlug } from '@/lib/seo/slug';

export const SITE_BASE_URL = 'https://shekhardental.in';

/**
 * Standardized SEO Priority Hierarchy
 * Follows search engine guidelines to indicate relative content weight.
 */
export const SITEMAP_PRIORITY = {
  /** Root home page - supreme authority node */
  ROOT: 1.0,
  /** High-intent transactional / conversion hubs (Services listing, Appointment booking) */
  HIGH_INTENT: 0.95,
  /** Pillar hubs & Popular flagship services (Implants, Braces, Zirconia, RCT, Clinic Info, Blog Hub) */
  PILLAR_OR_POPULAR: 0.90,
  /** Specialized dental procedures & authoritative clinical blog guides */
  SPECIALIZED_OR_ARTICLE: 0.85,
  /** Supplemental media content (Gallery, secondary pages) */
  SUPPLEMENTAL: 0.80,
  /** Compliance, legal, and operational documents */
  LEGAL_UTILITY: 0.30,
} as const;

export type SitemapChangeFreq =
  | 'always'
  | 'hourly'
  | 'daily'
  | 'weekly'
  | 'monthly'
  | 'yearly'
  | 'never';

export interface CustomSitemapRoute {
  /** Unique slug for the route (e.g. 'invisible-aligners-delhi' or 'pediatric-dentistry') */
  slug: string;
  /** Custom path if not directly under root (e.g. '/services/invisible-aligners-delhi') */
  path?: string;
  /** Explicit priority (0.0 to 1.0) */
  priority?: number;
  /** Change frequency */
  changeFrequency?: SitemapChangeFreq;
  /** Last modified timestamp or date */
  lastModified?: string | Date;
  /** Set true to prevent inclusion in sitemap */
  excludeFromSitemap?: boolean;
  /** Optional human-readable title */
  title?: string;
}

/**
 * Core static pages configuration with respected priorities and frequencies.
 */
const corePagesConfig: CustomSitemapRoute[] = [
  {
    slug: '',
    path: '/',
    priority: SITEMAP_PRIORITY.ROOT, // 1.0
    changeFrequency: 'weekly',
  },
  {
    slug: 'services',
    path: '/services',
    priority: SITEMAP_PRIORITY.HIGH_INTENT, // 0.95
    changeFrequency: 'weekly',
  },
  {
    slug: 'appointment',
    path: '/appointment',
    priority: SITEMAP_PRIORITY.HIGH_INTENT, // 0.95
    changeFrequency: 'weekly',
  },
  {
    slug: 'blog',
    path: '/blog',
    priority: SITEMAP_PRIORITY.PILLAR_OR_POPULAR, // 0.90
    changeFrequency: 'weekly',
  },
  {
    slug: 'about',
    path: '/about',
    priority: SITEMAP_PRIORITY.PILLAR_OR_POPULAR, // 0.90
    changeFrequency: 'monthly',
  },
  {
    slug: 'team',
    path: '/team',
    priority: SITEMAP_PRIORITY.PILLAR_OR_POPULAR, // 0.90
    changeFrequency: 'monthly',
  },
  {
    slug: 'contact',
    path: '/contact',
    priority: SITEMAP_PRIORITY.PILLAR_OR_POPULAR, // 0.90
    changeFrequency: 'monthly',
  },
  {
    slug: 'gallery',
    path: '/gallery',
    priority: SITEMAP_PRIORITY.SPECIALIZED_OR_ARTICLE, // 0.85
    changeFrequency: 'weekly',
  },
  {
    slug: 'privacy-policy',
    path: '/privacy-policy',
    priority: SITEMAP_PRIORITY.LEGAL_UTILITY, // 0.30
    changeFrequency: 'yearly',
  },
  {
    slug: 'terms',
    path: '/terms',
    priority: SITEMAP_PRIORITY.LEGAL_UTILITY, // 0.30
    changeFrequency: 'yearly',
  },
];

/**
 * In-memory registry for extensible dynamic routes.
 * Third-party plugins, landing page generators, or CMS feeds can register routes here.
 */
const customRouteRegistry: CustomSitemapRoute[] = [];

/**
 * Register a custom dynamic URL into the sitemap with customizable slug & priority.
 */
export function registerCustomRoute(route: CustomSitemapRoute): void {
  const sanitizedSlug = normalizeSlug(route.slug);
  const existingIdx = customRouteRegistry.findIndex(
    (r) => normalizeSlug(r.slug) === sanitizedSlug
  );

  const entry: CustomSitemapRoute = {
    ...route,
    slug: sanitizedSlug,
    path: route.path || `/${sanitizedSlug}`,
  };

  if (existingIdx >= 0) {
    customRouteRegistry[existingIdx] = entry;
  } else {
    customRouteRegistry.push(entry);
  }
}

/**
 * Generates the complete, dynamic, prioritized sitemap for Next.js MetadataRoute.
 * Deduplicates URLs and orders items by priority in descending order.
 */
export function generateDynamicSitemap(baseUrl = SITE_BASE_URL): MetadataRoute.Sitemap {
  // Dynamic baseline dates to prevent stale crawls
  const now = new Date();
  const defaultServicesDate = new Date('2025-05-15');
  const defaultCoreDate = new Date('2025-06-01');
  const defaultLegalDate = new Date('2024-12-01');

  // 1. Process Core Static Routes
  const coreEntries: MetadataRoute.Sitemap = corePagesConfig
    .filter((route) => !route.excludeFromSitemap)
    .map((route) => {
      const fullPath = route.path || (route.slug ? `/${route.slug}` : '');
      const isLegal = route.slug === 'privacy-policy' || route.slug === 'terms';
      const lastModified = route.lastModified
        ? new Date(route.lastModified)
        : isLegal
        ? defaultLegalDate
        : defaultCoreDate;

      return {
        url: `${baseUrl}${fullPath === '/' ? '' : fullPath}`,
        lastModified,
        changeFrequency: route.changeFrequency || 'weekly',
        priority: route.priority ?? SITEMAP_PRIORITY.PILLAR_OR_POPULAR,
      };
    });

  // 2. Process Dynamic Dental Services
  const serviceEntries: MetadataRoute.Sitemap = servicesData
    .filter((s) => !s.excludeFromSitemap)
    .map((s) => {
      const slug = getServiceSlug(s);
      const priority =
        s.priority ??
        (s.popular
          ? SITEMAP_PRIORITY.PILLAR_OR_POPULAR
          : SITEMAP_PRIORITY.SPECIALIZED_OR_ARTICLE);

      const lastModified = s.lastModified
        ? new Date(s.lastModified)
        : defaultServicesDate;

      return {
        url: `${baseUrl}/services/${slug}`,
        lastModified,
        changeFrequency: s.changeFrequency || 'monthly',
        priority,
      };
    });

  // 3. Process Dynamic Dental Health Blog Posts
  const blogEntries: MetadataRoute.Sitemap = blogsData
    .filter((b) => !b.excludeFromSitemap)
    .map((b) => {
      const slug = getBlogSlug(b);
      const priority = b.priority ?? SITEMAP_PRIORITY.SPECIALIZED_OR_ARTICLE;
      const lastModified = b.updatedTime
        ? new Date(b.updatedTime)
        : new Date(b.publishedTime);

      return {
        url: `${baseUrl}/blog/${slug}`,
        lastModified,
        changeFrequency: b.changeFrequency || 'monthly',
        priority,
      };
    });

  // 4. Process Any Custom Registered Dynamic URLs
  const customEntries: MetadataRoute.Sitemap = customRouteRegistry
    .filter((r) => !r.excludeFromSitemap)
    .map((r) => {
      const fullPath = r.path || `/${r.slug}`;
      const lastModified = r.lastModified ? new Date(r.lastModified) : now;

      return {
        url: `${baseUrl}${fullPath.startsWith('/') ? '' : '/'}${fullPath}`,
        lastModified,
        changeFrequency: r.changeFrequency || 'monthly',
        priority: r.priority ?? SITEMAP_PRIORITY.SPECIALIZED_OR_ARTICLE,
      };
    });

  // Combine all entries
  const allEntries = [
    ...coreEntries,
    ...serviceEntries,
    ...blogEntries,
    ...customEntries,
  ];

  // Deduplicate by URL (preserving first occurrence)
  const seenUrls = new Set<string>();
  const deduplicated: MetadataRoute.Sitemap = [];

  for (const entry of allEntries) {
    if (!seenUrls.has(entry.url)) {
      seenUrls.add(entry.url);
      deduplicated.push(entry);
    }
  }

  // Sort descending by priority (1.0 -> 0.3)
  return deduplicated.sort((a, b) => (b.priority ?? 0) - (a.priority ?? 0));
}
