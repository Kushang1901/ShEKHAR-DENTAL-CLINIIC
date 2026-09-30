import { normalizeSlug } from '@/lib/seo/slug';

export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
  date: string;
  publishedTime: string;
  /** Optional last updated timestamp for SEO fresh crawl signaling. */
  updatedTime?: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
  keyTakeaways: string[];
  content: {
    heading: string;
    text: string;
    points?: string[];
  }[];
  /** Customizable sitemap priority (0.0 to 1.0). Defaults to 0.85. */
  priority?: number;
  /** Customizable sitemap change frequency. Defaults to 'monthly'. */
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  /** Set true to exclude this blog post from the sitemap. */
  excludeFromSitemap?: boolean;
}

/**
 * Returns the sanitized slug for a blog post.
 */
export function getBlogSlug(post: BlogPost): string {
  return normalizeSlug(post.slug);
}

/**
 * Resolves the full canonical URL for a blog post.
 */
export function getBlogUrl(post: BlogPost, baseUrl = 'https://shekhardental.in'): string {
  return `${baseUrl}/blog/${getBlogSlug(post)}`;
}

/**
 * Finds a blog post by its slug.
 */
export function findBlogBySlug(slug: string): BlogPost | undefined {
  if (!slug) return undefined;
  const clean = normalizeSlug(slug);
  return blogsData.find((b) => getBlogSlug(b) === clean);
}

