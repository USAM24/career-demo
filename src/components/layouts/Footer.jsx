import { Link } from 'react-router-dom';
import Logo from '../../SVG/Logo';
import { footerData } from '../../data';

/**
 * Footer component renders the footer section of the website.
 * Includes company information, navigation links, and social media icons.
 */
const Footer = () => {
  return (
    <footer className="bg-[#D1FAF4] h-[720px]">
      {/* Container to center the content and ensure a consistent width */}
      <div className="container mx-auto flex flex-col justify-between h-full">
        <div className="flex justify-between pt-[50px]">
          {/* Logo and company description */}
          <div className="w-[280px]">
            <div className="flex flex-col gap-4">
              <Link to={'/'}>
                {/* Logo component for the brand's logo */}
                <Logo />
              </Link>
              <p className="text-secondaryText text-base max-w-[265px] leading-[1.9rem]">
                Find jobs easily, USAM job search website built to help you
                every step of the way. Get free access to millions of job
                postings, personalize your search, and submit job applications.
                You can also post a job opportunity to find the best candidate
                for you.
              </p>
            </div>
          </div>

          {/* Navigation links based on footerData */}
          <div className="grid grid-cols-4 gap-20 pt-[55px]">
            {footerData.map(({ title, items }, index) => (
              <div key={index} className="flex flex-col gap-2">
                <h3 className="font-semibold text-secondaryText">{title}</h3>
                {items.map((item, itemIndex) => (
                  <Link to={'/'} key={itemIndex} className="text-secondaryText">
                    {item}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Footer bottom section */}
        <div className="pb-[35px] flex justify-between items-center">
          <p className="text-secondary font-medium">
            &copy; {new Date().getFullYear()}, All rights reserved to USAM
          </p>
          {/* Social media icons */}
          <ul className="flex items-center gap-[18px]">
            <li>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <img
                  src="/src/assets/facebook.png"
                  alt="Facebook"
                  className="rounded-full"
                />
              </a>
            </li>
            <li>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <img
                  src="/src/assets/linkedin.png"
                  alt="LinkedIn"
                  className="rounded-full"
                />
              </a>
            </li>
            <li>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <img
                  src="/src/assets/insta.png"
                  alt="Instagram"
                  className="rounded-full"
                />
              </a>
            </li>
            <li>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <img
                  src="/src/assets/x.png"
                  alt="Twitter"
                  className="rounded-full"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
