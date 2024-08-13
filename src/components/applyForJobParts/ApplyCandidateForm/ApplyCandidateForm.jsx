import { Select } from '@headlessui/react';
import { ApplyFormFields, initialApplyFormFields } from '../../../data';
import './ApplyCandidateForm.css';
import { ChevronDownIcon } from 'lucide-react';
import { useMultiStep } from '../../../hooks/useMultiStep';

// The ApplyCandidateForm component renders a multi-step form for applying as a candidate.
// It uses state and handlers to manage form data and navigate through steps.
const ApplyCandidateForm = () => {
  // Retrieve functions and state from the useMultiStep hook.
  // setCurrentStep updates the current step in the multi-step process.
  // userApplyData holds the current form data.
  // setUserApplyData updates the form data.
  const { setCurrentStep, userApplyData, setUserApplyData } = useMultiStep();

  // Log the current form data for debugging purposes.
  console.log(userApplyData);

  // Function to advance to the next step in the form.
  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  // Function to reset form data to its initial state.
  const handleDelete = () => {
    setUserApplyData(initialApplyFormFields);
  };

  // Function to handle changes in form input fields.
  // Updates state based on input type: text, checkbox, or select.
  const handleUserApplyDataChange = (event) => {
    const { name, type, value, checked } = event.target;

    if (type === 'checkbox') {
      setUserApplyData((prevData) => {
        const newValue = checked
          ? [...prevData[name], value]
          : prevData[name].filter((item) => item !== value);

        return {
          ...prevData,
          [name]: newValue,
        };
      });
    } else {
      setUserApplyData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  return (
    <section>
      <div className="container mx-auto">
        {/* Title for the candidate information section */}
        <h1 className="mb-8 ml-6 text-primary-600 text-[20px] lg:text-[28px] font-bold leading-[36px] lg:leading-[42px] tracking-[0.48px] lg:tracking-[0.56px]">
          Candidate Information
        </h1>
        <div className="px-6">
          {/* First section with two form fields */}
          <div className="flex flex-col gap-2 lg:flex-row lg:gap-10">
            {ApplyFormFields.slice(0, 2).map(
              ({ label, name, type, options, placeholder }, idx) => (
                <div key={idx} className="lg:w-full lg:mb-8">
                  {type === 'text' ? (
                    <div className="flex flex-col pb-7">
                      <label
                        htmlFor={name}
                        className="pl-4 text-neutral-700 leading-[28.8px] tracking-[0.32px]"
                      >
                        {label}
                      </label>
                      <input
                        type={type}
                        name={name}
                        id={name}
                        value={userApplyData[name]}
                        onChange={handleUserApplyDataChange}
                        className="py-3 px-4 outline-none bg-neutral-50 rounded-lg border border-primary-100 placeholder:text-neutral-400 text-neutral-700"
                        placeholder={placeholder}
                      />
                    </div>
                  ) : (
                    <div className="flex flex-col pb-7">
                      <label
                        htmlFor={name}
                        className="pl-4 text-neutral-700 leading-[28.8px] tracking-[0.32px]"
                      >
                        {label}
                      </label>
                      <div className="relative flex items-center">
                        <Select
                          className="py-3 px-4 outline-none bg-neutral-50 rounded-lg border border-primary-100 w-full appearance-none text-neutral-400"
                          name={name}
                          onChange={handleUserApplyDataChange}
                        >
                          {options.map((option) => (
                            <option
                              value={option}
                              key={option}
                              className="text-pure-black"
                            >
                              {option}
                            </option>
                          ))}
                        </Select>
                        <ChevronDownIcon
                          className="group pointer-events-none absolute right-4 size-4 text-neutral-500"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  )}
                </div>
              )
            )}
          </div>
          {/* Second section with one form field */}
          <div>
            {ApplyFormFields.slice(2, 3).map(
              ({ label, name, type, placeholder }) => (
                <div key={label} className="lg:w-[calc(50%-20px)] lg:mb-8">
                  <div className="flex flex-col pb-7">
                    <label
                      htmlFor={name}
                      className="pl-4 text-neutral-700 leading-[28.8px] tracking-[0.32px]"
                    >
                      {label}
                    </label>
                    <input
                      type={type}
                      name={name}
                      id={name}
                      value={userApplyData[name]}
                      onChange={handleUserApplyDataChange}
                      className="py-3 px-4 outline-none bg-neutral-50 rounded-lg border border-primary-100 placeholder:text-neutral-400 text-neutral-700"
                      placeholder={placeholder}
                    />
                  </div>
                </div>
              )
            )}
          </div>
          {/* Third section with two form fields */}
          <div className="lg:flex items-center lg:gap-10">
            <div className="lg:flex items-center justify-between lg:basis-1/2">
              {ApplyFormFields.slice(3, 5).map(
                ({ label, name, type, placeholder }) => (
                  <div key={label} className={`lg:w-[calc(50%-20px)] lg:mb-8`}>
                    <div className="flex flex-col pb-7">
                      <label
                        htmlFor={name}
                        className="pl-4 text-neutral-700 leading-[28.8px] tracking-[0.32px]"
                      >
                        {label}
                      </label>
                      <input
                        type={type}
                        name={name}
                        id={name}
                        value={userApplyData[name]}
                        onChange={handleUserApplyDataChange}
                        className="py-3 px-4 outline-none bg-neutral-50 rounded-lg border border-primary-100 placeholder:text-neutral-400 text-neutral-700"
                        placeholder={placeholder}
                      />
                    </div>
                  </div>
                )
              )}
            </div>
            <div className={`lg:w-full lg:mb-8 lg:basis-1/2`}>
              {ApplyFormFields.slice(5, 6).map(
                ({ label, name, type, placeholder }) => (
                  <div key={label} className={`lg:w-full`}>
                    <div className="flex flex-col pb-7">
                      <label
                        htmlFor={name}
                        className="pl-4 text-neutral-700 leading-[28.8px] tracking-[0.32px]"
                      >
                        {label}
                      </label>
                      <input
                        type={type}
                        name={name}
                        value={userApplyData[name]}
                        onChange={handleUserApplyDataChange}
                        id={name}
                        className="py-3 px-4 outline-none bg-neutral-50 rounded-lg border border-primary-100 placeholder:text-neutral-400 text-neutral-700"
                        placeholder={placeholder}
                      />
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
          {/* Fourth section with multiple form fields */}
          <div className="lg:flex">
            <div className="lg:flex items-center lg:gap-x-10 flex-wrap lg:w-full">
              {ApplyFormFields.slice(6, 10).map(
                ({ label, name, type, placeholder }) => (
                  <div key={label} className={`lg:w-[calc(50%-20px)] lg:mb-8`}>
                    <div className="flex flex-col pb-7">
                      <label
                        htmlFor={name}
                        className="pl-4 text-neutral-700 leading-[28.8px] tracking-[0.32px]"
                      >
                        {label}
                      </label>
                      <input
                        type={type}
                        value={userApplyData[name]}
                        onChange={handleUserApplyDataChange}
                        name={name}
                        id={name}
                        className="py-3 px-4 outline-none bg-neutral-50 rounded-lg border border-primary-100 placeholder:text-neutral-400 text-neutral-700"
                        placeholder={placeholder}
                      />
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
        {/* Fifth section with a title and a textarea for experience */}
        <h1 className="mb-8 ml-6 text-primary-600 text-[20px] lg:text-[28px] font-bold leading-[36px] lg:leading-[42px] tracking-[0.48px] lg:tracking-[0.56px]">
          Experience
        </h1>
        <div className="px-6">
          <div>
            {ApplyFormFields.slice(10, 11).map(({ name, placeholder }) => (
              <div key={name} className="lg:w-full mb-8">
                <textarea
                  name={name}
                  value={userApplyData[name]}
                  onChange={handleUserApplyDataChange}
                  className="pt-2 pb-6 px-4 min-h-[294.342px] border border-primary-100 w-full resize-none rounded-lg bg-neutral-50 placeholder:text-neutral-500 text-neutral-700 outline-none"
                  placeholder={placeholder}
                ></textarea>
              </div>
            ))}
          </div>
          {/* Sixth section with a title */}
          <h1 className="mb-7 text-primary-600 text-[20px] lg:text-[28px] font-bold leading-[36px] lg:leading-[42px] tracking-[0.48px] lg:tracking-[0.56px]">
            Availability to work
          </h1>
          {/* Seventh section with radio buttons */}
          <div>
            {ApplyFormFields.slice(11, 12).map(({ options, name, type }) => (
              <div key={name} className="flex gap-4">
                {options.map((option) => (
                  <label
                    key={option}
                    className="py-2 px-4 flex items-center gap-2 text-neutral-700 leading-[28.8px] tracking-[0.32px]"
                  >
                    <input
                      type={type}
                      name={name}
                      value={option}
                      onChange={handleUserApplyDataChange}
                      className="w-5 h-5 hidden peer"
                    />
                    <div className="w-5 h-5 bg-white border-2 border-neutral-700 rounded-full peer-checked:bg-primary-600 peer-checked:border-primary-600 flex items-center justify-center">
                      <div className="hidden w-3 h-3 bg-white rounded-full peer-checked:block"></div>
                    </div>
                    {option}
                  </label>
                ))}
              </div>
            ))}
          </div>
          {/* Eighth section with a title and a textarea */}
          <h1 className="mt-11 mb-7 lg:mt-24 text-primary-600 text-[20px] lg:text-[28px] font-bold leading-[36px] lg:leading-[42px] tracking-[0.48px] lg:tracking-[0.56px]">
            Meta Data
          </h1>
          <div className="flex flex-col gap-2 lg:flex-row lg:gap-10 mb-8 md:mb-0">
            {ApplyFormFields.slice(12, 14).map(
              ({ type, placeholder, label, name }) => (
                <div key={name} className={`lg:w-full`}>
                  {type === 'checkbox' ? (
                    <div>
                      <label className="pl-4 text-neutral-700 leading-[28.8px] tracking-[0.32px]">
                        {label}
                      </label>
                      <div className="min-h-[139px] rounded-lg bg-neutral-50 py-6 px-4 flex gap-2 md:gap-6 flex-wrap justify-between md:justify-normal border border-primary-100">
                        {userApplyData[name].map((option, i) => (
                          <div key={i} className="h-max">
                            <label
                              className={
                                'py-1 px-2 rounded-[10px] bg-primary-600 text-pure-white'
                              }
                            >
                              <input
                                type={type}
                                value={option}
                                name={name}
                                className={`appearance-none`}
                              />
                              {option}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col pb-7">
                      <label
                        htmlFor={name}
                        className="pl-4 text-neutral-700 leading-[28.8px] tracking-[0.32px]"
                      >
                        {label}
                      </label>
                      <input
                        type={type}
                        value={userApplyData[name]}
                        onChange={handleUserApplyDataChange}
                        id={name}
                        name={name}
                        className="py-3 px-4 outline-none bg-neutral-50 rounded-lg border border-primary-100 placeholder:text-neutral-400 text-neutral-700"
                        placeholder={placeholder}
                      />
                    </div>
                  )}
                </div>
              )
            )}
          </div>
          {/* Ninth section with a textarea */}
          <div>
            {ApplyFormFields.slice(14, 15).map(
              ({ label, name, placeholder }) => (
                <div key={name} className="lg:w-[calc(50%-20px)] lg:mb-8">
                  <div className="flex flex-col pb-7">
                    <label
                      htmlFor={name}
                      className="pl-4 text-neutral-700 leading-[28.8px] tracking-[0.32px]"
                    >
                      {label}
                    </label>
                    <textarea
                      name={name}
                      id={name}
                      value={userApplyData[name]}
                      onChange={handleUserApplyDataChange}
                      className="resize-none py-3 px-4 outline-none bg-neutral-50 rounded-lg border border-primary-100 placeholder:text-neutral-400 text-neutral-700 min-h-[182px]"
                      placeholder={placeholder}
                    />
                  </div>
                </div>
              )
            )}
          </div>
        </div>
        {/* Submit and Delete buttons */}
        <div className="py-16 lg:pt-22 lg:pb-16 px-3 space-y-7 lg:space-x-11">
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
    </section>
  );
};

export default ApplyCandidateForm;
