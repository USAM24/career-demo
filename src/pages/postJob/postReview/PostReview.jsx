import { useLocation } from 'react-router-dom';
import Stepper from '../../../components/Stepper';
import { postSteps } from '../../../data';
import PostReviewMain from './PostReviewMain';
import PostReviewForm from './PostReviewForm';

const PostReview = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const { userData } = location.state || {};

  const {
    firstName,
    email,
    jobTitle,
    JobDescription,
    companyEmail,
    companyPhone,
    adress,
    numberOfWorkers,
  } = userData;

  const reviewMainData = {
    firstName,
    email,
    JobDescription,
    jobTitle,
  };

  const reviewFormData = {
    companyEmail,
    firstName,
    companyPhone,
    adress,
    numberOfWorkers,
  };

  return (
    <div>
      <div className="pb-16 pt-28 lg:block hidden">
        <Stepper pathname={pathname} steps={postSteps} />
      </div>
      <div className="bg-primary py-8 px-5 md:p-12  lg:py-20 lg:px-24 mt-20 lg:mt-0">
        <PostReviewMain data={reviewMainData} />
      </div>
      <div className="py-4 px-5 container mx-auto lg:px-0 md:py-12  lg:py-20  mt-20 lg:mt-0">
        <h1 className="text-primary text-[22px] md:text-[29px] lg:text-[36px] xl:text-[42px] font-bold ">
          company Info
        </h1>
        <PostReviewForm data={reviewFormData} />
      </div>
    </div>
  );
};

export default PostReview;
