import SEO from "@/components/SEO";
import RevealText from "@/components/RevealText";
import { lastUpdated } from "@/data/privacy";
import { PrivacyContent } from "./components/PrivacyContent";

const Privacy = () => (
  <>
    <SEO title="Privacy Policy — DentAura" description="Read the DentAura privacy policy." path="/privacy-policy" />
    
    {/* Hero Section */}
    <section className="bg-[#f5f4f7] lg:pb-16 pt-36 md:pt-52">
      <div className="mx-auto w-full max-w-[1300px] px-4 text-center">
        <p className="font-inter text-base leading-[27px] text-[#0D1B15]">Last updated on: {lastUpdated}</p>
        <RevealText as="h1" className="font-display mt-4 text-[48px] font-medium leading-[48px] text-[#0D1B15] md:text-[96px] md:leading-[96px]">
          Privacy Policy
        </RevealText>
      </div>
    </section>
    
    <PrivacyContent />
  </>
);

export default Privacy;
