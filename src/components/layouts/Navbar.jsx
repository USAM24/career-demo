import { useState } from 'react'; // Importing useState hook for managing component state
import { Dialog, DialogPanel, PopoverGroup } from '@headlessui/react'; // Importing UI components from Headless UI
import { Link, NavLink } from 'react-router-dom'; // Importing routing components
import { navData } from '../../data'; // Importing navigation data
import { motion, AnimatePresence } from 'framer-motion'; // Importing Framer Motion for animations
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; // Importing icons from Heroicons

const Navbar = () => {
  // State to manage the open/close state of the mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Example logged-in state; replace with actual authentication logic
  const isLoggedIn = false;

  return (
    <header className="bg-primary">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        {/* Logo section */}
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt="logo"
              src="https://i.ibb.co/LNL5WX9/Ellipse-129.png"
              className="h-20 w-auto"
            />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <motion.button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            whileHover={{ scale: 1.1 }} // Scale up on hover
            whileTap={{ scale: 0.9 }} // Scale down on tap
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon
              aria-hidden="true"
              className="h-10 w-10 text-secondaryText"
            />
          </motion.button>
        </div>

        {/* Desktop navigation links */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          {navData.map(({ id, link, name }) => (
            <NavLink
              to={link}
              key={id}
              className="text-sm font-semibold leading-6 text-secondaryText"
            >
              {name}
            </NavLink>
          ))}
        </PopoverGroup>

        {/* Desktop authentication buttons */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end space-x-5">
          <Link
            to={'/sign-in'}
            className="rounded-md w-31 h-10 text-secondary bg-neutralWhite hover:bg-tertiary focus:outline-none px-7 py-2 duration-200 hover:text-secondaryText"
          >
            Login
          </Link>
          <Link
            to={'/sign-up'}
            className="rounded-md w-30 h-10 text-secondary bg-neutralWhite hover:bg-tertiary focus:outline-none px-4 py-2 duration-200 hover:text-secondaryText"
          >
            Register
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <Dialog
            open={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
            className="lg:hidden"
          >
            {/* DialogPanel with animation */}
            <motion.div
              initial={{ y: '-100% - 128px', opacity: 0 }} // Initial state
              animate={{ y: 0, opacity: 1 }} // Animate to visible state
              exit={{ y: '-100% - 128px', opacity: 0 }} // Exit animation
              transition={{ duration: 0.3 }} // Animation duration
              className="fixed inset-0 z-10 overflow-y-auto"
            >
              <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-primary px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                {/* Close button and logo in mobile menu */}
                <div className="flex items-center justify-between">
                  <Link to="/" className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                    <img
                      alt="logo"
                      src="https://i.ibb.co/LNL5WX9/Ellipse-129.png"
                      className="h-20 w-auto"
                    />
                  </Link>
                  <motion.button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                    whileHover={{ scale: 1.1 }} // Scale up on hover
                    whileTap={{ scale: 0.9 }} // Scale down on tap
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon
                      aria-hidden="true"
                      className="h-8 w-8 text-secondaryText"
                    />
                  </motion.button>
                </div>

                {/* Navigation links in mobile menu */}
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/50">
                    <div className="space-y-2 py-6">
                      {navData.slice(1).map(({ id, link, name }) => (
                        <NavLink
                          to={link}
                          key={id}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-secondaryText hover:bg-secondary"
                        >
                          {name}
                        </NavLink>
                      ))}
                    </div>

                    {/* Authentication buttons in mobile menu */}
                    <div className="py-8 space-y-2">
                      <NavLink
                        to="sign-in"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-secondaryText hover:bg-secondary"
                      >
                        {isLoggedIn ? 'Profile' : 'Login'}
                      </NavLink>
                      <NavLink
                        to="sign-up"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-secondaryText hover:bg-secondary"
                      >
                        {isLoggedIn ? 'Logout' : 'Register'}
                      </NavLink>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
