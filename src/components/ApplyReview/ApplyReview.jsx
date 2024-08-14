import { postSteps } from '../../data';
import { useMultiStep } from '../../hooks/useMultiStep';
import ApplyReviewApplicantProfileCard from '../applyForJobParts/ApplyReviewApplicantProfileCard/ApplyReviewApplicantProfileCard';
import Stepper from '../Stepper';

const ApplyReview = () => {
  const { currentStep } = useMultiStep();
  return (
    <>
      <div className="container mx-auto lg:pb-16 lg:pt-20">
        <Stepper currentStep={currentStep} steps={postSteps} />
      </div>
      <ApplyReviewApplicantProfileCard />
    </>
  );
};

export default ApplyReview;
