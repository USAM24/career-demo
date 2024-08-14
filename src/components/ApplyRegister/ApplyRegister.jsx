import { postSteps } from '../../data';
import { useMultiStep } from '../../hooks/useMultiStep';
import ApplyCandidateForm from '../applyForJobParts/ApplyCandidateForm/ApplyCandidateForm';
import ApplyRegisterHero from '../applyForJobParts/ApplyRegisterHero/ApplyRegisterHero';
import Join from '../Join/Join';
import Stepper from '../Stepper';

const ApplyRegister = () => {
  const { currentStep } = useMultiStep();
  return (
    <>
      <ApplyRegisterHero />
      <div className="pt-12">
        <h1 className="ml-6 lg:ml-[88px] text-primary-600 text-[24px] lg:text-[44px] font-bold leading-[43.2px] lg:leading-[66px] tracking-[0.48px] lg:tracking-[0.88px]">
          Apply for a job
        </h1>
        <div className="container mx-auto">
          <Stepper currentStep={currentStep} steps={postSteps} />
        </div>
      </div>
      <ApplyCandidateForm />
      <div className="mt-28">
        <Join />
      </div>
    </>
  );
};

export default ApplyRegister;
