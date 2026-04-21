import { Button } from "@/components/Button";
import RevealText from "@/components/RevealText";
import { Phone, Linkedin, Twitter, Instagram } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const team = [
  { name: "Dr. Julien Lefèvre", role: "Cosmetic Dentistry", phone: "(408) 555-0382", img: "/images/team/doctor1.webp", bgColor: "bg-[#E1EDE4]" },
  { name: "Dr. Amelia Grant", role: "Orthodontics Specialist", phone: "(408) 555-0383", img: "/images/team/doctor2.webp", bgColor: "bg-[#E1EDE4]" },
  { name: "Dr. Victor Han", role: "Oral Surgeon", phone: "(408) 555-0384", img: "/images/team/doctor3.webp", bgColor: "bg-[#E1EDE4]" },
];

interface TeamProps {
  showAll?: boolean;
}

const Team = ({ showAll = false }: TeamProps) => {
  const items = showAll ? team : team.slice(0, 3);
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
    <section className="bg-[#f5f4f7] py-8 md:py-10 lg:py-[60px] overflow-hidden">
      <div className="container-site">
        {/* Top Content */}
        <div className="flex flex-col w-full">
          {/* Tag row */}
          <div className="mb-4 flex items-center gap-2">
            <span className="h-[4px] w-[4px] rounded-full bg-[#0D1B15]" />
            <span className="font-inter text-[16px] font-normal leading-[27px] text-[#0D1B15]">
              Team
            </span>
          </div>

          {/* Animated Horizontal Line */}
          <div ref={lineRef} className="mb-6 h-[1px] w-full origin-left bg-[#C9CBC5]" />

          {/* Header & Button row */}
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <RevealText
              as="h2"
              className="font-display text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] font-medium leading-[1.15] tracking-[-2px] lg:tracking-[-3px] text-[#0D1B15] lg:leading-[74px] xl:tracking-[-4.5px]"
            >
              Team Members
            </RevealText>
            {!showAll && (
              <Button
                to="/team"
                variant="lime"
                showIcon={false}
                className="h-[51.2px] px-6 !rounded-[100px] font-inter text-[16px] font-normal tracking-[-0.3px] !text-[#0D1B15] hover:!bg-[#0D1B15] hover:!text-white"
              >
                View All
              </Button>
            )}
          </div>
        </div>

        {/* Team Cards Grid */}
        <div className="mt-10 lg:mt-12 grid gap-6 lg:gap-8 md:grid-cols-1 lg:grid-cols-3">
          {items.map((m) => (
            <article key={m.name} className="overflow-hidden rounded-2xl lg:rounded-[24px] bg-white border border-[#E9E9E9]">
              {/* Image */}
              <div className={`overflow-hidden rounded-2xl lg:rounded-[24px] m-[0px] ${m.bgColor}`}>
                <img
                  src={m.img}
                  alt={m.name}
                  loading="lazy"
                  className="h-[320px] md:h-[380px] lg:h-[438px] w-full object-cover mix-blend-multiply transition-transform duration-700 hover:scale-105"
                />
              </div>
              {/* Content */}
              <div className="px-4 lg:px-[16px] pb-4 lg:pb-[20px] pt-3 lg:pt-4">
                {/* Name */}
                <h3 className="font-display text-[24px] md:text-[28px] lg:text-[34px] font-medium leading-[1.2] tracking-[-1px] text-[#0D1B15]">
                  {m.name}
                </h3>
                {/* Role */}
                <p className="mt-1 lg:mt-2 font-inter text-[14px] lg:text-[16px] font-normal leading-[1.5] text-[#595E5C]">
                  {m.role}
                </p>
                {/* Contact & Social Row */}
                <div className="mt-4 lg:mt-6 flex items-center justify-between">
                  <a
                    href={`tel:${m.phone.replace(/\D/g, "")}`}
                    className="inline-flex items-center gap-2 font-inter text-[14px] lg:text-[16px] text-[#595E5C] transition-colors hover:text-[#0D1B15]"
                  >
                    <Phone size={14} className="opacity-70" /> {m.phone}
                  </a>

                  <div className="flex items-center gap-1">
                    <a
                      target="_blank"
                      href="https://x.com/"
                      className="flex h-10 w-10 lg:h-[42px] lg:w-[42px] items-center justify-center rounded-full text-[#0D1B15]/70 transition-all duration-300 hover:bg-[#D1FC71] hover:text-[#0D1B15]"
                    >
                      <svg width="14" height="14" className="lg:w-4 lg:h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/"
                      className="flex h-10 w-10 lg:h-[42px] lg:w-[42px] items-center justify-center rounded-full text-[#0D1B15]/70 transition-all duration-300 hover:bg-[#D1FC71] hover:text-[#0D1B15]"
                    >
                      <Linkedin size={16} className="lg:w-[18px] lg:h-[18px]" />
                    </a>
                    <a
                      target="_blank"
                      href="https://www.instagram.com/"
                      className="flex h-10 w-10 lg:h-[42px] lg:w-[42px] items-center justify-center rounded-full text-[#0D1B15]/70 transition-all duration-300 hover:bg-[#D1FC71] hover:text-[#0D1B15]"
                    >
                      <Instagram size={16} className="lg:w-[18px] lg:h-[18px]" />
                    </a>
                  </div>
                </div>
                {/* Book Button */}
                <div className="mt-5 lg:mt-7">
                  <Button
                    to="/appointment"
                    variant="lime"
                    showIcon={false}
                    className="w-full justify-center h-[48px] lg:h-auto text-[14px] lg:text-base"
                  >
                    Book an Appointment
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
