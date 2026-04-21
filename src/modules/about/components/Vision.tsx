import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const headingText = "At DentAura we think everyone should have a radiant smile. Our expert team provides tailored care in a cozy environment, utilizing cutting-edge technology to achieve the best outcomes.";

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
  const scrollRef = useRef<HTMLDivElement>(null);

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

  // Infinite Auto-Scrolling Carousel Logic
  useEffect(() => {
    const scrollEl = scrollRef.current;
    if (!scrollEl) return;

    // Reset scroll to 0 for infinite loop
    const totalWidth = scrollEl.scrollWidth / 2;

    const loop = gsap.to(scrollEl, {
      x: `-=${totalWidth}`,
      duration: 10, // Speed in seconds
      ease: "none",
      repeat: -1,
      onRepeat: () => {
        gsap.set(scrollEl, { x: 0 });
      }
    });

    return () => {
      loop.kill();
    };
  }, []);

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

        {/* Main Heading */}
        <h2
          ref={headRef}
          className="mt-10 md:mt-12 lg:mt-[78px] w-full max-w-[1075px] text-center font-display text-[32px] lg:text-[40px] xl:text-[48px] font-medium leading-[38px] xl:leading-[58px] tracking-[-1px] xl:tracking-[-2px]"
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

          <div className="mt-4 flex items-center overflow-hidden w-[280px] sm:w-[320px]">
             {/* Mask container to hide overflow */}
            <div className="flex items-center overflow-hidden">
              <div ref={scrollRef} className="flex gap-2">
                {/* Double the list for smooth infinite scroll */}
                {[...avatars, ...avatars].map((img, idx) => (
                  <div
                    key={idx}
                    className="h-[49px] w-[60px] flex-shrink-0 overflow-hidden rounded-[8px] border-2 border-white"
                  >
                    <img
                      src={img}
                      alt="User"
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* 80+ Badge - Centered and Fixed */}
            <div className="relative -ml-2 flex h-[49px] w-[60px] items-center justify-center rounded-[8px] bg-[#0D1B15] shrink-0 z-10 border-2 border-white">
              <span className="font-inter text-[16px] font-semibold text-white">
                80+
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};