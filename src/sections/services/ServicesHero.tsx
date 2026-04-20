import { RevealText } from "@/components/RevealText";

export const ServicesHero = () => {
  return (
    <section className="bg-brand-ink text-white py-20 lg:py-32 rounded-b-[3rem] overflow-hidden">
      <div className="container-site flex flex-col items-center text-center">
        <span className="rounded-full bg-brand-lime/20 px-4 py-1 text-xs font-bold uppercase tracking-widest text-brand-lime">
          Our Services
        </span>
        <RevealText as="h1" className="mt-8 max-w-4xl font-display text-5xl font-medium leading-tight tracking-tight md:text-7xl lg:text-8xl">
          Complete Care for a Radiant Smile
        </RevealText>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
          From routine checkups to advanced cosmetic procedures, we offer a comprehensive range of dental services tailored to your needs.
        </p>
      </div>
    </section>
  );
};
