import { PostRegister, PostReview, PostSubmit } from '../../components';
import { useMultiStep } from '../../hooks/useMultiStep';

const PostJobPage = () => {
  const { currentStep } = useMultiStep();

  return (
    <>
      {currentStep === 0 && <PostRegister />}
      {currentStep === 1 && <PostReview />}
      {currentStep === 2 && <PostSubmit />}
    </>
  );
};

export default PostJobPage;
