import { privacySections } from "@/data/privacy";

export const PrivacyContent = () => {
  return (
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
  );
};
