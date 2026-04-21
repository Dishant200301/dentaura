import { Button } from "@/components/Button";

export const Vibe = () => {
  return (
    <section className="relative h-auto lg:h-auto xl:h-[824px] w-full overflow-hidden bg-[#f5f4f7] py-16 md:py-20 lg:py-16 xl:py-0">
      <div className="mx-auto flex h-full w-full max-w-[1440px] flex-col lg:flex-row items-center gap-10 md:gap-14 lg:gap-[60px] xl:gap-[80px] container-site lg:px-6 xl:px-[70px]">
        {/* Image Wrap */}
        <div className="h-[350px] md:h-[450px] lg:h-[500px] xl:h-[600px] w-full lg:w-[450px] xl:w-[600px] shrink-0 overflow-hidden rounded-[16px]">
          <img
            src="/images/about/about-image-7.webp"
            alt="DentAura Building"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Content Wrapper */}
        <div className="flex h-auto lg:h-auto xl:h-[524px] w-full lg:w-full xl:w-[620px] flex-col justify-between">
          {/* Text Content */}
          <div className="flex flex-col gap-6">
            {/* Tag - Our culture */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="h-[4px] w-[4px] rounded-full bg-[#0D1B15]" />
                <span className="font-inter text-[14px] lg:text-[16px] font-normal leading-[27px] text-[#0D1B15]">
                  Our culture
                </span>
              </div>
              {/* Line Animation */}
              <div className="h-[1px] w-full bg-[#0D1B15]/10" />
            </div>

            {/* Heading */}
            <h2 className="font-display text-[32px] md:text-[40px] lg:text-[42px] xl:text-[48px] font-medium leading-[1.2] xl:leading-[58px] tracking-[-1.5px] xl:tracking-[-3px] text-[#0D1B15]">
              We've created a chill dental vibe where everyone feels comfortable and is welcome to speak up.
            </h2>

            {/* Subheading */}
            <p className="font-inter text-[16px] lg:text-[17px] xl:text-[18px] font-normal leading-[1.6] xl:leading-[31px] tracking-[-0.3px] text-[#595E5C]">
              At our dental practice, we strive to create a positive environment for both our team and our patients. By ensuring everyone is satisfied throughout their experience, we believe this will lead to more referrals and ongoing relationships with our clients.
            </p>
          </div>

          {/* Button */}
          <div className="mt-8 lg:mt-10 xl:mt-0">
            <Button
              to="/appointment"
              variant="primary"
              showIcon={false}
              className="h-[51px] w-full sm:w-[250px] rounded-[100px] bg-[#D1FC71] text-[16px] font-normal text-[#0D1B15]"
            >
              Make an Appointment
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
