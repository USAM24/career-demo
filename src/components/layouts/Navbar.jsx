import { Link, NavLink } from 'react-router-dom'; // Importing components for routing
import Logo from '../../SVG/Logo'; // Importing the Logo component

// Functional component for the Navbar
const Navbar = () => {
  // Data for navigation links
  const ulData = [
    { id: 1, name: 'Home', link: '/' }, // Home page
    { id: 2, name: 'For Job seekers', link: '/application' }, // Job seekers page
    { id: 3, name: 'For Companies', link: '/companies' }, // Companies page
    { id: 4, name: 'Blog', link: '/blog' }, // Blog page
    { id: 5, name: 'Post a job', link: '/post-job' }, // Post a job page
  ];

  const isLoggedIn = true;

  return (
    <nav className="bg-[#04AE95]">
      {/* Container for the navbar content */}
      <div className="container mx-auto h-[188px] flex items-center justify-between">
        {/* Logo section */}
        <div>
          <Logo />
        </div>
        {/* Navigation links */}
        <div>
          <ul className="flex items-center gap-[50px]">
            {/* Map through ulData to create list items */}
            {ulData.map(({ id, link, name }) => (
              <li key={id}>
                {/* NavLink for routing and applying active class */}
                <NavLink to={link} className={'text-[#303030] text-sm'}>
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        {/* Authentication buttons */}
        <div className="flex items-center gap-6">
          <button className="rounded-[10px] px-10 py-3 bg-white text-[#037C6A] font-semibold">
            {/* Link to the login page */}
            <Link to={'/sign-in'}>{isLoggedIn ? 'Profile' : 'Log in'}</Link>
          </button>
          <button className="rounded-[10px] px-10 py-3 bg-white text-[#037C6A] font-semibold">
            {/* Link to the registration page */}
            <Link to={'/sign-up'}>{isLoggedIn ? 'Log Out' : 'Register'}</Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; // Exporting the Navbar component
