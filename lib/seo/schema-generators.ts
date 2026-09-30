/**
 * Centralized Schema.org & JSON-LD Structured Data Generators
 * 
 * Ensures 100% synchronization between dynamic sitemap URLs, canonical tags,
 * and search engine rich-snippet markup.
 */

import { DentalService, getServiceSlug, getServiceUrl } from '@/data/services';
import { BlogPost, getBlogSlug, getBlogUrl } from '@/data/blogs';
import { clinicInfo } from '@/data/clinicInfo';
import { SITE_BASE_URL } from './sitemap-config';

export interface BreadcrumbItem {
  name: string;
  url: string; // Absolute or relative path
}

/**
 * Builds standard Schema.org BreadcrumbList markup
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[], baseUrl = SITE_BASE_URL) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => {
      const fullUrl = item.url.startsWith('http')
        ? item.url
        : `${baseUrl}${item.url.startsWith('/') ? '' : '/'}${item.url}`;
      return {
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: fullUrl,
      };
    }),
  };
}

/**
 * Builds Schema.org MedicalProcedure markup for any dental service,
 * bound directly to its customizable slug URL.
 */
export function generateServiceProcedureSchema(service: DentalService, baseUrl = SITE_BASE_URL) {
  const serviceSlug = getServiceSlug(service);
  const serviceUrl = getServiceUrl(service, baseUrl);
  const numericPrice = service.price.replace(/[^0-9]/g, '') || '1000';

  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    '@id': `${serviceUrl}#procedure`,
    name: service.name,
    description: service.fullDescription || service.shortDescription,
    procedureType: 'NoninvasiveProcedure',
    url: serviceUrl,
    offers: {
      '@type': 'Offer',
      price: numericPrice,
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      url: serviceUrl,
      validFrom: '2024-01-01',
    },
    provider: {
      '@type': 'Dentist',
      '@id': `${baseUrl}/#dentist`,
      name: 'Shekhar Dental Clinic',
      alternateName: 'SHEKHAR DENTAL AND ORTHODONTIC CENTRE',
      telephone: '+919870294558',
      url: baseUrl,
      address: {
        '@type': 'PostalAddress',
        streetAddress: `${clinicInfo.address.line1}, ${clinicInfo.address.line2}`,
        addressLocality: 'Sagarpur East, New Delhi',
        addressRegion: 'Delhi',
        postalCode: clinicInfo.address.postalCode,
        addressCountry: 'IN',
      },
    },
  };
}

/**
 * Builds Schema.org BlogPosting markup for blog posts,
 * maintaining synchronization with sitemap dateModified and customizable slugs.
 */
export function generateBlogPostSchema(post: BlogPost, baseUrl = SITE_BASE_URL) {
  const postUrl = getBlogUrl(post, baseUrl);
  const modifiedDate = post.updatedTime || post.publishedTime;

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${postUrl}#article`,
    headline: post.title,
    description: post.excerpt,
    url: postUrl,
    datePublished: post.publishedTime,
    dateModified: modifiedDate,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl,
    },
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.role,
      url: `${baseUrl}/team`,
    },
    publisher: {
      '@type': 'Dentist',
      '@id': `${baseUrl}/#dentist`,
      name: 'Shekhar Dental Clinic',
      url: baseUrl,
      logo: `${baseUrl}/logo.png`,
    },
    image: post.image.startsWith('http') ? post.image : `${baseUrl}${post.image}`,
  };
}
