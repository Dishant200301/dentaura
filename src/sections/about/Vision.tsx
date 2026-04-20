import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const headingText = "At Oralcare we think everyone should have a radiant smile. Our expert team provides tailored care in a cozy environment, utilizing cutting-edge technology to achieve the best outcomes.";

const avatars = [
  "/images/about/about-image-1.webp",
  "/images/about/about-image-2.webp",
  "/images/about/about-image-3.webp",
  "/images/about/about-image-4.webp",
  "/images/about/about-image-5.webp",
  "/images/about/about-image-6.webp",
  "/images/about/about-image-7.webp",
  "/images/about/about-image-8.webp",
];

export const Vision = () => {
  const headRef = useRef<HTMLHeadingElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [indices, setIndices] = useState([0, 1, 2, 3]);

  // Word-by-word scroll reveal
  useEffect(() => {
    const chars = headRef.current?.querySelectorAll(".word");
    if (!chars || chars.length === 0) return;

    const tw = gsap.to(chars, {
      color: "#0D1B15",
      stagger: 0.05,
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

  // Infinite auto-scrolling carousel - no useEffect needed for CSS animation

  return (
    <section className="relative min-h-[600px] md:min-h-[650px] lg:h-[734px] overflow-hidden bg-white py-16 md:py-20 lg:py-0">
      <div className="container-site flex h-full flex-col items-center">
        {/* Tag - About */}
        <div className="mt-0 lg:mt-[112px] flex items-center justify-center gap-2">
          <span className="h-[4px] w-[4px] rounded-full bg-[#0D1B15]" />
          <span className="font-inter text-[14px] lg:text-[16px] font-normal leading-[24px] lg:leading-[27px] text-[#0D1B15]">
            About
          </span>
        </div>

        {/* Main Heading with word reveal */}
        <h2
          ref={headRef}
          className="mt-10 md:mt-12 lg:mt-[78px] w-full max-w-[1075px] text-center font-display text-[32px] lg:text-[40px] xl:text-[48px] font-medium leading-[38px] xl:leading-[58px] tracking-[-3px] xl:tracking-[-3px]"
        >
          {headingText.split(" ").map((word, i) => (
            <span key={i} className="word inline-block text-[#E6E8E7] transition-colors">
              {word}&nbsp;
            </span>
          ))}
        </h2>

        {/* Social Proof */}
        <div className="mt-10 md:mt-12 lg:mt-[80px] flex flex-col items-center">
          <p className="font-inter text-[14px] lg:text-[16px] font-medium leading-[24px] lg:leading-[27px] tracking-[-0.3px] text-[#595E5C]">
            Loved by many clients, rated 4.9
          </p>

          {/* Infinite Auto-Scrolling Carousel */}
          <div className="mt-4 flex items-center overflow-hidden">
            <div className="flex animate-scroll-infinite">
              {/* First set of avatars */}
              {avatars.map((avatar, i) => (
                <div
                  key={`first-${i}`}
                  className={`h-[49px] w-[60px] overflow-hidden rounded-[8px] border-2 border-white shrink-0 ${
                    i > 0 ? "-ml-2" : ""
                  }`}
                >
                  <img
                    src={avatar}
                    alt="User"
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {avatars.map((avatar, i) => (
                <div
                  key={`second-${i}`}
                  className={`h-[49px] w-[60px] overflow-hidden rounded-[8px] border-2 border-white shrink-0 -ml-2`}
                >
                  <img
                    src={avatar}
                    alt="User"
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
            {/* 80+ Badge */}
            <div className="-ml-2 flex h-[49px] w-[60px] items-center justify-center rounded-[8px] bg-[#0D1B15] shrink-0 z-10">
              <span className="font-inter text-[18px] font-semibold leading-[25px] tracking-[-0.3px] text-white">
                80+
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
