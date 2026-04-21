import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { type BlogPost } from "@/data/BlogDetails";
import gsap from "gsap";

export const MoreArticleCard = ({ post }: { post: BlogPost }) => {
  const navigate = useNavigate();
  const imageRef = useRef<HTMLImageElement>(null);
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
      {/* Date */}
      <p className="font-inter text-[13px] text-[#595E5C]">{post.author.date}</p>
      {/* Title */}
      <h4 className="mt-2 font-display text-[18px] font-medium leading-[1.3] tracking-[-0.3px] text-[#0D1B15] sm:text-[20px]">
        {post.title}
      </h4>
      {/* Image with Hover Effect */}
      <div 
        className="relative mt-4 overflow-hidden rounded-[12px]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img 
          ref={imageRef}
          src={post.heroImage} 
          alt={post.title} 
          loading="lazy" 
          className="h-[300px] w-full object-cover"
        />
        <span
          ref={textRef}
          className="absolute inset-0 flex items-center justify-center font-display text-[32px] font-medium text-white opacity-0 sm:text-[40px]"
          style={{ textShadow: "0 2px 20px rgba(0,0,0,0.3)" }}
        >
          Read More
        </span>
      </div>
      {/* Excerpt */}
      <p className="mt-4 font-inter text-[14px] leading-[1.6] text-[#595E5C]">
        {post.excerpt}
      </p>
    </div>
  );
};
