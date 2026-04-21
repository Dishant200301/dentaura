import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    image: "/images/about/about-image-1.webp",
    quote: "We combine modern techniques with gentle care to ensure every patient enjoys a smooth, stress-free dental experience.",
  },
  {
    image: "/images/about/about-image-2.webp",
    quote: "Our skilled team provides reliable dental treatments designed to protect your smile while keeping your comfort first.",
  },
  {
    image: "/images/about/about-image-3.webp",
    quote: "Focused on trust and quality, we deliver personalized dental care that helps you feel confident and well cared for.",
  },
  {
    image: "/images/about/about-image-4.webp",
    quote: "With years of experience and caring service, we focus on delivering quality dental care that prioritizes your comfort.",
  },
];

// Title letters with their positions
const titleLetters = [
  { char: "O", left: -219.93 },
  { char: "u", left: -182.35 },
  { char: "r", left: -154.51 },
  { char: " ", left: 0 },
  { char: "C", left: -113.14 },
  { char: "l", left: -87.93 },
  { char: "i", left: -75.88 },
  { char: "e", left: -53.82 },
  { char: "n", left: -20.62 },
  { char: "t", left: 6.51 },
  { char: "'", left: 19.26 },
  { char: "s", left: 36.98 },
  { char: " ", left: 0 },
  { char: "W", left: 91.48 },
  { char: "o", left: 136.94 },
  { char: "r", left: 164.93 },
  { char: "d", left: 193.33 },
  { char: "s", left: 225.70 },
];

export const ClientWords = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-10 lg:py-0 lg:h-[596px] w-full overflow-hidden bg-[#f5f4f7]">
      <div className="mx-auto flex h-full w-full max-w-[1780px] flex-col items-center px-4 md:px-6">
        {/* Title - Our Client's Words */}
        <div className="relative mt-6 lg:mt-[40px] flex h-auto lg:h-[74px] items-center justify-center">
          {titleLetters.map((letter, i) => (
            <span
              key={i}
              className="font-display text-[32px] md:text-[48px] lg:text-[64px] font-medium leading-tight lg:leading-[74px] tracking-[-2px] md:tracking-[-3px] lg:tracking-[-4.5px] text-[#0D1B15]"
              style={letter.char !== " " ? { marginLeft: i === 0 ? 0 : undefined } : { marginLeft: 4 }}
            >
              {letter.char === " " ? "\u00A0" : letter.char}
            </span>
          ))}
        </div>

        {/* Image Stack */}
        <div className="relative mt-8 md:mt-10 lg:mt-[60px] h-[200px] w-[180px] md:h-[240px] md:w-[200px] lg:h-[267px] lg:w-[240px]">
          <AnimatePresence mode="popLayout">
            {testimonials.map((testimonial, index) => {
              // Calculate position based on index relative to active
              const offset = (index - activeIndex + testimonials.length) % testimonials.length;
              const rotations = [-8.51, -7.16, -3.16, -0.16];
              const zIndices = [1, 2, 3, 4];

              return (
                <motion.div
                  key={testimonial.image}
                  initial={false}
                  animate={{
                    rotate: rotations[offset],
                    scale: 1 - offset * 0.00,
                    zIndex: zIndices[offset],
                    x: offset * 4,
                    y: offset * 4,
                    opacity: offset < 4 ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  className="absolute inset-0 overflow-hidden rounded-[16px]"
                >
                  <img
                    src={testimonial.image}
                    alt="Testimonial"
                    className="h-full w-full object-cover"
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Quote with vertical animation */}
        <div className="relative mt-8 md:mt-10 lg:mt-[50px] max-w-[800px] px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="flex items-start gap-3 md:gap-4"
            >
              {/* Quote Icon */}
              <svg
                width="20"
                height="16"
                viewBox="0 0 27 22"
                fill="none"
                className="mt-1 shrink-0 lg:w-[27px] lg:h-[22px]"
              >
                <path
                  d="M10.5 1.5L6 11H12V20.5H1.5V11L6 1.5H10.5Z"
                  stroke="#0D1B15"
                  strokeWidth="2"
                />
                <path
                  d="M24 1.5L19.5 11H25.5V20.5H15V11L19.5 1.5H24Z"
                  stroke="#0D1B15"
                  strokeWidth="2"
                />
              </svg>

              {/* Quote Text */}
              <p className="font-display text-[20px] md:text-[28px] lg:text-[36px] font-medium leading-[28px] md:leading-[38px] lg:leading-[45px] tracking-[-1px] md:tracking-[-1.5px] lg:tracking-[-2px] text-[#0D1B15] text-center">
                {testimonials[activeIndex].quote}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
