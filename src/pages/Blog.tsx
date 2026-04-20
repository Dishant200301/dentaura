import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";
import RevealText from "@/components/RevealText";
import { blogPosts } from "@/data/BlogDetails";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BlogListCard = ({
  post,
  index,
}: {
  post: (typeof blogPosts)[0];
  index: number;
}) => {
  const navigate = useNavigate();
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (imageRef.current && textRef.current) {
      gsap.to(imageRef.current, { scale: 1.05, filter: "blur(4px)", duration: 0.4, ease: "power2.out" });
      gsap.fromTo(textRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.7)" }
      );
    }
  };

  const handleMouseLeave = () => {
    if (imageRef.current && textRef.current) {
      gsap.to(imageRef.current, { scale: 1, filter: "blur(0px)", duration: 0.4, ease: "power2.out" });
      gsap.to(textRef.current, { scale: 0.8, opacity: 0, duration: 0.3, ease: "power2.in" });
    }
  };

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        delay: 0.2 + index * 0.15,
        ease: "power3.out",
      }
    );
  }, [index]);

  return (
    <div ref={cardRef} style={{ opacity: 0 }}>
      {/* Card Container - 50-50 layout with border - hover triggers Read More */}
      <div
        className="group flex cursor-pointer flex-col overflow-hidden rounded-[16px] border border-[#c9cbc5] bg-[#f5f4f7] p-5 sm:flex-row"
        onClick={() => navigate(`/blog/${post.slug}`)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* ── Image ── 600x440 with hover Read More overlay */}
        <div 
          className="relative h-[200px] w-full flex-shrink-0 overflow-hidden rounded-[12px] sm:h-[440px] sm:w-1/2"
        >
          <img
            ref={imageRef}
            src={post.heroImage}
            alt={post.title}
            loading="eager"
            className="h-full w-full object-cover"
          />
          {/* Read More Overlay on hover */}
          <span
            ref={textRef}
            className="absolute inset-0 flex items-center justify-center font-display text-[32px] font-medium text-white opacity-0 sm:text-[64px]"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.3)" }}
          >
            Read More
          </span>
        </div>

        {/* ── Content ── 50% width */}
        <div className="flex w-full flex-col justify-between py-4 px-0 sm:w-1/2 sm:pl-6 sm:py-0 sm:pr-0">
          <div>
            {/* Title - 36px */}
            <h2 className="font-display text-[24px] font-medium leading-[1.2] tracking-[-0.5px] text-[#0D1B15] md:text-[32px] lg:text-[36px]">
              {post.title}
            </h2>

            {/* Description - 18px */}
            <p className="mt-2 font-inter text-[16px] font-normal leading-[1.6] text-[#595E5C] lg:text-[18px]">
              {post.excerpt}
            </p>
             {/* Date - 16px */}
            <p className="mt-2 font-inter text-[14px] font-semibold text-[#0D1B15] sm:text-[16px]">
              {post.author.date}
            </p>
          </div>

          {/* Date and Read Now - stacked vertically like reference */}
          <div className="mt-6 flex flex-col gap-2 sm:mt-8">
           

            {/* Read Now with left-to-right underline animation */}
            <span className="relative inline-block font-inter text-[14px] font-medium text-[#0D1B15] sm:text-[16px]">
              Read Now
              <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-[#0D1B15] transition-all duration-300 group-hover:w-[78px]" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   Blog Page
   Note: Navbar & Footer are rendered globally in App.tsx
───────────────────────────────────────────── */
const BlogPage = () => {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (lineRef.current) {
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.2,
          ease: "power3.inOut",
          delay: 0.2,
        }
      );
    }
  }, []);

  return (
    <>
      <SEO
        title="Blog — OralCare"
        description="Explore dental insights, tips and patient stories from the OralCare team."
        path="/blog"
      />

      <div className="min-h-screen bg-[#f5f4f7]">
        {/* ─── Hero Header ─── */}
        <section className="bg-[#f5f4f7] pb-10 pt-36 md:pt-36 lg:pt-44 overflow-hidden">
             <div className="container-site">
               <div className="grid gap-8 md:grid-cols-2 md:items-end">
                 {/* Left - Title */}
                 <div className="flex flex-col">
                   <RevealText as="span" className="font-display text-[48px] md:text-[68px] lg:text-[96px] font-medium leading-[48px] md:leading-[68px] lg:leading-[96px] text-[#0D1B15]">
                     Explore
                   </RevealText>
                   <RevealText as="span" className="font-display pl-[60px] md:pl-[100px] text-[48px] md:text-[68px] lg:text-[96px] font-medium leading-[48px] md:leading-[68px] lg:leading-[96px] text-[#0D1B15]">
                     Insights
                   </RevealText>
                 </div>
                 {/* Right - Description */}
                 <p className="font-inter text-base lg:text-lg md:text-base leading-[24px] md:leading-[31px] text-[#595E5C] md:text-right md:mb-4">
                   Because every smile matters we're proud of the trust and happiness we've built with our patients.
                 </p>
               </div>
             </div>
           </section>

        {/* ─── Blog Horizontal List ─── */}
        <section className="bg-[#f5f4f7] pb-[100px] pt-0">
          <div className="container-site">
            <div className="flex flex-col gap-6">
              {blogPosts.map((post, i) => (
                <BlogListCard key={post.slug} post={post} index={i} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPage;
