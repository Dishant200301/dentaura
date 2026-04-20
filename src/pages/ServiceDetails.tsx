import { useParams, Link, useNavigate } from "react-router-dom";
import { ChevronLeft, Plus, Minus, Phone, Mail } from "lucide-react";
import { useState } from "react";
import SEO from "@/components/SEO";
import { Button } from "@/components/Button";
import RevealText from "@/components/RevealText";
import AppointmentForm from "@/components/AppointmentForm";
import { serviceDetails, serviceList } from "@/data/serviceDetails";

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = serviceDetails[id || "01"];
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  if (!service) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F5F4F7] px-6">
        <div className="text-center">
          <h1 className="font-display text-[48px] sm:text-[64px] lg:text-[80px] text-[#0D1B15] leading-tight">Service not found</h1>
          <p className="mt-4 font-inter text-[16px] sm:text-[18px] text-[#595E5C]">The service you are looking for does not exist.</p>
          <Link to="/services" className="mt-8 inline-flex h-[50px] items-center justify-center rounded-full bg-[#0D1B15] px-8 font-inter text-[16px] font-medium text-white transition-all hover:bg-[#595E5C]">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  // Related services
  const relatedServices = serviceList.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <div className="overflow-x-hidden">
      <SEO 
        title={`${service.title} — OralCare Service`} 
        description={service.tagline} 
        path={`/services/${service.id}`} 
      />

      {/* 1. Hero Section */}
      <section className="relative h-[60vh] md:h-[60vh] lg:h-[100vh] w-full overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 transition-transform duration-[2s] hover:scale-105"
          style={{
            backgroundImage: `url(${service.img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Vertical/Left dark gradient matching reference */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0D1B15] via-[#0D1B15]/70 to-transparent"></div>
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0D1B15] via-[#0D1B15]/30 to-transparent"></div>
        
        <div className="relative mx-auto flex h-full w-full max-w-[1440px] flex-col justify-end lg:justify-center px-6 pb-8 md:pb-20 xl:px-[70px] z-20">
          <RevealText
            as="h1"
            className="max-w-5xl font-display text-[48px] font-medium leading-[1.1] text-white sm:text-[64px] md:text-[60px] lg:text-[72px] lg:leading-[80px] xl:text-[96px] xl:leading-[96px]"
          >
            {service.title}
          </RevealText>
          <p className="max-w-xl md:max-w-3xl font-inter text-[16px] font-normal leading-[1.6] text-white/90 sm:text-[18px] lg:text-[20px]">
            {service.tagline}
          </p>
        </div>
      </section>

      {/* 2. Content Section */}
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
            {service.content.sections.slice(0, -1).map((section, idx) => (
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
                        {section.points.map((point, pIdx) => (
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
                    {section.images.map((img, iIdx) => (
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
 {/* Aesthetic / Final Section (Last section) */}
        <div className="container-site">
          {service.content.sections.slice(-1).map((section, idx) => (
            <div key={idx}>
              <div className="mb-6 h-[1px] w-full bg-[#c9cbc5]" />
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-20">
                {/* Left: Heading */}
                <h3 className="font-display text-[30px] md:text-[36px] font-medium leading-[36px] md:leading-[45px] text-[#0D1B15] max-w-[500px]">
                  {section.heading}
                </h3>

                {/* Right: Paragraph and Points */}
                <div className="flex flex-col">
                  <p className="font-inter text-[18px] font-normal leading-[31px] text-[#595E5C]">
                    {section.paragraph}
                  </p>

                  {section.points && (
                    <ul className="mt-6 space-y-4">
                      {section.points.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <span className="mt-[13px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#595E5C]" />
                          <p className="font-inter text-[18px] leading-[31px] text-[#595E5C]">
                            <strong className="font-bold">{point.title}:</strong> {point.text}
                          </p>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      {/* Infinity Loop Section */}
        {service.content.loopImages && (
          <div className="mt-12 lg:mt-20 overflow-hidden">
            <div className="flex animate-infinite-scroll gap-6 lg:gap-8">
              {[...service.content.loopImages, ...service.content.loopImages].map((img, idx) => (
                <div key={idx} className="h-[300px] sm:h-[450px] lg:h-[550px] w-[250px] sm:w-[350px] lg:w-[400px] shrink-0 overflow-hidden rounded-lg">
                  <img
                    src={img}
                    alt={`Gallery ${idx + 1}`}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Aesthetic / Final Section (Last section) */}
        <div className="container-site my-10 lg:my-20">
          {service.content.sections.slice(-1).map((section, idx) => (
            <div key={idx}>
              <div className="mb-6 h-[1px] w-full bg-[#c9cbc5]" />
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-20">
                {/* Left: Heading */}
                <h3 className="font-display text-[28px] sm:text-[32px] lg:text-[36px] font-medium leading-tight lg:leading-[45px] text-[#0D1B15] lg:max-w-[500px]">
                  {section.heading}
                </h3>

                {/* Right: Paragraph and Points */}
                <div className="flex flex-col">
                  <p className="font-inter text-[16px] sm:text-[18px] font-normal leading-[1.6] sm:leading-[31px] text-[#595E5C]">
                    {section.paragraph}
                  </p>

                  {section.points && (
                    <ul className="mt-6 space-y-4">
                      {section.points.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <span className="mt-[13px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#595E5C]" />
                          <p className="font-inter text-[16px] sm:text-[18px] leading-[1.6] sm:leading-[31px] text-[#595E5C]">
                            <strong className="font-bold">{point.title}:</strong> {point.text}
                          </p>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
              
             
            </div>
          ))}
        </div>
    </div>
  );
};

export default ServiceDetails;
