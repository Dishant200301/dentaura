export interface ServiceDetail {
  points: string[];
  id: string;
  title: string;
  category: string;
  tagline: string;
  date?: string;
  intro: string;
  body: string;
  img: string;
  heroImg: string;
  content: {
    mainImage: string;
    sections: {
      heading: string;
      paragraph: string;
      points?: { title: string; text: string }[];
      afterText?: string;
      images?: string[]; // for grid (2 images)
      showLine?: boolean;
    }[];
    loopImages?: string[]; // 4 images for infinity loop
  };
  highlights: { label: string; value: string }[];
  bullets: { title: string; desc: string }[];
  faq: { q: string; a: string }[];
}

export const serviceDetails: Record<string, ServiceDetail> = {
  "01": {
    id: "01",
    title: "General Dentistry",
    category: "Preventive Care",
    tagline: "Comprehensive dental care focused on long-term oral health through prevention and precise diagnosis.",
    date: "/2025",
    intro:
      "General dentistry is the cornerstone of great oral health. Our expert team focuses on preventing and diagnosing oral disease while building a relationship with every patient based on trust and comfort.",
    body:
      "From routine check-ups to complex restorations, general dentistry covers the full spectrum of your dental needs. We use the latest digital tools to ensure every visit is comfortable, efficient and effective — keeping your teeth and gums healthy at every stage of life.",
    img: "/images/services/general.webp",
    heroImg: "/images/services/general.webp",
    points: ["Oral Surgery", "Digital Records", "Online Booking", "Multilingual Support"],
    content: {
      mainImage: "/images/services/general.webp",
      sections: [
        {
          heading: "Comprehensive Dental Care",
          paragraph: "We provide a comprehensive range of orthodontic services, including:",
          points: [
            { title: "Initial Consultations", text: "These assessments help us understand your dental needs and create a personalized treatment plan." },
            { title: "Braces", text: "We offer various types of braces, including traditional metal, ceramic, and clear aligners, to suit your lifestyle and preferences." },
            { title: "Retainers", text: "After your braces are removed, retainers help maintain your new smile by preventing teeth from shifting back." }
          ],
          afterText: "Orthodontic Monitoring: Regular follow-ups ensure your treatment is on track and adjustments are made as needed.",
          images: ["/images/services/hero-1.png", "/images/services/hero-5.png"],
          showLine: true
        },
        {
          heading: "Aesthetic Dental Improvements",
          paragraph: "We also offer services to enhance your smile's aesthetics.",
          points: [
            { title: "Invisalign", text: "Clear aligners that are virtually invisible, allowing you to straighten your teeth discreetly." },
            { title: "Cosmetic Orthodontics", text: "Techniques that not only align your teeth but also improve their appearance, giving you a stunning smile." }
          ],
          showLine: true
        }
      ],
      loopImages: [
        "/images/services/general.webp",
        "/images/services/ortho.webp",
        "/images/services/cosmetic.webp",
        "/images/services/surgery.webp"
      ]
    },
    highlights: [
      { label: "Average Visit Time", value: "45–60 min" },
      { label: "Recommend Frequency", value: "Every 6 months" },
      { label: "Pain Level", value: "Minimal" },
      { label: "Recovery Time", value: "None" },
    ],
    bullets: [
      {
        title: "Routine Dental Exams",
        desc: "Regular check-ups allow us to monitor your oral health, identify potential issues early and adjust your care plan as needed.",
      },
      {
        title: "Professional Cleanings",
        desc: "Our hygienists use specialized tools to remove plaque and hardened tartar that brushing and flossing alone cannot reach.",
      },
      {
        title: "Digital X-Rays",
        desc: "Advanced digital imaging gives us a detailed view of your teeth and jawbone with up to 90% less radiation than traditional X-rays.",
      },
      {
        title: "Fluoride & Sealants",
        desc: "Effective preventive treatments that protect teeth — especially in children — from decay and acid erosion.",
      },
    ],
    faq: [
      {
        q: "How often should I visit for a general check-up?",
        a: "We recommend visiting every six months for a routine exam and cleaning. Patients with specific oral health conditions may need to come more frequently.",
      },
      {
        q: "Are digital X-rays safe?",
        a: "Yes. Digital X-rays emit up to 90% less radiation than traditional film X-rays and are completely safe for patients of all ages.",
      },
      {
        q: "What should I do if I have dental anxiety?",
        a: "We offer a range of comfort options including sedation dentistry, noise-cancelling headphones, and a dedicated calm-care coordinator.",
      },
    ],
  },

  "02": {
    id: "02",
    title: "Orthodontics Care",
    category: "Teeth Alignment",
    tagline: "Discreet and effective alignment solutions designed to create your perfect, confident smile.",
    date: "/2025",
    intro:
      "Orthodontics is essential for achieving a straight and healthy smile. Think of your orthodontist as your partner in aligning your teeth and jaw. They specialize in diagnosing and treating misalignments, ensuring your bite is functional and aesthetically pleasing.",
    body:
      "Our mission is to help you attain a confident smile that lasts a lifetime. We provide tailored, caring treatment for individuals of all ages, from kids to adults.",
    img: "/images/services/ortho.webp",
    heroImg: "/images/services/ortho.webp",
    points: ["Clear Aligners", "Traditional Braces", "Retainer Programs", "3D Treatment Planning"],
    content: {
      mainImage: "/images/services/ortho.webp",
      sections: [
        {
          heading: "Comprehensive Dental Care",
          paragraph: "We provide a comprehensive range of orthodontic services, including:",
          points: [
            { title: "Initial Consultations", text: "These assessments help us understand your dental needs and create a personalized treatment plan." },
            { title: "Braces", text: "We offer various types of braces, including traditional metal, ceramic, and clear aligners, to suit your lifestyle and preferences." },
            { title: "Retainers", text: "After your braces are removed, retainers help maintain your new smile by preventing teeth from shifting back." }
          ],
          afterText: "Orthodontic Monitoring: Regular follow-ups ensure your treatment is on track and adjustments are made as needed.",
          images: ["/images/services/hero-1.png", "/images/services/hero-5.png"],
          showLine: true
        },
        {
          heading: "Aesthetic Dental Improvements",
          paragraph: "We also offer services to enhance your smile's aesthetics.",
          points: [
            { title: "Invisalign", text: "Clear aligners that are virtually invisible, allowing you to straighten your teeth discreetly." },
            { title: "Cosmetic Orthodontics", text: "Techniques that not only align your teeth but also improve their appearance, giving you a stunning smile." }
          ],
          showLine: true
        }
      ],
      loopImages: [
        "/images/services/general.webp",
        "/images/services/ortho.webp",
        "/images/services/cosmetic.webp",
        "/images/services/surgery.webp"
      ]
    },
    highlights: [
      { label: "Treatment Duration", value: "6–24 months" },
      { label: "Suitable Age", value: "All ages" },
      { label: "Pain Level", value: "Low to Moderate" },
      { label: "Ongoing Visits", value: "Every 6–8 weeks" },
    ],
    bullets: [
      {
        title: "Clear Aligners",
        desc: "Nearly invisible, removable trays that gradually shift your teeth into position — perfect for adults and teens who value aesthetics.",
      },
      {
        title: "Traditional Braces",
        desc: "A time-tested, highly effective solution for complex alignment cases with precise bracket and wire technology.",
      },
      {
        title: "Retainer Programs",
        desc: "Custom retainers designed to maintain your newly aligned smile long after active treatment is complete.",
      },
      {
        title: "3D Treatment Planning",
        desc: "Advanced intraoral scanning lets you see the predicted result of your treatment before it even begins.",
      },
    ],
    faq: [
      {
        q: "Am I too old for orthodontic treatment?",
        a: "Absolutely not. We treat patients of all ages. Adult orthodontics has grown significantly and modern options are more discreet than ever.",
      },
      {
        q: "How long does treatment typically take?",
        a: "Treatment duration varies by case complexity, ranging from 6 months for minor corrections to 24 months for comprehensive alignment.",
      },
      {
        q: "Will braces or aligners affect my speech?",
        a: "There may be a brief adjustment period with new appliances, but most patients adapt within a few days with no lasting speech impact.",
      },
    ],
  },

  "03": {
    id: "03",
    title: "Cosmetic Dentistry",
    category: "Smile Enhancement",
    tagline: "Enhance your natural beauty with advanced cosmetic treatments that create a brighter, more radiant smile.",
    date: "/2025",
    intro:
      "Cosmetic dentistry combines artistry and science to transform the appearance of your smile. Whether you want a brighter shade, a reshaped tooth, or a complete smile makeover — we have the expertise to make it happen.",
    body:
      "We believe everyone deserves a smile they're proud to share. Using cutting-edge cosmetic techniques and premium dental materials, our specialists design smile enhancements that look completely natural and are built to last.",
    img: "/images/services/cosmetic.webp",
    heroImg: "/images/services/cosmetic.webp",
    points: ["Teeth Whitening", "Veneers & Bonding", "Smile Makeovers", "Digital Smile Preview"],
    content: {
      mainImage: "/images/services/cosmetic.webp",
      sections: [
        {
          heading: "Comprehensive Dental Care",
          paragraph: "We provide a comprehensive range of orthodontic services, including:",
          points: [
            { title: "Initial Consultations", text: "These assessments help us understand your dental needs and create a personalized treatment plan." },
            { title: "Braces", text: "We offer various types of braces, including traditional metal, ceramic, and clear aligners, to suit your lifestyle and preferences." },
            { title: "Retainers", text: "After your braces are removed, retainers help maintain your new smile by preventing teeth from shifting back." }
          ],
          afterText: "Orthodontic Monitoring: Regular follow-ups ensure your treatment is on track and adjustments are made as needed.",
          images: ["/images/services/hero-1.png", "/images/services/hero-5.png"],
          showLine: true
        },
        {
          heading: "Aesthetic Dental Improvements",
          paragraph: "We also offer services to enhance your smile's aesthetics.",
          points: [
            { title: "Invisalign", text: "Clear aligners that are virtually invisible, allowing you to straighten your teeth discreetly." },
            { title: "Cosmetic Orthodontics", text: "Techniques that not only align your teeth but also improve their appearance, giving you a stunning smile." }
          ],
          showLine: true
        }
      ],
      loopImages: [
        "/images/services/general.webp",
        "/images/services/ortho.webp",
        "/images/services/cosmetic.webp",
        "/images/services/surgery.webp"
      ]
    },
    highlights: [
      { label: "Whitening Results", value: "Up to 8 shades lighter" },
      { label: "Veneer Lifespan", value: "10–15 years" },
      { label: "Sessions Required", value: "1–3" },
      { label: "Recovery Time", value: "Minimal" },
    ],
    bullets: [
      {
        title: "Teeth Whitening",
        desc: "Professional in-office whitening that delivers results up to 8 shades brighter in a single visit.",
      },
      {
        title: "Veneers & Bonding",
        desc: "Ultra-thin porcelain veneers and tooth-coloured composite bonding that correct chips, cracks, gaps and discolouration.",
      },
      {
        title: "Smile Makeovers",
        desc: "A comprehensive, personalised plan combining multiple cosmetic treatments to achieve your ideal smile transformation.",
      },
      {
        title: "Digital Smile Preview",
        desc: "See a digital preview of your new smile before any treatment begins using our advanced imaging software.",
      },
    ],
    faq: [
      {
        q: "Is teeth whitening safe for sensitive teeth?",
        a: "Yes. We use desensitising agents and tailor the whitening strength to your comfort level to minimise sensitivity.",
      },
      {
        q: "How long do veneers last?",
        a: "With proper care, porcelain veneers typically last between 10 and 15 years before needing replacement.",
      },
      {
        q: "Will cosmetic treatments look natural?",
        a: "Our cosmetic work is designed to blend seamlessly with your natural teeth — the goal is always an enhancement that looks effortlessly real.",
      },
    ],
  },

  "04": {
    id: "04",
    title: "Oral Surgery",
    category: "Surgical Care",
    tagline: "Advanced surgical procedures performed with precision and care for optimal patient outcomes.",
    date: "/2025",
    intro:
      "Our oral surgery team performs a full range of surgical procedures with an emphasis on patient safety, minimal discomfort, and rapid recovery. We use the most advanced techniques to deliver exceptional outcomes.",
    body:
      "Oral surgery can address complex dental problems that non-surgical treatment cannot resolve. From wisdom tooth removal and implant placement to bone grafting, our board-certified surgeons ensure every procedure is performed with the highest level of care.",
    img: "/images/services/surgery.webp",
    heroImg: "/images/services/surgery.webp",
    points: ["Wisdom Tooth Removal", "Dental Implants", "Bone Grafting", "Sedation Options"],
    content: {
      mainImage: "/images/services/surgery.webp",
      sections: [
        {
          heading: "Comprehensive Dental Care",
          paragraph: "We provide a comprehensive range of orthodontic services, including:",
          points: [
            { title: "Initial Consultations", text: "These assessments help us understand your dental needs and create a personalized treatment plan." },
            { title: "Braces", text: "We offer various types of braces, including traditional metal, ceramic, and clear aligners, to suit your lifestyle and preferences." },
            { title: "Retainers", text: "After your braces are removed, retainers help maintain your new smile by preventing teeth from shifting back." }
          ],
          afterText: "Orthodontic Monitoring: Regular follow-ups ensure your treatment is on track and adjustments are made as needed.",
          images: ["/images/services/hero-1.png", "/images/services/hero-5.png"],
          showLine: true
        },
        {
          heading: "Aesthetic Dental Improvements",
          paragraph: "We also offer services to enhance your smile's aesthetics.",
          points: [
            { title: "Invisalign", text: "Clear aligners that are virtually invisible, allowing you to straighten your teeth discreetly." },
            { title: "Cosmetic Orthodontics", text: "Techniques that not only align your teeth but also improve their appearance, giving you a stunning smile." }
          ],
          showLine: true
        }
      ],
      loopImages: [
        "/images/services/general.webp",
        "/images/services/ortho.webp",
        "/images/services/cosmetic.webp",
        "/images/services/surgery.webp"
      ]
    },
    highlights: [
      { label: "Procedure Time", value: "30–120 min" },
      { label: "Anaesthesia Options", value: "Local / Sedation / General" },
      { label: "Recovery Time", value: "1–7 days" },
      { label: "Implant Success Rate", value: "98%" },
    ],
    bullets: [
      {
        title: "Wisdom Tooth Removal",
        desc: "Safe and efficient extraction of impacted or problematic wisdom teeth to prevent pain, infection and crowding.",
      },
      {
        title: "Dental Implants",
        desc: "Permanent, titanium-root replacements that look and function exactly like natural teeth — with a 98% success rate.",
      },
      {
        title: "Bone Grafting",
        desc: "Rebuilding lost jawbone density to support implants and restore facial structure using biocompatible materials.",
      },
      {
        title: "Sedation Options",
        desc: "We offer local anaesthesia, conscious sedation, and general anaesthesia so you can choose the comfort level that's right for you.",
      },
    ],
    faq: [
      {
        q: "Is dental implant surgery painful?",
        a: "Most patients report surprisingly little pain during the procedure due to local anaesthesia. Post-operative discomfort is manageable with prescribed medication.",
      },
      {
        q: "How long does recovery take after wisdom tooth removal?",
        a: "Most patients feel back to normal within 3–7 days. Soft foods and avoiding straws are recommended during recovery to prevent complications.",
      },
      {
        q: "What sedation options are available?",
        a: "We offer local anaesthesia, nitrous oxide (laughing gas), oral conscious sedation, and IV sedation depending on the complexity of the procedure and patient preference.",
      },
    ],
  },

  "05": {
    id: "05",
    title: "Teeth Whitening",
    category: "Cosmetic Enhancement",
    tagline: "Achieve a brighter, more confident smile with our professional, enamel-safe teeth whitening treatments.",
    date: "/2025",
    intro:
      "Our professional teeth whitening treatments deliver dramatic, lasting results that over-the-counter products simply cannot match. Safe, fast and effective — in as little as one appointment.",
    body:
      "Discolouration from food, beverages, age and lifestyle is completely normal — and completely reversible. Our in-clinic whitening system uses prescription-strength gel activated by a precise light to brighten your smile by up to 8 shades in under an hour.",
    img: "/images/services/cosmetic.webp",
    heroImg: "/images/services/cosmetic.webp",
    points: ["Professional Gel", "Custom Trays", "Fast Results", "Enamel Safe"],
    content: {
      mainImage: "/images/services/cosmetic.webp",
      sections: [
        {
          heading: "Comprehensive Dental Care",
          paragraph: "We provide a comprehensive range of orthodontic services, including:",
          points: [
            { title: "Initial Consultations", text: "These assessments help us understand your dental needs and create a personalized treatment plan." },
            { title: "Braces", text: "We offer various types of braces, including traditional metal, ceramic, and clear aligners, to suit your lifestyle and preferences." },
            { title: "Retainers", text: "After your braces are removed, retainers help maintain your new smile by preventing teeth from shifting back." }
          ],
          afterText: "Orthodontic Monitoring: Regular follow-ups ensure your treatment is on track and adjustments are made as needed.",
          images: ["/images/services/hero-1.png", "/images/services/hero-5.png"],
          showLine: true
        },
        {
          heading: "Aesthetic Dental Improvements",
          paragraph: "We also offer services to enhance your smile's aesthetics.",
          points: [
            { title: "Invisalign", text: "Clear aligners that are virtually invisible, allowing you to straighten your teeth discreetly." },
            { title: "Cosmetic Orthodontics", text: "Techniques that not only align your teeth but also improve their appearance, giving you a stunning smile." }
          ],
          showLine: true
        }
      ],
      loopImages: [
        "/images/services/general.webp",
        "/images/services/ortho.webp",
        "/images/services/cosmetic.webp",
        "/images/services/surgery.webp"
      ]
    },
    highlights: [
      { label: "Treatment Time", value: "45–60 min" },
      { label: "Results Last", value: "12–24 months" },
      { label: "Shades Lighter", value: "Up to 8" },
      { label: "Sessions Needed", value: "1–2" },
    ],
    bullets: [
      {
        title: "In-Office Whitening",
        desc: "Our most powerful whitening treatment — delivers up to 8 shades of improvement in a single, supervised session.",
      },
      {
        title: "Take-Home Kits",
        desc: "Custom whitening trays moulded to your teeth for comfortable at-home treatment at your own pace.",
      },
      {
        title: "Sensitivity-Safe Formula",
        desc: "We use desensitising agents alongside our whitening gel to ensure minimal to no sensitivity throughout the process.",
      },
      {
        title: "Long-Lasting Results",
        desc: "With simple maintenance habits, your whitening results can last between 12 and 24 months.",
      },
    ],
    faq: [
      {
        q: "How long does professional whitening last?",
        a: "Results typically last 12–24 months depending on your diet and oral hygiene habits. Touch-up sessions or take-home kits can extend results further.",
      },
      {
        q: "Is professional whitening better than store-bought kits?",
        a: "Yes. Prescription-strength whitening gels used in our clinic are significantly more effective and faster than any over-the-counter alternative.",
      },
      {
        q: "Can I whiten if I have veneers or crowns?",
        a: "Whitening only affects natural enamel. We'll assess your restorations and recommend the best approach so your smile remains balanced and uniform.",
      },
    ],
  },
};

export const serviceList = Object.values(serviceDetails);
