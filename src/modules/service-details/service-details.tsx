import { useParams, Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { serviceDetails } from "@/data/serviceDetails";
import { ServiceHero } from "./components/ServiceHero";
import { ServiceContent } from "./components/ServiceContent";
import { ServiceInfinityLoop } from "./components/ServiceInfinityLoop";
import { ServiceFinalSection } from "./components/ServiceFinalSection";

const ServiceDetails = () => {
  const { id } = useParams();
  const service = serviceDetails[id || "01"];

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

  return (
    <div className="overflow-x-hidden">
      <SEO 
        title={`${service.title} — DentAura Service`} 
        description={service.tagline} 
        path={`/services/${service.id}`} 
      />

      <ServiceHero title={service.title} tagline={service.tagline} img={service.img} />
      <ServiceContent service={service} />
      <ServiceInfinityLoop loopImages={service.content.loopImages} />
      <ServiceFinalSection sections={service.content.sections} />
    </div>
  );
};

export default ServiceDetails;
