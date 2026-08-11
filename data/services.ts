export interface DentalService {
  id: string;
  name: string;
  price: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  features: string[];
  popular?: boolean;
}

export const servicesData: DentalService[] = [
  {
    id: "dental-implants",
    name: "Dental Implants",
    price: "₹25,000",
    shortDescription: "Permanent solution for missing teeth with biocompatible titanium implants.",
    fullDescription: "Permanent solution for missing teeth with titanium implants that integrate with your jawbone. Restore your smile with natural-looking, durable teeth replacements designed to last a lifetime.",
    image: "/services/dental_implants.png",
    features: [
      "Permanent tooth replacement",
      "Titanium implant posts",
      "Natural appearance & feel",
      "Long-lasting & durable solution"
    ],
    popular: true
  },
  {
    id: "pfm-crown-bridges",
    name: "PFM Crown & Bridges",
    price: "₹2,500 per cap",
    shortDescription: "Porcelain fused to metal crowns providing strength and natural aesthetics.",
    fullDescription: "Porcelain fused to metal crowns providing strength and aesthetics. Ideal for restoring damaged teeth with durable, natural-looking caps that withstand heavy biting forces.",
    image: "/services/pfmcrown&bridges.png",
    features: [
      "Porcelain fused to metal",
      "High strength and durability",
      "Natural tooth-shade appearance",
      "Custom single or multi-unit bridges"
    ]
  },
  {
    id: "zirconia-cap",
    name: "Zirconia Cap",
    price: "₹5,000 per cap",
    shortDescription: "Metal-free single crown with superior aesthetics and natural translucency.",
    fullDescription: "Metal-free single crown with superior aesthetics and biocompatibility. Perfect for front and back teeth restoration with lifelike translucency and unmatched strength.",
    image: "/services/zirconia cap.png",
    features: [
      "100% metal-free biocompatible",
      "Superior premium aesthetics",
      "Exceptional fracture resistance",
      "Natural tooth translucency"
    ],
    popular: true
  },
  {
    id: "night-guard",
    name: "Night Guard",
    price: "₹3,000",
    shortDescription: "Custom-made oral appliance to protect teeth against bruxism and clenching.",
    fullDescription: "Custom-made night guards to protect your teeth from grinding and clenching during sleep. Prevent tooth damage, enamel erosion, and TMJ/jaw muscle pain.",
    image: "/services/night_guard.png",
    features: [
      "Custom-fitted comfortable design",
      "Prevents enamel wear & grinding",
      "Relieves morning jaw stiffness",
      "Protects TMJ jaw joints"
    ]
  },
  {
    id: "composite-filling",
    name: "Composite Filling",
    price: "₹1,000",
    shortDescription: "Tooth-colored laser fillings that blend seamlessly with natural enamel.",
    fullDescription: "Tooth-colored laser fillings for cavities that blend seamlessly with natural teeth. A quick, painless procedure with excellent bond strength and durability.",
    image: "/services/composite_filling.png",
    features: [
      "Tooth-colored resin material",
      "Laser precision cavity prep",
      "Single-visit quick procedure",
      "Strong adhesion & long-lasting"
    ]
  },
  {
    id: "root-canal-treatment",
    name: "Root Canal Treatment",
    price: "₹2,500",
    shortDescription: "Pain-free rotary endodontic therapy to save infected or severely damaged teeth.",
    fullDescription: "Pain-free root canal therapy to save severely damaged or infected teeth. Utilizing modern rotary endodontics to preserve your natural tooth structure comfortably.",
    image: "/services/root_canaltreatment.png",
    features: [
      "Immediate pain & infection relief",
      "Saves your natural tooth",
      "Advanced rotary techniques",
      "Single-sitting therapy available"
    ],
    popular: true
  },
  {
    id: "ultrasonic-scaling",
    name: "Ultrasonic Scaling & Polishing",
    price: "₹1,000",
    shortDescription: "Professional deep cleaning using ultrasonic waves for gum health and stain removal.",
    fullDescription: "Professional deep cleaning using ultrasonic technology to remove stubborn calculus, tartar, plaque, and stains. Essential for gum health and preventing periodontitis.",
    image: "/services/ultra_sonic.png",
    features: [
      "Gentle ultrasonic wave technology",
      "Thorough plaque & calculus removal",
      "Removes tea, coffee & smoke stains",
      "Promotes healthy pink gums"
    ]
  },
  {
    id: "surgical-wisdom-tooth",
    name: "Surgical Wisdom Teeth Removal",
    price: "₹5,000",
    shortDescription: "Safe extraction of impacted or misaligned wisdom teeth with minimal discomfort.",
    fullDescription: "Safe extraction of impacted or problematic wisdom teeth using advanced surgical techniques. Minimizes discomfort, protects surrounding molars, and ensures quick recovery.",
    image: "/services/surgical_wisdom.png",
    features: [
      "Advanced oral surgical precision",
      "Minimally invasive technique",
      "Quick healing & recovery time",
      "Complete post-operative care"
    ]
  },
  {
    id: "implant-based-dentures",
    name: "Implant Based Dentures",
    price: "₹2,00,000",
    shortDescription: "Full-mouth rehabilitation with secure implant-anchored prosthetic arch.",
    fullDescription: "Complete full-mouth rehabilitation for patients with missing teeth. Secure, comfortable dentures anchored firmly by dental implants for optimal stability and natural chewing power.",
    image: "/services/implant_based.png",
    features: [
      "Complete full mouth rehabilitation",
      "Solid implant-supported stability",
      "No slippage or messy adhesives",
      "Restores 100% chewing function"
    ]
  },
  {
    id: "braces-treatment",
    name: "Braces & Orthodontic Treatment",
    price: "₹30,000",
    shortDescription: "Comprehensive orthodontic alignment for crowded, spaced, or misaligned teeth.",
    fullDescription: "Comprehensive orthodontic treatment to straighten uneven or misaligned teeth. Modern metal, ceramic braces and clear aligners for effective smile aesthetics and bite correction.",
    image: "/services/braces_treatment.png",
    features: [
      "Modern orthodontic systems & brackets",
      "Corrects crowding, gaps & overbite",
      "Monthly progress tracking included",
      "End-to-end custom treatment package"
    ],
    popular: true
  },
  {
    id: "removable-dentures",
    name: "Removable Dentures (RPD/FPD)",
    price: "₹15,000",
    shortDescription: "Custom fabricated partial or complete dentures for effortless smile restoration.",
    fullDescription: "Effective replacement for one or more missing teeth. Designed to restore function and youthful facial structure, while being easy to remove, clean, and maintain.",
    image: "/services/removable_dentures.png",
    features: [
      "Cost-effective restoration option",
      "Lightweight comfortable fit",
      "Easy to clean & maintain daily",
      "Restores confident smile & speech"
    ]
  },
  {
    id: "dental-bleach",
    name: "Dental Bleach (Teeth Whitening)",
    price: "₹8,000",
    shortDescription: "Professional laser whitening procedure for brilliant, stain-free radiant teeth.",
    fullDescription: "Professional teeth whitening procedure that removes stubborn discoloration and brightens yellowed enamel, giving you a remarkably whiter, radiant smile in 45 minutes.",
    image: "/services/dental_bleech.png",
    features: [
      "Safe enamel-friendly bleaching agents",
      "Lifts deep stains and discoloration",
      "Instant visible whitening results",
      "Significantly boosts confidence"
    ]
  }
];
