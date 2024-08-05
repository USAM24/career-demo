import { useLocation } from 'react-router-dom';
import { Submit } from '../../../components';
import Stepper from '../../../components/Stepper';
import { postSteps } from '../../../data';

const PostSubmit = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const { firstName } = location.state || {};
  return (
    <div>
      <div className="py-10">
        <Stepper pathname={pathname} steps={postSteps} />
      </div>
      <div>
        <Submit data={firstName} />
      </div>
    </div>
  );
};

export default PostSubmit;
