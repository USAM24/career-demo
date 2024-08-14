import { postSteps } from '../../data';
import { useMultiStep } from '../../hooks/useMultiStep';
import Stepper from '../Stepper';
import Submit from '../Submit';

const ApplySubmit = () => {
  const { currentStep } = useMultiStep();
  return (
    <>
      <div className="py-10">
        <Stepper steps={postSteps} currentStep={currentStep} />
      </div>
      <div>
        <Submit />
      </div>
    </>
  );
};

export default ApplySubmit;
