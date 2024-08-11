import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const Stepper = ({ currentStep, steps }) => {
  const isCurrentStep = (idx) => idx === currentStep;

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
      <div className="container mx-auto hidden lg:flex items-center justify-center pt-8 pb-20">
        {steps.map(({ step }, idx) => (
          <div key={idx} className={`${idx >= 2 ? 'w-20' : 'w-[390px]'}`}>
            <motion.div
              className="flex items-center"
              initial="hidden" // Initial animation state for the step number
              animate="visible" // Animate to visible state
              variants={imageVariants} // Apply image animation variants
              transition={{ duration: 0.5 }} // Duration of the animation
            >
              <div
                className={`w-20 h-20 rounded-full flex items-center justify-center font-bold text-[32px] ${
                  isCurrentStep(idx)
                    ? 'bg-secondary-300 text-pure-white' // Active step styles
                    : 'bg-pure-white text-primary-600 border border-[#83FCEA]' // Inactive step styles
                }`}
              >
                {idx + 1}
              </div>
              <div
                className={`${
                  idx < steps.length - 1
                    ? 'w-[calc(100%-80px)] bg-[#83FCEA] h-[2px]'
                    : ''
                }`}
              />
            </motion.div>
            <div
              className={`text-[20px] font-normal pt-5 text-left ${
                isCurrentStep(idx) ? 'text-primary-600' : 'text-neutral-700'
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
  currentStep: PropTypes.number.isRequired, // The current active step (index)
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      step: PropTypes.string.isRequired, // The name or label of the step
    })
  ).isRequired, // An array of steps
};

export default Stepper;
