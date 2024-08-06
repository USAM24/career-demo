// Import necessary modules and data
import { useState } from 'react';
import {
  formCompanyAutofillValues,
  formCompanyData,
  formData,
} from '../../data'; // Importing formData from the specified path

// Importing Css File
import './PostJub.css';
import { Navigate } from 'react-router-dom';

// Define the PostForm component
const PostForm = () => {
  // State to manage form data for the personal information form
  const [form1Data, setForm1Data] = useState({
    firstName: '', // User's first name
    userName: '', // User's username
    email: '', // User's email address
    address: '', // User's address
    jobTitle: '', // Job title the user is applying for
    jobType: '', // Type of job (e.g., full-time, part-time)
    salary: '', // Expected salary
    closingDate: '', // Application closing date
    jobQualifications: '', // Required job qualifications
  });

  // State to manage data for the job description
  const [form2Data, setForm2Data] = useState({
    JobDescription: '', // Description of the job
  });

  // State to manage company-related data
  const [formCompanyValues, setFormCompanyValues] = useState({
    companyName: '', // Name of the company
    companyEmail: '', // Company's contact email
    companyPhone: '', // Company's contact phone number
    startedDate: '', // Date when the company started
    numberOfWorkers: '', // Number of workers in the company
    moreDetails: '', // Additional details about the company
  });

  const [shouldNavigate, setShouldNavigate] = useState(false);
  const [combinedData, setCombinedData] = useState(null);

  // Handler for changes in personal information form inputs
  const handleForm1Change = (e) => {
    const { name, value } = e.target;
    setForm1Data((prevData) => ({
      ...prevData,
      [name]: value, // Update the specific field with the new value
    }));
  };

  // Handler for changes in company-related form inputs
  const handleFormCompanyChange = (e) => {
    const { name, value } = e.target;
    setFormCompanyValues({ ...formCompanyValues, [name]: value });
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Combine data from all the forms
    const combinedData = {
      ...form1Data, // Data from the personal information form
      ...form2Data, // Data from the job description form
      ...formCompanyValues, // Data from the company information form
    };

    // Submit the combined data (e.g., send it to a server)
    console.log('Submitted Data:', combinedData);

    // Set the state to trigger navigation
    setCombinedData(combinedData);
    setShouldNavigate(true);
  };

  // Handler to clear all form data (reset to initial state)
  const handleDelete = () => {
    setForm1Data({
      firstName: '',
      userName: '',
      email: '',
      address: '',
      jobTitle: '',
      jobType: '',
      salary: '',
      closingDate: '',
      jobQualifications: '',
    });
    setForm2Data({
      JobDescription: '',
    });
    setFormCompanyValues({
      companyName: '',
      companyEmail: '',
      companyPhone: '',
      startedDate: '',
      numberOfWorkers: '',
      moreDetails: '',
    });
  };

  // JSX for rendering the form
  return (
    <div className="">
      <h1 className="text-primary-600 font-semibold lg:pb-7 lg:text-[28px] container mx-auto px-2 lg:px-20 xl:px-32">
        Write your Details
      </h1>
      <form onSubmit={handleSubmit} className="">
        <div className="container mx-auto pt-8 px-2 lg:px-20 xl:px-32">
          {formData.map((field, index) => (
            <div key={index} className="flex flex-col gap-3 pb-8 postCheckbox">
              <label
                htmlFor={field.name}
                className="text-neutral-700 text-base font-normal"
              >
                {field.label}
              </label>
              {field.type === 'checkbox' ? (
                <input
                  type={field.type}
                  name={field.name}
                  id={field.name}
                  className="w-4 h-4 text-pure-white bg-primary-600 border-[#B4FDF2] rounded focus:ring-primary focus:ring-2"
                />
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  id={field.name}
                  placeholder={field.placeholder}
                  value={form1Data[field.name]}
                  onChange={handleForm1Change}
                  className="w-full rounded-md bg-[#F2F2F2] outline-none border border-[#B4FDF2] py-3 px-5 xl:py-5 lg:px-7 caret-neutral-700 placeholder:text-neutral-700"
                />
              )}
            </div>
          ))}
          <div className="pt-10 lg:pt-20 pb-20 lg:pb-32">
            <h1 className="text-primary-600 font-semibold pb-7 lg:text-[28px]">
              Additional Information
            </h1>
            <div className="flex flex-col gap-3 pb-8">
              <label className="text-neutral-700 text-base font-normal">
                Job description
              </label>
              <textarea
                name="JobDescription"
                value={form2Data.JobDescription}
                onChange={(e) =>
                  setForm2Data((prevData) => ({
                    ...prevData,
                    [e.target.name]: e.target.value,
                  }))
                }
                placeholder="type all the details about the job"
                className="resize-none h-[320px] w-full rounded-md bg-[#F2F2F2] outline-none border border-[#B4FDF2] py-3 px-3 xl:py-5 lg:px-7 caret-neutral-700 placeholder:text-neutral-700"
              />
            </div>
          </div>
        </div>
        <div className="bg-primary-600 py-7 px-2 lg:px-20 xl:px-32 lg:py-44">
          <div className="bg-[#F6FAFB] py-7 px-4 lg:px-20 xl:px-32 rounded-md lg:py-20">
            <h1 className="text-primary-600 font-semibold pb-7 lg:text-[28px] ">
              Company Information
            </h1>
            <div className="flex flex-col">
              <div className="flex lg:flex-row lg:flex-wrap lg:gap-5 flex-col gap-3 pb-5">
                {formCompanyData.slice(0, 4).map((field, index) => (
                  <div
                    key={index}
                    className="w-full lg:w-[48%] xl:w-[48.8%] 2xl:w-[49.1%]"
                  >
                    <input
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      value={formCompanyValues[field.name]}
                      onChange={handleFormCompanyChange}
                      className="w-full rounded-md bg-pure-white outline-none border border-[#B4FDF2] py-3 px-5 xl:py-5 lg:px-7 caret-neutral-500 placeholder:text-primary-600Text"
                    />
                  </div>
                ))}
              </div>
              {formCompanyData.slice(4, 6).map((field, index) => (
                <div key={index}>
                  {field.type === 'textarea' ? (
                    <textarea
                      name={field.name}
                      placeholder={field.placeholder}
                      value={formCompanyValues[field.name]}
                      onChange={handleFormCompanyChange}
                      className="resize-none h-[155px] w-full rounded-md bg-pure-white outline-none border border-[#B4FDF2] my-5 py-3 px-3 xl:py-5 lg:px-7 caret-neutral-700 placeholder:text-neutral-700"
                    />
                  ) : (
                    <input
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      value={formCompanyValues[field.name]}
                      onChange={handleFormCompanyChange}
                      className="w-full rounded-md bg-pure-white outline-none border border-[#B4FDF2] py-3 px-5 xl:py-5 lg:px-7 caret-neutral-500 placeholder:text-primary-600Text"
                    />
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={() => setFormCompanyValues(formCompanyAutofillValues)}
                className="mb-8 lg:mb-12 w-full lg:w-fit px-10 bg-primary-700 rounded-md py-4 text-[#F2F2F2] font-semibold tracking-wider"
              >
                Auto fill
              </button>
            </div>
          </div>
        </div>
        <div className="py-16 lg:pt-28 lg:pb-16 px-3 lg:px-12 xl:px-20 space-y-7 lg:space-x-11">
          <button
            className="w-full lg:w-fit px-40 bg-primary-700 rounded-[10px] py-3 text-[#F2F2F2] font-semibold tracking-wider"
            type="submit"
          >
            Submit
          </button>
          <button
            className="w-full lg:w-fit border-[2px] border-neutral-500 px-40 bg-pure-white rounded-[10px] py-3 text-[#636363] font-semibold tracking-wider"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
        {shouldNavigate && (
          <Navigate to="/post-job/review" state={{ userData: combinedData }} />
        )}
      </form>
    </div>
  );
};

export default PostForm; // Export the PostForm component as default
