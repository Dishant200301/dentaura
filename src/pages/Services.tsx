import SEO from "@/components/SEO";
import ServicePageHero from "@/sections/services/ServicePageHero";
import ServiceList from "@/sections/services/ServiceList";

const ServicesPage = () => (
  <>
    <SEO 
      title="Services — DentAura" 
      description="Explore our full range of dental services from general dentistry to advanced cosmetic procedures." 
      path="/services" 
    />
    <main className="overflow-x-hidden bg-brand-bg min-h-screen">
      <ServicePageHero />
      <ServiceList />
    </main>
  </>
);

export default ServicesPage;
