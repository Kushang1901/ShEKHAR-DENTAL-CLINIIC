export interface GalleryItem {
  id: string;
  title: string;
  category: "all" | "surgery" | "implants" | "orthodontics" | "cosmetic";
  caption: string;
  image: string;
}

export const galleryCategories = [
  { id: "all", label: "All Procedures" },
  { id: "surgery", label: "Dental Surgery" },
  { id: "implants", label: "Implants" },
  { id: "orthodontics", label: "Orthodontics" },
  { id: "cosmetic", label: "Cosmetic" }
] as const;

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    title: "Dental Surgery Procedure",
    category: "surgery",
    caption: "Advanced surgical technique with high precision & sterile environment",
    image: "/gallery/dental_procedure.png"
  },
  {
    id: "g2",
    title: "Dental Implant Placement",
    category: "implants",
    caption: "Permanent titanium implant post placement for natural tooth restoration",
    image: "/gallery/implant_procedure.png"
  },
  {
    id: "g3",
    title: "Orthodontic Treatment",
    category: "orthodontics",
    caption: "Braces installation and alignment procedure for healthy bite alignment",
    image: "/gallery/orthodontic.png"
  },
  {
    id: "g4",
    title: "Cosmetic Dentistry & Whitening",
    category: "cosmetic",
    caption: "Smile makeover, whitening, and aesthetic restoration",
    image: "/gallery/cosmetic.png"
  },
  {
    id: "g5",
    title: "Complex Oral Surgery",
    category: "surgery",
    caption: "Specialized surgical procedure for impacted tooth removal and rehabilitation",
    image: "/gallery/dental_surgery2.png"
  },
  {
    id: "g6",
    title: "Precision Implant Surgery",
    category: "implants",
    caption: "Minimally invasive implant fixture integration in maxilla/mandible",
    image: "/gallery/implant2.png"
  }
];
