import { useState } from "react";
import { Plus, X } from "lucide-react";
import { Button } from "@/components/Button";
import RevealText from "@/components/RevealText";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "Schedule Your Appointment",
    desc: "Don't wait to give your smile the care it deserves. Whether it’s a routine check-up, cosmetic treatment, or dental emergency — our expert team is here for you. Book your visit in just a few clicks and experience personalized dental care in a comfortable, modern setting.",
    tags: ["Easy booking", "Flexible timings", "Friendly dentists", "Instant confirmations"],
    img: "/images/home/process-clock.webp",
  },
  {
    n: "02",
    title: "Consultation & Assessment",
    desc: "Your journey to a healthier smile starts with a detailed consultation. Our dentists take the time to understand your needs, discuss your goals, and perform a thorough oral examination to identify the best approach for your care.",
    tags: ["Full check-up", "Honest advice", "Modern tools", "Custom insights"],
    img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop",
  },
  {
    n: "03",
    title: "Personalized Treatment Plan",
    desc: "Every smile is unique, and so is your treatment plan. We craft a step-by-step roadmap tailored specifically to your oral health requirements and budget. We make sure you fully understand your options before we proceed.",
    tags: ["Clear pricing", "Tailored care", "Clear roadmap", "No hidden fees"],
    img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop",
  },
  {
    n: "04",
    title: "Treatment & Follow-Up",
    desc: "Experience pain-free treatments with our advanced dental techniques. After your procedure, we provide comprehensive aftercare instructions and schedule follow-up visits to ensure your smile remains bright and healthy for years to come.",
    tags: ["Painless care", "Post-care support", "Regular follow-ups", "Lasting results"],
    img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop",
  },
];

const Process = () => {
  const [open, setOpen] = useState(1); // Set step 2 as active by default to match screenshot

  return (
    <section className="bg-white py-16 md:py-20 lg:py-[110px] overflow-hidden">
      <div className="container-site">
        {/* Top Content */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="h-[4px] w-[4px] rounded-full bg-[#0D1B15]"></span>
              <span className="font-inter text-[14px] font-normal leading-[27px] text-[#0D1B15]">
                Our Process
              </span>
            </div>
            <RevealText 
              as="h2" 
              className="mt-4 font-display text-[36px] md:text-[40px] lg:text-[48px] font-medium leading-[1.2] tracking-[-2px] lg:tracking-[-3px] text-[#0D1B15]"
            >
              Working Process
            </RevealText>
          </div>
          
          <div className="flex flex-col w-full lg:max-w-[500px]">
            {/* Gray line spanning the top of the right column */}
            <div className="mt-2 hidden w-full h-[1px] bg-[#C9CBC5] lg:block mb-4" />
            <p className="max-w-[480px] font-inter text-[15px] md:text-[16px] font-normal leading-[1.6] text-[#595E5C] lg:text-[18px]">
              From your first visit to your final check-up, we simplify dental care. Our team ensures you achieve the smile you deserve—hassle-free.
            </p>
          </div>
        </div>

        {/* Steps List */}
        <div className="mt-10 flex flex-col gap-0 lg:mt-12 lg:gap-0">
          {steps.map((s, i) => {
            const active = open === i;
            return (
              <div
                key={s.n}
                className={cn(
                  "overflow-hidden rounded-[30px] md:rounded-[40px] transition-colors duration-500",
                  active ? "bg-[#0D1B15]" : "bg-white border border-[#C9CBC5]"
                )}
              >
                <button
                  onClick={() => setOpen(active ? -1 : i)}
                  className="flex w-full items-center justify-between gap-3 md:gap-4 p-5 md:p-6 lg:px-[70px] lg:py-[20px]"
                >
                  <div className="flex items-center gap-3 md:gap-4 lg:gap-[24px]">
                    <span
                      className={cn(
                        "flex h-7 w-9 md:h-12 md:w-12 lg:h-[60px] lg:w-[60px] items-center justify-center rounded-full border-[1px] font-inter text-[13px] md:text-[16px] font-normal transition-colors duration-500",
                        active ? "border-white text-white" : "border-[#0D1B15] text-[#0D1B15]"
                      )}
                    >
                      {s.n}
                    </span>
                    <h3 className={cn(
                      "font-display text-[18px] md:text-[28px] lg:text-[32px] xl:text-[36px] font-medium leading-[1.2] tracking-[-1px] transition-colors duration-500 text-left",
                      active ? "text-white" : "text-[#0D1B15]"
                    )}>
                      {s.title}
                    </h3>
                  </div>
                  <span
                    className={cn(
                      "flex h-9 w-9 md:h-14 md:w-14 lg:h-[60px] lg:w-[60px] xl:h-[80px] xl:w-[80px] shrink-0 items-center justify-center rounded-full transition-all duration-500",
                      active ? "bg-[#F5F4F7] text-[#0D1B15]" : "bg-[#D1FC71] text-[#0D1B15]"
                    )}
                  >
                    {active ? <X className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8" /> : <Plus className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8" />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {active && s.desc && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.65, 0, 0.35, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="grid gap-6 md:gap-8 px-5 md:px-6 pb-8 md:pb-10 pt-0 lg:grid-cols-[400px,1fr] lg:gap-[60px] lg:px-[70px] lg:pb-[50px]">
                        <div className="h-[180px] sm:h-[240px] lg:h-[281px] overflow-hidden rounded-2xl lg:rounded-[32px]">
                          <img
                            src={s.img}
                            alt={s.title}
                            loading="lazy"
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="flex flex-col">
                          <p className="font-inter text-[15px] sm:text-[16px] lg:text-[18px] xl:text-[20px] font-normal leading-[1.7] text-[#F5F4F7]">
                            {s.desc}
                          </p>
                          
                          {s.tags && (
                            <div className="mt-6 lg:mt-8">
                              <p className="font-inter text-[13px] lg:text-[16px] font-semibold tracking-[-0.3px] text-[#C9CBC5] mb-3 lg:mb-4">
                                Features
                              </p>
                              <div className="flex flex-wrap gap-2 lg:gap-3">
                                {s.tags.map((t) => (
                                  <span 
                                    key={t} 
                                    className="rounded-[32px] bg-white px-3 py-1.5 lg:px-4 lg:py-2 font-inter text-[11px] lg:text-[13px] font-medium text-[#0D1B15]"
                                  >
                                    {t}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          <div className="mt-8 lg:mt-10 xl:mt-6 flex">
                            <Button 
                              to="/appointment" 
                              variant="lime" 
                              showIcon={false}
                              className="h-[46px] lg:h-[51.2px] px-6 lg:px-8 !rounded-[100px] border-none font-inter text-[14px] lg:text-[16px] font-normal tracking-[-0.3px] !text-[#0D1B15] hover:!text-[#0D1B15] before:!bg-white"
                            >
                              Make an Appointment
                            </Button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
