
import logo from "../../assets/logo-bg-white.jpeg"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaSnapchatGhost, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <footer className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-8 mx-auto">
          <div className="flex flex-col items-center text-center">
            <a href="#">
              <img
                className="w-auto h-40"
                src={logo}
                alt=""
              />
            </a>

            <p className="max-w-md mx-auto mt-4 text-gray-500 dark:text-gray-400">
              Find Us On Social Media
            </p>

            <div className="flex flex-col mt-4 sm:flex-row sm:items-center sm:justify-center gap-5 text-xl">
             {/* Social Media Icons */}
             <FaFacebookF/>
             <FaTwitter />
             <FaInstagram />
             <FaSnapchatGhost />
             <FaLinkedinIn />
            </div>
          </div>

          <hr className="my-10 border-gray-200 dark:border-gray-700" />

          <div className="flex flex-col items-center sm:flex-row sm:justify-between">
            <p className="text-sm text-gray-500">
              © Copyright 2023. All Rights Reserved - <span className="text-orange-400">Himu Chowdhury</span>.
            </p>

            <div className="flex mt-3 -mx-2 sm:mt-0">
              <a
                href="#"
                className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
                aria-label="Reddit"
              >
                {" "}
                Teams{" "}
              </a>

              <a
                href="#"
                className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
                aria-label="Reddit"
              >
                {" "}
                Privacy{" "}
              </a>

              <a
                href="#"
                className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
                aria-label="Reddit"
              >
                {" "}
                Cookies{" "}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
