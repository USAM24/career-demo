import { Link, NavLink } from 'react-router-dom'; // Importing components for routing
import Logo from '../../SVG/Logo'; // Importing the Logo component
import { navData } from '../../data'; // Importing navigation links Data

// Functional component for the Navbar
const Navbar = () => {
  const isLoggedIn = false;

  return (
    <nav className="bg-primary">
      {/* Container for the navbar content */}
      <div className="container mx-auto md:h-[188px] flex flex-col md:flex-row items-center justify-between gap-5 md:gap-0">
        {/* Logo section */}
        <div className="pt-5 md:pt-0">
          <Logo />
        </div>
        {/* Navigation links */}
        <div>
          <ul className="flex flex-col md:flex-row items-center gap-[50px]">
            {/* Map through ulData to create list items */}
            {navData.map(({ id, link, name }) => (
              <li key={id}>
                {/* NavLink for routing and applying active class */}
                <NavLink to={link} className={'text-secondaryText text-sm'}>
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        {/* Authentication buttons */}
        <div className="flex items-center gap-6 pb-5 md:pb-0">
          <button className="rounded-[10px] px-10 py-3 bg-neutralWhite text-secondary font-semibold">
            {/* Link to the login page */}
            <Link to={'/sign-in'}>{isLoggedIn ? 'Profile' : 'Log in'}</Link>
          </button>
          <button className="rounded-[10px] px-10 py-3 bg-neutralWhite text-secondary font-semibold">
            {/* Link to the registration page */}
            <Link to={'/sign-up'}>{isLoggedIn ? 'Log Out' : 'Register'}</Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; // Exporting the Navbar component
