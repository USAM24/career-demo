import { ApplyRegister, ApplyReview, ApplySubmit } from '../../components';
import { useMultiStep } from '../../hooks/useMultiStep';

const ApplyForJobPage = () => {
  const { currentStep } = useMultiStep();
  return (
    <>
      {currentStep === 0 && <ApplyRegister />}
      {currentStep === 1 && <ApplyReview />}
      {currentStep === 2 && <ApplySubmit />}
    </>
  );
};

export default ApplyForJobPage;
