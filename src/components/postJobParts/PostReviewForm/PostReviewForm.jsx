import { useState } from 'react'; // Importing useState hook from React
import { useMultiStep } from '../../../hooks/useMultiStep';

// Component for displaying and editing a post review form
const PostReviewForm = () => {
  const {
    setCurrentStep,
    userData,
    companyData,
    setCompanyData,
    finalData,
    setFinalData,
  } = useMultiStep();

  // Initializing state to manage the form data with default values from props
  // eslint-disable-next-line no-unused-vars
  const [formDataReview, setFormDataReview] = useState([
    {
      label: 'Company Email',
      name: 'companyEmail',
      type: 'text',
    },
    {
      label: 'Number of workers',
      name: 'numberOfWorkers',
      type: 'number',
    },
    {
      label: 'Company manager',
      name: 'firstName',
      type: 'text',
    },
    {
      label: 'Company number',
      name: 'companyPhone',
      type: 'tel',
    },
    {
      label: 'Company Address',
      name: 'adress',
      type: 'text',
    },
    {
      label: 'Company field',
      name: 'CompanyField',
      type: 'text',
    },
  ]);
  console.log('u', userData, 'c', companyData);
  // State to toggle between edit and view modes
  const [isEditing, setIsEditing] = useState(false);

  // Toggle edit mode on and off
  const handleButtonClick = () => {
    if (!isEditing) {
      // If in edit mode, save the data
      setIsEditing(true);
    } else {
      // If not in edit mode, allow editing
      setIsEditing(false);
    }
  };
  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };
  const handlePrevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };
  // Update form data when input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCompanyData({ ...companyData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const combinedData = {
      ...userData, // Data from the personal information form
      ...companyData, // Data from the job description form
    };
    setFinalData({ combinedData });
    console.log('data', finalData);
  };
  return (
    <form className="py-6 px-4" onSubmit={handleSubmit}>
      {/* Container for the form fields */}
      <div className="border-t-[1px] border-b-[1px] border-[#04AE95] pt-6 pb-14 lg:pt-11 lg:pb-16">
        <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center space-y-6 lg:space-y-0">
          <div className="space-y-6 flex flex-col items-center">
            <img
              src="https://i.postimg.cc/L5GNLnFs/svgviewer-png-output-8.png"
              alt="companyLogo"
            />
            <div className="space-y-1 text-center">
              <h1 className="text-[18px] font-medium text-secondary-300">
                Partnership investment
              </h1>
              <p className="text-[14px] text-neutral-500">
                we offer excellent investment solution
              </p>
            </div>
            {/* Edit button to toggle edit mode */}
            <button
              onClick={handleButtonClick}
              type="button"
              className={`${
                !isEditing ? 'bg-primary-700' : 'bg-secondary-300'
              } hover:scale-110 duration-300 flex items-center justify-center gap-2 font-semibold py-4 px-5 rounded-[10px] text-pure-white tracking-wider`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                />
              </svg>
              {isEditing ? 'Save' : 'Edit'}
            </button>
          </div>
          <div className="py-4 space-y-7 lg:space-y-0 flex flex-col lg:flex-row lg:gap-10 lg:mx-10">
            <div className="space-y-3 lg:space-y-6">
              {/* Render first half of form fields */}
              {formDataReview.slice(0, 3).map(({ label, name, type }) => (
                <div key={name} className="">
                  <label
                    htmlFor={name}
                    className="text-neutral-700 text-base font-normal"
                  >
                    {label}
                  </label>
                  <input
                    type={type}
                    name={name}
                    value={companyData[name]}
                    disabled={!isEditing} // Disable input if not in edit mode
                    onChange={handleInputChange}
                    className={`w-full rounded-md bg-[#F2F2F2] outline-none border border-[#B4FDF2] py-3 px-5 xl:py-5 lg:px-7 caret-neutral-700 placeholder:text-neutral-700 ${
                      !isEditing ? 'cursor-not-allowed' : 'cursor-auto'
                    }`}
                  />
                </div>
              ))}
            </div>
            <div className="space-y-3 lg:space-y-6">
              {/* Render second half of form fields */}
              {formDataReview.slice(3, 6).map(({ label, name, type }) => (
                <div key={name} className="">
                  <label
                    htmlFor={name}
                    className="text-neutral-700 text-base font-normal"
                  >
                    {label}
                  </label>
                  <input
                    type={type}
                    name={name}
                    value={companyData[name]}
                    disabled={!isEditing} // Disable input if not in edit mode
                    onChange={handleInputChange}
                    className={`w-full rounded-md bg-[#F2F2F2] outline-none border border-[#B4FDF2] py-3 px-5 xl:py-5 lg:px-7 caret-neutral-700 placeholder:text-neutral-700 ${
                      !isEditing ? 'cursor-not-allowed' : 'cursor-auto'
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="py-4 lg:pt-28 lg:pb-16 container mx-auto space-y-7 lg:space-x-11">
        <button
          className="w-full md:w-fit md:px-40 bg-primary-700 rounded-[10px] py-3 text-[#F2F2F2] font-semibold tracking-wider"
          type="submit"
          onClick={handleNextStep}
        >
          Submit
        </button>
        <button
          className="w-full md:w-fit md:px-40 bg-primary-700 rounded-[10px] py-3 text-[#F2F2F2] font-semibold tracking-wider"
          type="submit"
          onClick={handlePrevStep}
        >
          Back
        </button>
      </div>
    </form>
  );
};

export default PostReviewForm; // Exporting the component as the default export
