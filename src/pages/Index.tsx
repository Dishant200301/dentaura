import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import Hero from "@/sections/home/Hero";
import About from "@/sections/home/About";
import Services from "@/sections/home/Services";
import Process from "@/sections/home/Process";
import BeforeAfter from "@/sections/home/BeforeAfter";
import Team from "@/sections/home/Team";
import Testimonials from "@/sections/home/Testimonials";
import FAQ from "@/sections/home/FAQ";
import Gallery from "@/sections/home/Gallery";
import Blog from "@/sections/home/Blog";
import AppointmentForm from "@/components/AppointmentForm";

const Index = () => {
  return (
    <>
      <SEO title="OralCare — Premium Dental Care Clinic" description="Premium dental care with modern technology, expert dentists and a welcoming environment." path="/" />
      <div className="overflow-x-hidden">
      <Hero />
      <About />
      <Services />
      <Process />
      <BeforeAfter />
      <Team />
      <AppointmentForm />
      <Testimonials />
      <FAQ />
      <Gallery />
      <Blog compact={true} />  
      </div>
    
    </>
  );
};

export default Index;
