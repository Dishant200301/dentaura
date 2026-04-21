import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/Button";
import RevealText from "@/components/RevealText";
import { ChevronLeft, ChevronRight } from "lucide-react";

const features = [
  {
    title: "Free Consultation",
    desc: "At DentAura, we’ve got your back! Our awesome team uses the latest techniques to get to know what you want and need.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#0D1B15" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 8V12L15 15" stroke="#0D1B15" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    title: "Smiles Made Simple!",
    desc: "Anxious about your dentist visit? Relax! Our friendly dentists make every appointment stress-free.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#0D1B15" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" stroke="#0D1B15" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 9H9.01" stroke="#0D1B15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15 9H15.01" stroke="#0D1B15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
];

const BeforeAfter = () => {
  const [pos, setPos] = useState(50);
  const wrap = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromX = (clientX: number) => {
    if (!wrap.current) return;
    const r = wrap.current.getBoundingClientRect();
    const p = ((clientX - r.left) / r.width) * 100;
    setPos(Math.min(100, Math.max(0, p)));
  };

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (dragging.current) {
        updateFromX(e.clientX);
      }
    };
    const handleUp = () => {
      dragging.current = false;
    };
    
    // Touch support for mobile sliding
    const handleTouchMove = (e: TouchEvent) => {
      if (dragging.current) {
        updateFromX(e.touches[0].clientX);
      }
    };
    
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleUp);
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleUp);
    
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleUp);
    };
  }, []);

  return (
    <section className="bg-[#f5f4f7] py-10 md:py-16 lg:py-[60px] overflow-hidden">
      <div className="container-site">
        <div className="flex flex-col gap-10 md:gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          
          {/* Left Content (Text & Features) */}
          <div className="flex w-full flex-col lg:w-[45%]">
            <div className="flex flex-col">
              {/* Tag & Horizontal Line */}
              <div className="w-full">
                <div className="flex items-center gap-2">
                  <span className="h-[4px] w-[4px] rounded-full bg-[#0D1B15]"></span>
                  <span className="font-inter text-[14px] lg:text-[16px] font-normal leading-[24px] lg:leading-[27px] text-[#0D1B15]">
                    Why us?
                  </span>
                </div>
                <div className="mt-4 h-[1px] w-full bg-[#C9CBC5]" />
              </div>
              
              <RevealText 
                as="h2" 
                className="mt-6 font-display text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] font-medium leading-[1.2] tracking-[-2px] lg:tracking-[-3px] text-[#0D1B15]"
              >
                Before & After Gallery
              </RevealText>
              
              <p className="mt-4 max-w-[500px] font-inter text-[15px] md:text-[16px] lg:text-[18px] font-normal leading-[28px] lg:leading-[31px] tracking-[-0.3px] text-[#595E5C]">
                Check out our Before & After Gallery, highlighting amazing smile transformations that boost confidence and dental care.
              </p>
            </div>

            <div className="mt-8 md:mt-10 lg:mt-12 flex flex-col gap-5 md:gap-6 lg:gap-[24px]">
              {features.map((f) => (
                <div key={f.title} className="flex gap-3 md:gap-4 lg:gap-[16px]">
                  <div className="flex h-[44px] w-[44px] lg:h-[48px] lg:w-[48px] shrink-0 items-center justify-center rounded-[12px] border border-[#C9CBC5] bg-white">
                    {f.icon}
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-inter text-[18px] lg:text-[20px] font-medium leading-[28px] lg:leading-[34px] tracking-[-0.3px] text-[#0D1B15]">
                      {f.title}
                    </h4>
                    <p className="mt-1 max-w-[420px] font-inter text-[14px] lg:text-[16px] font-normal leading-[1.6] tracking-[-0.3px] text-[#595E5C]">
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 md:mt-10 lg:mt-[48px]">
              <Button 
                to="/appointment" 
                variant="lime" 
                showIcon={false}
                className="h-[48px] lg:h-[51.2px] px-6 lg:px-8 !rounded-[100px] border-none font-inter text-[14px] lg:text-[16px] font-normal tracking-[-0.3px] !text-[#0D1B15] hover:!text-white"
              >
                Make an Appointment
              </Button>
            </div>
          </div>

          {/* Right Content (Slider) */}
          <div 
            ref={wrap}
            className="relative h-[350px] md:h-[480px] w-full overflow-hidden rounded-[8px] bg-[#F5F5F5] select-none lg:h-[588px] lg:w-[50%]"
            onMouseDown={(e) => { dragging.current = true; updateFromX(e.clientX); }}
            onTouchStart={(e) => { dragging.current = true; updateFromX(e.touches[0].clientX); }}
          >
            {/* After Image (Base) */}
            <img 
              src="/images/home/after.webp" 
              alt="After" 
              className="absolute inset-0 h-full w-full object-cover pointer-events-none" 
            />
            
            {/* Before Image (Masked Overlay) */}
            {/* We use clipPath to crop the image seamlessly without altering its CSS width/aspect ratio */}
            <div 
              className="absolute inset-0 z-10 pointer-events-none" 
              style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
            >
              <img 
                src="/images/home/before.webp" 
                alt="Before" 
                className="h-full w-full object-cover" 
              />
            </div>

            {/* View Divider Line & Grabber */}
            <div 
              className="absolute bottom-0 top-0 z-20 flex w-[3px] items-center justify-center bg-white shadow-[0px_0px_8px_rgba(0,0,0,0.12)] cursor-ew-resize"
              style={{ left: `calc(${pos}% - 1.5px)` }}
            >
              <div className="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-full bg-white shadow-[0px_4px_16px_rgba(0,0,0,0.12)]">
                <div className="flex h-[24px] w-[24px] items-center justify-center rounded-full border-[2px] border-[#B0B0B0]">
                  <div className="flex items-center -space-x-[6px]">
                    <ChevronLeft size={16} className="text-[#888888]" strokeWidth={3} />
                    <ChevronRight size={16} className="text-[#888888]" strokeWidth={3} />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
