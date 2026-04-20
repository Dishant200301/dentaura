import SEO from "@/components/SEO";
import RevealText from "@/components/RevealText";
import { TeamGrid } from "@/sections/team/TeamGrid";

const TeamPage = () => (
  <>
    <SEO title="Team — DentAura" description="Meet our expert team of dentists, hygienists and specialists at DentAura." path="/team" />
    <section className="bg-[#f5f4f7] pb-10 pt-36 md:pt-36 lg:pt-44 overflow-hidden">
      <div className="container-site">
        <div className="grid gap-8 md:grid-cols-2 md:items-end">
          {/* Left - Title */}
          <div className="flex flex-col">
            <RevealText as="span" className="font-display text-[48px] md:text-[68px] lg:text-[96px] font-medium leading-[48px] md:leading-[68px] lg:leading-[96px] text-[#0D1B15]">
              Our Expert
            </RevealText>
            <RevealText as="span" className="font-display pl-[60px] md:pl-[100px] text-[48px] md:text-[68px] lg:text-[96px] font-medium leading-[48px] md:leading-[68px] lg:leading-[96px] text-[#0D1B15]">
              Dentists
            </RevealText>
          </div>
          {/* Right - Description */}
          <p className="font-inter text-base lg:text-lg md:text-base leading-[24px] md:leading-[31px] text-[#595E5C] md:text-right md:mb-4">
            Because every smile matters we're proud of the trust and happiness we've built with our patients.
          </p>
        </div>
      </div>
    </section>
    <TeamGrid />
  </>
);
export default TeamPage;
