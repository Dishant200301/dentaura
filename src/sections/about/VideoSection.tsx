import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Play, Pause } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export const VideoSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftTextRef = useRef<HTMLDivElement>(null);
  const rightTextRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const playButtonRef = useRef<HTMLButtonElement>(null);
  
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1280px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=1800",
          scrub: 1,
          pin: true,
          pinSpacing: true,
        }
      });

      // Text moves out
      tl.to(leftTextRef.current, { x: -600, opacity: 0, duration: 1, ease: "power2.inOut" }, 0);
      tl.to(rightTextRef.current, { x: 600, opacity: 0, duration: 1, ease: "power2.inOut" }, 0);

      // Video scales up
      tl.fromTo(videoContainerRef.current, 
        { width: 255, height: 120, borderRadius: "16px" },
        { width: 1250, height: 600, borderRadius: "32px", duration: 1, ease: "power2.inOut" }, 0);

      tl.fromTo(playButtonRef.current, 
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, duration: 0.2 }, 0.8);
    });

    return () => mm.revert();
  }, []);

  const handlePlayToggle = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section 
      ref={containerRef} 
      className=" relative z-10 w-full h-auto xl:h-screen bg-[#F5F4F7] overflow-hidden"
    >
      {/* Desktop (Pinned Scroll Animation) */}
      <div className="hidden xl:flex relative h-screen w-full flex-col items-center justify-center pt-[92px]">
        <div className="absolute top-[12%] text-[#595E5C] font-display text-[20px] font-medium tracking-[-1px]">
          Keep scrolling
        </div>

        <div className="relative flex items-center justify-center w-full h-[600px]">
          {/* Left Text */}
          <div 
            ref={leftTextRef} 
            className="absolute left-[10%] z-20 font-display text-[64px] font-medium tracking-[-3px] text-[#0D1B15] whitespace-nowrap"
          >
            ©2025
          </div>

          {/* Video Container - Centered absolutely */}
          <div 
            ref={videoContainerRef}
            className="relative z-10 overflow-hidden bg-white flex items-center justify-center shrink-0"
            style={{ width: 255, height: 120, borderRadius: "16px" }}
          >
            <video ref={videoRef} src="/images/about/about-video.mp4" className="w-full h-full object-cover" loop muted playsInline />
            <button ref={playButtonRef} onClick={handlePlayToggle} className="absolute right-10 bottom-10 z-30 flex h-[100px] w-[100px] items-center justify-center rounded-full bg-[#D1FC71] text-[#0D1B15] shadow-2xl hover:scale-110 transition-transform cursor-pointer">
              {isPlaying ? <Pause size={40} fill="currentColor" /> : <Play size={40} fill="currentColor" className="ml-1" />}
            </button>
          </div>

          {/* Right Text */}
          <div 
            ref={rightTextRef} 
            className="absolute right-[10%] z-20 font-display text-[64px] font-medium tracking-[-3px] text-[#0D1B15] whitespace-nowrap"
          >
            Teeth Whitening
          </div>
        </div>
      </div>

      {/* Mobile, Tablet, Laptop (Static Stack Layout) */}
      <div className="flex xl:hidden flex-col items-center py-20 px-4 gap-8">
        <div className="font-display text-[32px] md:text-[48px] font-medium tracking-[-1.5px] text-[#0D1B15]">
          ©2025
        </div>

        <div className="relative w-full max-w-[800px] aspect-video overflow-hidden rounded-[16px] md:rounded-[24px]">
          <video src="/images/about/about-video.mp4" className="w-full h-full object-cover" loop muted playsInline ref={videoRef} />
          <button 
            onClick={handlePlayToggle}
            className="absolute right-4 bottom-4 md:right-8 md:bottom-8 z-30 flex h-14 w-14 md:h-20 md:w-20 items-center justify-center rounded-full bg-[#D1FC71] text-[#0D1B15] shadow-xl"
          >
            {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" className="ml-1" />}
          </button>
        </div>

        <div className="font-display text-[32px] md:text-[48px] font-medium tracking-[-1.5px] text-[#0D1B15] text-center">
          Teeth Whitening
        </div>
      </div>
    </section>
  );
};



