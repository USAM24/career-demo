import { MultiStepProvider } from '../../context/MultiStepContext';
import { PostJobPage } from '../../pages';

const PostJobLayout = () => {
  return (
    <MultiStepProvider>
      <PostJobPage />
    </MultiStepProvider>
  );
};

export default PostJobLayout;
