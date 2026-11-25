import { MetadataRoute } from 'next';
import { generateDynamicSitemap } from '@/lib/seo';

export const dynamic = 'force-dynamic';
export const revalidate = 3600; // revalidate every hour for fresh search engine crawling

/**
 * Dynamic Next.js Sitemap Generator
 * 
 * Automatically generates a fully dynamic, prioritized, and deduplicated XML sitemap
 * based on the single source of truth in `@/lib/seo` and project data sources.
 * 
 * - Respected priority hierarchy (1.0 -> 0.3)
 * - Dynamic custom slug resolution for all services & blogs
 * - Dynamic timestamps (lastModified) from real-time content update dates
 * - Canonical & Schema markup alignment
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return generateDynamicSitemap();
}

