import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo-bg-white.jpeg";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
const Navbar = () => {
  const { user, loading, logOut } = useContext(AuthContext);

  const signOut = () => {
    logOut()
      .then((result) => {
        console.log(result, 'Logged out successfully');
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-10" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Dream Events
            </span>
          </a>
          {/* user jodi theke tahole eita ar na thakle hidden*/}
          <div className="flex items-center md:order-2 space-x-3 md:space-x-0">
            
            {
              user ? 
              <div className="flex items-center gap-x-2">
              <div>
                <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                  {user?.displayName}
                </h1>

                <p className="text-base text-gray-500 dark:text-gray-400">
                  {user?.email}
                </p>
              </div>
              <img
                className="object-cover w-16 h-16 rounded-lg"
                src={user.user ? loading : user?.photoURL}
                alt=""
              />
              <span>
              <button onClick={signOut} className="mx-5 my-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Logout</button>
              </span>
            </div>
               
              :
              <Link to='/login'>
            <button onClick={signOut} className="mx-5 my-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Login</button>
            </Link>

            }
            
            
          </div>
         
          {/* ar na thakle Log In Button */}

          <div className="items-center lg:justify-between w-full md:flex md:w-auto md:order-1">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "underline text-blue-600 underline-offset-4"
                      : ""
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/pricing"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "underline text-blue-600 underline-offset-4"
                      : ""
                  }
                >
                  Pricing
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/getQuote"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "underline text-blue-600 underline-offset-4"
                      : ""
                  }
                >
                  Get-Quote
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/register"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "underline text-blue-600 underline-offset-4"
                      : ""
                  }
                >
                  Register
                </NavLink>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
