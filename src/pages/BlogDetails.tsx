import { useParams, Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import SEO from "@/components/SEO";
import { getBlogPostBySlug, blogPosts, type BlogPost } from "@/data/BlogDetails";
import { ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { RevealText } from "@/components/RevealText";

// Blog card component with hover effect for More Articles
const MoreArticleCard = ({ post }: { post: BlogPost }) => {
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

const BlogDetails = () => {
  const { slug } = useParams();
  const post = getBlogPostBySlug(slug || "");
  
  if (!post) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f5f4f7]">
        <div className="text-center">
          <h1 className="font-display text-2xl text-[#0D1B15]">Blog post not found</h1>
          <Link to="/blog" className="mt-4 inline-block text-[#595E5C] hover:text-[#0D1B15]">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }
  
  const morePosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <SEO 
        title={`${post.title} — OralCare Blog`} 
        description={post.excerpt} 
        path={`/blog/${post.slug}`} 
      />
      
      {/* Hero Section */}
      <section
        className="relative h-[60vh] md:h-[60vh] lg:h-[100vh] w-full overflow-hidden"
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${post.heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
    {/* Vertical/Left dark gradient matching reference */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0D1B15] via-[#0D1B15]/90 to-transparent"></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0D1B15] via-[#0D1B15]/10 to-transparent"></div>
        
        
        <div className="relative mx-auto flex h-full w-full max-w-[1440px] flex-col justify-end lg:justify-center px-6 pb-8 lg:pb-16 lg:px-[70px]">
          <RevealText
            as="h1"
            className="max-w-5xl font-display text-[38px] font-medium leading-[38px] tracking-[-3px] text-white sm:text-[64px] md:text-[50px] md:leading-[56px] lg:text-[72px] lg:leading-[80px] xl:text-[96px] xl:leading-[96px]"
          >
            {post.title}
          </RevealText>
          {/* Date badge */}
          <span className="mt-4 lg:mt-6 inline-flex w-max items-center rounded-full bg-white/90 px-4 py-2 font-inter text-[14px] text-[#0D1B15]">
            {post.author.date}
          </span>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-[#f5f4f7] py-6 lg:py-10">
        <div className="mx-auto w-full max-w-[1050px] px-4 sm:px-6 xl:px-0">
          <Link to="/blog" className="mb-6 lg:mb-10 inline-flex items-center gap-2 font-inter text-[14px] text-[#595E5C] transition-colors hover:text-[#0D1B15]">
            <ChevronLeft size={16} /> Back to Blog
          </Link>
          
          <article className="text-[#595E5C]">
            {/* Intro Paragraph */}
            {post.content.intro && (
              <p className="mb-6 lg:mb-12 font-inter text-[16px] lg:text-[18px] font-normal leading-[1.6] lg:leading-[31px] text-[#595E5C]">
                {post.content.intro}
              </p>
            )}

            {/* Content Sections */}
            {post.content.sections.map((section, index) => (
              <div key={index} className="mb-6 lg:mb-12">
                {/* Text Content */}
                <div className={cn(
                  "flex flex-col gap-6",
                  section.image && (section.imagePosition === "left" || section.imagePosition === "right") ? "lg:flex-row lg:items-center" : "flex-col"
                )}>
                  
                  {/* Image for Left Position */}
                  {section.image && section.imagePosition === "left" && (
                    <div className="w-full lg:w-1/2">
                      <img 
                        src={section.image} 
                        alt={section.heading || "Blog image"} 
                        className="h-[300px] w-full rounded-lg object-cover" 
                      />
                    </div>
                  )}

                  <div className={cn(
                    "w-full",
                    section.image && (section.imagePosition === "left" || section.imagePosition === "right") ? "lg:w-1/2" : "w-full"
                  )}>
                    {section.heading && (
                      <h2 className="mb-3 font-display text-[28px] md:text-[32px] lg:text-[36px] font-medium leading-tight lg:leading-[45px] text-[#0D1B15]">
                        {section.heading}
                      </h2>
                    )}
                    {section.paragraphs && section.paragraphs.map((paragraph, pIndex) => (
                      <p key={pIndex} className="mb-0 font-inter text-[16px] lg:text-[18px] font-normal leading-[1.6] lg:leading-[31px] text-[#595E5C]">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Image for Right Position */}
                  {section.image && section.imagePosition === "right" && (
                    <div className="w-full lg:w-1/2">
                      <img 
                        src={section.image} 
                        alt={section.heading || "Blog image"} 
                        className="h-[300px] w-full rounded-lg object-cover" 
                      />
                    </div>
                  )}
                </div>

                {/* Single full-width or center image */}
                {section.image && (section.imagePosition === "full" || section.imagePosition === "center") && (
                  <div className={cn(
                    "my-6 lg:my-10 overflow-hidden rounded-lg",
                    section.imagePosition === "center" ? "mx-auto max-w-[600px]" : "w-full"
                  )}>
                    <img
                      src={section.image}
                      alt={section.heading || "Blog image"}
                      className="h-auto w-full object-cover"
                    />
                  </div>
                )}

                {/* Grid images */}
                {section.images && section.imagePosition === "grid" && (
                  <div className="my-6 lg:my-10 grid gap-4 grid-cols-1 sm:grid-cols-2">
                    {section.images.map((img, imgIndex) => (
                      <div key={imgIndex} className="overflow-hidden rounded-lg">
                        <img
                          src={img}
                          alt={`Blog image ${imgIndex + 1}`}
                          className="h-[300px] md:h-[400px] lg:h-[500px] w-full rounded-lg object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </article>

          {/* Author Section - Matched to Reference */}
          <div className="mt-6 lg:mt-8 border-t border-[#e2e2e2] pt-6 lg:pt-10">
            <div className="flex flex-col gap-6 lg:gap-10 md:flex-row md:items-center md:justify-between">
              {/* Left Side: Avatar + Name/Role */}
              <div className="flex items-center gap-6">
                <img 
                  src={post.author.avatar} 
                  alt={post.author.name}
                  className="h-[68px] w-[68px] rounded-[16px] object-cover "
                />
                <div className="flex flex-col">
                  <span className="mb-1 font-inter text-[14px] font-normal leading-[24px] text-[#595E5C]">Written by</span>
                  <p className="font-inter text-[16px] font-semibold leading-[27px] text-[#0D1B15]">{post.author.name}</p>
                  <p className="font-inter text-[14px] font-normal leading-[24px] text-[#595E5C]">{post.author.role}</p>
                </div>
              </div>

              {/* Right Side: Bio text */}
              <div className="flex-1 md:max-w-[500px]">
                <p className="font-inter text-[16px] lg:text-[18px] font-normal leading-[1.6] lg:leading-[31px] text-[#0D1B15] md:text-right">
                  {post.author.bio}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Articles Section */}
      <section className="bg-[#f5f4f7] pb-10 lg:pb-20 pt-10 lg:pt-16">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 xl:px-[70px]">
          <h3 className="mb-6 lg:mb-8 font-display text-[28px] md:text-[32px] font-medium tracking-[-1px] text-[#0D1B15] lg:text-[40px]">
            More Articles
          </h3>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {morePosts.map((p) => (
              <MoreArticleCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;
