import { Button } from "@/components/Button";
import RevealText from "@/components/RevealText";
import { motion } from "framer-motion";

const floatingImages = [
  { 
    src: "/images/about/about-image-1.webp", 
    style: { width: "140px", height: "141.48px", left: "299px", top: "116.54px" },
    delay: 0.1,
    duration: 3.5,
    floatY: -10
  },
  { 
    src: "/images/about/about-image-2.webp", 
    style: { width: "140px", height: "141.48px", left: "606.8px", top: "117.21px" },
    delay: 0.2,
    duration: 4.2,
    floatY: 12
  },
  { 
    src: "/images/about/about-image-3.webp", 
    style: { width: "140px", height: "141.48px", left: "981.19px", top: "98.01px" },
    delay: 0.3,
    duration: 3.8,
    floatY: -15
  },
  { 
    src: "/images/about/about-image-4.webp", 
    style: { width: "140px", height: "141.48px", left: "1110.8px", top: "326.94px" },
    delay: 0.4,
    duration: 4.5,
    floatY: 8
  },
  { 
    src: "/images/about/about-image-10.webp", 
    style: { width: "66px", height: "67px", left: "1083px", bottom: "203.46px" },
    delay: 0.5,
    duration: 3.2,
    floatY: -8
  },
  { 
    src: "/images/about/about-image-5.webp", 
    style: { width: "140px", height: "141.48px", left: "1125.19px", bottom: "92.06px" },
    delay: 0.6,
    duration: 5.0,
    floatY: 10
  },
  { 
    src: "/images/about/about-image-6.webp", 
    style: { width: "140px", height: "141.48px", left: "822.8px", bottom: "41.46px" },
    delay: 0.7,
    duration: 3.9,
    floatY: -12
  },
  { 
    src: "/images/about/about-image-7.webp", 
    style: { width: "140px", height: "141.48px", left: "434px", bottom: "62.46px" },
    delay: 0.8,
    duration: 4.1,
    floatY: 15
  },
  { 
    src: "/images/about/about-image-8.webp", 
    style: { width: "140px", height: "141.48px", left: "189.19px", bottom: "190.06px" },
    delay: 0.9,
    duration: 3.6,
    floatY: -10
  },
  { 
    src: "/images/about/about-image-9.webp", 
    style: { width: "66px", height: "67px", left: "97.98px", top: "313.01px" },
    delay: 1.0,
    duration: 4.4,
    floatY: 9
  },
];

const floatingTags = [
  {
    text: "1M Happy Clients",
    style: { width: "150.06px", height: "39.2px", left: "1206.56px", bottom: "278.99px" },
    delay: 1.1,
    duration: 3.7,
    floatY: -6
  },
  {
    text: "12+ Years Experience",
    style: { width: "181.31px", height: "39.2px", left: "97px", top: "266.01px" },
    delay: 1.2,
    duration: 4.0,
    floatY: 7
  }
];

export const AboutHero = () => {
  return (
    <section className="relative mt-12 h-[400px] md:h-[400px] lg:h-[800px] w-full overflow-hidden bg-[#F5F4F7]">
      {/* 1440px logic container - hidden on mobile/tablet, visible on desktop */}
      <div className="hidden lg:block absolute left-1/2 top-0 h-full w-[1440px] -translate-x-1/2 pointer-events-none">
        
        {/* Floating Images */}
        {floatingImages.map((img, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: 1, 
              opacity: 1,
              y: [0, img.floatY, 0]
            }}
            transition={{
              scale: { duration: 0.8, delay: img.delay, ease: [0.16, 1, 0.3, 1] },
              opacity: { duration: 0.8, delay: img.delay },
              y: { 
                duration: img.duration, 
                repeat: Infinity, 
                repeatType: "mirror", 
                ease: "easeInOut",
                delay: img.delay + 0.8
              }
            }}
            className="absolute overflow-hidden rounded-[16px] shadow-[0px_4px_20px_rgba(13,27,21,0.05)] bg-white/20 backdrop-blur-[2px]"
            style={img.style}
          >
            <img
              src={img.src}
              alt=""
              className="h-full w-full object-cover"
            />
          </motion.div>
        ))}

        {/* Tags */}
        {floatingTags.map((tag, i) => (
          <motion.div
            key={i + "tag"}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: 1, 
              opacity: 1,
              y: [0, tag.floatY, 0]
            }}
            transition={{
              scale: { duration: 0.8, delay: tag.delay, ease: [0.16, 1, 0.3, 1] },
              opacity: { duration: 0.8, delay: tag.delay },
              y: { 
                duration: tag.duration, 
                repeat: Infinity, 
                repeatType: "mirror", 
                ease: "easeInOut",
                delay: tag.delay + 0.8
              }
            }}
            className="absolute flex items-center justify-center rounded-[32px] bg-white shadow-[0px_4px_15px_rgba(0,0,0,0.05)] border border-[#E9EAE7]"
            style={tag.style}
          >
            <p className="font-inter text-[16px] font-normal leading-[27.2px] tracking-[-0.3px] text-[#595E5C] whitespace-nowrap">
              {tag.text}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Content Center - Fixed in the middle of the section */}
      <div className="absolute left-1/2 top-1/2 z-10 w-full max-w-[1000px] -translate-x-1/2 -translate-y-1/2 px-4 text-center pt-[30px] lg:pt-[50px]">
        <div className="flex flex-col items-center justify-center">
          {/* Title - About Us */}
          <div className="mb-[0px]">
            <RevealText
              as="h1"
              className="font-display text-[48px] md:text-[50px] lg:text-[80px] xl:text-[96px] font-medium leading-tight lg:leading-[96px] text-[#0D1B15] flex justify-center"
            >
              About {" "} Us
            </RevealText>
          </div>

          {/* Subtitle */}
          <div className="flex flex-col mb-[20px] max-w-[280px] md:max-w-[500px]">
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="font-inter text-[16px] lg:text-[18px] font-normal leading-[28px] lg:leading-[31px] tracking-[-0.3px] text-[#0D1B15]"
            >
              We are committed to improving oral health with trusted               dental services, modern technology, and a caring team.

            </motion.p>
           
          </div>

          {/* Button */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.7, duration: 0.5 }}
          >
            <Button
              to="/appointment"
              variant="primary"
              showIcon={false}
              className="btn-slide h-[48px] lg:h-[51.2px] text-[14px] lg:text-[16px] font-medium rounded-[100px] bg-[#D1FC71] text-[#0D1B15] shadow-sm hover:shadow-md transition-shadow px-6 lg:px-8"
            >
              Book an Appointment
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


