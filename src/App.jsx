import { RouterProvider } from 'react-router-dom';
import router from './router';
import Profile from './pages/profile/Profile';

function App() {
  // return <RouterProvider router={router}></RouterProvider>;
  return <Profile />;
}

export default App;
