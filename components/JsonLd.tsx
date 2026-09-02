import React from 'react';
import { clinicInfo } from '@/data/clinicInfo';
import { servicesData } from '@/data/services';
import { doctorsData } from '@/data/doctors';

export default function JsonLd() {
  const baseUrl = 'https://shekhardental.in';

  const doctorPrakashSchema = {
    '@context': 'https://schema.org',
    '@type': ['Physician', 'Person'],
    '@id': `${baseUrl}/#dr-prakash-thakur`,
    name: 'Dr. Prakash Thakur',
    alternateName: [
      'Doctor Prakash Thakur',
      'Prakash Thakur',
      'Dr Prakash Thakur',
      'Dr. Prakash Thakur Dentist',
      'Dr Prakash Thakur Dental Surgeon',
      'Doctor Prakash Thakur Shekhar Dental'
    ],
    jobTitle: 'Founder & Lead Dental Surgeon',
    worksFor: {
      '@type': 'Dentist',
      name: 'SHEKHAR DENTAL AND ORTHODONTIC CENTRE',
      url: baseUrl,
      telephone: '+919870294558'
    },
    medicalSpecialty: [
      'General Dentistry',
      'Dental Surgery',
      'Oral Rehabilitation',
      'Restorative Dentistry',
      'Dental Implants'
    ],
    knowsAbout: [
      'Dental Implants',
      'Rotary Root Canal Treatment',
      'Complex Rehabilitations',
      'Oral Surgery',
      'Smile Makeovers',
      'Zirconia Crowns'
    ],
    telephone: ['+919870294558', '+919667266301'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${clinicInfo.address.line1}, ${clinicInfo.address.line2}`,
      addressLocality: 'Sagarpur East, New Delhi',
      addressRegion: 'Delhi',
      postalCode: clinicInfo.address.postalCode,
      addressCountry: 'IN'
    },
    image: `${baseUrl}/images/mama.jpg`,
    url: `${baseUrl}/team`
  };

  const dentistSchema = {
    '@context': 'https://schema.org',
    '@type': ['Dentist', 'MedicalBusiness', 'LocalBusiness', 'HealthAndBeautyBusiness'],
    '@id': `${baseUrl}/#dentist`,
    name: 'SHEKHAR DENTAL AND ORTHODONTIC CENTRE',
    alternateName: [
      'SHEKHAR DENTAL AND ORTHODONTIC CENTER',
      'Shekhar Dental & Orthodontic Center',
      'Shekhar Dental Clinic',
      'Dr. Prakash Thakur Dental Clinic',
      'Doctor Prakash Thakur Clinic',
      'Prakash Thakur Dental Clinic',
      'shekhar dental and orthodentic center',
      'shekhar dental and orthodentic centre'
    ],
    legalName: 'SHEKHAR DENTAL AND ORTHODONTIC CENTRE',
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
    founder: {
      '@type': 'Person',
      '@id': `${baseUrl}/#dr-prakash-thakur`,
      name: 'Dr. Prakash Thakur',
      alternateName: ['Doctor Prakash Thakur', 'Prakash Thakur', 'Dr Prakash Thakur'],
      jobTitle: 'Founder & Lead Dental Surgeon',
      worksFor: { '@id': `${baseUrl}/#dentist` },
      description: 'Dr. Prakash Thakur is the Founder and Lead Dental Surgeon at SHEKHAR DENTAL AND ORTHODONTIC CENTRE with 15+ years of clinical dentistry expertise in Sagarpur, New Delhi.',
      telephone: '+919870294558'
    },
    employee: doctorsData.map((d) => ({
      '@type': 'Physician', name: d.name, jobTitle: d.role, description: d.description,
      medicalSpecialty: d.specialties.join(', '), worksFor: { '@id': `${baseUrl}/#dentist` }, knowsAbout: d.specialties
    })),
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '520', bestRating: '5', worstRating: '1' },
    review: [
      { '@type': 'Review', author: { '@type': 'Person', name: 'Rajesh Kumar' }, reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' }, reviewBody: 'Best dental clinic in Sagarpur! Dr. Prakash Thakur and team provide excellent dental care. Treatment was completely painless and results are amazing.', datePublished: '2024-08-10' },
      { '@type': 'Review', author: { '@type': 'Person', name: 'Priya Sharma' }, reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' }, reviewBody: 'Got my root canal done here by Doctor Prakash Thakur and team. Absolutely painless with rotary technique. Excellent hygiene standards.', datePublished: '2024-09-05' },
      { '@type': 'Review', author: { '@type': 'Person', name: 'Amit Verma' }, reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' }, reviewBody: 'Got dental implants here at Shekhar Dental & Orthodontic Center. Looks and feels just like natural teeth. Free Sunday checkup is a great community initiative.', datePublished: '2024-11-12' }
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
      { '@type': 'Question', name: 'Who is Doctor Prakash Thakur (Dr. Prakash Thakur)?', acceptedAnswer: { '@type': 'Answer', text: 'Dr. Prakash Thakur (Doctor Prakash Thakur) is the Founder & Lead Dental Surgeon at SHEKHAR DENTAL AND ORTHODONTIC CENTRE located in Sagarpur East, New Delhi. With over 15 years of clinical dental experience, Dr. Prakash Thakur specializes in dental implants, complex rehabilitations, oral surgery, and general dentistry.' } },
      { '@type': 'Question', name: 'Where is SHEKHAR DENTAL AND ORTHODONTIC CENTRE located in Delhi?', acceptedAnswer: { '@type': 'Answer', text: 'SHEKHAR DENTAL AND ORTHODONTIC CENTRE (Shekhar Dental Clinic) is located at 1G, RZ-20B, Kailashpuri Road, Near Baraat Ghar, Sant Mohalla, Sagarpur East, New Delhi, Delhi 110046, founded by Dr. Prakash Thakur. Call 098702 94558 or +91 96672 66301.' } },
      { '@type': 'Question', name: 'How can I book an appointment with Doctor Prakash Thakur?', acceptedAnswer: { '@type': 'Answer', text: 'You can book an appointment with Dr. Prakash Thakur (Doctor Prakash Thakur) online at https://shekhardental.in/appointment, or call 098702 94558 / +91 98702 94558, or WhatsApp +91 96672 66301.' } },
      { '@type': 'Question', name: 'What are the clinic timings of SHEKHAR DENTAL AND ORTHODONTIC CENTRE?', acceptedAnswer: { '@type': 'Answer', text: 'Monday to Saturday: Morning 10:00 AM to 12:00 PM and Evening 06:00 PM to 10:00 PM. Sundays: Free dental check-up by appointment, 10:00 AM to 1:00 PM.' } },
      { '@type': 'Question', name: 'Is there a free dental consultation available at Shekhar Dental?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Free Dental Check-ups every Sunday led by Dr. Prakash Thakur and our specialist team. Call 098702 94558 to book your free slot. Prior appointment recommended.' } },
      { '@type': 'Question', name: 'What treatments are offered at SHEKHAR DENTAL AND ORTHODONTIC CENTRE?', acceptedAnswer: { '@type': 'Answer', text: 'Dental Implants (Rs.25,000), Clear Aligners & Braces (Rs.30,000), Root Canal/RCT (Rs.2,500), Zirconia Crowns (Rs.5,000), Teeth Whitening (Rs.8,000), Scaling & Polishing (Rs.1,000), Wisdom Tooth Extraction (Rs.5,000), Complete Dentures (Rs.15,000).' } },
      { '@type': 'Question', name: 'Are dental treatments painless at Shekhar Dental Clinic?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. All procedures conducted by Dr. Prakash Thakur and team use modern computer-assisted local anesthesia, rotary instruments, and gentle dentistry protocols for a virtually pain-free experience.' } },
      { '@type': 'Question', name: 'How much does a dental implant cost at SHEKHAR DENTAL AND ORTHODONTIC CENTRE?', acceptedAnswer: { '@type': 'Answer', text: 'Single dental implant at Shekhar Dental costs Rs.25,000 including titanium post, abutment, and zirconia crown. Full-arch implant dentures start at Rs.2,00,000. No hidden charges.' } },
      { '@type': 'Question', name: 'How much does root canal treatment (RCT) cost in Sagarpur Delhi?', acceptedAnswer: { '@type': 'Answer', text: 'Root Canal Treatment at Shekhar Dental in Sagarpur costs Rs.2,500 per tooth using modern rotary Protaper instruments. A follow-up crown costs Rs.2,500 to Rs.5,000 additionally.' } },
      { '@type': 'Question', name: 'Are braces and clear aligners available at Shekhar Dental Clinic?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Metal braces, ceramic braces, and clear aligners from Rs.30,000. Specialist orthodontic consultations with Dr. Vivek Shekhar and Dr. Prakash Thakur.' } },
      { '@type': 'Question', name: 'Does SHEKHAR DENTAL AND ORTHODONTIC CENTRE provide emergency dental treatment?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Same-day emergency dental care for toothache, trauma, and abscess. Call 098702 94558. Evening hours until 10:00 PM.' } },
      { '@type': 'Question', name: 'What is the Google rating of SHEKHAR DENTAL AND ORTHODONTIC CENTRE?', acceptedAnswer: { '@type': 'Answer', text: 'SHEKHAR DENTAL AND ORTHODONTIC CENTRE holds a 4.5+ star Google rating from verified patient reviews, consistently ranked among the top dental clinics in Sagarpur and West Delhi.' } },
      { '@type': 'Question', name: 'Does Shekhar Dental Clinic accept UPI, Google Pay, or credit card?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Cash, UPI (Google Pay, PhonePe, Paytm), Credit/Debit Cards, Net Banking accepted. Transparent pricing, no hidden fees.' } },
      { '@type': 'Question', name: 'Who is the best dentist in Sagarpur Delhi?', acceptedAnswer: { '@type': 'Answer', text: 'Dr. Prakash Thakur at SHEKHAR DENTAL AND ORTHODONTIC CENTRE, Sagarpur East is widely regarded as one of the best dental surgeons in West Delhi with 15+ years of clinical experience.' } },
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
    name: 'What Happens During a Root Canal Treatment at SHEKHAR DENTAL AND ORTHODONTIC CENTRE?',
    description: 'Step-by-step guide to the painless rotary root canal procedure at SHEKHAR DENTAL AND ORTHODONTIC CENTRE, Sagarpur, Delhi, headed by Dr. Prakash Thakur.',
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
    name: 'How Are Dental Implants Placed at SHEKHAR DENTAL AND ORTHODONTIC CENTRE?',
    description: 'Complete dental implant procedure journey at SHEKHAR DENTAL AND ORTHODONTIC CENTRE, Sagarpur, Delhi with Dr. Prakash Thakur.',
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
    name: 'How Does Orthodontic Braces Treatment Work at SHEKHAR DENTAL AND ORTHODONTIC CENTRE?',
    description: 'Complete guide to braces and aligner treatment at SHEKHAR DENTAL AND ORTHODONTIC CENTRE, Sagarpur, Delhi.',
    totalTime: 'P18M',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'INR', value: '30000' },
    step: [
      { '@type': 'HowToStep', position: 1, name: 'Orthodontic Consultation & Records', text: 'Specialist orthodontist takes dental X-rays, photographs and study models to plan customized treatment.' },
      { '@type': 'HowToStep', position: 2, name: 'Bracket Bonding & Wire Placement', text: 'Brackets bonded to teeth; archwire threaded to begin gradual tooth movement.' },
      { '@type': 'HowToStep', position: 3, name: 'Monthly Adjustment Visits', text: 'Every 4-6 weeks wire tension adjusted to progressively guide teeth into ideal positions.' },
      { '@type': 'HowToStep', position: 4, name: 'Debonding & Retainer Fitting', text: 'Brackets removed once goals achieved; custom retainers maintain new positions permanently.' }
    ]
  };

  const sundayEventSchema = {
    '@context': 'https://schema.org', '@type': 'Event',
    name: 'Free Dental Check-up & Consultation - Every Sunday',
    description: 'SHEKHAR DENTAL AND ORTHODONTIC CENTRE offers free dental examinations, oral cancer screenings, and specialist consultations every Sunday morning led by Dr. Prakash Thakur. Prior appointment required.',
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place', name: 'SHEKHAR DENTAL AND ORTHODONTIC CENTRE',
      address: { '@type': 'PostalAddress', streetAddress: '1G, RZ-20B, Kailashpuri Road, Near Baraat Ghar, Sant Mohalla, Sagarpur East', addressLocality: 'New Delhi', addressRegion: 'Delhi', postalCode: '110046', addressCountry: 'IN' }
    },
    organizer: { '@type': 'Organization', name: 'SHEKHAR DENTAL AND ORTHODONTIC CENTRE', url: baseUrl },
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR', availability: 'https://schema.org/InStock', url: `${baseUrl}/appointment`, validFrom: '2024-01-01' },
    startDate: '2024-01-07T10:00:00+05:30',
    endDate: '2024-01-07T13:00:00+05:30',
    image: `${baseUrl}/logo.png`,
    isAccessibleForFree: true
  };

  const websiteSchema = {
    '@context': 'https://schema.org', '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    url: baseUrl, name: 'SHEKHAR DENTAL AND ORTHODONTIC CENTRE', description: 'Premier Dental Clinic in Sagarpur Delhi founded by Dr. Prakash Thakur',
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(doctorPrakashSchema) }} />
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
