import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

/**
 * Stepper Component
 *
 * This component renders a multi-step progress bar for a given set of steps.
 * It highlights the current step based on the provided pathname.
 *
 * Additionally, the component features animations for both the entire container
 * and individual elements using Framer Motion. The animations include:
 * - Fading in and out the entire component.
 * - Scaling and fading in the step number elements.
 *
 * @param {string} pathname - The current path to determine the active step.
 * @param {Array} steps - An array of step objects, each containing:
 *   @param {string} steps[].step - The name or label of the step.
 *   @param {string} steps[].url - The URL segment associated with the step.
 */
const Stepper = ({ pathname, steps }) => {
  /**
   * Determine if the given URL matches the current pathname
   *
   * @param {string} url - The URL segment to check against the current pathname
   * @returns {boolean} - True if the URL is part of the current pathname, false otherwise
   */
  const isCurrentStep = (url) => {
    const normalizedPathname = pathname.toLowerCase();
    const normalizedUrl = `/${url.toLowerCase()}`;
    return normalizedPathname === normalizedUrl;
  };

  // Variants for animating individual elements (like the step number)
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.5 }, // Initial state: invisible and smaller
    visible: { opacity: 1, scale: 1 }, // Final state: fully visible and normal size
  };

  // Variants for animating the entire container
  const containerVariants = {
    hidden: { opacity: 0 }, // Initial state: invisible
    visible: { opacity: 1 }, // Final state: fully visible
    exit: { opacity: 0 }, // Exit state: invisible
  };

  return (
    <motion.main
      initial="hidden" // Initial animation state
      animate="visible" // Animate to visible state
      exit="exit" // Exit animation state
      variants={containerVariants} // Apply container animation variants
    >
      {/* Container for the stepper component, hidden on small screens */}
      <div className="container mx-auto hidden lg:flex items-center justify-center pt-8 pb-20">
        {/* Iterate through the steps to render each step in the stepper */}
        {steps.map(({ step, url }, idx) => (
          <div key={idx} className={`${idx >= 2 ? 'w-20' : 'w-[390px]'}`}>
            <motion.div
              className="flex items-center"
              initial="hidden" // Initial animation state for the step number
              animate="visible" // Animate to visible state
              variants={imageVariants} // Apply image animation variants
              transition={{ duration: 0.5 }} // Duration of the animation
            >
              {/* Step number display, highlighted if it matches the current step */}
              <div
                className={`w-20 h-20 rounded-full flex items-center justify-center font-bold text-[32px] ${
                  isCurrentStep(url)
                    ? 'bg-secondary-300 text-pure-white' // Active step styles
                    : 'bg-pure-white text-primary-600 border border-[#83FCEA]' // Inactive step styles
                }`}
              >
                {idx + 1} {/* Display the step number */}
              </div>
              {/* Line connecting steps, only displayed if not the last step */}
              <div
                className={`${
                  idx <= 1 ? 'w-[calc(100%-80px)] bg-[#83FCEA] h-[2px]' : ''
                }`}
              />
            </motion.div>
            {/* Step label, styled differently if it matches the current step */}
            <div
              className={`text-[20px] font-normal pt-5 text-left ${
                isCurrentStep(url) ? 'text-primary-600' : 'text-neutral-700'
              }`}
            >
              {step}
            </div>
          </div>
        ))}
      </div>
    </motion.main>
  );
};

Stepper.propTypes = {
  pathname: PropTypes.string.isRequired, // The current URL path
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      step: PropTypes.string.isRequired, // The name or label of the step
      url: PropTypes.string.isRequired, // The URL segment for the step
    })
  ).isRequired, // An array of steps
};

export default Stepper;
