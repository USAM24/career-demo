import { SendHorizontal } from 'lucide-react'; // Importing an icon component from the lucide-react library
import waves from '../../assets/victor.png'; // Importing an image asset for use in the component
import { useState } from 'react'; // Importing useState hook from React for managing local state

// The Join component represents a subscription section where users can join a newsletter by providing their email.
const Join = () => {
  // State to hold the value of the email input
  const [email, setEmail] = useState('');

  // Handler function to update the email state when the input value changes
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    // A section element with a primary background color
    <section className="bg-primary-600">
      {/* A container div that uses flexbox to layout its children horizontally or vertically based on screen size */}
      <div className="container mx-auto flex px-6 py-12 flex-col lg:flex-row gap-8 lg:gap-4 2xl:gap-10">
        {/* Left section containing the title and image */}
        <div className="flex flex-col gap-2">
          {/* Title text for the newsletter section */}
          <h1 className="font-bold text-[28px] lg:text-[40px] leading-[42px] lg:leading-[60px] tracking-[0.56px] lg:tracking-[0.8px] lg:max-w-[417px] lg:w-full text-pure-white">
            join our newsletter now
          </h1>
          {/* Image associated with the newsletter section */}
          <img
            src={waves}
            alt="Decorative waves" // Alt text for accessibility
            className="h-[54px] w-[254px] lg:max-w-[417px] lg:w-full"
          />
        </div>

        {/* Right section containing the description and email input */}
        <div className="flex flex-col gap-8 lg:gap-5 lg:justify-between flex-1">
          {/* Text paragraph describing the newsletter benefits */}
          <p className="text-[14px] lg:text-[16px] leading-[21.6px] lg:leading-[28.8px] tracking-[0.24px] lg:tracking-[0.32px] text-pure-white">
            Subscribe to our Newsletter and be the first to know about our
            amazing news
          </p>

          {/* Input container with relative positioning for the icon */}
          <div className="relative">
            {/* Email input field for capturing user's email */}
            <input
              type="email" // Input type to specify that it accepts email addresses
              placeholder="write your email" // Placeholder text inside the input
              value={email} // Binding the input value to the email state
              onChange={handleEmailChange} // Updating the email state when the input changes
              className="w-full px-4 py-[22px] lg:p-11 rounded-[20px] outline-none placeholder:text-neutral-500 text-neutral-700"
            />
            {/* Icon for sending the email, positioned inside the input field */}
            <SendHorizontal className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary-300" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
