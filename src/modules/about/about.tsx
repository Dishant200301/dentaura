import SEO from "@/components/SEO";
import { AboutHero } from "./components/AboutHero";
import { Vision } from "./components/Vision";
import { ClientWords } from "./components/ClientWords";
import { DentalInnovation } from "./components/DentalInnovation";
import { Vibe } from "./components/Vibe";
import { VideoSection } from "./components/VideoSection";

const AboutPage = () => {
  return (
    <>
      <SEO title="About — DentAura" description="Get to know the DentAura team, our values and our approach to modern dental care." path="/about" />
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
