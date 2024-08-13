import { motion } from 'framer-motion';
import applyrhero from '../../../assets/applyrhero.png';
import victor from '../../../assets/victor.png';

const ApplyRegisterHero = () => {
  // Variants for container animation, controlling opacity and stagger timing
  const containerVariants = {
    hidden: { opacity: 0 }, // Initial state, hidden with zero opacity
    visible: {
      opacity: 1, // Final state, fully visible
      transition: {
        staggerChildren: 0.3, // Staggers the start time of children animations by 0.3 seconds
      },
    },
  };

  // Variants for individual item animations
  const itemVariants = {
    hidden: (direction) => ({
      // Initial state based on direction, sliding in from left or right
      x: direction === 'left' ? '-100vw' : '100vw',
      opacity: 0, // Start with zero opacity
    }),
    visible: {
      x: 0, // Final position, centered
      opacity: 1, // Fully visible
      transition: {
        type: 'spring', // Spring physics for bounce effect
        stiffness: 50, // Controls the "tightness" of the spring
        duration: 1.2, // Duration of the animation
      },
    },
  };

  return (
    <main className="bg-primary-600 -mt-[1px] overflow-hidden">
      <div className="container mx-auto px-[22px] pt-[14px] lg:py-[96px] pb-20">
        <div className="flex flex-col-reverse lg:flex-row gap-4 lg:gap-20 xl:gap-24 2xl:gap-0 2xl:justify-between">
          {/* Left Section: Contains heading, logo, and description */}
          <motion.div
            className="basis-1/2 space-y-[14px] flex flex-col md:items-center lg:items-start lg:justify-center"
            initial="hidden" // Initial state for the motion div
            animate="visible" // Final state for the motion div
            variants={containerVariants} // Animation variants for the container
          >
            {/* Heading with animated text */}
            <motion.h1
              className="text-neutral-50 text-[28px] md:text-[35px] lg:text-[52px] 2xl:text-[65px] font-bold leading-10 lg:leading-[78px] tracking-[0.56px]"
              variants={itemVariants} // Animation variants for the heading
              custom="left" // Custom prop to control direction
            >
              Find your dream Career with us
            </motion.h1>

            {/* Victor Logo with animated appearance */}
            <motion.div
              className="lg:pb-10 lg:pt-2"
              variants={itemVariants} // Animation variants for the logo
              custom="left" // Custom prop to control direction
            >
              <img
                src={victor}
                alt="victor"
                className="w-[192px] h-[36px] md:w-[80%] md:h-[50px] lg:w-[267px]"
              />
            </motion.div>

            {/* Description with animated text */}
            <motion.p
              className="text-neutral-50 text-[14px] lg:text-[18px] 2xl:text-[23px] tracking-[ 0.28px] leading-7 md:text-[22px] md:leading-[1.7] md:text-center lg:text-left"
              variants={itemVariants} // Animation variants for the paragraph
              custom="left" // Custom prop to control direction
            >
              Find jobs on us, USAM website is built to help you with every step
              of the way. Get free access to millions of job postings
              personalize your search and submit job applications
            </motion.p>
          </motion.div>

          {/* Right Section: Contains the main hero image */}
          <motion.div
            className="basis-1/2 flex items-center justify-center"
            variants={itemVariants} // Animation variants for the image
            custom="right" // Custom prop to control direction
            initial="hidden" // Initial state for the motion div
            animate="visible" // Final state for the motion div
          >
            <img src={applyrhero} alt="applyrhero" />
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default ApplyRegisterHero;
