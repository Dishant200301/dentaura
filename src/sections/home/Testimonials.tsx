import { useEffect, useRef } from "react";
import RevealText from "@/components/RevealText";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    title: "How Urgent Treatment Restored My Confidence",
    text: "I had a sudden dental issue that left me worried about my appearance. The team acted quickly and professionally, and now I feel confident smiling again!",
    name: "Emily Johnson",
    loc: "New York, USA",
    img: "/images/testimonials/t2.webp"
  },
  {
    title: "Friendly & Comfortable Dental Experience",
    text: "I was always nervous about visiting the dentist, but this clinic changed my perspective. The staff was so friendly, and my smile has never looked better!",
    name: "Liam Patel",
    loc: "London, UK",
    img: "/images/testimonials/t1.webp"
  },
  {
    title: "Emergency Care That Saved My Smile",
    text: "When I chipped my tooth in an accident, they treated me immediately. Thanks to their expertise, my smile looks flawless, and I felt completely cared for.",
    name: "Sofia Martínez",
    loc: "Madrid, Spain",
    img: "/images/testimonials/t3.webp"
  },
  {
    title: "Personalized Treatment That Truly Works",
    text: "The dentist created a carefully personalized plan for me, and every step was easy to follow. My teeth have never felt healthier, stronger, or looked better!",
    name: "Ahmed K",
    loc: "Dubai, UAE",
    img: "/images/testimonials/t4.webp"
  },
];

const Testimonials = () => {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (lineRef.current) {
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.5,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: lineRef.current,
            start: "top 90%",
          },
        }
      );
    }
  }, []);

  return (
    <section className="bg-[#f5f4f7] py-16 md:py-20 lg:py-[110px] overflow-hidden">
      <div className="container-site">
        {/* Top Content */}
        <div className="flex flex-col">
          {/* Tag with dot */}
          <div className="flex items-center gap-2">
            <span className="h-[4px] w-[4px] rounded-full bg-[#0D1B15]" />
            <span className="font-jost text-[14px] lg:text-[16px] font-normal leading-[24px] lg:leading-[27px] text-[#0D1B15]">
              Testimonials
            </span>
          </div>

          {/* Animated Horizontal Line */}
          <div ref={lineRef} className="my-3 lg:my-4 h-[1px] w-full origin-left bg-[#C9CBC5]" />

          {/* Title & Subtitle Row */}
          <div className="flex flex-col items-start justify-between gap-4 md:gap-6 lg:flex-row lg:items-end">
            <RevealText 
              as="h2" 
              className="font-display text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] font-medium leading-[1.2] tracking-[-2px] lg:tracking-[-2.5px] text-[#0D1B15] lg:leading-[58px]"
            >
              Smiles That Speak for<br className="hidden sm:block" />Themselves
            </RevealText>
            <p className="max-w-[450px] font-inter text-[15px] md:text-[16px] lg:text-[18px] font-normal leading-[26px] lg:leading-[31px] tracking-[-0.3px] text-[#595E5C]">
              Real experiences from our patients that reflect trust, comfort, and quality dental care.
            </p>
          </div>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="mt-10 md:mt-12 lg:mt-16 grid gap-5 md:gap-6 lg:grid-cols-4">
          {items.map((it) => (
            <article key={it.name} className="flex flex-col rounded-[12px] lg:rounded-[16px] bg-white p-5 lg:p-6 shadow-sm">
              {/* Review Content */}
              <div className="flex-1">
                <h4 className="font-display text-[17px] md:text-[18px] lg:text-[20px] font-medium leading-[26px] lg:leading-[28px] tracking-[-1px] text-[#0D1B15]">
                  {it.title}
                </h4>
                <p className="mt-3 lg:mt-4 font-figtree text-[14px] lg:text-[16px] font-normal leading-[22px] lg:leading-[24px] text-[#595E5C]">
                  "{it.text}"
                </p>
              </div>

              {/* Horizontal Line */}
              <div className="my-4 lg:my-5 h-[1px] w-full bg-[#C9CBC5]" />

              {/* Reviewer Info */}
              <div className="flex items-start gap-3">
                <img 
                  src={it.img} 
                  alt={it.name} 
                  loading="lazy" 
                  className="h-[52px] w-[52px] lg:h-[60px] lg:w-[60px] shrink-0 rounded-[8px] object-cover" 
                />
                <div>
                  <p className="font-inter text-[14px] lg:text-[16px] font-semibold leading-[24px] lg:leading-[27px] tracking-[-0.3px] text-[#0D1B15]">
                    {it.name}
                  </p>
                  <p className="font-figtree text-[13px] lg:text-[14px] font-normal leading-[20px] text-[#0D1B15]">
                    {it.loc}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
