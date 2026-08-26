export interface CertificateItem {
  id: string;
  title: string;
  shortTitle: string;
  category: "all" | "council" | "implants" | "orthodontics" | "community" | "academic";
  categoryLabel: string;
  badge: string;
  authority: string;
  year?: string;
  image: string;
  description: string;
  highlights: string[];
}

export const certificateCategories = [
  { id: "all", label: "All Credentials (7)" },
  { id: "council", label: "State Council & Statutory" },
  { id: "implants", label: "Implantology" },
  { id: "orthodontics", label: "Aligners & Ortho" },
  { id: "community", label: "Community & Leadership" },
  { id: "academic", label: "Academic & Internship" }
] as const;

export const certificatesData: CertificateItem[] = [
  {
    id: "cert-1",
    title: "Delhi Dental Council Registration Certificate",
    shortTitle: "Delhi Dental Council Registration",
    category: "council",
    categoryLabel: "Council Registration",
    badge: "Official Council License",
    authority: "Delhi Dental Council (Govt. of NCT of Delhi)",
    image: "/certificates/1.jpeg",
    description: "Official statutory medical registration issued by the Delhi Dental Council, certifying legal authority and professional standing for comprehensive dental practice.",
    highlights: [
      "Authorized State Medical Dental License",
      "Compliant with Government Medical Standards",
      "Full Practice Verification & Good Standing"
    ]
  },
  {
    id: "cert-2",
    title: "Adin Dental Implants Certification — Delhi Roadshow 2016",
    shortTitle: "Adin Dental Implants Certification",
    category: "implants",
    categoryLabel: "Implantology Specialist",
    badge: "Advanced Implantology",
    authority: "Adin Dental Implant Systems",
    year: "2016",
    image: "/certificates/2.jpeg",
    description: "Certification for specialized clinical training and surgical excellence in modern titanium dental implants and prosthetic restorations at the Adin Roadshow Delhi 2016.",
    highlights: [
      "Advanced Surgical Implantology Protocol",
      "Precision Biocompatible Fixture Placement",
      "Immediate & Delayed Loading Prosthetics"
    ]
  },
  {
    id: "cert-3",
    title: "32 Watts Clear Aligners — Platinum Provider Certification",
    shortTitle: "32 Watts Clear Aligners Platinum Provider",
    category: "orthodontics",
    categoryLabel: "Orthodontics & Aligners",
    badge: "Platinum Provider",
    authority: "32 Watts Clear Aligners",
    image: "/certificates/3.jpeg",
    description: "Honored with the prestigious Platinum Provider status by 32 Watts for excellence in digital smile planning, custom invisible aligners, and patient orthodontic transformations.",
    highlights: [
      "Top-tier Platinum Provider Status",
      "Advanced 3D Digital Malocclusion Correction",
      "Certified Invisible Orthodontic Specialist"
    ]
  },
  {
    id: "cert-4",
    title: "Max Life Insurance — Premium Leader Recognition (March 2016)",
    shortTitle: "Max Life Insurance Leadership Honor",
    category: "community",
    categoryLabel: "Professional Distinction",
    badge: "Leadership Award",
    authority: "Max Life Insurance Co. Ltd.",
    year: "2016",
    image: "/certificates/4.jpeg",
    description: "Awarded as a Premium Leader in March 2016 for exceptional professional achievement, reliability, and distinguished healthcare leadership.",
    highlights: [
      "Exemplary Healthcare Leadership Distinction",
      "Recognition of High Professional Integrity",
      "Premium Achievement Award"
    ]
  },
  {
    id: "cert-5",
    title: "Colgate Oral Health Month — Free Dental Camp Recognition",
    shortTitle: "Colgate Free Dental Check-Up Camp",
    category: "community",
    categoryLabel: "Community Outreach",
    badge: "Community Oral Health",
    authority: "Colgate-Palmolive India & IDA",
    year: "2019",
    image: "/certificates/5.jpeg",
    description: "Certificate of Appreciation for dedicated service conducting Free Dental Health Check-up Programs in May 2019, educating the public on preventive oral hygiene.",
    highlights: [
      "Mass Oral Health Screening & Awareness",
      "Dedicated Preventive Healthcare Service",
      "Recognized by Colgate India"
    ]
  },
  {
    id: "cert-6",
    title: "Bachelor of Dental Surgery (BDS) — Degree, Internship & Conduct",
    shortTitle: "BDS Degree & Rotatory Internship",
    category: "academic",
    categoryLabel: "Academic Qualification",
    badge: "Academic Degree",
    authority: "Recognized Dental College & University",
    image: "/certificates/6.jpeg",
    description: "Comprehensive qualification credentials certifying completion of Bachelor of Dental Surgery (BDS), rigorous multi-department rotatory clinical internship, and exemplary moral conduct.",
    highlights: [
      "Complete BDS Degree & Passing Out Verification",
      "Comprehensive 1-Year Rotatory Clinical Internship",
      "Exemplary Professional Conduct Certified"
    ]
  },
  {
    id: "cert-7",
    title: "Delhi Dental Council — Statutory Dentist Act 1948 Certification",
    shortTitle: "Dentist Act 1948 Council Certificate",
    category: "council",
    categoryLabel: "Statutory Accreditation",
    badge: "Dentist Act 1948",
    authority: "Delhi Dental Council / Ministry of Health",
    image: "/certificates/7.jpeg",
    description: "Formal statutory registration granted under Part A of the Dentist Act 1948 by the Delhi Dental Council, validating full government accreditation.",
    highlights: [
      "Part A Registration under Dentist Act 1948",
      "Government Accredited Dental Practitioner",
      "Highest Level of Legal Practice Compliance"
    ]
  }
];
