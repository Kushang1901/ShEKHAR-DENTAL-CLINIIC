import React from 'react';
import { clinicInfo } from '@/data/clinicInfo';
import { servicesData } from '@/data/services';
import { doctorsData } from '@/data/doctors';

export default function JsonLd() {
  const baseUrl = 'https://shekhardental.in';

  // 1. LocalBusiness / Dentist / MedicalBusiness Schema
  const dentistSchema = {
    '@context': 'https://schema.org',
    '@type': ['Dentist', 'MedicalBusiness', 'LocalBusiness', 'HealthAndBeautyBusiness'],
    '@id': `${baseUrl}/#dentist`,
    name: clinicInfo.name,
    alternateName: [clinicInfo.shortName, 'Shekhar Dental Clinic', 'Shekhar Orthodontic Center Sagarpur'],
    legalName: clinicInfo.name,
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    image: [
      `${baseUrl}/background.png`,
      `${baseUrl}/logo.png`,
      `${baseUrl}/gallery/dental_procedure.png`,
      `${baseUrl}/gallery/implant_procedure.png`
    ],
    telephone: clinicInfo.phoneNumbers.map((p) => p.value),
    email: clinicInfo.email,
    priceRange: '₹₹',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, UPI, Credit Card, Debit Card, Net Banking, Google Pay, PhonePe, Paytm',
    hasMap: clinicInfo.googleMapsEmbedUrl,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${clinicInfo.address.line1}, ${clinicInfo.address.line2}`,
      addressLocality: 'Sagarpur East, New Delhi',
      addressRegion: 'Delhi',
      postalCode: clinicInfo.address.postalCode,
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 28.60339968540324,
      longitude: 77.10330537536841
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '10:00',
        closes: '12:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '18:00',
        closes: '22:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Sunday'],
        opens: '10:00',
        closes: '13:00',
        description: 'Free Dental Check-up Consultation (By Appointment)'
      }
    ],
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Sagarpur, New Delhi' },
      { '@type': 'AdministrativeArea', name: 'Sagarpur East, New Delhi' },
      { '@type': 'AdministrativeArea', name: 'Sagarpur West, New Delhi' },
      { '@type': 'AdministrativeArea', name: 'Kailashpuri, New Delhi' },
      { '@type': 'AdministrativeArea', name: 'Janakpuri, New Delhi' },
      { '@type': 'AdministrativeArea', name: 'Uttam Nagar, New Delhi' },
      { '@type': 'AdministrativeArea', name: 'Dwarka, New Delhi' },
      { '@type': 'AdministrativeArea', name: 'Palam, New Delhi' },
      { '@type': 'AdministrativeArea', name: 'Dashrathpuri, New Delhi' },
      { '@type': 'AdministrativeArea', name: 'Mayapuri, New Delhi' },
      { '@type': 'AdministrativeArea', name: 'West Delhi, Delhi' },
      { '@type': 'AdministrativeArea', name: 'South West Delhi, Delhi' }
    ],
    medicalSpecialty: [
      'Dentistry',
      'Orthodontics',
      'Endodontics',
      'Prosthodontics',
      'Periodontics',
      'OralAndMaxillofacialSurgery',
      'PediatricDentistry',
      'CosmeticDentistry'
    ],
    availableService: servicesData.map((s) => ({
      '@type': 'MedicalProcedure',
      name: s.name,
      description: s.fullDescription || s.shortDescription,
      procedureType: 'NoninvasiveProcedure',
      offers: {
        '@type': 'Offer',
        price: s.price.replace(/[^0-9]/g, '') || '1000',
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock',
        validFrom: '2024-01-01'
      }
    })),
    founder: {
      '@type': 'Person',
      name: clinicInfo.founder,
      jobTitle: 'Founder & Chief Orthodontist',
      worksFor: { '@id': `${baseUrl}/#dentist` },
      alumniOf: 'Dental Surgery & Orthodontics'
    },
    employee: doctorsData.map((d) => ({
      '@type': 'Physician',
      name: d.name,
      jobTitle: d.role,
      description: d.description,
      medicalSpecialty: d.specialties.join(', '),
      worksFor: { '@id': `${baseUrl}/#dentist` },
      knowsAbout: d.specialties
    })),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '520',
      bestRating: '5',
      worstRating: '1'
    },
    sameAs: [
      clinicInfo.socials.instagram,
      clinicInfo.socials.threads,
      'https://maps.app.goo.gl/PzB2t2M5oW9Q6K546'
    ]
  };

  // 2. AEO FAQ Schema (Optimized for Perplexity, ChatGPT, Google AI Overviews)
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Where is Shekhar Dental & Orthodontic Center located in Delhi?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Shekhar Dental & Orthodontic Center is located at 1G, RZ-20B, Kailashpuri Road, Near Baraat Ghar, Sant Mohalla, Sagarpur East, New Delhi, Delhi 110046. The clinic is easily accessible from Janakpuri, Uttam Nagar, Palam, and Dwarka.'
        }
      },
      {
        '@type': 'Question',
        name: 'What are the clinic timings of Shekhar Dental Clinic?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Shekhar Dental Clinic is open Monday to Saturday with dual shifts: Morning from 10:00 AM to 12:00 PM and Evening from 06:00 PM to 10:00 PM. On Sundays, free dental check-up consultations are available by appointment.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is there a free dental consultation available at Shekhar Dental?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, Shekhar Dental & Orthodontic Center provides Free Dental Check-ups every Sunday to promote oral healthcare awareness in the community. Prior appointment booking is recommended.'
        }
      },
      {
        '@type': 'Question',
        name: 'What treatments are offered at Shekhar Dental & Orthodontic Center?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Shekhar Dental Clinic provides comprehensive dental care including Dental Implants, Clear Aligners & Metal/Ceramic Braces, Single-Sitting Rotary Root Canal Treatment (RCT), Zirconia Aesthetic Crowns & Bridges, Laser Teeth Whitening, Ultrasonic Scaling & Polishing, Painless Wisdom Tooth Extraction, and Complete Dentures.'
        }
      },
      {
        '@type': 'Question',
        name: 'Are dental treatments painless at Shekhar Dental Clinic?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, all surgical, endodontic, and restorative procedures at Shekhar Dental Clinic utilize modern computer-assisted local anesthesia, rotary instrumentation, and gentle dentistry protocols to ensure a virtually pain-free experience.'
        }
      },
      {
        '@type': 'Question',
        name: 'How can I book an appointment with Dr. Vivek Shekhar?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can book an appointment online via our website at https://shekhardental.in/appointment, or by calling our clinic desk directly at +91 96672 66301 or +91 98702 94558.'
        }
      }
    ]
  };

  // 3. WebSite & Sitelinks Search Schema
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    url: baseUrl,
    name: clinicInfo.name,
    description: clinicInfo.tagline,
    publisher: { '@id': `${baseUrl}/#dentist` },
    inLanguage: 'en-IN'
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dentistSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
