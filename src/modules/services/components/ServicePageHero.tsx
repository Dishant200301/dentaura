import { useRef, useEffect } from "react";
import gsap from "gsap";
import RevealText from "@/components/RevealText";

const heroImages = [
  { src: "/images/services/hero-5.png", w: 250 },
  { src: "/images/gallery/g8.webp", w: 360 },
  { src: "/images/services/hero-1.png", w: 480 },
  { src: "/images/services/surgery.webp", w: 250 },
  { src: "/images/services/general.webp", w: 360 },
  { src: "/images/services/cosmetic.webp", w: 480 },
];

const ServicePageHero = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!marqueeRef.current) return;

    const track = marqueeRef.current;
    
    // Clear and duplicate for infinite loop to ensure no gaps
    const setupMarquee = () => {
      // Clear existing clones if any (to prevent multiple duplicates on re-render)
      const children = Array.from(track.children);
      if (children.length > heroImages.length) {
        children.slice(heroImages.length).forEach(child => child.remove());
      }
      
      const originalItems = Array.from(track.children);
      originalItems.forEach(item => {
        const clone = item.cloneNode(true);
        track.appendChild(clone);
      });

      // Calculate total width of one set including one gap
      const gap = 16; // gap-4 is 16px
      const firstSetWidth = (track.scrollWidth - gap) / 2;

      if (timelineRef.current) timelineRef.current.kill();

      const tl = gsap.timeline({
        repeat: -1,
        defaults: { ease: "none" }
      });

      tl.to(track, {
        x: -(firstSetWidth + gap / 2),
        duration: 30,
      });

      timelineRef.current = tl;
    };

    // Use a small timeout to ensure images are rendered and widths are correct
    const timer = setTimeout(setupMarquee, 100);

    return () => {
      clearTimeout(timer);
      if (timelineRef.current) timelineRef.current.kill();
    };
  }, []);

  const handleMouseEnter = () => {
    if (timelineRef.current) {
      gsap.to(timelineRef.current, { timeScale: 0.15, duration: 1.2, ease: "power2.out" });
    }
  };

  const handleMouseLeave = () => {
    if (timelineRef.current) {
      gsap.to(timelineRef.current, { timeScale: 1, duration: 1.2, ease: "power2.inOut" });
    }
  };

  return (
    <section className="bg-[#f5f4f7] pt-36 pb-20 md:pb-0 lg:pb-36 md:pt-44 overflow-hidden">
      <div className="container-site">
        {/* Hero Top Content */}
        
        {/* Mobile & Tablet Heading (0 to lg) */}
        <div className="flex flex-col lg:hidden mb-16 md:mb-10">
          <div className="flex flex-col">
            {/* Mobile: 3 lines */}
            <div className="md:hidden">
              <RevealText as="h1" className="font-display text-[46px] leading-[1] font-medium text-[#0D1B15] tracking-[-1px]">Dental Care</RevealText>
              <RevealText as="h1" className="font-display text-[46px] leading-[1] font-medium text-[#0D1B15] tracking-[-1px]">for All</RevealText>
              <RevealText as="h1" className="font-display text-[46px] leading-[1] font-medium text-[#0D1B15] tracking-[-1px]">Smiles</RevealText>
            </div>
            {/* Tablet: 1 line */}
            <div className="hidden md:block">
              <RevealText as="h1" className="font-display text-[68px] leading-[1] font-medium text-[#0D1B15] tracking-[-3px]">Dental Care for All Smiles</RevealText>
            </div>
          </div>

          <div className="mt-4 flex flex-row items-end justify-between md:items-center">
            <div className="max-w-[150px] sm:max-w-[280px]">
              <p className="font-inter text-[14px] font-normal leading-[1.5] text-[#595E5C] md:text-[15px]">
                From checkups to treatments, we keep your smile healthy and bright.
              </p>
            </div>
            <div className="flex justify-end">
               <span className="font-display font-medium text-brand-ink text-[46px] md:text-[64px] lg:text-[64px] leading-none tracking-[-2px]">
                  ©25
               </span>
            </div>
          </div>
        </div>

        {/* Laptop & Desktop Heading (lg+) */}
        <div className="hidden lg:grid grid-cols-[1.2fr_0.8fr_0.6fr] items-end gap-10 mb-12">
          <div className="flex flex-col">
            <RevealText as="h1" className="font-display lg:text-[64px] xl:text-[96px] lg:leading-[64px] xl:leading-[96px] font-medium text-[#0D1B15]">Dental Care</RevealText>
            <RevealText as="h1" className="font-display lg:text-[64px] xl:text-[96px] lg:leading-[64px] xl:leading-[96px] font-medium text-[#0D1B15]">for All Smiles</RevealText>
          </div>
          
          <div className="pb-6">
            <p className="max-w-[280px] font-inter text-[16px] font-normal leading-[1.5] text-[#595E5C]">
              From checkups to treatments, we keep your smile healthy and bright.
            </p>
          </div>

          <div className="flex justify-end pb-6">
             <span className="font-display font-medium text-brand-ink lg:text-[64px] xl:text-[96px] leading-none tracking-[-4px]">
                ©25
             </span>
          </div>
        </div>
      </div>

      {/* Marquee Section */}
      <div 
        className="relative w-full cursor-pointer mt-10 md:mt-20"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div 
          ref={marqueeRef}
          className="flex gap-4 px-4 will-change-transform"
          style={{ width: "max-content" }}
        >
          {heroImages.map((img, i) => (
            <div 
              key={i} 
              className="relative h-[220px] md:h-[270px] shrink-0 overflow-hidden rounded-[24px]"
              style={{ width: `${img.w}px` }}
            >
              <img 
                src={img.src} 
                alt={`Dental service ${i + 1}`} 
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicePageHero;
