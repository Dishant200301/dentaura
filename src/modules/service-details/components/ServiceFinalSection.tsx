interface ServiceFinalSectionProps {
  sections: any[];
}

export const ServiceFinalSection = ({ sections }: ServiceFinalSectionProps) => {
  return (
    <div className="container-site my-10 lg:my-20">
      {sections.slice(-1).map((section: any, idx: number) => (
        <div key={idx}>
          <div className="mb-6 h-[1px] w-full bg-[#c9cbc5]" />
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-20">
            {/* Left: Heading */}
            <h3 className="font-display text-[28px] sm:text-[32px] lg:text-[36px] font-medium leading-tight lg:leading-[45px] text-[#0D1B15] lg:max-w-[500px]">
              {section.heading}
            </h3>

            {/* Right: Paragraph and Points */}
            <div className="flex flex-col">
              <p className="font-inter text-[16px] sm:text-[18px] font-normal leading-[1.6] sm:leading-[31px] text-[#595E5C]">
                {section.paragraph}
              </p>

              {section.points && (
                <ul className="mt-6 space-y-4">
                  {section.points.map((point: any, pIdx: number) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <span className="mt-[13px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#595E5C]" />
                      <p className="font-inter text-[16px] sm:text-[18px] leading-[1.6] sm:leading-[31px] text-[#595E5C]">
                        <strong className="font-bold">{point.title}:</strong> {point.text}
                      </p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
