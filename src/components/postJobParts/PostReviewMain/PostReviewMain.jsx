import { JobDetails, JobRequiredSkills } from '../../../data';

const PostReviewMain = () => {
  return (
    <div className="flex justify-between gap-5 flex-col lg:flex-row space-y-8 lg:space-y-0">
      {/* Card 1: User Profile Information */}
      <div className="flex flex-col items-center justify-center bg-pure-white rounded-[10px] p-6 lg:p-8 space-y-4 lg:space-y-6 xl:py-14 xl:space-y-8">
        {/* User profile image */}
        <img
          src="https://i.postimg.cc/s2xbz8rQ/svgviewer-png-output-7.png"
          alt="profileImage"
        />
        {/* User name */}
        <h1 className="font-bold text-[20px] text-primary-600">
          {'Ali Mohamed'}
        </h1>
        {/* User job title */}
        <p className="text-secondary-300">{'HR manager'}</p>
        {/* Social media icons */}
        <div className="flex items-center justify-center space-x-4">
          <a href="#">
            <img
              src="/src/assets/facebook.png"
              alt="Facebook"
              className="rounded-full"
            />
          </a>
          <a href="#">
            <img
              src="/src/assets/linkedin.png"
              alt="LinkedIn"
              className="rounded-full"
            />
          </a>
          <a href="#">
            <img
              src="/src/assets/insta.png"
              alt="Instagram"
              className="rounded-full"
            />
          </a>
          <a href="#">
            <img
              src="/src/assets/x.png"
              alt="Twitter"
              className="rounded-full"
            />
          </a>
        </div>
        {/* Edit button */}
        <button className="rounded-full bg-primary-700 py-3 px-11 font-semibold text-[20px] text-pure-white tracking-wider">
          Edit
        </button>
        {/* User contact info */}
        <div className="flex justify-between w-full pt-7">
          <span className="text-primary-600 font-semibold">Email</span>
          <span className="text-primary-600 font-semibold">Availability</span>
        </div>
        <div className="flex items-center justify-between w-full gap-0 lg:gap-24">
          <span className="text-neutral-500 text-[14px]">
            {'Ali USAM @gmail.com'}
          </span>
          <span className="text-neutral-500 text-[14px]">10 hrs per day</span>
        </div>
      </div>
      {/* Card 2: Job Information */}
      <div className="bg-pure-white flex flex-col items-center justify-center rounded-[10px] py-6 px-4 xl:px-14 2xl:p-20 space-y-8 xl:justify-evenly xl:w-2/3">
        <div className="md:self-start space-y-3">
          {/* Job description header */}
          <h1 className="font-semibold text-primary-600 text-[25px] lg:text-[28px] xl:text-[32px]">
            Job description
          </h1>
          {/* Job description text */}
          <p className="text-center md:text-left text-[14px] text-[#797987] leading-[1.6] max-w-[600px] xl:max-w-[900px] xl:text-[18px] xl:leading-[2.1]">
            {
              'Hiring a product manager this position is open for both graduate and also student are welcome to apply we are looking forward to work with you . to be a good fit you need to be familiar with all the product managing tools and has a good communication skills'
            }
          </p>
        </div>
        <div className="flex lg:flex-row flex-col justify-between w-full lg:gap-8">
          <div className="space-y-3 mb-4">
            {/* Job required skills header */}
            <h1 className="text-[18px] xl:text-[22px] font-semibold text-primary-600">
              Job required skills
            </h1>
            {/* Job required skills list */}
            <div className="flex flex-col space-y-3">
              {JobRequiredSkills.map(({ level, skill }) => (
                <div key={skill}>
                  <p className="text-[14px] xl:text-[18px] text-neutral-800 font-bold">
                    {skill}
                  </p>
                  <p className="text-[14px] xl:text-[18px] text-neutral-500">
                    {level}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            {/* Job details header */}
            <h1 className="text-[18px] xl:text-[22px] font-semibold text-primary-600">
              Job details
            </h1>
            {/* Job details list */}
            <div className="flex flex-col space-y-3">
              {JobDetails.map(({ details, title }) => (
                <div key={details}>
                  <p className="text-[14px] xl:text-[18px] text-neutral-800 font-bold">
                    {title}
                  </p>
                  <p className="text-[14px] xl:text-[18px] text-neutral-500">
                    {details}
                  </p>
                </div>
              ))}
            </div>
            {/* Number of required workers */}
            <div className="space-y-3">
              <h1 className="text-[18px] xl:text-[22px] font-semibold text-primary-600">
                Number of required workers
              </h1>
              <div className="flex flex-col space-y-3">
                <p className="text-neutral-500 text-[14px] xl:text-[18px]">
                  3 workers
                </p>
                <p className="text-neutral-500 text-[14px] xl:text-[18px]">
                  a total of 50 projects
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostReviewMain;
