import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Process from "./components/Process";
import BeforeAfter from "./components/BeforeAfter";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Gallery from "./components/Gallery";
import Blog from "./components/Blog";
import AppointmentForm from "@/components/AppointmentForm";

const Index = () => {
  return (
    <>
      <SEO title="DentAura — Premium Dental Care Clinic" description="Premium dental care with modern technology, expert dentists and a welcoming environment." path="/" />
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
