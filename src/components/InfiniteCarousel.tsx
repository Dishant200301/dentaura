import { useEffect, useRef, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";

interface InfiniteCarouselProps {
  images: string[];
  autoPlay?: boolean;
  interval?: number;
  speed?: number;
  imageSize?: { width: number; height: number };
  gap?: number;
  showBadge?: boolean;
  badgeText?: string;
}

export const InfiniteCarousel = ({
  images,
  autoPlay = true,
  interval = 2000,
  speed = 20,
  imageSize = { width: 60, height: 49 },
  gap = -8,
  showBadge = false,
  badgeText = "80+",
}: InfiniteCarouselProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimationControls();
  const containerRef = useRef<HTMLDivElement>(null);

  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images];

  // Calculate total width
  const itemWidth = imageSize.width + (gap < 0 ? Math.abs(gap) : gap);
  const totalWidth = images.length * itemWidth;

  useEffect(() => {
    if (!autoPlay || isHovered) return;

    const animate = async () => {
      await controls.start({
        x: -totalWidth,
        transition: {
          duration: images.length * (speed / 10),
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        },
      });
    };

    animate();

    return () => {
      controls.stop();
    };
  }, [autoPlay, isHovered, controls, totalWidth, images.length, speed]);

  return (
    <div
      ref={containerRef}
      className="flex items-center overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="flex"
        animate={controls}
        initial={{ x: 0 }}
        style={{ gap: `${gap}px` }}
      >
        {duplicatedImages.map((src, i) => (
          <div
            key={`${src}-${i}`}
            className="shrink-0 overflow-hidden rounded-[8px] border-2 border-white"
            style={{
              width: `${imageSize.width}px`,
              height: `${imageSize.height}px`,
            }}
          >
            <img
              src={src}
              alt={`Image ${(i % images.length) + 1}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </motion.div>

      {/* Optional Badge */}
      {showBadge && (
        <div
          className="-ml-2 flex items-center justify-center rounded-[8px] bg-[#0D1B15] shrink-0 z-10"
          style={{
            width: `${imageSize.width}px`,
            height: `${imageSize.height}px`,
          }}
        >
          <span className="font-inter text-[18px] font-semibold leading-[25px] tracking-[-0.3px] text-white">
            {badgeText}
          </span>
        </div>
      )}
    </div>
  );
};

export default InfiniteCarousel;
