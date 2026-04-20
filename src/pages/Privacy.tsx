import SEO from "@/components/SEO";
import RevealText from "@/components/RevealText";
import { privacySections, lastUpdated } from "@/data/privacy";

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
    
    {/* Content Section */}
    <section className="bg-[#f5f4f7] py-16 md:py-16">
      <div className="container-site mx-auto w-full max-w-5xl">
        <div className="space-y-12">
          {privacySections.map((section, index) => (
            <div key={index}>
              <h2 className="font-display text-[24px] font-medium leading-[32px] text-[#0D1B15] md:text-[36px] md:leading-[45px]">
                {section.heading}
              </h2>
              <div className="mt-4 space-y-4">
                {section.content.split('\n\n').map((paragraph, pIndex) => (
                  <p key={pIndex} className="font-display text-base font-medium leading-7 text-[#0D1B15] md:text-xl">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Privacy;
