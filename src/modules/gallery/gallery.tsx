import SEO from "@/components/SEO";
import { RevealText } from "@/components/RevealText";
import { GalleryGrid } from "./components/GalleryGrid";

const GalleryPage = () => {
  return (
    <>
      <SEO title="Gallery — DentAura" description="Take a look at our modern dental clinic and the results we achieve for our patients." path="/gallery" />
      <section className="bg-brand-bg pb-10 pt-36 md:pt-36 lg:pt-44 overflow-hidden">
        <div className="container-site">
          <div className="grid gap-8 md:grid-cols-2 md:items-end">
            <RevealText as="h1" className="font-display text-[48px] md:text-[68px] lg:text-[96px] font-medium leading-tight tracking-tight text-brand-ink">
              Clinic Gallery
            </RevealText>
            <p className="text-base lg:text-lg leading-[24px] lg:leading-[31px] text-brand-mute md:text-right md:mb-4">
              Explore our state-of-the-art facilities and see the beautiful smiles we've helped create.
            </p>
          </div>
          <GalleryGrid />
        </div>
      </section>
    </>
  );
};
export default GalleryPage;
