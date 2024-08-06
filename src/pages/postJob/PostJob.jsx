import { useLocation } from 'react-router-dom';
import Stepper from '../../components/Stepper';
import PostMain from './PostMain';
import { postSteps } from '../../data';
import PostForm from './PostForm';

const PostJobPage = () => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <main>
      <header className="pt-16 -mt-[1px] bg-primary-600 overflow-hidden">
        <div className="lg:-mt-0 min-h-[calc(100vh-365px)] lg:min-h-0">
          <PostMain />
        </div>
      </header>
      <div className="pt-16">
        <h1 className="text-primary-600 pb-7 text-[22px] md:text-[29px] lg:text-[36px] xl:text-[42px] pl-4 md:pl-6 lg:pl-8 xl:pl-12 2xl:pl-24 font-bold lg:text-left text-center">
          Post a job
        </h1>
        <div>
          <Stepper pathname={pathname} steps={postSteps} />
        </div>
      </div>
      <div>
        <PostForm />
      </div>
    </main>
  );
};

export default PostJobPage;
