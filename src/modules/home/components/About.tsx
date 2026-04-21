import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/Button";
import SectionTag from "@/components/SectionTag";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 1200, suffix: "+", label: "Patients Served" },
  { value: 85, suffix: "+", label: "Active Partner Clinics" },
  { value: 60, suffix: "+", label: "Ongoing Dental Partners" },
  { value: 94, suffix: "%", label: "Client Satisfaction Score" },
];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obj = { v: 0 };
    const tw = gsap.to(obj, {
      v: value,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none none" },
      onUpdate: () => setN(Math.round(obj.v)),
    });
    return () => {
      tw.scrollTrigger?.kill();
      tw.kill();
    };
  }, [value]);
  return (
    <span ref={ref} className="font-display text-[36px] font-medium leading-[45px] tracking-[-2px] text-[#0D1B15]">
      {n}
      {suffix}
    </span>
  );
};

const About = () => {
  const headRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const chars = headRef.current?.querySelectorAll(".char");
    if (!chars || chars.length === 0) return;

    const tw = gsap.to(chars, {
      color: "#0D1B15",
      stagger: 0.5,
      scrollTrigger: {
        trigger: headRef.current,
        start: "top 80%",
        end: "bottom 40%",
        scrub: true,
      },
    });

    return () => {
      tw.scrollTrigger?.kill();
      tw.kill();
    };
  }, []);

  const headingText = "At DentAura we think everyone should have a radiant smile. Our expert team provides tailored care in a cozy environment, utilizing cutting-edge technology to achieve the best outcomes.";

  return (
    <section className="relative w-full  bg-white py-20 lg:py-[120px]">
      <div className="container-site">
        {/* Top Content: Tag & Title */}
        <div className="relative flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="w-full lg:max-w-[382px]">
            <SectionTag>Who We Are</SectionTag>
            {/* Line Animation Container */}
            <div className="mt-4 h-[1px] w-full bg-[#0D1B15]/10" />
          </div>

          <h2
            ref={headRef}
            className="w-full font-display text-[32px] font-medium leading-[1.2] tracking-[-1.5px] opacity-[0.93] sm:text-[40px] lg:max-w-[65%] lg:text-[48px] lg:leading-[58px] lg:tracking-[-3px]"
          >
            {headingText.split(" ").map((word, i) => (
              <span key={i} className="char text-[#E6E8E7]">
                {word}{" "}
              </span>
            ))}
          </h2>
        </div>

        {/* Bottom Content (Hero Image & Text) */}
        <div className="mt-12 md:mt-16 flex flex-col gap-10 lg:mt-[112px] lg:flex-row lg:justify-end lg:gap-[50px] lg:h-[500px]">
          {/* Image Wrap */}
          <div className="lg:pl-10 xl:pl-0 relative h-[300px] sm:h-[400px] lg:h-[500px] w-full shrink-0 overflow-hidden rounded-lg lg:w-[450px]">
            <img
              src="/images/about/about.webp"
              alt="Smiling person with curly hair and closed eyes"
              loading="lazy"
              className="h-full w-full object-cover rounded-lg object-center"
            />
          </div>

          {/* Text Content */}
          <div className="flex h-full w-full shrink-0 flex-col lg:w-[518px] lg:justify-between">
            <div className="space-y-6 md:space-y-8">
              <p className="font-inter text-[16px] sm:text-[18px] font-normal leading-[1.6] text-[#595E5C]">
                At DentAura, we make dental care simple, comfortable, and trustworthy. Our focus is on personalized treatments, modern technology, and gentle care — so every visit feels stress-free and effective.
              </p>
              <p className="font-inter text-[16px] sm:text-[18px] font-normal leading-[1.6] text-[#595E5C]">
                From routine checkups to advanced procedures, we're here to protect your smile and boost your confidence. Because great oral health starts with care you can trust.
              </p>
            </div>

            <div className="mt-10 lg:mt-0">
              <Button 
                to="/about" 
                variant="lime" 
                showIcon={false}
                className="w-[141.92px] px-0 h-[51.2px] text-[16px] text-[#0D1B15] !rounded-[100px]"
              >
                About DentAura
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4 lg:mt-[120px] lg:flex lg:flex-nowrap lg:justify-between lg:gap-x-0">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-[12px] md:gap-[16px]">
              <Counter value={s.value} suffix={s.suffix} />
              <p className="font-inter text-[14px] sm:text-[16px] font-normal leading-[1.6] text-[#595E5C]">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
