import React from 'react';
import { clinicInfo } from '@/data/clinicInfo';
import { servicesData } from '@/data/services';
import { doctorsData } from '@/data/doctors';

export default function JsonLd() {
  const baseUrl = 'https://shekhardental.in';

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
      `${baseUrl}/background.png`, `${baseUrl}/logo.png`,
      `${baseUrl}/gallery/dental_procedure.png`, `${baseUrl}/gallery/implant_procedure.png`,
      `${baseUrl}/gallery/orthodontic.png`, `${baseUrl}/gallery/cosmetic.png`
    ],
    telephone: clinicInfo.phoneNumbers.map((p) => p.value),
    email: clinicInfo.email,
    priceRange: 'RUPEE RUPEE',
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
    geo: { '@type': 'GeoCoordinates', latitude: 28.60339968540324, longitude: 77.10330537536841 },
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'], opens: '10:00', closes: '12:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'], opens: '18:00', closes: '22:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Sunday'], opens: '10:00', closes: '13:00', description: 'Free Dental Check-up Consultation (By Appointment)' }
    ],
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Sagarpur, New Delhi' },
      { '@type': 'AdministrativeArea', name: 'Sagarpur East, New Delhi' },
      { '@type': 'AdministrativeArea', name: 'Janakpuri, New Delhi' },
      { '@type': 'AdministrativeArea', name: 'Uttam Nagar, New Delhi' },
      { '@type': 'AdministrativeArea', name: 'Dwarka, New Delhi' },
      { '@type': 'AdministrativeArea', name: 'Palam, New Delhi' },
      { '@type': 'AdministrativeArea', name: 'West Delhi, Delhi' }
    ],
    medicalSpecialty: ['Dentistry','Orthodontics','Endodontics','Prosthodontics','Periodontics','OralAndMaxillofacialSurgery','PediatricDentistry','CosmeticDentistry'],
    knowsAbout: ['Dental Implants','Orthodontic Braces','Clear Aligners','Root Canal Treatment','Zirconia Crowns','Teeth Whitening','Wisdom Tooth Extraction','Dental Scaling','Smile Makeover','Dentures','Pediatric Dentistry','Cosmetic Dentistry'],
    availableService: servicesData.map((s) => ({
      '@type': 'MedicalProcedure',
      name: s.name,
      description: s.fullDescription || s.shortDescription,
      procedureType: 'NoninvasiveProcedure',
      offers: { '@type': 'Offer', price: s.price.replace(/[^0-9]/g, '') || '1000', priceCurrency: 'INR', availability: 'https://schema.org/InStock', validFrom: '2024-01-01' }
    })),
    founder: { '@type': 'Person', name: clinicInfo.founder, jobTitle: 'Founder & Chief Orthodontist', worksFor: { '@id': `${baseUrl}/#dentist` } },
    employee: doctorsData.map((d) => ({
      '@type': 'Physician', name: d.name, jobTitle: d.role, description: d.description,
      medicalSpecialty: d.specialties.join(', '), worksFor: { '@id': `${baseUrl}/#dentist` }, knowsAbout: d.specialties
    })),
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '520', bestRating: '5', worstRating: '1' },
    review: [
      { '@type': 'Review', author: { '@type': 'Person', name: 'Rajesh Kumar' }, reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' }, reviewBody: 'Best dental clinic in Sagarpur! Dr. Vivek Shekhar is an excellent orthodontist. Braces treatment was completely painless and results are amazing.', datePublished: '2024-08-10' },
      { '@type': 'Review', author: { '@type': 'Person', name: 'Priya Sharma' }, reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' }, reviewBody: 'Got my root canal done here. Absolutely painless with rotary technique. Excellent hygiene standards.', datePublished: '2024-09-05' },
      { '@type': 'Review', author: { '@type': 'Person', name: 'Amit Verma' }, reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' }, reviewBody: 'Got dental implants here. Looks and feels just like natural teeth. Free Sunday checkup is a great community initiative.', datePublished: '2024-11-12' }
    ],
    sameAs: [
      clinicInfo.socials.instagram, clinicInfo.socials.threads,
      'https://maps.app.goo.gl/PzB2t2M5oW9Q6K546',
      'https://www.google.com/maps/place/SHEKHAR+DENTAL+AND+ORTHODONTIC+CENTRE',
      'https://www.justdial.com', 'https://www.practo.com', 'https://www.sulekha.com'
    ]
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Where is Shekhar Dental & Orthodontic Center located in Delhi?', acceptedAnswer: { '@type': 'Answer', text: 'Shekhar Dental & Orthodontic Center is located at 1G, RZ-20B, Kailashpuri Road, Near Baraat Ghar, Sant Mohalla, Sagarpur East, New Delhi, Delhi 110046. Easily accessible from Janakpuri, Uttam Nagar, Palam, and Dwarka.' } },
      { '@type': 'Question', name: 'What are the clinic timings of Shekhar Dental Clinic?', acceptedAnswer: { '@type': 'Answer', text: 'Monday to Saturday: Morning 10:00 AM to 12:00 PM and Evening 06:00 PM to 10:00 PM. Sundays: Free dental check-up by appointment, 10:00 AM to 1:00 PM.' } },
      { '@type': 'Question', name: 'Is there a free dental consultation available at Shekhar Dental?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Free Dental Check-ups every Sunday. Call +91 96672 66301 to book your free slot. Prior appointment recommended.' } },
      { '@type': 'Question', name: 'What treatments are offered at Shekhar Dental & Orthodontic Center?', acceptedAnswer: { '@type': 'Answer', text: 'Dental Implants (Rs.25,000), Clear Aligners & Braces (Rs.30,000), Root Canal/RCT (Rs.2,500), Zirconia Crowns (Rs.5,000), Teeth Whitening (Rs.8,000), Scaling & Polishing (Rs.1,000), Wisdom Tooth Extraction (Rs.5,000), Complete Dentures (Rs.15,000).' } },
      { '@type': 'Question', name: 'Are dental treatments painless at Shekhar Dental Clinic?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. All procedures use modern computer-assisted local anesthesia, rotary instruments, and gentle dentistry protocols for a virtually pain-free experience.' } },
      { '@type': 'Question', name: 'How can I book an appointment with Dr. Vivek Shekhar?', acceptedAnswer: { '@type': 'Answer', text: 'Book online at https://shekhardental.in/appointment, call +91 96672 66301 or +91 98702 94558, or WhatsApp +91 96672 66301.' } },
      { '@type': 'Question', name: 'How much does a dental implant cost at Shekhar Dental Clinic?', acceptedAnswer: { '@type': 'Answer', text: 'Single dental implant at Shekhar Dental costs Rs.25,000 including titanium post, abutment, and zirconia crown. Full-arch implant dentures start at Rs.2,00,000. No hidden charges.' } },
      { '@type': 'Question', name: 'How much does root canal treatment (RCT) cost in Sagarpur Delhi?', acceptedAnswer: { '@type': 'Answer', text: 'Root Canal Treatment at Shekhar Dental in Sagarpur costs Rs.2,500 per tooth using modern rotary Protaper instruments. A follow-up crown costs Rs.2,500 to Rs.5,000 additionally.' } },
      { '@type': 'Question', name: 'Are braces and clear aligners available at Shekhar Dental Clinic?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Metal braces, ceramic braces, and clear aligners from Rs.30,000. Dr. Vivek Shekhar is a specialist orthodontist with 10+ years of experience.' } },
      { '@type': 'Question', name: 'Does Shekhar Dental Clinic provide emergency dental treatment?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Same-day emergency dental care for toothache, trauma, and abscess. Call +91 96672 66301. Evening hours until 10:00 PM.' } },
      { '@type': 'Question', name: 'What is the Google rating of Shekhar Dental & Orthodontic Center?', acceptedAnswer: { '@type': 'Answer', text: 'Shekhar Dental holds a 4.9-star Google rating from 520+ verified patient reviews, consistently ranked top dental clinic in Sagarpur and West Delhi.' } },
      { '@type': 'Question', name: 'Does Shekhar Dental Clinic accept UPI, Google Pay, or credit card?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Cash, UPI (Google Pay, PhonePe, Paytm), Credit/Debit Cards, Net Banking accepted. Transparent pricing, no hidden fees.' } },
      { '@type': 'Question', name: 'Who is the best orthodontist in Sagarpur Delhi?', acceptedAnswer: { '@type': 'Answer', text: 'Dr. Vivek Shekhar at Shekhar Dental & Orthodontic Center, Sagarpur East is widely regarded as one of the best orthodontists in West Delhi with 10+ years of experience.' } },
      { '@type': 'Question', name: 'How long does teeth whitening last at Shekhar Dental?', acceptedAnswer: { '@type': 'Answer', text: 'Professional laser teeth whitening lasts 6 months to 2 years. Cost is Rs.8,000 for a 45-minute in-clinic procedure with instant visible results.' } },
      { '@type': 'Question', name: 'What is the cost of wisdom tooth removal at Shekhar Dental Clinic?', acceptedAnswer: { '@type': 'Answer', text: 'Surgical wisdom tooth removal costs Rs.5,000 per tooth using minimally invasive techniques under local anesthesia. Complete post-operative care included.' } },
      { '@type': 'Question', name: 'What are Zirconia caps and how much do they cost?', acceptedAnswer: { '@type': 'Answer', text: 'Zirconia caps are 100% metal-free biocompatible dental crowns costing Rs.5,000 per tooth. Superior aesthetics, natural translucency, and high fracture resistance.' } },
      { '@type': 'Question', name: 'Is Shekhar Dental Clinic good for children?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Pediatric dental care including milk tooth fillings, fluoride treatments, sealants, extractions, and early orthodontic screening in a child-friendly environment.' } },
      { '@type': 'Question', name: 'How do I reach Shekhar Dental Clinic from Janakpuri or Dwarka?', acceptedAnswer: { '@type': 'Answer', text: 'Reachable from Janakpuri (10 min), Dwarka (15 min), Uttam Nagar (8 min), Palam (12 min) via Palam Road and Kailashpuri Road. Near Sagarpur Metro Bus Stop.' } },
      { '@type': 'Question', name: 'Does Shekhar Dental maintain proper sterilization standards?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Class B autoclave sterilization, single-use disposable instruments, UV sterilized operatory, ISO-standard protocols, and individually sealed sterile kits per patient.' } },
      { '@type': 'Question', name: 'What is the difference between PFM crowns and Zirconia crowns?', acceptedAnswer: { '@type': 'Answer', text: 'PFM crowns cost Rs.2,500 per cap with metal substructure and porcelain overlay. Zirconia crowns cost Rs.5,000 per cap, 100% metal-free with superior translucency and biocompatibility, ideal for front teeth.' } }
    ]
  };

  const howToRCT = {
    '@context': 'https://schema.org', '@type': 'HowTo',
    name: 'What Happens During a Root Canal Treatment at Shekhar Dental Clinic?',
    description: 'Step-by-step guide to the painless rotary root canal procedure at Shekhar Dental & Orthodontic Center, Sagarpur, Delhi.',
    totalTime: 'PT60M',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'INR', value: '2500' },
    step: [
      { '@type': 'HowToStep', position: 1, name: 'Initial X-Ray & Diagnosis', text: 'Digital X-ray assesses infection extent and root canal anatomy. Diagnosis confirmed and procedure explained.' },
      { '@type': 'HowToStep', position: 2, name: 'Local Anesthesia', text: 'Computer-controlled local anesthesia ensures a completely pain-free procedure.' },
      { '@type': 'HowToStep', position: 3, name: 'Rubber Dam Isolation', text: 'Rubber dam isolates the tooth, keeping it dry and contamination-free during treatment.' },
      { '@type': 'HowToStep', position: 4, name: 'Rotary Instrumentation & Canal Cleaning', text: 'Protaper rotary files remove infected pulp; canals irrigated with sodium hypochlorite for disinfection.' },
      { '@type': 'HowToStep', position: 5, name: 'Obturation', text: 'Canals filled with biocompatible gutta-percha and sealed with endodontic sealer.' },
      { '@type': 'HowToStep', position: 6, name: 'Crown Placement', text: 'A Zirconia or PFM crown restores full biting strength and protects the treated tooth.' }
    ]
  };

  const howToImplant = {
    '@context': 'https://schema.org', '@type': 'HowTo',
    name: 'How Are Dental Implants Placed at Shekhar Dental & Orthodontic Center?',
    description: 'Complete dental implant procedure journey at Shekhar Dental Clinic, Sagarpur, Delhi.',
    totalTime: 'P3M',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'INR', value: '25000' },
    step: [
      { '@type': 'HowToStep', position: 1, name: 'Consultation & CBCT Scan', text: 'Oral examination and 3D CBCT scan assess bone density for precise implant planning.' },
      { '@type': 'HowToStep', position: 2, name: 'Titanium Implant Placement', text: 'Under local anesthesia, a biocompatible titanium post is surgically placed into the jawbone.' },
      { '@type': 'HowToStep', position: 3, name: 'Osseointegration Healing', text: 'Over 2-3 months the implant fuses with jawbone, creating a permanent stable foundation.' },
      { '@type': 'HowToStep', position: 4, name: 'Abutment Placement', text: 'A connector abutment is attached to the implant to support the final crown.' },
      { '@type': 'HowToStep', position: 5, name: 'Zirconia Crown Fitting', text: 'A custom zirconia crown is fitted matching exact tooth shade for a seamless, lifelike result.' }
    ]
  };

  const howToBraces = {
    '@context': 'https://schema.org', '@type': 'HowTo',
    name: 'How Does Orthodontic Braces Treatment Work at Shekhar Dental Clinic?',
    description: 'Complete guide to the braces and aligner treatment journey at Shekhar Dental & Orthodontic Center, Sagarpur, Delhi.',
    totalTime: 'P18M',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'INR', value: '30000' },
    step: [
      { '@type': 'HowToStep', position: 1, name: 'Orthodontic Consultation & Records', text: 'Dr. Vivek Shekhar takes dental X-rays, photographs and study models to plan customized treatment.' },
      { '@type': 'HowToStep', position: 2, name: 'Bracket Bonding & Wire Placement', text: 'Brackets bonded to teeth; archwire threaded to begin gradual tooth movement.' },
      { '@type': 'HowToStep', position: 3, name: 'Monthly Adjustment Visits', text: 'Every 4-6 weeks wire tension adjusted to progressively guide teeth into ideal positions.' },
      { '@type': 'HowToStep', position: 4, name: 'Debonding & Retainer Fitting', text: 'Brackets removed once goals achieved; custom retainers maintain new positions permanently.' }
    ]
  };

  const sundayEventSchema = {
    '@context': 'https://schema.org', '@type': 'Event',
    name: 'Free Dental Check-up & Consultation - Every Sunday',
    description: 'Shekhar Dental & Orthodontic Center offers free dental examinations, oral cancer screenings, and specialist consultations every Sunday morning. Prior appointment required.',
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place', name: 'Shekhar Dental & Orthodontic Center',
      address: { '@type': 'PostalAddress', streetAddress: '1G, RZ-20B, Kailashpuri Road, Near Baraat Ghar, Sant Mohalla, Sagarpur East', addressLocality: 'New Delhi', addressRegion: 'Delhi', postalCode: '110046', addressCountry: 'IN' }
    },
    organizer: { '@type': 'Organization', name: clinicInfo.name, url: baseUrl },
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR', availability: 'https://schema.org/InStock', url: `${baseUrl}/appointment`, validFrom: '2024-01-01' },
    startDate: '2024-01-07T10:00:00+05:30',
    endDate: '2024-01-07T13:00:00+05:30',
    image: `${baseUrl}/logo.png`,
    isAccessibleForFree: true
  };

  const websiteSchema = {
    '@context': 'https://schema.org', '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    url: baseUrl, name: clinicInfo.name, description: clinicInfo.tagline,
    publisher: { '@id': `${baseUrl}/#dentist` },
    inLanguage: 'en-IN',
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: `${baseUrl}/?s={search_term_string}` },
      'query-input': 'required name=search_term_string'
    },
    speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2', '.section-header p'] }
  };

  const homeBreadcrumb = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl }]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dentistSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToRCT) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToImplant) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToBraces) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sundayEventSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeBreadcrumb) }} />
    </>
  );
}
