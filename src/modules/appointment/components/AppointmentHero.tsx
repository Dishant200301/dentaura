import RevealText from "@/components/RevealText";

export const AppointmentHero = () => {
  return (
    <section className="bg-[#f5f4f7] pb-10 pt-36 md:pt-36 lg:pt-44 overflow-hidden">
      <div className="container-site">
        <div className="grid gap-8 md:grid-cols-2 md:items-end">
          {/* Left - Title */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3">
              <RevealText as="span" className="font-display text-[48px] md:text-[62px] lg:text-[72px] xl:text-[96px] font-medium leading-[48px] md:leading-[62px] lg:leading-[72px] xl:leading-[96px] text-[#0D1B15]">
                Book
              </RevealText>
              <img
                src="/images/appointment/hero-icon.webp"
                alt=""
                className="h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 rounded-full object-cover"
              />
            </div>
            <RevealText as="span" className="font-display text-[48px] md:text-[62px] lg:text-[72px] xl:text-[96px] font-medium leading-[48px] md:leading-[62px] lg:leading-[72px] xl:leading-[96px] text-[#0D1B15]">
              Appointment
            </RevealText>
          </div>
          {/* Right - Description */}
          <p className="font-inter text-base lg:text-lg md:text-base leading-[24px] md:leading-[31px] text-[#595E5C] md:text-right md:mb-4">
            You can book your appointment or ask any questions you may have, we're truly here to help and guide you.
          </p>
        </div>
      </div>
    </section>
  );
};
