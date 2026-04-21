import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

interface ServiceContentProps {
  service: any;
}

export const ServiceContent = ({ service }: ServiceContentProps) => {
  return (
    <section className="bg-[#f5f4f7] py-10 lg:pt-[112px] lg:pb-[60px]">
      <div className="container-site">
        {/* Header Row: Back to Service and Title/Date */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-20">
          {/* Left: Back Link */}
          <div className="flex items-start">
            <Link
              to="/services"
              className="group flex items-center gap-2 font-inter text-[16px] font-normal leading-[27px] text-[#0D1B15] transition-colors hover:text-[#595E5C]"
            >
              <div className="flex h-5 w-5 items-center justify-center rounded-full border border-[#0D1B15] group-hover:border-[#595E5C]">
                <ChevronLeft size={12} />
              </div>
              Back To Service
            </Link>
          </div>

          {/* Right: Title, Date, Intro, Team Link */}
          <div className="flex flex-col">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <h2 className="font-display text-[36px] sm:text-[40px] lg:text-[48px] font-medium leading-tight sm:leading-[58px] text-[#0D1B15]">
                What is {service.title}?
              </h2>
              <span className="font-display text-[18px] sm:text-[20px] font-medium leading-normal sm:leading-[28px] text-[#595E5C] whitespace-nowrap">
                {service.date}
              </span>
            </div>

            <div className="mt-8 space-y-6">
              <p className="font-inter text-[16px] sm:text-[18px] font-normal leading-[1.6] sm:leading-[31px] text-[#595E5C]">
                {service.intro}
              </p>
              <p className="font-inter text-[16px] sm:text-[18px] font-normal leading-[1.6] sm:leading-[31px] text-[#595E5C]">
                {service.body}
              </p>
            </div>

            <Link
              to="/about"
              className="group mt-6 flex items-center gap-2 font-inter text-[16px] font-normal leading-[27px] text-[#0D1B15] transition-colors hover:text-[#595E5C]"
            >
              Meet the Team
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform group-hover:translate-x-1"
              >
                <path
                  d="M1 11L11 1M11 1H1M11 1V11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Main Content Image */}
        <div className="mt-6 lg:mt-20 overflow-hidden rounded-lg">
          <img
            src={service.content.mainImage}
            alt={service.title}
            className="h-[300px] sm:h-[600px] w-full object-cover lg:h-[950px]"
          />
        </div>
       
        {/* Dynamic Sections (All except last) */}
        <div className="mt-10 lg:mt-20 space-y-12 lg:space-y-16">
          {service.content.sections.slice(0, -1).map((section: any, idx: number) => (
            <div key={idx}>
              {section.showLine && (
                <div className="mb-6 h-[1px] w-full bg-[#c9cbc5]" />
              )}
              <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2 lg:gap-20">
                {/* Left: Heading */}
                <h3 className="font-display text-[28px] sm:text-[32px] lg:text-[36px] font-medium leading-tight lg:leading-[45px] text-[#0D1B15] lg:xl:max-w-[500px]">
                  {section.heading}
                </h3>

                {/* Right: Paragraph and Points */}
                <div className="flex flex-col">
                  <p className="font-inter text-[16px] sm:text-[18px] font-normal leading-[1.6] sm:leading-[31px] text-[#595E5C]">
                    {section.paragraph}
                  </p>

                  {section.points && (
                    <ul className="mt-6 space-y-4">
                      {section.points.map((point: any, pIdx: number) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <span className="mt-[13px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#595E5C]" />
                          <p className="font-inter text-[16px] sm:text-[18px] leading-[1.6] sm:leading-[31px] text-[#595E5C]">
                            <strong className="font-bold">{point.title}:</strong> {point.text}
                          </p>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.afterText && (
                    <p className="mt-6 font-inter text-[16px] sm:text-[18px] font-normal leading-[1.6] sm:leading-[31px] text-[#595E5C]">
                      {section.afterText}
                    </p>
                  )}
                </div>
              </div>

              {/* Section Images Grid */}
              {section.images && (
                <div className="mt-12 lg:mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
                  {section.images.map((img: string, iIdx: number) => (
                    <div key={iIdx} className="overflow-hidden rounded-lg">
                      <img
                        src={img}
                        alt={`${section.heading} ${iIdx + 1}`}
                        className="h-[300px] md:h-[450px] lg:h-[600px] w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
