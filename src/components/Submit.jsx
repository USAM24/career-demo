import PropTypes from 'prop-types'; // Importing PropTypes for type-checking props
import { useLocation, useNavigate } from 'react-router-dom'; // Importing hooks from react-router-dom for navigation and location

// Component to display a successful submission message
const Submit = ({ data }) => {
  const location = useLocation(); // Hook to access the current location object
  const pathname = location.pathname; // Extracting the pathname from the location object
  const navigate = useNavigate(); // Hook to navigate to different routes
  const firstName = data; // Extracting firstName from the data prop

  return (
    <div className="container mx-auto flex items-center justify-center px-5 lg:px-0">
      {/* Container for the success message and related elements */}
      <div className="flex flex-col items-center justify-center max-w-[417px]">
        <img
          src="https://i.postimg.cc/J4RmvnfX/svgviewer-png-output-9.png"
          alt="succLogo"
          className="mb-8"
        />
        <div className="text-center space-y-3">
          {/* Title for the success message */}
          <h1 className="text-[32px] text-[#04BF89] font-bold">
            Successfully submitted
          </h1>
          {/* Dynamic message based on the current pathname */}
          <p className="text-[#37383D]">
            Thank you <span className="font-bold">{firstName}</span> for
            submitting, you will receive an email notification for the best{' '}
            {pathname === '/post-job/submit'
              ? 'candidates'
              : 'job offers and the results of your application'}{' '}
            very soon.
          </p>
        </div>
        {/* Button to navigate back to the home page */}
        <button
          className="mb-12 mt-1 px-4 py-2 rounded-xl bg-transparent border-black border text-[#04BF89]"
          onClick={() => navigate('/')}
        >
          Back to home page
        </button>
        {/* Confirmation message */}
        <p className="font-bold text-black">
          Your Data is processed successfully.
        </p>
      </div>
    </div>
  );
};

// Defining the expected type for the data prop
Submit.propTypes = {
  data: PropTypes.any.isRequired,
};

export default Submit; // Exporting the component as the default export
