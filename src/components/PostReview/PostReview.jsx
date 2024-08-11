import { postSteps } from '../../data';
import { useMultiStep } from '../../hooks/useMultiStep';
import PostReviewForm from '../postJobParts/PostReviewForm/PostReviewForm';
import PostReviewMain from '../postJobParts/PostReviewMain/PostReviewMain';
import Stepper from '../Stepper';
const PostReview = () => {
  const { currentStep } = useMultiStep();
  return (
    <div>
      <div className="pb-16 pt-28 lg:block hidden">
        <Stepper steps={postSteps} currentStep={currentStep} />
      </div>
      <div className="bg-primary-700 py-8 px-5 md:p-12  lg:py-20 lg:px-24 mt-20 lg:mt-0">
        <PostReviewMain />
      </div>
      <div className="py-4 px-5 container mx-auto lg:px-0 md:py-12  lg:py-20  mt-20 lg:mt-0">
        <h1 className="text-primary-600 text-[22px] md:text-[29px] lg:text-[36px] xl:text-[42px] font-bold ">
          company Info
        </h1>
        <PostReviewForm />
      </div>
    </div>
  );
};

export default PostReview;
