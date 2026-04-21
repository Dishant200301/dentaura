import { Button } from "@/components/Button";
import { serviceList } from "@/data/serviceDetails";

const ServiceList = () => {
  return (
    <section className="bg-[#f5f4f7] pb-20 lg:pb-[112px]">
      <div className="container-site">
        <div className="flex flex-col">
          {serviceList.map((s) => (
            <div
              key={s.id}
              className="group relative border-t border-[#C9CBC5] py-8 md:py-10 last:border-b lg:py-[40px]"
            >
              <div className="grid grid-cols-1 gap-8 xl:grid-cols-[320px_1fr] lg:items-center lg:gap-[80px]">
                {/* Image Wrap */}
                <div className="relative h-[240px] md:h-[280px] lg:h-[295px] w-full overflow-hidden rounded-[6px]">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Text Content */}
                <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-[220px_1fr] lg:grid-cols-[282px_1fr] lg:gap-[60px]">
                  {/* Left Column: Number & Points */}
                  <div className="w-full">
                    <span className="font-display text-[28px] md:text-[32px] lg:text-[36px] font-medium leading-tight lg:leading-[45px] tracking-[-1px] lg:tracking-[-2px] text-[#0D1B15]">
                      {s.id}
                    </span>
                    <ul className="mt-4 lg:mt-[20px] space-y-2 lg:space-y-[12px]">
                      {s.points.map((p) => (
                        <li key={p} className="flex items-center gap-[11px] font-inter text-[14px] md:text-[16px] font-normal leading-[1.2] tracking-[-0.3px] text-[#595E5C]">
                          <span className="h-[5px] w-[5px] shrink-0 rounded-full bg-[#595E5C]" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Column: Title, Desc & CTA */}
                  <div className="flex flex-1 flex-col items-start">
                    <h3 className="font-display text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] font-medium leading-[1.2] tracking-[-2px] text-[#0D1B15]">
                      {s.title}
                    </h3>
                    <p className="mt-3 lg:mt-[16px] max-w-[420px] font-inter text-[15px] lg:text-[16px] font-normal leading-[1.5] lg:leading-[1.6] tracking-[-0.3px] text-[#595E5C]">
                      {s.intro}
                    </p>
                    <Button
                      to={`/services/${s.id}`}
                      variant="lime"
                      showIcon={false}
                      className="mt-5 lg:mt-[24px] h-[48px] lg:h-[51px] w-[120px] lg:w-[121px] rounded-[100px] bg-[#D1FC71] px-0 font-inter text-[14px] lg:text-[16px] font-normal tracking-[-0.3px] text-[#0D1B15]"
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

export default ServiceList;
