import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AutoPlaySliderProps {
  images: string[];
  interval?: number;
  slideWidth?: number;
  slideHeight?: number;
}

export const AutoPlaySlider = ({
  images,
  interval = 2000,
  slideWidth = 300,
  slideHeight = 200,
}: AutoPlaySliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  // Duplicate first image at the end for seamless loop
  const slides = [...images, images[0]];

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => {
      if (prev === images.length - 1) {
        // Reset to 0 after showing the duplicated first slide
        return 0;
      }
      return prev + 1;
    });
  }, [images.length]);

  useEffect(() => {
    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [interval, nextSlide]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? slideWidth : -slideWidth,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -slideWidth : slideWidth,
      opacity: 0,
    }),
  };

  return (
    <div
      className="relative overflow-hidden rounded-[16px]"
      style={{ width: slideWidth, height: slideHeight }}
    >
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.3 },
          }}
          className="absolute inset-0"
        >
          <img
            src={slides[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Pagination dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-white w-6"
                : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default AutoPlaySlider;
