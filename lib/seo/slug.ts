/**
 * SEO-Friendly Slug Utilities
 * 
 * Provides robust slugification, sanitization, validation, and normalization
 * for dynamic URLs, sitemap entries, and structured markup.
 */

/**
 * Converts any arbitrary string title/name into a clean, URL-safe, SEO-friendly slug.
 * Example: "Dental Implants & Bone Grafting in Sagarpur, Delhi!" -> "dental-implants-bone-grafting-in-sagarpur-delhi"
 */
export function slugify(text: string): string {
  if (!text) return '';

  return text
    .toString()
    .normalize('NFD') // Decompose combined graphemes
    .replace(/[\u0300-\u036f]/g, '') // Remove accent marks
    .toLowerCase()
    .trim()
    .replace(/&+/g, '-and-') // Replace '&' with '-and-'
    .replace(/[^a-z0-9\s-]/g, '') // Remove non-alphanumeric chars except space and hyphen
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Collapse consecutive hyphens
    .replace(/^-+|-+$/g, ''); // Strip leading and trailing hyphens
}

/**
 * Validates whether a given slug conforms to standard URL-safe slug pattern.
 * e.g., "dental-implants", "root-canal-treatment-cost"
 */
export function isValidSlug(slug: string): boolean {
  if (!slug || typeof slug !== 'string') return false;
  const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
  return slugRegex.test(slug);
}

/**
 * Cleans and normalizes an existing slug input by trimming whitespace,
 * stripping surrounding slashes, and removing invalid characters.
 */
export function normalizeSlug(slug: string): string {
  if (!slug) return '';
  const trimmed = slug.trim().replace(/^\/+|\/+$/g, '');
  return slugify(trimmed);
}
