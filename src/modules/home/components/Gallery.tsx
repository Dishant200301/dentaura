import RevealText from "@/components/RevealText";

// Top row images with vertical positions (0, 40, 80, 120, 160 pattern)
const topImages = [
  { src: "/images/gallery/g1.webp", offset: 0 },
  { src: "/images/gallery/g2.webp", offset: 40 },
  { src: "/images/gallery/g3.webp", offset: 80 },
  { src: "/images/gallery/g4.webp", offset: 120 },
  { src: "/images/gallery/g5.webp", offset: 160 },
  { src: "/images/gallery/g6.webp", offset: 120 },
  { src: "/images/gallery/g7.webp", offset: 80 },
  { src: "/images/gallery/g8.webp", offset: 40 },
  { src: "/images/gallery/g1.webp", offset: 0 },
  { src: "/images/gallery/g2.webp", offset: 40 },
  { src: "/images/gallery/g3.webp", offset: 80 },
  { src: "/images/gallery/g4.webp", offset: 120 },
  { src: "/images/gallery/g5.webp", offset: 160 },
  { src: "/images/gallery/g6.webp", offset: 120 },
  { src: "/images/gallery/g7.webp", offset: 80 },
  { src: "/images/gallery/g8.webp", offset: 40 },
];

// Bottom row images with vertical positions (160, 120, 80, 40, 0 pattern - inverse wave)
const bottomImages = [
  { src: "/images/gallery/g1.webp", offset: 160 },
  { src: "/images/gallery/g2.webp", offset: 120 },
  { src: "/images/gallery/g3.webp", offset: 80 },
  { src: "/images/gallery/g4.webp", offset: 40 },
  { src: "/images/gallery/g5.webp", offset: 0 },
  { src: "/images/gallery/g6.webp", offset: 40 },
  { src: "/images/gallery/g7.webp", offset: 80 },
  { src: "/images/gallery/g8.webp", offset: 120 },
  { src: "/images/gallery/g1.webp", offset: 160 },
  { src: "/images/gallery/g2.webp", offset: 120 },
  { src: "/images/gallery/g3.webp", offset: 80 },
  { src: "/images/gallery/g4.webp", offset: 40 },
  { src: "/images/gallery/g5.webp", offset: 0 },
  { src: "/images/gallery/g6.webp", offset: 40 },
  { src: "/images/gallery/g7.webp", offset: 80 },
  { src: "/images/gallery/g8.webp", offset: 120 },
];

const TickerRow = ({
  images,
  direction = "left",
}: {
  images: { src: string; offset: number }[];
  direction?: "left" | "right";
}) => {
  // Duplicate for infinite scroll
  const duplicated = [...images, ...images];

  return (
    <div className="relative h-[200px] md:h-[240px] lg:h-[270px] overflow-hidden">
      <div
        className={`flex gap-2 md:gap-3 ${direction === "left" ? "marquee-track-left" : "marquee-track-right"}`}
        style={{ width: "max-content" }}
      >
        {duplicated.map((img, i) => (
          <div
            key={i}
            className="shrink-0"
            style={{ marginTop: typeof window !== 'undefined' && window.innerWidth < 1024 ? Math.floor(img.offset * 0.6) : img.offset }}
          >
            <img
              src={img.src}
              alt=""
              loading="lazy"
              className="h-[80px] w-[85px] md:h-[95px] md:w-[100px] lg:h-[110px] lg:w-[115px] rounded-[8px] lg:rounded-[12px] object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const Gallery = () => {
  return (
    <section className="relative overflow-hidden bg-[#f5f4f7] py-10 md:py-16 lg:py-[60px]">
      {/* Top Ticker */}
      <TickerRow images={topImages} direction="left" />

      {/* Center Content */}
      <div className="container-site relative z-10 py-10 lg:py-16 text-center">
        <div className="mx-auto max-w-[710px]">
        {/* Tag with dot */}
        <div className="flex items-center justify-center gap-2">
          <span className="h-[4px] w-[4px] rounded-full bg-[#0D1B15]" />
          <span className="font-jost text-[14px] lg:text-[16px] font-normal leading-[24px] lg:leading-[27px] text-[#0D1B15]">
            Our Smile Gallery
          </span>
        </div>

        {/* Title */}
        <RevealText
          as="h2"
          className="mt-4 font-display text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] font-medium leading-[1.2] tracking-[-2px] lg:tracking-[-2.5px] text-[#0D1B15] lg:leading-[58px]"
        >
          Discover the Beautiful Smiles<br className="hidden sm:block" />We've Created Over the Years
        </RevealText>

        {/* Subtitle */}
        <p className="mt-4 md:mt-6 font-inter text-[15px] md:text-[16px] lg:text-[18px] font-normal leading-[26px] lg:leading-[31px] tracking-[-0.3px] text-[#595E5C]">
          Check out our gallery featuring real patient transformations,<br className="hidden sm:block" />
          from teeth whitening to complete smile makeovers!
        </p>

        {/* Button */}
        <button className="btn-slide btn-lime mt-6 md:mt-8 h-[48px] lg:h-[51px] rounded-[100px] px-6 lg:px-8 font-inter text-[14px] lg:text-[16px] font-normal leading-[24px] lg:leading-[27px] tracking-[-0.3px] text-[#0D1B15]">
          <span>Make an Appointment</span>
        </button>
      </div>
    </div>

      {/* Bottom Ticker */}
      <TickerRow images={bottomImages} direction="right" />
    </section>
  );
};

export default Gallery;
