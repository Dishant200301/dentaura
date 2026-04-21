import { Button } from "@/components/Button";
import { Phone, Linkedin, Instagram } from "lucide-react";

const teamMembers = [
  { name: "Dr. Julien Lefèvre", role: "Cosmetic Dentistry", phone: "(408) 555-0382", img: "/images/team/doctor1.webp", bgColor: "bg-[#E1EDE4]" },
  { name: "Dr. Amelia Grant", role: "Orthodontics Specialist", phone: "(408) 555-0383", img: "/images/team/doctor2.webp", bgColor: "bg-[#E1EDE4]" },
  { name: "Dr. Victor Han", role: "Oral Surgeon", phone: "(408) 555-0384", img: "/images/team/doctor3.webp", bgColor: "bg-[#E1EDE4]" },
  { name: "Dr. Sofia Martinez", role: "Pediatric Dentist", phone: "(408) 555-0385", img: "/images/team/doctor4.webp", bgColor: "bg-[#E1EDE4]" },
  { name: "Dr. Naomi Becker", role: "Dental Hygienist", phone: "(408) 555-0386", img: "/images/team/doctor5.webp", bgColor: "bg-[#E1EDE4]" },
  { name: "Dr. Ethan Collins", role: "General Dentistry", phone: "(408) 555-0387", img: "/images/team/doctor6.webp", bgColor: "bg-[#E1EDE4]" },
];

export const TeamGrid = () => {
  return (
    <section className="bg-[#f2f2ef] py-10 lg:py-20">
      <div className="container-site ">
        <div className="grid gap-6 lg:gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {teamMembers.map((m) => (
            <article key={m.name} className="overflow-hidden rounded-[24px] bg-white border border-[#E9E9E9]">
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
                    <Phone size={14} className="opacity-80" /> {m.phone}
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
