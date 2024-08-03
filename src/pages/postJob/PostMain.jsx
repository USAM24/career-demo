import { useState } from 'react';
import { motion } from 'framer-motion';
import PostHero from '../../SVG/PostHero';
import Send from '../../SVG/Send';

const PostMain = () => {
  const [value, setvalue] = useState('');

  const onChangeHandler = (e) => {
    setvalue(e.target.value);
  };

  console.log(value);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between 2xl:container 2xl:mx-auto">
      {/* Left section with a hero image */}
      <motion.div
        initial={{ x: '-100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="overflow-hidden basis-1/2 lg:pl-[21px] pl-[55px] pb-8 lg:pb-0"
      >
        <PostHero width={721.91} height={700.4} />
      </motion.div>

      {/* Right section with the form and text */}
      <div className="basis-1/2 2xl:flex items-center justify-center">
        <div className="flex flex-col">
          {/* Main heading text */}
          <motion.p
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-[30px] text-center lg:text-left lg:text-[42px] xl:text-[52px] 2xl:text-[60px] font-bold text-[#F2F2F2] max-w-[515px] tracking-[0.02rem] capitalize"
          >
            Get Email when we find your best candidate
          </motion.p>

          {/* Email subscription form */}
          <motion.div
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 1, ease: 'easeOut' }}
            className="flex items-center lg:mt-12 mt-8 justify-center lg:justify-normal"
          >
            <div className="flex items-center lg:w-[329px] w-[250px] bg-neutralWhite rounded-tl rounded-bl p-3">
              <Send className="text-tertiary mr-3 w-5 h-5" />
              <input
                type="text"
                className="w-full outline-none text-primaryText placeholder:text-primaryText caret-primaryText placeholder:text-sm"
                placeholder="Enter your email address"
                value={value}
                onChange={onChangeHandler}
              />
            </div>
            <button className="bg-tertiary rounded-tr rounded-br p-3 text-neutralWhite">
              Subscribe
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PostMain;
