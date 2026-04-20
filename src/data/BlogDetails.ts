export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: {
    intro?: string;
    sections: {
      heading?: string;
      paragraphs: string[];
      image?: string;
      images?: string[]; // for grid views
      imagePosition?: "left" | "right" | "center" | "full" | "grid";
    }[];
  };
  heroImage: string;
  author: {
    name: string;
    avatar: string;
    role: string;
    bio: string;
    date: string;
  };
}

export const blogPosts: BlogPost[] = [
  {
    slug: "celebrating-15-years",
    title: "10 Simple Tips for a Lifetime of Healthy Smiles and Dental Care",
    excerpt: "Discover the essential habits that keep your teeth strong, white, and healthy for years to come.",
    heroImage: "/images/blog/post1.webp",
    content: {
      intro: "Your smile is one of your most powerful assets. Whether you're greeting someone new or enjoying your favorite meal, strong and healthy teeth make all the difference. Here are 10 simple, dentist-approved tips to help you maintain lifelong oral health—without the stress.",
      sections: [
        {
          heading: "Brush Twice a Day But Do It Right",
          paragraphs: [
            "Your website's design is the first thing visitors notice. A visually appealing site can captivate users and encourage them to explore further. Conversely, a poorly designed website can deter them. It's essential that your website reflects your brand's values and professionalism, ensuring a lasting and positive first impression."
          ]
        },
        {
          heading: "Floss Daily",
          paragraphs: [
            "Flossing removes plaque and food particles from between your teeth where your brush can't reach. It's a small step with big impact."
          ]
        },
        {
          heading: "Rinse with Mouthwash",
          paragraphs: [
            "Antibacterial mouthwash helps reduce plaque, freshen breath, and protect against gum disease. Choose alcohol-free options for sensitive mouths."
          ],
          image: "/images/blog/post1.webp",
          imagePosition: "full"
        },
        {
          heading: "Limit Sugary Foods and Drinks",
          paragraphs: [
            "Sugar feeds harmful bacteria in your mouth, leading to cavities. Swap soda for water and enjoy sweets in moderation."
          ]
        },
        {
          heading: "Stay Hydrated",
          paragraphs: [
            "Water helps wash away food particles and keeps your mouth moist, which is essential for saliva production—your natural defense against decay."
          ]
        },
        {
          heading: "Eat Tooth-Friendly Foods",
          paragraphs: [
            "Crunchy fruits and vegetables like apples, carrots, and celery help clean teeth naturally. Dairy products provide calcium for strong enamel."
          ],
          images: ["/images/blog/post2.webp", "/images/blog/post3.webp"],
          imagePosition: "grid"
        },
        {
          heading: "Conclusion",
          paragraphs: [
            "Healthy teeth aren't just about looks—they're about confidence, comfort, and overall well-being. By following these easy tips, you're investing in a lifetime of smiles.",
            "Need personalized advice or a checkup?",
            "Contact our dental care team today and take the first step toward a healthier smile."
          ]
        }
      ]
    },
    author: {
      name: "Dr. Sarah Mitchell",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71f1536783?q=80&w=200&auto=format&fit=crop",
      role: "Dental Surgeon",
      bio: "Hey! I'm Sarah Mitchell. Dental Surgeon at Dentaura.",
      date: "November 1, 2025"
    }
  },
  {
    slug: "nourishing-foods",
    title: "Nourishing Foods for Strong, Healthy Teeth and Lasting Oral Wellness",
    excerpt: "From crunchy apples to leafy greens, discover the best foods for stronger teeth and gums.",
    heroImage: "/images/blog/post2.webp",
    content: {
      intro: "What you eat has a significant impact on your oral health. A balanced diet rich in vitamins, minerals, and nutrients can strengthen your teeth and gums, while sugary and acidic foods can contribute to tooth decay and erosion.",
      sections: [
        {
          heading: "Crunchy Fruits and Vegetables",
          paragraphs: [
            "Apples, carrots, and celery act as natural toothbrushes. Their fibrous texture stimulates saliva production, which helps wash away food particles and neutralize acids that cause decay."
          ]
        },
        {
          heading: "Dairy Products for Calcium",
          paragraphs: [
            "Cheese, yogurt, and milk are rich in calcium and phosphates, which help remineralize tooth enamel. Cheese also helps balance the pH in your mouth, making it less acidic."
          ]
        },
        {
          heading: "Leafy Greens for Vitamins",
          paragraphs: [
            "Spinach and kale are high in calcium and folic acid, providing essential nutrients for gum health and overall oral resilience."
          ],
          image: "/images/blog/post2.webp",
          imagePosition: "full"
        },
        {
          heading: "Nuts and Seeds",
          paragraphs: [
            "Almonds and sesame seeds are great sources of protein and calcium. They are also low in sugar, making them a safe snack choice."
          ]
        },
        {
          heading: "Lean Proteins",
          paragraphs: [
            "Proteins like chicken and fish are rich in phosphorus, which works with calcium to build strong bones and teeth."
          ]
        },
        {
          heading: "Hydration with Water",
          paragraphs: [
            "Drinking water after eating helps rinse away food particles and maintain saliva levels, protecting your teeth between brushings."
          ],
          images: ["/images/blog/post1.webp", "/images/blog/post3.webp"],
          imagePosition: "grid"
        },
        {
          heading: "Conclusion",
          paragraphs: [
            "Healthy eating is a pillar of dental health. By choosing nutrient-dense foods, you're giving your smile the best chance to stay bright and strong.",
            "Want to learn more about nutrition for your teeth?",
            "Reach out to our experts today for a personalized dental health plan."
          ]
        }
      ]
    },
    author: {
      name: "Dr. Michael Chen",
      avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=200&auto=format&fit=crop",
      role: "Dental Surgeon",
      bio: "Hey! I'm Michael Chen. Dental Surgeon at Dentaura.",
      date: "November 1, 2025"
    }
  },
  {
    slug: "implants-vs-dentures",
    title: "Dental Implants vs. Dentures: Which Is Right for You?",
    excerpt: "A complete guide to understanding the differences, benefits, and costs of implants and dentures.",
    heroImage: "/images/blog/post3.webp",
    content: {
      intro: "Missing teeth can affect your ability to eat, speak, and smile with confidence. Fortunately, modern dentistry offers several options for replacing missing teeth.",
      sections: [
        {
          heading: "The Benefits of Dental Implants",
          paragraphs: [
            "Dental implants provide a permanent solution that feels and functions like natural teeth. They help preserve jawbone and maintain your facial structure."
          ]
        },
        {
          heading: "When to Consider Dentures",
          paragraphs: [
            "Dentures are a non-surgical, cost-effective option for replacing multiple missing teeth. Modern dentures are more comfortable than ever."
          ]
        },
        {
          heading: "Longevity and Maintenance",
          paragraphs: [
            "While implants can last a lifetime with proper care, dentures may require occasional adjustments. Both need regular cleaning and checkups."
          ],
          image: "/images/blog/post3.webp",
          imagePosition: "full"
        },
        {
          heading: "Functional Differences",
          paragraphs: [
            "Implants offer the strongest biting force, allowing you to eat all your favorite foods. Dentures may require softer food choices initially."
          ]
        },
        {
          heading: "Aesthetic Considerations",
          paragraphs: [
            "Both options are custom-designed to match your natural smile. Our lab ensures your replacement teeth look and feel completely natural."
          ]
        },
        {
          heading: "Cost Considerations",
          paragraphs: [
            "Implants have a higher initial cost but offer long-term value. Dentures are more accessible upfront and can be upgraded later."
          ],
          images: ["/images/blog/post4.webp", "/images/blog/post2.webp"],
          imagePosition: "grid"
        },
        {
          heading: "Conclusion",
          paragraphs: [
            "Whether you choose implants or dentures, the goal is to restore your comfort and confidence. Your dentist will help you weigh the pros and cons.",
            "Still unsure which path to take?",
            "Book a consultation to discuss the best restorative options for your unique needs."
          ]
        }
      ]
    },
    author: {
      name: "Dr. Sarah Mitchell",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71f1536783?q=80&w=200&auto=format&fit=crop",
      role: "Dental Surgeon",
      bio: "Hey! I'm Sarah Mitchell. Dental Surgeon at Dentaura.",
      date: "November 1, 2025"
    }
  },
  {
    slug: "choosing-toothbrush",
    title: "Guide to Choosing the Right Toothbrush and Toothpaste",
    excerpt: "Everything you need to know about selecting the perfect oral care products for your needs.",
    heroImage: "/images/blog/post4.webp",
    content: {
      intro: "With so many options available, choosing the right toothbrush and toothpaste can feel overwhelming. We break down what really matters for your daily routine.",
      sections: [
        {
          heading: "Manual vs. Electric",
          paragraphs: [
            "Both can be effective, but electric toothbrushes often make it easier to reach difficult spots and ensure you brush for the full two minutes."
          ]
        },
        {
          heading: "Selecting Bristle Stiffness",
          paragraphs: [
            "Soft bristles are recommended by nearly all dentists. They are effective at removing plaque without damaging enamel or irritating gums."
          ]
        },
        {
          heading: "The Power of Fluoride",
          paragraphs: [
            "Regardless of the brand, ensuring your toothpaste contains fluoride is the single most important step for preventing cavities."
          ],
          image: "/images/blog/post4.webp",
          imagePosition: "full"
        },
        {
          heading: "Sensitivity Considerations",
          paragraphs: [
            "If you have sensitive teeth, look for toothpastes containing potassium nitrate or stannous fluoride to help block pain signals."
          ]
        },
        {
          heading: "Whitening Formulas",
          paragraphs: [
            "Whitening toothpastes use mild abrasives to remove surface stains. For deeper whitening, professional treatments are often a better choice."
          ]
        },
        {
          heading: "When to Replace Your Brush",
          paragraphs: [
            "You should replace your toothbrush every three months. Frayed bristles are less effective and can harbor bacteria over time."
          ],
          images: ["/images/blog/post2.webp", "/images/blog/post3.webp"],
          imagePosition: "grid"
        },
        {
          heading: "Conclusion",
          paragraphs: [
            "The best oral care tools are the ones you use consistently. Find the products that you enjoy using and stick to your daily routine.",
            "Not sure if your products are right for you?",
            "Ask your dental hygienist for a personalized recommendation at your next checkup."
          ]
        }
      ]
    },
    author: {
      name: "Dr. James Wilson",
      avatar: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=200&auto=format&fit=crop",
      role: "Dental Surgeon",
      bio: "Hey! I'm James Wilson. Dental Surgeon at Dentaura.",
      date: "November 1, 2025"
    }
  }
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getAllBlogSlugs = (): string[] => {
  return blogPosts.map(post => post.slug);
};
