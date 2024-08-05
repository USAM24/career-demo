import PropTypes from 'prop-types';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import Framer Motion for animations

/**
 * Submit Component
 * This component displays a submission confirmation message to the user.
 * It utilizes react-router-dom to navigate and retrieve the current location path.
 * Framer Motion is used for animations.
 *
 * Props:
 * - data (any): This prop holds the user's first name or any other relevant data to be displayed in the message.
 */

const Submit = ({ data }) => {
  const location = useLocation(); // Hook to get the current location object
  const pathname = location.pathname; // Extract the current pathname
  const navigate = useNavigate(); // Hook to navigate programmatically
  const firstName = data; // The data prop is assigned to firstName for use in the message

  return (
    <motion.div
      className="container mx-auto flex items-center justify-center px-5 lg:px-0"
      initial={{ opacity: 0, y: 50 }} // Initial state of the animation
      animate={{ opacity: 1, y: 0 }} // Final state of the animation
      transition={{ duration: 0.5 }} // Duration of the animation
    >
      <div className="flex flex-col items-center justify-center max-w-[417px]">
        <motion.img
          src="https://i.postimg.cc/J4RmvnfX/svgviewer-png-output-9.png"
          alt="succLogo"
          className="mb-8"
          initial={{ opacity: 0, scale: 0.5 }} // Initial state of the image animation
          animate={{ opacity: 1, scale: 1 }} // Final state of the image animation
          transition={{ duration: 1 }} // Duration of the image animation
        />
        <div className="text-center space-y-3">
          <h1 className="text-[32px] text-[#04BF89] font-bold">
            Successfully submitted
          </h1>
          <p className="text-[#37383D]">
            Thank you <span className="font-bold">{firstName}</span> for
            submitting, you will receive an email notification for the best{' '}
            {pathname === '/post-job/submit'
              ? 'candidates'
              : 'job offers and the results of your application'}{' '}
            very soon.
          </p>
        </div>
        <button
          className="mb-12 mt-1 px-4 py-2 rounded-xl bg-transparent border-black border text-[#04BF89]"
          onClick={() => navigate('/')} // Navigate back to home page on button click
        >
          Back to home page
        </button>
        <p className="font-bold text-black">
          Your Data is processed successfully.
        </p>
      </div>
    </motion.div>
  );
};

// Define prop types for the Submit component
Submit.propTypes = {
  data: PropTypes.any.isRequired,
};

export default Submit;