export const blogsData: BlogPost[] = [
  {
    slug: 'are-dental-implants-permanent',
    title: 'Are Dental Implants Truly Permanent? Cost, Lifespan & Procedure Explained',
    subtitle: 'A Lead Dental Surgeon’s Guide to Titanium Implants, Osseointegration, and Lifelong Smile Restorations.',
    excerpt: 'Discover why dental implants are considered the gold standard for missing teeth, how long they realistically last, what the procedure involves, and what it costs in Delhi.',
    author: {
      name: 'Dr. Prakash Thakur',
      role: 'Founder & Lead Dental Surgeon (BDS, MIDA)',
      image: '/images/mama.jpg',
    },
    date: 'February 12, 2026',
    publishedTime: '2026-02-12T10:00:00+05:30',
    readTime: '6 min read',
    category: 'Implantology',
    image: '/gallery/implant_procedure.png',
    tags: ['Dental Implants', 'Tooth Replacement', 'Titanium Post', 'Oral Surgery', 'Sagarpur Delhi'],
    keyTakeaways: [
      'Dental implants boast a clinical success rate of over 95–98% when maintained with good oral hygiene.',
      'Unlike bridges, implants do not require grinding down healthy adjacent teeth.',
      'At Shekhar Dental Clinic in Sagarpur Delhi, single tooth implants start transparently at ₹25,000.',
      'Osseointegration (bone fusion) creates a permanent artificial root that halts facial bone resorption.',
    ],
    content: [
      {
        heading: 'What Makes Dental Implants Different from Traditional Dentures or Bridges?',
        text: 'When a natural tooth is lost due to trauma, decay, or gum disease, the underlying jawbone begins to resorb because it no longer receives chewing stimulation. Traditional removable dentures rest on top of the gums and often slip, while dental bridges require shaving down two healthy adjacent teeth to anchor a false tooth. A dental implant is the only restorative treatment that replaces the tooth root itself using medical-grade titanium that fuses directly into your jawbone through a biological process called osseointegration.',
      },
      {
        heading: 'The 3 Core Stages of Getting a Dental Implant',
        text: 'At Shekhar Dental and Orthodontic Center, we follow a minimally invasive, sterile protocol for maximum patient comfort:',
        points: [
          'Phase 1: Digital Assessment & CBCT 3D Planning — We assess jawbone density and nerve pathways to ensure ideal post placement.',
          'Phase 2: Surgical Placement — Under computerized local anesthesia, the titanium fixture is inserted painlessly. Healing typically takes 8–12 weeks.',
          'Phase 3: Abutment & Crown Fitting — A custom-milled zirconia crown matched to your exact tooth shade is securely attached.',
        ],
      },
      {
        heading: 'How Long Do Dental Implants Really Last?',
        text: 'With regular brushing, flossing, and semi-annual clinical dental checkups, the titanium implant fixture can last 25 years to a lifetime. The porcelain or zirconia crown on top may experience standard biting wear after 15–20 years and can easily be replaced without touching the underlying implant.',
      },
      {
        heading: 'Dr. Prakash Thakur’s Advice for Implant Candidates',
        text: 'Candidates should have healthy gums and sufficient jawbone density. If bone height has reduced, minor bone grafting can re-establish the foundation. Smoking and uncontrolled diabetes require specialized management before surgery to ensure optimal healing.',
      },
    ],
  },
  {
    slug: 'painless-root-canal-treatment',
    title: 'How Modern Rotary Technology Made Root Canal (RCT) 100% Pain-Free',
    subtitle: 'Dispelling Dental Myths: What Really Happens During Modern Endodontic Therapy.',
    excerpt: 'Fear of root canals is based on 30-year-old horror stories. Here is how modern rotary Protaper systems and computer anesthesia make RCT as comfortable as a simple filling.',
    author: {
      name: 'Dr. Prakash Thakur',
      role: 'Founder & Lead Dental Surgeon (BDS, MIDA)',
      image: '/images/mama.jpg',
    },
    date: 'January 28, 2026',
    publishedTime: '2026-01-28T10:00:00+05:30',
    readTime: '5 min read',
    category: 'Endodontics',
    image: '/services/root_canaltreatment.png',
    tags: ['Root Canal', 'Rotary RCT', 'Painless Dentistry', 'Tooth Pain Relief', 'Delhi Dentist'],
    keyTakeaways: [
      'A root canal does NOT cause pain; it cures the acute infection that causes agonizing toothache.',
      'Modern nickel-titanium rotary files clean curved microscopic canals in a single 45-minute sitting.',
      'Shekhar Dental Clinic provides pain-free rotary RCT starting at ₹2,500 per tooth.',
      'Placing a protective crown after RCT is critical to prevent the brittle tooth from fracturing.',
    ],
    content: [
      {
        heading: 'Why Does an Infected Tooth Hurt So Much?',
        text: 'Inside every tooth lies a delicate pulp chamber filled with living blood vessels and nerve fibers. When bacteria breach the enamel through deep decay, trauma, or cracks, the pulp becomes inflamed (pulpitis). Because the tooth cannot expand, pressure builds up inside the rigid tooth walls, transmitting intense, throbbing pain into your jaw and ear.',
      },
      {
        heading: 'Old Manual RCT vs Modern Rotary Endodontics',
        text: 'Decades ago, dentists used stiff manual stainless-steel files to scrape out the canals, which took multiple exhausting sessions and often caused post-operative soreness. Today, at Shekhar Dental Clinic, we utilize super-elastic nickel-titanium rotary files. These motorized instruments smoothly glide down the natural contours of your root canals with microscopic precision, disinfecting every crevice within 30 to 45 minutes.',
      },
      {
        heading: 'Is Single-Sitting Root Canal Possible?',
        text: 'In approximately 70–80% of cases without active apical abscesses, single-sitting root canal therapy is not only possible but medically preferred. It reduces patient appointments, eliminates interim dressing leaks, and provides immediate pain relief.',
      },
      {
        heading: 'Why a Post-RCT Crown is Non-Negotiable',
        text: 'Once the infected pulp is removed, the tooth loses its internal blood supply and becomes slightly brittle over time. A zirconia or PFM crown reinforces the remaining tooth structure, restoring 100% of your chewing force and preventing catastrophic fractures.',
      },
    ],
  },
  {
    slug: 'clear-aligners-vs-metal-braces',
    title: 'Clear Aligners vs Metal Braces: Which Straightening Option is Best for You in 2026?',
    subtitle: 'Comparing Aesthetics, Treatment Duration, Daily Lifestyle, and Costs for Delhi Patients.',
    excerpt: 'Struggling with crooked teeth, gaps, or an overbite? Compare invisible clear aligners and traditional braces on cost, speed, comfort, and clinical effectiveness.',
    author: {
      name: 'Dr. Prakash Thakur',
      role: 'Founder & Lead Dental Surgeon (BDS, MIDA)',
      image: '/images/mama.jpg',
    },
    date: 'January 14, 2026',
    publishedTime: '2026-01-14T10:00:00+05:30',
    readTime: '6 min read',
    category: 'Orthodontics',
    image: '/gallery/orthodontic.png',
    tags: ['Clear Aligners', 'Braces', 'Smile Makeover', 'Orthodontics', 'Janakpuri Delhi'],
    keyTakeaways: [
      'Clear aligners are virtually invisible and removable for eating, brushing, and special occasions.',
      'Traditional metal/ceramic braces remain the most reliable choice for severe bite misalignments and complex rotations.',
      'Aligners require strict compliance: you must wear them 20–22 hours every single day.',
      'Comprehensive orthodontic treatment at Shekhar Dental starts affordably from ₹30,000.',
    ],
    content: [
      {
        heading: 'The Modern Revolution in Tooth Straightening',
        text: 'A well-aligned bite does much more than create a photogenic smile — it prevents uneven enamel wear, relieves strain on jaw joints (TMJ), and makes flossing effortless. Historically, silver metal brackets were the only choice. Today, patients can choose between subtle ceramic braces and nearly invisible custom plastic aligners.',
      },
      {
        heading: 'Pros and Cons: Clear Aligners vs Traditional Braces',
        text: 'Understanding your personal lifestyle helps determine the right appliance:',
        points: [
          'Aesthetics: Aligners are clear and discrete; ceramic braces use tooth-colored brackets; metal braces are visible.',
          'Dietary Freedom: Aligners are removed while eating, allowing you to enjoy apples, nuts, and Indian sweets without fear of breaking brackets.',
          'Discipline: If you frequently misplace aligners or forget to wear them for 22 hours daily, fixed braces may yield faster, more predictable outcomes.',
          'Severity: Severe vertical discrepancies or heavily impacted canines are often guided more rapidly with fixed orthodontic wires.',
        ],
      },
      {
        heading: 'What Does Orthodontic Treatment Cost in Delhi?',
        text: 'Orthodontic pricing in Delhi ranges widely. At Shekhar Dental and Orthodontic Center, comprehensive packages start from ₹30,000 with transparent monthly payment options and periodic progress checks supervised by specialist orthodontists.',
      },
    ],
  },
  {
    slug: 'zirconia-crowns-vs-pfm',
    title: 'Zirconia vs PFM Caps: Why Dentists Recommend Metal-Free Crowns',
    subtitle: 'The Science of Biomimetic Dentistry: Strength, Aesthetics, and Gum Health.',
    excerpt: 'Wondering whether to choose a PFM (porcelain-fused-to-metal) or Zirconia cap after your root canal? Here is an honest breakdown of durability, dark gum lines, and biocompatibility.',
    author: {
      name: 'Dr. Prakash Thakur',
      role: 'Founder & Lead Dental Surgeon (BDS, MIDA)',
      image: '/images/mama.jpg',
    },
    date: 'December 20, 2025',
    publishedTime: '2025-12-20T10:00:00+05:30',
    readTime: '5 min read',
    category: 'Cosmetic Dentistry',
    image: '/services/zirconia cap.png',
    tags: ['Zirconia Cap', 'PFM Crown', 'Dental Caps', 'Cosmetic Dentistry', 'West Delhi'],
    keyTakeaways: [
      'PFM crowns contain an inner metal core that can create an unsightly dark grey line at the gum line over time.',
      'Zirconia is 100% metal-free, biocompatible, and mimics the natural translucency and luminescence of real teeth.',
      'Zirconia exhibits tensile strength exceeding 1,000 MPa, making it virtually immune to biting chips and fractures.',
      'PFM crowns cost ₹2,500 per cap; premium Monolithic Zirconia crowns cost ₹5,000 at Shekhar Dental.',
    ],
    content: [
      {
        heading: 'What is a PFM Crown and Why Has It Been Popular?',
        text: 'Porcelain-Fused-to-Metal (PFM) crowns have served as dental workhorses for decades. They feature an internal metal thimble that provides mechanical strength, covered by an outer layer of tooth-colored ceramic. While strong and budget-friendly (₹2,500 per cap), they have notable aesthetic drawbacks: the porcelain layer can chip under heavy grinding, and as gums recede naturally with age, the dark metal collar often peeks out as an unsightly black line.',
      },
      {
        heading: 'Why Zirconia Has Become the Premier Standard',
        text: 'Zirconium dioxide (Zirconia) is a white crystalline oxide of zirconium. Milled with computer-aided design (CAD/CAM), monolithic zirconia crowns contain zero metal. They are completely biocompatible, meaning your gums love them and will not develop allergies or dark discolorations.',
      },
      {
        heading: 'Which Should You Choose?',
        text: 'For rear molars where budget is the main concern, high-quality PFM crowns remain a reliable choice. However, for front smile-line teeth and for patients who want maximum longevity and natural light translucency, Zirconia (₹5,000 per cap) is undeniably the superior investment.',
      },
    ],
  },
  {
    slug: 'wisdom-teeth-removal-signs',
    title: '5 Warning Signs Your Wisdom Tooth Needs Removal Before It Damages Other Molars',
    subtitle: 'Impacted Third Molars: Symptoms, Risks, and Safe Minimally Invasive Surgical Extraction.',
    excerpt: 'Experiencing jaw pain, bad breath, or difficulty opening your mouth? Learn how to identify an impacted wisdom tooth and why early removal protects your adjacent second molars.',
    author: {
      name: 'Dr. Prakash Thakur',
      role: 'Founder & Lead Dental Surgeon (BDS, MIDA)',
      image: '/images/mama.jpg',
    },
    date: 'December 05, 2025',
    publishedTime: '2025-12-05T10:00:00+05:30',
    readTime: '5 min read',
    category: 'Oral Surgery',
    image: '/services/surgical_wisdom.png',
    tags: ['Wisdom Tooth', 'Oral Surgery', 'Impacted Tooth', 'Tooth Extraction', 'Emergency Dentist'],
    keyTakeaways: [
      'Human jaws have evolved to be smaller, leaving insufficient space for third molars to erupt straight.',
      'Partially erupted wisdom teeth trap food particles and bacteria, causing painful pericoronitis (gum infection).',
      'Horizontal impactions can silently push against second molars, causing root resorption and dental decay.',
      'Surgical wisdom tooth removal at Shekhar Dental costs ₹5,000 with complete stitch-removal and post-op care.',
    ],
    content: [
      {
        heading: 'Why Do Wisdom Teeth Cause So Much Trouble?',
        text: 'Wisdom teeth (third molars) usually attempt to emerge between the ages of 17 and 25. Because modern human jaws are narrower than those of our ancestors, these teeth often become impacted — growing sideways, tilted, or trapped completely under the bone.',
      },
      {
        heading: '5 Critical Symptoms You Must Not Ignore',
        text: 'If you notice any of the following symptoms, schedule a diagnostic digital X-ray immediately:',
        points: [
          '1. Swollen, bleeding gums at the very back of your lower jaw (Pericoronitis).',
          '2. Persistent dull ache or pressure radiating toward your ear, temple, or neck.',
          '3. Unpleasant taste, bad breath (halitosis), or pus discharge near the rear molars.',
          '4. Stiffness and difficulty opening your mouth (trismus) while chewing.',
          '5. Crowding or sudden shifting of your front teeth due to forward pressure.',
        ],
      },
      {
        heading: 'What Does the Surgical Removal Involve?',
        text: 'At Shekhar Dental Clinic, wisdom tooth extractions are performed as minor outpatient procedures under targeted local anesthesia. The procedure takes 20–30 minutes, and most patients resume work within 2–3 days with prescribed pain medications and cold compresses.',
      },
    ],
  },
  {
    slug: 'teeth-whitening-myths-facts',
    title: 'Teeth Whitening Myths vs Facts: How to Brighten Your Smile Without Enamel Damage',
    subtitle: 'From Charcoal Powders to In-Clinic Laser Bleaching: What Really Works.',
    excerpt: 'Can lemon juice and baking soda whiten teeth? Or do they permanently strip your enamel? Learn the scientific truth about safe, long-lasting teeth whitening in Delhi.',
    author: {
      name: 'Dr. Prakash Thakur',
      role: 'Founder & Lead Dental Surgeon (BDS, MIDA)',
      image: '/images/mama.jpg',
    },
    date: 'November 18, 2025',
    publishedTime: '2025-11-18T10:00:00+05:30',
    readTime: '5 min read',
    category: 'Preventive Care',
    image: '/services/dental_bleech.png',
    tags: ['Teeth Whitening', 'Dental Bleach', 'Smile Makeover', 'Stain Removal', 'Delhi Clinic'],
    keyTakeaways: [
      'DIY home hacks like charcoal and lemon juice are abrasive acids that permanently strip protective enamel.',
      'Surface stains from tea, coffee, and tobacco are best removed first with ultrasonic scaling (₹1,000).',
      'Professional in-clinic laser whitening penetrates the dentin layer safely to lighten teeth by 4 to 8 shades in 45 minutes.',
      'Clinical bleaching at Shekhar Dental costs ₹8,000 and lasts 1 to 2 years with proper post-care.',
    ],
    content: [
      {
        heading: 'Why Do Teeth Discolor Over Time?',
        text: 'Tooth discoloration falls into two categories: extrinsic and intrinsic. Extrinsic stains occur on the outer enamel from chromogens in tea, coffee, turmeric, red wine, and smoking. Intrinsic discoloration happens deeper within the dentin due to aging, fluorosis, or childhood antibiotics.',
      },
      {
        heading: 'Dangerous Internet DIY Trends to Avoid',
        text: 'Social media is full of dangerous whitening "hacks":',
        points: [
          'Lemon or Apple Cider Vinegar: Highly acidic solutions that dissolve calcium from enamel, leaving teeth permanently yellow and sensitive.',
          'Activated Charcoal Powder: Coarse abrasive particles that act like sandpaper, wearing away enamel and exposing the naturally yellow dentin underneath.',
          'Baking Soda Scrub: Can remove light surface stains occasionally, but excessive use scratches the smooth enamel surface, making it attract deeper stains faster.',
        ],
      },
      {
        heading: 'The Safe, Clinically Proven Solution',
        text: 'Professional dental bleaching utilizes pH-buffered hydrogen or carbamide peroxide under gum barrier isolation. The active oxygen molecules break apart stubborn organic stain bonds without altering the tooth mineral matrix. In a single 45-minute clinic session, teeth brighten visibly by several shades with zero enamel damage.',
      },
    ],
  },
  {
    slug: 'why-sunday-free-dental-checkup',
    title: 'Why Regular Dental Screening Matters: The Story Behind Our Free Sunday Clinic',
    subtitle: 'Preventive Healthcare in Sagarpur: How 15 Minutes Can Save You from Severe Toothache and Costly Surgeries.',
    excerpt: 'Oral health is the gateway to systemic overall health. Learn why Dr. Prakash Thakur started the Sunday Free Dental Consultation initiative in Sagarpur, New Delhi.',
    author: {
      name: 'Dr. Prakash Thakur',
      role: 'Founder & Lead Dental Surgeon (BDS, MIDA)',
      image: '/images/mama.jpg',
    },
    date: 'November 02, 2025',
    publishedTime: '2025-11-02T10:00:00+05:30',
    readTime: '4 min read',
    category: 'Oral Health',
    image: '/gallery/dental_procedure.png',
    tags: ['Free Checkup', 'Preventive Dentistry', 'Community Health', 'Dr Prakash Thakur', 'Delhi Clinic'],
    keyTakeaways: [
      'Dental decay and gum disease are virtually painless in their earliest stages, making routine checkups vital.',
      'Every Sunday morning (10 AM to 1 PM), Shekhar Dental Clinic provides 100% free dental examinations and advice.',
      'Early detection allows a simple ₹1,000 composite filling to prevent a ₹2,500 root canal and crown later on.',
      'Our Sunday clinic also includes routine oral cancer screenings and bite assessments.',
    ],
    content: [
      {
        heading: 'The Hidden Danger of the "Wait Until It Hurts" Mindset',
        text: 'Most people only visit a dental clinic when an agonizing toothache keeps them awake at 2 AM. Unfortunately, by the time a tooth aches, the decay has already eaten through the protective enamel and reached the sensitive nerve pulp. Catching a cavity early when it is still microscopic takes 15 minutes to treat with a simple tooth-colored filling, saving you thousands of rupees and unnecessary discomfort.',
      },
      {
        heading: 'Our Free Sunday Community Consultation Initiative',
        text: 'Over 10 years ago, Dr. Prakash Thakur founded the Free Sunday Dental Check-up program at SHEKHAR DENTAL AND ORTHODONTIC CENTRE in Sagarpur East. Every Sunday from 10:00 AM to 1:00 PM, patients from Sagarpur, Janakpuri, Uttam Nagar, and beyond can walk in or book a slot to receive a thorough visual examination, oral hygiene guidance, and treatment advice with zero consultation fee.',
      },
      {
        heading: 'What Happens During Your Free Sunday Check-up?',
        text: 'During your 15-minute examination, our team inspects:',
        points: [
          'Dental Cavities & Interproximal Decay: Spotting early soft spots before they reach the nerve.',
          'Gum Health & Tartar Calculus: Checking for bleeding, gingivitis, and bone pockets.',
          'Oral Mucosa & Pre-Cancerous Screenings: Crucial for tobacco and gutkha chewers.',
          'Orthodontic Alignment: Evaluating bite imbalances, gaps, or crowding in children and adults.',
        ],
      },
      {
        heading: 'How to Reserve Your Free Slot',
        text: 'To avoid Sunday morning waiting times, we recommend booking in advance via our online appointment portal at https://shekhardental.in/appointment or calling our helpline at 098702 94558.',
      },
    ],
  },
];
