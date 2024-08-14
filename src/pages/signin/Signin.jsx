import signinHero from '../../assets/hero.png';
// import vegetableImage from '../../assets/Vegetables.svg';
// import group from '../../assets/Group.svg';
import facebookIcon from '../../assets/facebookIcon.svg';

const SigninPage = () => {
  return (
    <div className="flex w-full h-screen  bg-primary-600 ">
      <div className="hidden lg:flex h-full w-1/2 items-center p-2 justify-center bg-primary-600 ">
        <div className="relative m-5 pt-8 ">
          <img
            className="overflow-hidden z-0 bottom-0 object-cover "
            src={signinHero}
            alt="Hero"
          />
          <img
            className="overflow-hidden z-0 bottom-0 object-cover "
            src={signinHero}
            alt="Vegetables"
          />
          <img
            className="absolute mt-4 top-[170px] right-[170px] z-10 w-1/2 h-auto object-contain"
            src={signinHero}
            alt="Girl"
          />
          {/* <img
            className="absolute bottom-6 right-0 z-10 h-20 object-contain"
            src={group}
            alt="groupOFvectors"
          /> */}
        </div>
      </div>
      <div className="w-full flex items-center justify-center lg:w-1/2 bg-primary-600">
        <div className="flex items-center justify-center min-h-screen w-auto ">
          <div className=" bg-primary-600  w-full">
            <div className=" mb-6">
              <h2 className="text-3xl mb-5 font-bold text-secondary-300">
                Hey, Hello 👋
              </h2>
              <p className="mb-3 text-pure-white">
                Enter your email and password to login.
              </p>
            </div>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block font-light text-pure-white"
                >
                  Email or mobile phone number
                </label>
                <input
                  type="text"
                  id="email"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="example@example.com"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block font-light text-pure-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="******"
                />
              </div>
              <div className="flex items-center justify-between mb-8 px-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 accent-secondary-300"
                  />
                  <span className="ml-2 text-pure-white">Remember me</span>
                </label>
                <a href="#" className="text-secondary-300 hover:text-teal-800">
                  Forgot Password?
                </a>
              </div>
              <div className="mb-4 gap-5 flex justify-between items-center ">
                <button className="w-60 bg-primary-600 hover:bg-primary-700 text-pure-white font-semibold py-3 px-4 rounded-lg border-primary-700 border-2">
                  Submit
                </button>
                <button className="w-60 bg-primary-600 hover:bg-primary-700 text-pure-white font-semibold py-3 px-4 rounded-lg border-primary-700 border-2">
                  Sign up
                </button>
              </div>
              <p className=" text-pure-white">
                Don&apos;t have an account?{' '}
                <a
                  href="#"
                  className="p-2 text-sm font-medium text-secondary-300 hover:text-primary-700"
                >
                  Sign Up here
                </a>
              </p>
            </form>
            <div className="mt-6 text-center">
              <p>Or</p>
              <div className="mt-4 flex justify-center space-x-4">
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                  Login with Google
                </button>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Login with Facebook
                </button>
              </div>
            </div>

            {/* <GoogleAndFace /> */}
            <div className="mt-6 text-center">
              <p className="text-secondary-300">Or</p>
              <div className="mt-4 space-y-2 flex items-center justify-center flex-col">
                <button className="w-80 flex items-center justify-center gap-2 py-3 bg-primary-600 border-2 border-gray-100 font-semibold  px-4 rounded-lg text-gray-700 hover:bg-gray-200 transition duration-200">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.26644 9.76453C6.19903 6.93863 8.85469 4.90909 12.0002 4.90909C13.6912 4.90909 15.2184 5.50909 16.4184 6.49091L19.9093 3C17.7821 1.14545 15.0548 0 12.0002 0C7.27031 0 3.19799 2.6983 1.24023 6.65002L5.26644 9.76453Z"
                      fill="#EA4335"
                    />
                    <path
                      d="M16.0406 18.0142C14.9508 18.718 13.5659 19.0926 11.9998 19.0926C8.86633 19.0926 6.21896 17.0785 5.27682 14.2695L1.2373 17.3366C3.19263 21.2953 7.26484 24.0017 11.9998 24.0017C14.9327 24.0017 17.7352 22.959 19.834 21.0012L16.0406 18.0142Z"
                      fill="#34A853"
                    />
                    <path
                      d="M19.8342 20.9978C22.0292 18.9503 23.4545 15.9019 23.4545 11.9982C23.4545 11.2891 23.3455 10.5255 23.1818 9.81641H12V14.4528H18.4364C18.1188 16.0119 17.2663 17.2194 16.0407 18.0108L19.8342 20.9978Z"
                      fill="#4A90E2"
                    />
                    <path
                      d="M5.27698 14.2663C5.03833 13.5547 4.90909 12.7922 4.90909 11.9984C4.90909 11.2167 5.03444 10.4652 5.2662 9.76294L1.23999 6.64844C0.436587 8.25884 0 10.0738 0 11.9984C0 13.918 0.444781 15.7286 1.23746 17.3334L5.27698 14.2663Z"
                      fill="#FBBC05"
                    />
                  </svg>
                  Sign in with Google
                </button>
                <button className="w-80 flex items-center justify-center gap-2 py-3 bg-blue-600 text-pure-white rounded-lg font-semibold hover:bg-blue-700 transition duration-200">
                  <img
                    className="w-7 h-7"
                    src={facebookIcon}
                    alt="Facebook Icon"
                  />
                  Login with Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninPage;
