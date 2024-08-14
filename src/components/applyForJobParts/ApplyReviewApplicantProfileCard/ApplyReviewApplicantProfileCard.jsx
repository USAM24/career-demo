// Importing necessary modules and assets
import { motion } from 'framer-motion'; // Motion for animations
import userprofile from '../../../assets/userprofile.png'; // User profile image
import { useMultiStep } from '../../../hooks/useMultiStep'; // Custom hook for multi-step form

// Main component for displaying applicant's profile review card
const ApplyReviewApplicantProfileCard = () => {
  // Destructuring state and functions from the custom hook
  const { userApplyData, setCurrentStep } = useMultiStep();

  // Destructuring user data from the state
  const {
    job,
    skills,
    name,
    college,
    expectedSalary,
    mobileNumber,
    dateOfBirth,
    metaDescription,
    experiences,
    address,
  } = userApplyData;

  // Array to structure user's status details (Education, Salary, etc.)
  const userStatus = [
    { id: 1, label: 'Education', value: college },
    { id: 2, label: 'Salary', value: expectedSalary },
    { id: 3, label: 'Email', value: 'test@gmail.com' }, // Simple email generation based on name
    { id: 4, label: 'Mobile', value: mobileNumber },
    { id: 5, label: 'Date of birth', value: dateOfBirth },
    {
      id: 6,
      label: 'Experience',
      value: metaDescription,
      p: 'px-2 pt-2 pb-5', // Styling for the experience section
    },
    {
      id: 7,
      label: 'Summary Preview',
      value: experiences,
      p: 'px-2 pt-5 pb-4', // Styling for the summary section
    },
    {
      id: 8,
      label: 'Location',
      value: address,
      p: 'py-3 px-4', // Styling for the location section
    },
  ];

  // Array to structure user's social media links
  const userLinks = [
    { id: 1, icon: '/src/assets/facebook.png', href: '#' },
    { id: 2, icon: '/src/assets/linkedin.png', href: '#' },
    { id: 3, icon: '/src/assets/insta.png', href: '#' },
    { id: 4, icon: '/src/assets/x.png', href: '#' },
  ];

  // Handler function to proceed to the next step in the form
  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  // Handler function to go back to the previous step in the form
  const handlePrevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <section className="px-6 lg:px-0">
      <div className="container md:mx-auto border border-secondary-300 rounded-[10px] lg:border-none">
        <motion.div
          className="px-4 pt-6 pb-10 lg:p-0 lg:flex lg:gap-x-14"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Left section: User Profile Picture, Name, Job Title, and Skills */}
          <motion.div
            className="flex flex-col lg:border border-secondary-300 lg:rounded-[10px] lg:pt-20 lg:px-11"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="flex flex-col items-center"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  opacity: 1,
                  transition: { delayChildren: 0.3, staggerChildren: 0.1 },
                },
                hidden: { opacity: 0 },
              }}
            >
              {/* User profile image */}
              <motion.img
                src={userprofile}
                alt={userprofile}
                className="w-[136.058px] h-[144px] lg:w-[177.296px] lg:h-[187.646px]"
                variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
              />
              {/* User name */}
              <motion.h1
                className="mt-2 text-primary-600 text-[18px] font-semibold leading-[180%] tracking-[0.36px] lg:text-[20px] lg:tracking-[0.4px]"
                variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
              >
                {name}
              </motion.h1>
              {/* User job title */}
              <motion.p
                className="text-secondary-300 text-[16px] font-normal leading-[180%] tracking-[0.32px]"
                variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
              >
                {job}
              </motion.p>
              {/* User skills list */}
              <motion.div
                className="mt-10 mb-6 flex flex-wrap justify-between md:justify-center md:space-x-6 w-full gap-y-2"
                variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
              >
                {skills.map((skill) => (
                  <motion.div
                    className="py-1 px-2 text-center rounded-[10px] bg-primary-600 text-neutral-50 text-[16px] font-semibold leading-[180%] tracking-[0.32px] w-fit"
                    key={skill}
                    variants={{
                      visible: { opacity: 1 },
                      hidden: { opacity: 0 },
                    }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Left section: User status details */}
            <motion.div
              className="space-y-4 pb-14 pt-6 lg:px-5"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  opacity: 1,
                  transition: { delayChildren: 0.6, staggerChildren: 0.1 },
                },
                hidden: { opacity: 0 },
              }}
            >
              {userStatus.slice(0, 5).map(({ id, label, value }) => (
                <motion.div
                  key={id}
                  variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
                >
                  <h1 className="text-primary-600 text-[16px] lg:text-[18px] xl:text-[20px] font-semibold leading-[180%] tracking-[0.32px]">
                    {label}
                  </h1>
                  <p className="text-neutral-500 text-[16px] lg:text-[18px] xl:text-[20px] font-normal leading-[180%] tracking-[0.32px]">
                    {value}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right section: Experience, Summary Preview, and Location */}
          <motion.div
            className="flex flex-col space-y-8 lg:flex-1 lg:border border-secondary-300 lg:rounded-[10px] lg:py-20 lg:px-11"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {userStatus.slice(5, 8).map(({ id, label, value, p }) => (
              <motion.div
                className="space-y-6"
                key={id}
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    opacity: 1,
                    transition: { delayChildren: 0.9, staggerChildren: 0.1 },
                  },
                  hidden: { opacity: 0 },
                }}
              >
                <h1
                  className={`text-primary-600 text-[28px] lg:text-[35px] font-semibold leading-[150%] tracking-[0.56px]`}
                >
                  {label}
                </h1>
                <div className={`${p} bg-neutral-50 rounded-lg`}>
                  <p
                    className={`text-neutral-500 text-[12px] lg:text-[13px] xl:text-[15px] 2xl:text-[17px] font-normal leading-[180%] tracking-[0.24px]`}
                  >
                    {value}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Mobile: Social Media Links */}
      <div className="md:hidden p-[6px] flex items-center justify-center space-x-4 my-10">
        {userLinks.map(({ href, icon, id }) => (
          <div key={id} className="w-8 h-8">
            <a href={href} target="_blank">
              <img src={icon} alt={icon} className="w-8 h-8 rounded-full" />
            </a>
          </div>
        ))}
      </div>

      {/* Navigation buttons for multi-step form */}
      <div className="py-16 lg:pt-22 lg:pb-16 px-3 space-y-7 lg:space-x-11 lg:container lg:mx-auto lg:px-0">
        <button
          className="w-full lg:w-fit lg:px-40 bg-primary-700 rounded-[10px] py-3 text-[#F2F2F2] font-semibold tracking-wider"
          type="button"
          onClick={handleNextStep}
        >
          Submit
        </button>
        <button
          className="w-full lg:w-fit lg:px-40 bg-primary-700 rounded-[10px] py-3 text-[#F2F2F2] font-semibold tracking-wider"
          type="button"
          onClick={handlePrevStep}
        >
          Back
        </button>
      </div>
    </section>
  );
};

// Exporting the component as default export
export default ApplyReviewApplicantProfileCard;
