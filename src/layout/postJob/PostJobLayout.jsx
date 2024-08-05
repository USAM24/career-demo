import { Outlet } from 'react-router-dom';

const PostJobLayout = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex-grow min-h-[calc(100vh-128px)]">
        <Outlet />
      </div>
    </main>
  );
};

export default PostJobLayout;
