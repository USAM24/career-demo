import { useState } from 'react';
import PostHero from '../../SVG/PostHero';
import Send from '../../SVG/Send';

const PostMain = () => {
  // State to hold the value of the input field
  const [value, setValue] = useState('');

  // Event handler for the input field to update the state
  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };

  // Log the current value of the input field (useful for debugging)
  console.log(value);

  return (
    <div className="flex flex-col lg:flex-row items-center lg:justify-between">
      {/* Left section with a hero image */}
      <div className="w-full lg:basis-1/2 overflow-hidden lg:pl-[21px] mb-10 lg:mb-0">
        <PostHero width={721.91} height={700.4} />
      </div>

      {/* Right section with the form and text */}
      <div className="w-full lg:basis-1/2 px-4 lg:px-0">
        <div className="flex flex-col items-center lg:items-start">
          {/* Main heading text */}
          <p className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[52px] font-bold text-[#F2F2F2] max-w-[100%] lg:max-w-[515px] tracking-[0.02rem] capitalize text-center lg:text-left">
            Get Email when we find your best candidate
          </p>

          {/* Email subscription form */}
          <div className="flex flex-col sm:flex-row items-center mt-8 md:mt-16 lg:mt-24 w-full max-w-[329px]">
            <div className="flex items-center w-full sm:w-auto bg-neutralWhite rounded-tl rounded-bl p-3">
              {/* Icon next to the input field */}
              <Send className={'text-tertiary mr-3 w-5 h-5'} />

              {/* Email input field */}
              <input
                type="text"
                className="w-full outline-none text-primaryText placeholder:text-primaryText caret-primaryText placeholder:text-sm"
                placeholder="Enter your email address"
                value={value}
                onChange={onChangeHandler}
              />
            </div>
            {/* Subscribe button */}
            <button className="bg-tertiary rounded-tr rounded-br p-3 text-neutralWhite w-full sm:w-auto mt-4 sm:mt-0 sm:ml-2">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostMain;
