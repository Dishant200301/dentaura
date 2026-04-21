import { Button } from "@/components/Button";
import { RevealText } from "@/components/RevealText";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const DentalInnovation = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const topLeftCardRef = useRef<HTMLDivElement>(null);
  const topRightCardRef = useRef<HTMLDivElement>(null);
  const bottomLeftCardRef = useRef<HTMLDivElement>(null);
  const bottomRightCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const topLeft = topLeftCardRef.current;
    const topRight = topRightCardRef.current;
    const bottomLeft = bottomLeftCardRef.current;
    const bottomRight = bottomRightCardRef.current;

    if (!section || !topLeft || !topRight || !bottomLeft || !bottomRight) return;

    const ctx = gsap.context(() => {
      // Top left card - animate from left
      gsap.fromTo(
        topLeft,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
                       start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Top right card - animate from right
      gsap.fromTo(
        topRight,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
           
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Bottom left card - animate from left
      gsap.fromTo(
        bottomLeft,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
           
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Bottom right card - animate from right
      gsap.fromTo(
        bottomRight,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
           
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-[800px] md:min-h-[1000px] xl:h-[1522px] w-full overflow-hidden bg-[#F5F4F7]">
      <div className="mx-auto h-full w-full max-w-[1440px] px-4 md:px-6 xl:px-[70px] pt-16 md:pt-20 xl:pt-[112px] pb-10 xl:pb-0">
        {/* Top Content */}
        <div className="relative h-auto xl:h-[179px] w-full">
          {/* Tag - Our words */}
          <div className="xl:absolute xl:left-0 xl:top-0 flex items-center gap-2 xl:gap-3 mb-4 xl:mb-0">
            <span className="h-[4px] w-[4px] rounded-full bg-[#0D1B15]" />
            <span className="font-inter text-[14px] xl:text-[16px] font-normal leading-[24px] xl:leading-[27px] text-[#0D1B15]">
              Our words
            </span>
          </div>

          {/* Title & Button */}
          <div className="xl:absolute xl:bottom-0 xl:left-0 xl:right-0 flex flex-col xl:flex-row xl:items-end justify-between gap-4 xl:gap-0 mt-8 xl:mt-0">
            {/* Title with RevealText */}
            <RevealText
              as="h2"
              className="font-display text-[32px] md:text-[40px] xl:text-[48px] font-medium leading-tight xl:leading-[58px] tracking-[-2px] xl:tracking-[-3px] text-[#0D1B15]"
            >
              Dental Innovation at<br className="hidden xl:block" />the Speed of Care
            </RevealText>

            {/* Meet the Team Button */}
            <Button
              to="/team"
              variant="primary"
              showIcon={false}
              className="h-[48px] xl:h-[51px] rounded-[100px] bg-[#D1FC71] px-5 xl:px-6 text-[14px] xl:text-[16px] font-normal text-[#0D1B15] w-fit"
            >
              Meet the Team
            </Button>
          </div>
        </div>

        {/* Bottom Content - Cards Grid */}
        <div className="mt-10 md:mt-12 xl:mt-[80px] flex flex-col gap-4 md:gap-5 xl:gap-6">
          {/* Top Cards Row */}
          <div className="flex flex-col xl:flex-row h-auto xl:h-[548px] gap-4 md:gap-5 xl:gap-6">
            {/* Left Card - Lime Green */}
            <div
              ref={topLeftCardRef}
              className="flex h-auto xl:h-full w-full xl:w-[496px] flex-col justify-between rounded-[8px] bg-[#D1FC71] p-6 xl:p-8 min-h-[280px] xl:min-h-0"
            >
              <h3 className="font-display text-[24px] md:text-[32px] xl:text-[48px] font-medium leading-tight xl:leading-[58px] tracking-[-2px] xl:tracking-[-3px] text-[#0D1B15]">
                We'll keep relying on DentalInvest at every stage of our growth; it's impartial funding.
              </h3>
              <p className="font-display text-[20px] md:text-[24px] xl:text-[28px] font-medium leading-[28px] xl:leading-[35px] tracking-[-1px] xl:tracking-[-2px] text-[#0D1B15] mt-4 xl:mt-0">
                Team DentAura
              </p>
            </div>

            {/* Right Card - Surgery Image */}
            <div
              ref={topRightCardRef}
              className="h-[300px] md:h-[400px] xl:h-full w-full xl:w-[780px] overflow-hidden rounded-[12px]"
            >
              <img
                src="/images/about/about-image-5.webp"
                alt="Dental Surgery"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Bottom Cards Row */}
          <div className="flex flex-col xl:flex-row h-auto xl:h-[466px] gap-4 md:gap-5 xl:gap-6">
            {/* Left Card - White with Quote */}
            <div
              ref={bottomLeftCardRef}
              className="flex flex-col md:flex-row h-auto xl:h-full w-full xl:w-[892px] gap-6 xl:gap-8 rounded-[12px] bg-white p-4 xl:p-8"
            >
              {/* Text Content */}
              <div className="flex w-full xl:w-[410px] flex-col justify-between order-2 xl:order-1">
                <p className="font-display text-[18px] xl:text-[20px] font-medium leading-[26px] xl:leading-[28px] tracking-[-0.5px] xl:tracking-[-1px] text-[#595E5C]">
                  Partnering with DentalCapital has been crucial for QuantumSmile Innovations. This collaboration enhances our capabilities and aligns with our vision to revolutionize dental care. Together, we will seek innovative solutions for our clients and the industry.
                </p>
                <p className="font-display text-[22px] xl:text-[28px] font-medium leading-[30px] xl:leading-[35px] tracking-[-1px] xl:tracking-[-2px] text-[#0D1B15] mt-4 xl:mt-0">
                  Dentist, DentAura
                </p>
              </div>

              {/* Doctor Image */}
              <div className="h-[250px] md:h-[300px] xl:h-[402px] w-full xl:w-[414px] overflow-hidden rounded-[8px] p-2 xl:p-3 bg-[#f2f2ef] order-1 xl:order-2">
                <img
                  src="/images/about/about-image-6.webp"
                  alt="Dentist"
                  className="h-full w-full object-cover rounded-[8px]"
                />
              </div>
            </div>

            {/* Right Card - Dark */}
            <div
              ref={bottomRightCardRef}
              className="flex h-auto xl:h-full w-full xl:w-[384px] flex-col justify-between rounded-[12px] bg-[#0D1B15] p-5 xl:p-6 min-h-[200px] xl:min-h-0"
            >
              <div>
                <p className="font-display text-[28px] md:text-[32px] xl:text-[36px] font-medium leading-[36px] xl:leading-[45px] tracking-[-1px] xl:tracking-[-2px] text-white">
                  $120M+
                </p>
                <p className="mt-2 font-display text-[22px] md:text-[28px] xl:text-[36px] font-medium leading-[30px] xl:leading-[45px] tracking-[-1px] xl:tracking-[-2px] text-white">
                  The largest in dental advancements in Southeast Asia.
                </p>
              </div>
              <p className="font-display text-[20px] xl:text-[28px] font-medium leading-[28px] xl:leading-[35px] tracking-[-1px] xl:tracking-[-2px] text-[#F5F4F7] mt-4 xl:mt-0">
                Dental Surgeon
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
