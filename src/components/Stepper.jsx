import PropTypes from 'prop-types';

/**
 * Stepper Component
 *
 * This component renders a multi-step progress bar for a given set of steps.
 * It highlights the current step based on the provided pathname.
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

  return (
    <main>
      {/* Container for the stepper component, hidden on small screens */}
      <div className="container mx-auto hidden lg:flex items-center justify-center pt-8 pb-20">
        {/* Iterate through the steps to render each step in the stepper */}
        {steps.map(({ step, url }, idx) => (
          <div key={idx} className={`${idx >= 2 ? 'w-20' : 'w-[390px]'}`}>
            <div className="flex items-center">
              {/* Step number display, highlighted if it matches the current step */}
              <div
                className={`w-20 h-20 rounded-full flex items-center justify-center font-bold text-[32px] ${
                  isCurrentStep(url)
                    ? 'bg-tertiary text-neutralWhite' // Active step styles
                    : 'bg-neutralWhite text-primary border border-[#83FCEA]' // Inactive step styles
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
            </div>
            {/* Step label, styled differently if it matches the current step */}
            <div
              className={`text-[20px] font-normal pt-5 text-left ${
                isCurrentStep(url) ? 'text-primary' : 'text-tertiaryText'
              }`}
            >
              {step}
            </div>
          </div>
        ))}
      </div>
    </main>
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
