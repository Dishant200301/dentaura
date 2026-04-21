import { Button } from "@/components/Button";
import RevealText from "@/components/RevealText";
import { serviceList } from "@/data/serviceDetails";

const Services = () => {
  // Show first 4 services on homepage for cleaner layout
  const displayServices = serviceList.slice(0, 4);

  return (
    <section className="bg-[#f5f4f7] py-16 md:py-20 lg:py-[112px] overflow-hidden">
      <div className="container-site">
        {/* Top Content: Title & CTA */}
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <RevealText 
            as="h2" 
            className="font-display text-[36px] md:text-[40px] lg:text-[48px] font-medium leading-tight lg:leading-[58px] tracking-[-2px] lg:tracking-[-3px] text-[#0D1B15]"
          >
            Our Services
          </RevealText>
          <Button 
            to="/services" 
            variant="lime" 
            showIcon={false}
            className="h-[51.2px] w-[135.3px] rounded-[100px] bg-[#D1FC71] px-0 font-inter text-[16px] font-normal tracking-[-0.3px] text-[#0D1B15]"
          >
            View Services
          </Button>
        </div>

        {/* Services List */}
        <div className="mt-10 md:mt-12 lg:mt-[40px]">
          {displayServices.map((s) => (
            <div
              key={s.id}
              className="group relative border-t border-[#C9CBC5] py-8 md:py-10 last:border-b lg:py-[40px]"
            >
              <div className="flex flex-col gap-6 md:gap-8 lg:flex-row lg:items-center lg:gap-[80px]">
                {/* Image Wrap */}
                <div className="relative h-[240px] md:h-[280px] lg:h-[295px] w-full shrink-0 overflow-hidden rounded-[6px] lg:w-[320px]">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Text Content */}
                <div className="flex flex-1 flex-col gap-6 md:gap-8 lg:flex-row lg:gap-[60px]">
                  {/* Left Column: Number & Points */}
                  <div className="w-full lg:w-[282px]">
                    <span className="font-display text-[28px] md:text-[32px] lg:text-[36px] font-medium leading-tight lg:leading-[45px] tracking-[-1px] lg:tracking-[-2px] text-[#0D1B15]">
                      {s.id}
                    </span>
                    <ul className="mt-4 lg:mt-[20px] space-y-2 lg:space-y-[12px]">
                      {s.points.map((p) => (
                        <li key={p} className="flex items-center gap-[11px] font-inter text-[14px] md:text-[16px] font-normal leading-[24px] lg:leading-[27px] tracking-[-0.3px] text-[#595E5C]">
                          <span className="h-[5px] w-[5px] shrink-0 rounded-full bg-[#595E5C]" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Column: Title, Desc & CTA */}
                  <div className="flex flex-1 flex-col items-start">
                    <h3 className="font-display text-[26px] md:text-[30px] lg:text-[32px] xl:text-[48px] font-medium leading-tight lg:leading-[58px] tracking-[-2px] lg:tracking-[-3px] text-[#0D1B15]">
                      {s.title}
                    </h3>
                    <p className="mt-3 lg:mt-[12.6px] max-w-[420px] font-inter text-[14px] md:text-[16px] font-normal leading-[24px] lg:leading-[27px] tracking-[-0.3px] text-[#595E5C]">
                      {s.intro}
                    </p>
                    <Button 
                      to={`/services/${s.id}`} 
                      variant="lime" 
                      showIcon={false}
                      className="mt-5 lg:mt-[24.2px] h-[48px] lg:h-[51.2px] w-[120px] lg:w-[121.33px] rounded-[100px] bg-[#D1FC71] px-0 font-inter text-[14px] lg:text-[16px] font-normal tracking-[-0.3px] text-[#0D1B15]"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
