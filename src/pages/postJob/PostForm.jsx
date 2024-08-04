import { useState } from 'react';
import { formData } from '../../data'; // Importing formData from the specified path

const PostForm = () => {
  // Initial state for the form data using useState hook
  const [form1Data, setForm1Data] = useState({
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

  // Handler for form input changes
  const handleForm1Change = (e) => {
    const { name, value } = e.target;
    setForm1Data((prevData) => ({
      ...prevData,
      [name]: value, // Update the corresponding field with the new value
    }));
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Combine data from both forms (if applicable)
    const combinedData = {
      ...form1Data,
    };

    // Handle submission logic (e.g., send data to server)
    console.log('Submitted Data:', combinedData);
  };

  return (
    <div className="container mx-auto pt-8 px-2 lg:px-20 xl:px-32 pb-10 lg:pb-20">
      <h1 className="text-primary font-semibold pb-7 lg:text-[28px]">
        Write your Details
      </h1>
      <form onSubmit={handleSubmit}>
        {formData.map((field, index) => (
          <div
            key={index}
            className="flex flex-col last-of-type:flex-row gap-3 pb-8 last-of-type:items-center"
          >
            <label
              htmlFor={field.name}
              className="text-tertiaryText text-base font-normal"
            >
              {field.label}
            </label>
            {field.type === 'checkbox' ? (
              <input
                type={field.type}
                name={field.name}
                id={field.name}
                className="w-4 h-4 text-neutralWhite bg-primary border-[#B4FDF2] rounded focus:ring-primary focus:ring-2 focus:rounded checked:text-red"
              />
            ) : (
              <input
                type={field.type}
                name={field.name}
                id={field.name}
                placeholder={field.placeholder}
                value={form1Data[field.name]}
                onChange={handleForm1Change}
                className="w-full rounded-md bg-[#F2F2F2] outline-none border border-[#B4FDF2] py-3 px-5 xl:py-5 lg:px-7 caret-tertiaryText placeholder:text-tertiaryText"
              />
            )}
          </div>
        ))}
        <button>suuu</button>
      </form>
    </div>
  );
};

export default PostForm;
