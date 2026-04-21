import RevealText from "@/components/RevealText";

interface ServiceHeroProps {
  title: string;
  tagline: string;
  img: string;
}

export const ServiceHero = ({ title, tagline, img }: ServiceHeroProps) => {
  return (
    <section className="relative h-[60vh] md:h-[60vh] lg:h-[100vh] w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 transition-transform duration-[2s] hover:scale-105"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* Vertical/Left dark gradient matching reference */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0D1B15] via-[#0D1B15]/70 to-transparent"></div>
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0D1B15] via-[#0D1B15]/30 to-transparent"></div>
      
      <div className="relative mx-auto flex h-full w-full max-w-[1440px] flex-col justify-end lg:justify-center px-6 pb-8 md:pb-20 xl:px-[70px] z-20">
        <RevealText
          as="h1"
          className="max-w-5xl font-display text-[48px] font-medium leading-[1.1] text-white sm:text-[64px] md:text-[60px] lg:text-[72px] lg:leading-[80px] xl:text-[96px] xl:leading-[96px]"
        >
          {title}
        </RevealText>
        <p className="max-w-xl md:max-w-3xl font-inter text-[16px] font-normal leading-[1.6] text-white/90 sm:text-[18px] lg:text-[20px]">
          {tagline}
        </p>
      </div>
    </section>
  );
};
