import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import RevealText from "@/components/RevealText";
import { blogPosts } from "@/data/BlogDetails";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface BlogProps { compact?: boolean }

const BlogCard = ({ post }: { post: typeof blogPosts[0] }) => {
  const navigate = useNavigate();
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

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

  return (
    <div
      onClick={() => navigate(`/blog/${post.slug}`)}
      className="group cursor-pointer"
    >
      {/* Date & Title */}
      <div className="mb-4">
        <p className="font-inter text-[14px] font-medium leading-[24px] tracking-[-0.3px] text-[#595E5C]">
          {post.author.date}
        </p>
        <h3 className="mt-2 text-[18px] font-inter font-medium leading-[26px] tracking-[-0.5px] text-[#0D1B15] sm:text-[20px] sm:leading-[28px]">
          {post.title}
        </h3>
      </div>

      {/* Image with Hover Effect */}
      <div
        className="relative w-full overflow-hidden rounded-[16px]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          ref={imageRef as React.RefObject<HTMLImageElement>}
          src={post.heroImage}
          alt={post.title}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <span
          ref={textRef}
          className="absolute inset-0 flex items-center justify-center font-display text-[32px] font-medium text-white opacity-0 sm:text-[40px]"
          style={{ textShadow: "0 2px 20px rgba(0,0,0,0.3)" }}
        >
          Read More
        </span>
      </div>

      {/* Subtitle */}
      <p className="mt-4 font-inter text-[15px] font-normal leading-[27px] tracking-[-0.3px] text-[#595E5C] sm:text-[16px]">
        {post.excerpt}
      </p>
    </div>
  );
};

const Blog = ({ compact = false }: BlogProps) => {
  const lineRef = useRef<HTMLDivElement>(null);
  const items = compact ? blogPosts.slice(0, 3) : blogPosts;

  useEffect(() => {
    if (lineRef.current) {
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.5,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: lineRef.current,
            start: "top 90%",
          },
        }
      );
    }
  }, []);

  return (
    <section className="bg-[#f5f4f7] py-10 md:py-16 lg:py-[60px] overflow-hidden">
      <div className="container-site">
        {/* Tag, Title & Button Row */}
        <div className="flex w-full flex-col">
          {/* Tag row */}
          <div className="mb-4 flex items-center gap-2">
            <span className="h-[4px] w-[4px] rounded-full bg-[#0D1B15]" />
            <span className="font-inter text-[14px] lg:text-[16px] font-normal leading-[24px] lg:leading-[27px] text-[#0D1B15]">
              About
            </span>
          </div>

          {/* Animated Horizontal Line */}
          <div ref={lineRef} className="mb-6 h-[1px] w-full origin-left bg-[#C9CBC5]" />

          {/* Header & Button row */}
          <div className="flex flex-col items-start justify-between gap-4 md:gap-6 sm:flex-row sm:items-center">
            <RevealText
              as="h2"
              className="font-display text-[36px] md:text-[44px] lg:text-[64px] font-medium leading-[1.15] tracking-[-2px] lg:tracking-[-3px] text-[#0D1B15] lg:leading-[74px]"
            >
              Our Blog
            </RevealText>

            <Link
              to="/blog"
              className="btn-slide btn-lime flex h-[48px] lg:h-[51.2px] items-center justify-center rounded-[100px] px-6 lg:px-8 font-inter text-[14px] lg:text-[16px] font-medium leading-[24px] lg:leading-[27px] tracking-[-0.3px] text-[#0D1B15]"
            >
              <span>Read All Articles</span>
            </Link>
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className="mt-10 md:mt-12 lg:mt-16 grid gap-5 md:gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <BlogCard key={p.slug} post={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
