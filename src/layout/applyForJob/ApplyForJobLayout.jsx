import { MultiStepProvider } from '../../context/MultiStepContext';
import { ApplyForJobPage } from '../../pages';

const ApplyForJobLayout = () => {
  return (
    <MultiStepProvider>
      <ApplyForJobPage />
    </MultiStepProvider>
  );
};

export default ApplyForJobLayout;
