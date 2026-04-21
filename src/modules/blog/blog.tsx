import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";
import RevealText from "@/components/RevealText";
import { blogPosts } from "@/data/BlogDetails";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import { BlogListCard } from "./components/BlogListCard";

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
        title="Blog — DentAura"
        description="Explore dental insights, tips and patient stories from the DentAura team."
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
