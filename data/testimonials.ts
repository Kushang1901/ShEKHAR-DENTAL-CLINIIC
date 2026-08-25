export interface Testimonial {
  id: string;
  name: string;
  comment: string;
  rating: number;
  treatment?: string;
  verified: boolean;
  timeAgo?: string;
  reviewCount?: string;
  badge?: string;
  ownerReply?: string;
  avatarColor?: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "t1",
    name: "Muani",
    comment: "We love this place. Dr. Shekhar makes us feel comfortable and the treatment was beyond expectation. I would like to suggest everyone to consult Dr. Shekhar. He gave excellent service.",
    rating: 5,
    treatment: "Dental Care & Consultation",
    verified: true,
    timeAgo: "2 months ago",
    reviewCount: "1 review",
    ownerReply: "Thank you so much!",
    avatarColor: "#3b82f6"
  },
  {
    id: "t2",
    name: "Manikant Kumar",
    comment: "Shekhar Dental Care offers exceptional treatment backed by Dr. Prakash vast experience and expertise. His gentle approach and clear explanations make every visit comfortable and stress-free. Highly recommended for anyone seeking professional and caring dental service.",
    rating: 5,
    treatment: "Comprehensive Dental Care",
    verified: true,
    timeAgo: "9 months ago",
    reviewCount: "2 reviews",
    avatarColor: "#10b981"
  },
  {
    id: "t3",
    name: "Puii Khawlhring",
    comment: "Highly professional and exceptionally friendly. The doctor has an excellent chairside manner and makes patients feel completely at ease. I highly recommend this clinic to anyone in need of quality dental care.",
    rating: 5,
    treatment: "Gentle Patient Care",
    verified: true,
    timeAgo: "1 month ago",
    reviewCount: "3 reviews",
    avatarColor: "#8b5cf6"
  },
  {
    id: "t4",
    name: "Madhuri Mishra",
    comment: "My teeth was completely not in shape. but now it's all good. It's all because of Dr Prakash, the owner of Shekhar Dental. I recommend everyone to get their teeth treatment done from here.",
    rating: 5,
    treatment: "Orthodontics / Alignment",
    verified: true,
    timeAgo: "9 months ago",
    reviewCount: "1 review",
    avatarColor: "#f59e0b"
  },
  {
    id: "t5",
    name: "Richa Takkar",
    comment: "Painless, Invisible, comfortable, Removable, Desired results, No clinic Visits, excellent customer support, Thank u so much Team 🥰🥰🥰🥰",
    rating: 5,
    treatment: "Clear Invisible Aligners",
    verified: true,
    timeAgo: "4 years ago",
    reviewCount: "5 reviews",
    avatarColor: "#ec4899"
  },
  {
    id: "t6",
    name: "Tazein Hussain",
    comment: "Dr Prakash is an extremely good diagnostician and clinician. His dedication to his work is commendable.",
    rating: 5,
    treatment: "Clinical Diagnosis",
    verified: true,
    timeAgo: "2 years ago",
    reviewCount: "1 review",
    avatarColor: "#06b6d4"
  },
  {
    id: "t7",
    name: "Aashi Khan",
    comment: "Best treatment available on affordable price. Very clean, hygienic and doctor is supportive.",
    rating: 5,
    treatment: "Affordable Dental Treatment",
    verified: true,
    timeAgo: "10 months ago",
    reviewCount: "2 reviews · 1 photo",
    avatarColor: "#6366f1"
  },
  {
    id: "t8",
    name: "Mohd Inshal",
    comment: "Excellent service and professional doctor.",
    rating: 5,
    treatment: "Professional Dental Care",
    verified: true,
    timeAgo: "9 months ago",
    reviewCount: "2 reviews",
    avatarColor: "#14b8a6"
  },
  {
    id: "t9",
    name: "Harshit kumar",
    comment: "Better treatment of all kind of problem's of teeth at here. Very smooth and pain-free treatment.",
    rating: 5,
    treatment: "Tooth Restoration",
    verified: true,
    timeAgo: "10 months ago",
    reviewCount: "3 reviews · 1 photo",
    avatarColor: "#f97316"
  },
  {
    id: "t10",
    name: "Varsha Fokvat",
    comment: "One of the Best orthodontist clinic in west delhi.",
    rating: 5,
    treatment: "Orthodontics West Delhi",
    verified: true,
    timeAgo: "4 years ago",
    reviewCount: "2 reviews",
    avatarColor: "#a855f7"
  },
  {
    id: "t11",
    name: "Shivam Yadav King",
    comment: "Best dentist in sagarpur. Highly recommended clinic.",
    rating: 5,
    treatment: "Sagarpur Dental Service",
    verified: true,
    timeAgo: "10 months ago",
    reviewCount: "1 review",
    avatarColor: "#22c55e"
  },
  {
    id: "t12",
    name: "911 rey mysterio",
    comment: "Best docter best experience smooth procedure very supportive staff",
    rating: 5,
    treatment: "Dental Procedure",
    verified: true,
    timeAgo: "4 years ago",
    reviewCount: "9 reviews · 2 photos",
    ownerReply: "Thank you for your feedback!",
    avatarColor: "#3b82f6"
  },
  {
    id: "t13",
    name: "Chintalapudi Dinish kumar",
    comment: "Good expertise and well experienced Dr.",
    rating: 5,
    treatment: "Experienced Doctor Checkup",
    verified: true,
    timeAgo: "2 months ago",
    reviewCount: "3 reviews",
    avatarColor: "#0ea5e9"
  },
  {
    id: "t14",
    name: "Megha Arora",
    comment: "Experienced doctor with very gentle approach and great expertise.",
    rating: 5,
    treatment: "Dental Consultation",
    verified: true,
    timeAgo: "4 years ago",
    badge: "Local Guide",
    reviewCount: "26 reviews · 11 photos",
    avatarColor: "#eab308"
  }
];
