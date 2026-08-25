export interface DoctorMember {
  id: string;
  name: string;
  role: string;
  experience: string;
  specialties: string[];
  description: string;
  image?: string;
  icon?: string;
}

export const doctorsData: DoctorMember[] = [
  {
    id: "dr-prakash-owner",
    name: "Dr. Prakash Thakur",
    role: "Founder & Lead Dental Surgeon",
    experience: "15+ Years",
    specialties: ["Practice Management", "General Dentistry", "Complex Rehabilitations", "Patient Care"],
    description: "Leading Shekhar Dental Clinic with over 15 years of clinical expertise, dedicated to bringing painless and world-class dental treatments to patients.",
    image: "/images/mama.jpg",
    icon: "crown"
  },
  {
    id: "dr-jitender",
    name: "Dr. Jitender",
    role: "Oral & Maxillofacial Surgeon",
    experience: "12+ Years",
    specialties: ["Oral Surgery", "Dental Implants", "Wisdom Teeth Impaction", "Maxillofacial Surgery"],
    description: "Specialist in advanced surgical procedures, complicated wisdom tooth extractions, and precision dental implant placements.",
    icon: "scalpel"
  },
  {
    id: "dr-vivek",
    name: "Dr. Vivek Shekhar",
    role: "Specialist Orthodontist",
    experience: "10+ Years",
    specialties: ["Braces Treatment", "Clear Aligners", "Bite Correction", "Jaw Alignment"],
    description: "Specialist in modern orthodontics, dedicated to creating aesthetic smiles and correcting malocclusion using cutting-edge ceramic brackets and invisible aligners.",
    image: "/gallery/dr.vivek.jpeg",
    icon: "teeth"
  },
  {
    id: "dr-tushar-kohli",
    name: "Dr. Tushar Kohli",
    role: "Endodontist & Root Canal Specialist",
    experience: "9+ Years",
    specialties: ["Rotary Root Canal Therapy", "Endodontic Surgery", "Pulp Treatment", "Tooth Preservation"],
    description: "Expert endodontist specializing in single-sitting painless root canals, re-RCT treatments, and tooth-saving micro-endodontic procedures.",
    icon: "heartbeat"
  },
  {
    id: "dr-prakash-consultant",
    name: "Dr. Prakash (Consultant)",
    role: "Senior Clinical Consultant",
    experience: "14+ Years",
    specialties: ["Treatment Planning", "Case Consultation", "Advanced Diagnostics", "Periodontal Care"],
    description: "Provides specialized guidance and comprehensive multidisciplinary treatment planning for intricate patient dental cases.",
    icon: "stethoscope"
  }
];

export const teamStats = [
  { value: "6+", label: "Expert Dentists & Specialists" },
  { value: "50+", label: "Years Combined Experience" },
  { value: "5,000+", label: "Patients Successfully Treated" },
  { value: "99%", label: "Patient Satisfaction Rate" }
];
