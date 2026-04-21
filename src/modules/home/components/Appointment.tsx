import { useState } from "react";
import { toast } from "sonner";
import RevealText from "@/components/RevealText";
import { ChevronDown, Calendar, Clock, Zap, ClipboardList } from "lucide-react";

const services = [
  "General Dentistry",
  "Orthodontics",
  "Cosmetic Dentistry",
  "Oral Surgery",
  "Pediatric Dentistry",
  "Teeth Whitening",
];

const Appointment = () => {
  const [data, setData] = useState({ name: "", phone: "", service: "", date: "", time: "" });
  const [submitted, setSubmitted] = useState(false);

  const isFormValid = data.name && data.phone && data.service && data.date && data.time;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) {
      toast.error("Please fill in all required fields");
      return;
    }
    setSubmitted(true);
    toast.success("Appointment request submitted!");
    setData({ name: "", phone: "", service: "", date: "", time: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="bg-[#f5f4f7] py-16 md:py-20 lg:py-[110px]">
      <div className="container-site">
        {/* Content Wrapper */}
        <div
          className="relative min-h-[600px] lg:min-h-[854px] overflow-hidden rounded-2xl lg:rounded-[32px] bg-[#0D1B15]"
          style={{
            backgroundImage: "linear-gradient(rgba(13, 27, 21, 0.7), rgba(13, 27, 21, 0.7)), url(/images/appointment/bg.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Content */}
          <div className="flex h-full min-h-[600px] lg:min-h-[854px] items-center px-4 py-10 md:px-6 lg:px-[70px] lg:py-[70px]">
            <div className="flex flex-col-reverse lg:grid w-full gap-8 lg:grid-cols-[550px,1fr] lg:gap-[40px]">
              {/* Left - Form Card (appears second on mobile) */}
              <div className="flex min-h-auto lg:min-h-[714px] flex-col rounded-[16px] bg-white p-5 md:p-8 lg:p-[48px] lg:pt-[40px]">
                {/* Heading */}
                <RevealText
                  as="h3"
                  className="font-display text-[32px] md:text-[40px] lg:text-[48px] font-medium leading-tight lg:leading-[58px] tracking-[-2px] lg:tracking-[-3px] text-[#0D1B15]"
                >
                  Schedule your<br />appointment now?
                </RevealText>

                {/* Form */}
                <form onSubmit={submit} className="mt-8 lg:mt-[45px] space-y-5 lg:space-y-[28px]">
                  {/* Booking Name */}
                  <div>
                    <label className="font-inter text-[16px] font-semibold leading-[27px] tracking-[-0.3px] text-[#0D1B15]">
                      Booking Name *
                    </label>
                    <input
                      required
                      value={data.name}
                      onChange={(e) => setData({ ...data, name: e.target.value })}
                      placeholder="Jane Smith"
                      className="mt-2.5 h-[51.2px] w-full rounded-[10px] bg-[#F2F2EF] px-4 font-inter text-[16px] leading-[19px] tracking-[-0.3px] text-[#0D1B15] placeholder:text-[#0D1B15]/50 focus:outline-none focus:ring-1 focus:ring-[#D1FC71]"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="font-inter text-[16px] font-semibold leading-[27px] tracking-[-0.3px] text-[#0D1B15]">
                      Phone *
                    </label>
                    <input
                      required
                      type="tel"
                      value={data.phone}
                      onChange={(e) => setData({ ...data, phone: e.target.value })}
                      placeholder="(123) 123-1331"
                      className="mt-2.5 h-[51.2px] w-full rounded-[10px] bg-[#F2F2EF] px-4 font-inter text-[16px] leading-[19px] tracking-[-0.3px] text-[#0D1B15] placeholder:text-[#0D1B15]/50 focus:outline-none focus:ring-1 focus:ring-[#D1FC71]"
                    />
                  </div>

                  {/* Services */}
                  <div className="relative">
                    <label className="font-inter text-[16px] font-semibold leading-[27px] tracking-[-0.3px] text-[#0D1B15]">
                      Services *
                    </label>
                    <div className="relative mt-2.5">
                      <select
                        required
                        value={data.service}
                        onChange={(e) => setData({ ...data, service: e.target.value })}
                        className="h-[51.2px] w-full appearance-none rounded-[10px] bg-[#F2F2EF] px-4 font-inter text-[16px] leading-[27px] tracking-[-0.3px] text-[#0D1B15] focus:outline-none focus:ring-1 focus:ring-[#D1FC71]"
                      >
                        <option value="">Select...</option>
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute right-0 top-0 flex h-full items-center">
                        <div className="flex h-full w-[42px] items-center justify-center rounded-r-[10px] bg-[#0D1B15]">
                          <ChevronDown className="h-4 w-4 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Date & Time */}
                  <div className="grid grid-cols-2 gap-4 lg:gap-[24px]">
                    <div className="relative">
                      <label className="font-inter text-[16px] font-semibold leading-[27px] tracking-[-0.3px] text-[#0D1B15]">
                        Date
                      </label>
                      <div className="relative mt-2.5">
                        <input
                          required
                          type="date"
                          value={data.date}
                          onChange={(e) => setData({ ...data, date: e.target.value })}
                          className="h-[53.2px] w-full rounded-[10px] bg-[#F2F2EF] px-4 pr-[42px] font-inter text-[16px] tracking-[-0.3px] text-[#0D1B15] focus:outline-none focus:ring-1 focus:ring-[#D1FC71]"
                        />
                        <div className="pointer-events-none absolute right-0 top-0 flex h-full items-center">
                          <div className="flex h-full w-[42px] items-center justify-center rounded-r-[10px] bg-[#0D1B15]">
                            <Calendar className="h-4 w-4 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative">
                      <label className="font-inter text-[16px] font-semibold leading-[27px] tracking-[-0.3px] text-[#0D1B15]">
                        Time
                      </label>
                      <div className="relative mt-2.5">
                        <input
                          required
                          type="time"
                          value={data.time}
                          onChange={(e) => setData({ ...data, time: e.target.value })}
                          className="h-[53.2px] w-full rounded-[10px] bg-[#F2F2EF] px-4 pr-[42px] font-inter text-[16px] tracking-[-0.3px] text-[#0D1B15] focus:outline-none focus:ring-1 focus:ring-[#D1FC71]"
                        />
                        <div className="pointer-events-none absolute right-0 top-0 flex h-full items-center">
                          <div className="flex h-full w-[42px] items-center justify-center rounded-r-[10px] bg-[#0D1B15]">
                            <Clock className="h-4 w-4 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className={`mt-6 lg:mt-[22px] h-[51.2px] w-full lg:w-[460px] rounded-[100px] font-inter text-[16px] font-normal leading-[27px] tracking-[-0.3px] transition-all duration-300 ${submitted
                        ? "bg-[#D1FC71] text-[#0D1B15]"
                        : isFormValid
                          ? "bg-[#D1FC71] text-[#0D1B15] hover:bg-[#0D1B15] hover:text-white"
                          : "bg-[#D1FC71]/50 text-[#0D1B15] cursor-not-allowed"
                      }`}
                  >
                    {submitted ? "Thank you." : "Submit"}
                  </button>
                </form>
              </div>

              {/* Right - Content (appears FIRST on mobile) */}
              <div className="flex flex-col text-white lg:pt-[40px]">
                <div className="flex-1">
                  {/* Tag */}
                  <p className="font-jost text-[14px] lg:text-[16px] font-normal leading-[24px] lg:leading-[27px] text-[#F5F4F7]">
                    Reserve Now
                  </p>

                  {/* Horizontal Line Under Tag */}
                  <div className="mt-4 lg:mt-5 h-[1px] w-full bg-white/20" />

                  {/* Heading */}
                  <div className="mt-5 lg:mt-[30px]">
                    <RevealText
                      as="h2"
                      className="font-display text-[36px] md:text-[42px] lg:text-[48px] xl:text-[64px] font-medium leading-[1.1] tracking-[-2px] lg:tracking-[-3px] text-white lg:leading-[74px] xl:tracking-[-4.5px]"
                    >
                      Get in Touch With Us
                    </RevealText>
                  </div>

                  {/* Subtitle */}
                  <p className="mt-4 lg:mt-[25px] max-w-[563px] font-display text-[18px] lg:text-[20px] font-medium leading-[26px] lg:leading-[28px] tracking-[-1px] text-[#F2F2EF]">
                    Have questions or need to schedule an appointment? Our friendly team is always here to help you. Reach out to us today and let's keep your smile healthy and bright.
                  </p>
                </div>

                {/* Bottom Part */}
                <div className="mt-8 lg:mt-auto lg:pb-[40px]">
                  {/* Horizontal Line */}
                  <div className="mb-6 lg:mb-[40px] h-[1px] w-full bg-white/20" />

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-[30px]">
                    {/* Feature 1 */}
                    <div className="flex flex-col">
                      <Zap className="h-6 w-6 text-[#D1FC71]" />
                      <h4 className="mt-4 font-gilda text-[24px] lg:text-[28px] font-normal leading-[34px] lg:leading-[39px] tracking-[-0.5px] text-white">
                        Quick response.
                      </h4>
                      <p className="mt-2 font-jost text-[14px] lg:text-[16px] font-normal leading-[24px] lg:leading-[27px] text-white/80">
                        We'll quickly confirm your appointment once it's scheduled.
                      </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex flex-col">
                      <ClipboardList className="h-6 w-6 text-[#D1FC71]" />
                      <h4 className="mt-4 font-gilda text-[24px] lg:text-[28px] font-normal leading-[34px] lg:leading-[39px] tracking-[-0.5px] text-white">
                        Dental Care Plan.
                      </h4>
                      <p className="mt-2 font-jost text-[14px] lg:text-[16px] font-normal leading-[24px] lg:leading-[27px] text-white/80">
                        Once scheduled, we'll provide your appointment time and options.
                      </p>
                    </div>
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

export default Appointment;
