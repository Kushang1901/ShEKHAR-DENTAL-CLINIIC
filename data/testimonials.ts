export interface Testimonial {
  id: string;
  name: string;
  comment: string;
  rating: number;
  treatment?: string;
  verified: boolean;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "t1",
    name: "Manikant Kumar",
    comment: "Shekhar Dental Care offers exceptional treatment backed by Dr. Prakash's vast experience and expertise. His gentle approach and clear explanations make every visit comfortable and stress-free. Highly recommended for anyone seeking professional and caring dental service.",
    rating: 5,
    treatment: "Dental Care & Checkup",
    verified: true
  },
  {
    id: "t2",
    name: "Madhuri Vishwa",
    comment: "My teeth were completely not in shape, but now it's all good. It's all because of Dr. Prakash, the owner of Shekhar Dental. I recommend everyone to get their teeth treatment done from here.",
    rating: 5,
    treatment: "Orthodontics / Alignment",
    verified: true
  },
  {
    id: "t3",
    name: "Aashi Khan",
    comment: "Best treatment available at an affordable price! The clinic is very clean, hygienic and the doctors are extremely polite and helpful.",
    rating: 5,
    treatment: "Cosmetic Dentistry",
    verified: true
  },
  {
    id: "t4",
    name: "Harshit Kumar",
    comment: "Better treatment for all kinds of dental problems. Painless root canal and swift tooth extraction. Very satisfied with the outcome!",
    rating: 5,
    treatment: "Root Canal Therapy",
    verified: true
  },
  {
    id: "t5",
    name: "Tazein Hussain",
    comment: "Dr. Prakash is an extremely good diagnostician and clinician. His dedication to his work is commendable. Highly recommended in Sagarpur.",
    rating: 5,
    treatment: "Consultation & Restorations",
    verified: true
  },
  {
    id: "t6",
    name: "Mohd Inshal",
    comment: "Excellent service and professional doctors. State-of-the-art clinic equipment and very friendly staff.",
    rating: 5,
    treatment: "Ultrasonic Scaling",
    verified: true
  },
  {
    id: "t7",
    name: "Shivam Yadav King",
    comment: "Best dentist in sagarpur! Treated my tooth ache immediately. Five stars for patient care and hygiene.",
    rating: 5,
    treatment: "Emergency Dental Care",
    verified: true
  }
];
