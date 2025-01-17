import { Submit } from '..';
import Stepper from '../Stepper';
import { postSteps } from '../../data';
import { useMultiStep } from '../../hooks/useMultiStep';

const PostSubmit = () => {
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

export default PostSubmit;
