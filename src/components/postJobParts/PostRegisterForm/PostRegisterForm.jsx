// Importing Css File
import {
  formCompanyData,
  formData,
  initialFormCompanyData,
  initialUserFormData,
} from '../../../data';
import { useMultiStep } from '../../../hooks/useMultiStep';
import { generateFakeCompanyData } from '../../../utils';
import './PostJub.css';

// Define the PostForm component
const PostRegisterForm = () => {
  const { setCurrentStep, userData, setUserData, companyData, setCompanyData } =
    useMultiStep();

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  // Handler for changes in personal information form inputs
  const handleUserFormChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  // Handler for changes in company-related form inputs
  const handleFormCompanyChange = (e) => {
    const { name, value } = e.target;
    setCompanyData({ ...companyData, [name]: value });
  };

  const handleAutofill = () => {
    const fakeData = generateFakeCompanyData();
    setCompanyData(fakeData); // Assuming setFormCompanyData is your state setter function
  };

  const handleDelete = () => {
    setUserData(initialUserFormData);
    setCompanyData(initialFormCompanyData);
  };
  // JSX for rendering the form
  return (
    <div className="">
      <h1 className="text-primary-600 font-semibold lg:pb-7 lg:text-[28px] container mx-auto px-2 lg:px-20 xl:px-32">
        Write your Details
      </h1>
      <div>
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
                  onChange={handleUserFormChange}
                  className="w-4 h-4 text-pure-white bg-primary-600 border-[#B4FDF2] rounded focus:ring-primary focus:ring-2"
                />
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  id={field.name}
                  placeholder={userData.placeholder}
                  value={userData[field.name]}
                  onChange={handleUserFormChange}
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
                value={userData.JobDescription}
                onChange={handleUserFormChange}
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
                      value={companyData[field.name]}
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
                      value={companyData[field.name]}
                      onChange={handleFormCompanyChange}
                      className="resize-none h-[155px] w-full rounded-md bg-pure-white outline-none border border-[#B4FDF2] my-5 py-3 px-3 xl:py-5 lg:px-7 caret-neutral-700 placeholder:text-neutral-700"
                    />
                  ) : (
                    <input
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      value={companyData[field.name]}
                      onChange={handleFormCompanyChange}
                      className="w-full rounded-md bg-pure-white outline-none border border-[#B4FDF2] py-3 px-5 xl:py-5 lg:px-7 caret-neutral-500 placeholder:text-primary-600Text"
                    />
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={handleAutofill}
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
            type="button"
            onClick={handleNextStep}
          >
            Submit
          </button>
          <button
            className="w-full lg:w-fit border-[2px] border-neutral-500 px-40 bg-pure-white rounded-[10px] py-3 text-[#636363] font-semibold tracking-wider"
            onClick={handleDelete}
            type="button"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostRegisterForm; // Export the PostForm component as default
