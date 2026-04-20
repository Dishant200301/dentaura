import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import RevealText from "@/components/RevealText";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  { q: "What services does Oralcare offer?", a: "We provide general, cosmetic, orthodontic, and preventive dental treatments. Every service is tailored to enhance your smile and oral health." },
  { q: "How often should I visit the dentist?", a: "A visit every six months is ideal for cleanings and checkups. Your dentist may suggest more visits based on your oral condition." },
  { q: "Do dental treatments hurt?", a: "Most treatments are comfortable with modern, gentle techniques. Local anesthesia is used when needed to ensure a pain-free experience." },
  { q: "How do I know which treatment is right for me?", a: "Our team evaluates your oral health and discusses your goals. We then recommend a personalized treatment plan that fits your needs." },
  { q: "Are cosmetic dental procedures safe?", a: "Yes, cosmetic treatments are safe when performed by trained professionals. We use proven materials and methods to protect your oral health." },
  { q: "Do you accept insurance or offer payment plans?", a: "Yes, we accept selected insurance plans and offer flexible payment options to make dental care accessible to everyone." },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);
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
    <section className="bg-[#f5f4f7] py-10 md:py-16 lg:py-[60px] overflow-hidden">
      <div className="container-site">
        <div className="grid gap-8 md:gap-10 lg:grid-cols-[480px,1fr] lg:items-start lg:gap-16">
          {/* Left - Tag & Title */}
          <div className="flex flex-col">
            {/* Tag with dot */}
            <div className="flex items-center gap-2">
              <span className="h-[4px] w-[4px] rounded-full bg-[#0D1B15]" />
              <span className="font-jost text-[14px] lg:text-[16px] font-normal leading-[24px] lg:leading-[27px] text-[#0D1B15]">
                Faq
              </span>
            </div>

            {/* Animated Horizontal Line */}
            <div ref={lineRef} className="my-3 lg:my-4 h-[1px] w-full origin-left bg-[#C9CBC5]" />

            {/* Title */}
            <RevealText
              as="h2"
              className="font-display text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] font-medium leading-[1.2] tracking-[-2px] lg:tracking-[-2.5px] text-[#0D1B15] lg:leading-[58px]"
            >
              Frequently Asked<br className="hidden sm:block" />Question
            </RevealText>

            {/* Subtitle */}
            <p className="mt-4 lg:mt-6 max-w-[450px] font-inter text-[15px] md:text-[16px] lg:text-[18px] font-normal leading-[26px] lg:leading-[31px] tracking-[-0.3px] text-[#595E5C]">
              From reservations to dietary preferences, here's all the information you need before dining with us.
            </p>
          </div>

          {/* Right - FAQ Accordion */}
          <div className="flex flex-col gap-3">
            {faqs.map((f, i) => {
              const active = open === i;
              return (
                <div
                  key={f.q}
                  className="overflow-hidden rounded-[8px] bg-white transition-all duration-300"
                >
                  <button
                    onClick={() => setOpen(active ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-4 py-4 lg:py-5 text-left"
                  >
                    <span className="font-display text-[16px] md:text-[18px] lg:text-[20px] font-medium leading-[24px] lg:leading-[28px] tracking-[-0.5px] lg:tracking-[-1px] text-[#0D1B15]">
                      {f.q}
                    </span>
                    <span
                      className={cn(
                        "flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#D1FC71] text-[#595E5C] transition-transform duration-300",
                        active && "rotate-180"
                      )}
                    >
                      <ChevronDown size={14} strokeWidth={3} />
                    </span>
                  </button>
                  <div
                    className={cn(
                      "grid transition-all duration-500 ease-out",
                      active ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-4 pb-4 lg:pb-5 font-inter text-[14px] sm:text-[15px] lg:text-[16px] font-normal leading-[24px] lg:leading-[27px] tracking-[-0.3px] text-[#595E5C]">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
