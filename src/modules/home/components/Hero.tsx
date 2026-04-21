import { Button } from "@/components/Button";
import RevealText from "@/components/RevealText";
import { ShieldPlus } from "lucide-react";
import { motion } from "framer-motion";

/**
 * Hero Section
 * 
 * Implements an exact responsive replication of the 4 reference images.
 * - Mobile: Stacked buttons, tight wrapping, Awesome \n Dental Care
 * - Tablet: Inline buttons, one line Awesome Dental Care
 * - Laptop: Inline buttons, Awesome \n Dental Care, specific text wraps
 * - Desktop: Inline buttons, wide text wraps
 */
const Hero = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 25 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: [0.33, 1, 0.68, 1] }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <section className="relative w-full bg-brand-ink min-h-[100vh] lg:h-[100vh] overflow-hidden">
      {/* Background Image with warm grading matching reference */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute inset-0 z-0 bg-[url(/images/home/hero.webp)] bg-cover bg-[65%_center] sm:bg-[center_right] bg-no-repeat"
        aria-hidden="true"
      >
        {/* Responsive Gradients: Bottom-up on mobile/tablet, Left-to-right on laptop/desktop */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0D1B15]/90 via-[#0D1B15]/20 to-transparent lg:bg-gradient-to-r lg:from-[#1A1108]/90 lg:via-[#3A2208]/40 lg:to-transparent" />
      </motion.div>

      {/* Content Wrapper */}
      <div className="container-site relative z-20 h-full">
        {/* Main Content Area: justify-end on mobile/tablet to push content down */}
        <motion.div 
          className="relative flex min-h-[100vh] w-full flex-col justify-end pb-10 lg:h-screen lg:min-h-0 lg:justify-start lg:pt-[24vh] lg:pb-[80px]"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          
          {/* Top Content: Title & Subtitle */}
          <div className="mb-10 lg:mb-0">
            {/* Title */}
            <RevealText 
              as="h1" 
              className="font-display text-[44px] font-medium leading-[1.08] text-white sm:text-[64px] lg:text-[76px] xl:text-[96px] xl:leading-[96px]"
              delay={0.5}
              stagger={0.04}
            >
              Awesome <br className="block sm:hidden lg:block" />
              <span className="sm:inline lg:hidden"> </span>
              Dental Care
            </RevealText>
            
            {/* Subtitle with exact responsive wraps */}
            <motion.p 
              variants={fadeInUp}
              className="mt-4 font-inter text-[16px] font-normal leading-[1.55] tracking-[-0.01em] text-white/90 max-w-[280px] sm:mt-6 sm:text-[18px] sm:leading-[1.6] sm:max-w-[460px] lg:max-w-[420px] xl:max-w-[560px]"
            >
              Prepare to enhance your smile with dental treatments that boost your confidence and brighten your day!
            </motion.p>

            {/* Buttons */}
            <motion.div 
              variants={fadeInUp}
              className="mt-8 flex flex-col items-start gap-[12px] sm:flex-row sm:items-center sm:gap-[16px] lg:mt-12 lg:mb-4 xl:mb-8"
            >
              <Button 
                to="/appointment" 
                variant="lime" 
                showIcon={false}
                className="w-auto px-8"
              >
                Book Appointment
              </Button>
              <Button 
                to="/services" 
                variant="white" 
                showIcon={false}
                className="w-auto px-8"
              >
                Our Services
              </Button>
            </motion.div>
          </div>

          {/* Bottom Content Badge */}
          <motion.div 
            variants={fadeInUp}
            className="flex items-start gap-3 sm:gap-4 lg:items-center"
          >
            <div className="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-[8px] bg-[#D1FC71] sm:h-[36px] sm:w-[36px]">
              <ShieldPlus size={18} className="text-[#0D1B15] sm:h-5 sm:w-5" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
              <h3 className="font-display text-[16px] font-semibold leading-[1.2] text-white sm:text-[18px]">
                Top Dentists & Tech
              </h3>
              <p className="mt-0.5 font-inter text-[14px] font-normal leading-[1.4] tracking-[-0.01em] text-white/90 sm:mt-1 sm:text-[16px] max-w-[240px] sm:max-w-none">
                Our team uses advanced tools for precise care.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

