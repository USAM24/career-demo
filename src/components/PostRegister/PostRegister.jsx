import { postSteps } from '../../data';
import { useMultiStep } from '../../hooks/useMultiStep';
import PostRegisterForm from '../postJobParts/PostRegisterForm/PostRegisterForm';
import PostRegisterMain from '../postJobParts/PostRegisterMain/PostRegisterMain';
import Stepper from '../Stepper';

const PostRegister = () => {
  const { currentStep } = useMultiStep();
  return (
    <>
      <header className="pt-16 -mt-[1px] bg-primary-600 overflow-hidden">
        <div className="lg:-mt-0 min-h-[calc(100vh-365px)] lg:min-h-0">
          <PostRegisterMain />
        </div>
      </header>
      <div className="pt-16">
        <h1 className="text-primary-600 pb-7 text-[22px] md:text-[29px] lg:text-[36px] xl:text-[42px] pl-4 md:pl-6 lg:pl-8 xl:pl-12 2xl:pl-24 font-bold lg:text-left text-center">
          Post a job
        </h1>
        <div>
          <Stepper steps={postSteps} currentStep={currentStep} />
        </div>
      </div>
      <div>
        <PostRegisterForm />
      </div>
    </>
  );
};

export default PostRegister;
