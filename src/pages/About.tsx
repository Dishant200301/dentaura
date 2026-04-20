import SEO from "@/components/SEO";
import { AboutHero } from "@/sections/about/AboutHero";
import { Vision } from "@/sections/about/Vision";
import { ClientWords } from "@/sections/about/ClientWords";
import { DentalInnovation } from "@/sections/about/DentalInnovation";
import { Vibe } from "@/sections/about/Vibe";
import { VideoSection } from "@/sections/about/VideoSection";

const AboutPage = () => {
  return (
    <>
      <SEO title="About — OralCare" description="Get to know the OralCare team, our values and our approach to modern dental care." path="/about" />
      <div className="overflow-x-hidden">
      <AboutHero />
      <Vision />
      <ClientWords />
      <DentalInnovation />
      <Vibe />
      <VideoSection />
      </div>
    </>
  );
};
export default AboutPage;
