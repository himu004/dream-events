import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo-bg-white.jpeg";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser, signUpWithGoogle } = useContext(AuthContext);

  const [showError, setShowError] = useState("");
  const [showSuccess, setShowSuccess] = useState("");

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    console.log(email, password);

    if (password.length < 6) {
      Swal.fire({
        title: "Ops Sorry",
        text: "Password Should be at least 6 characters",
        icon: "error",
      });
      setShowError();
      return;
    }
    // Regular Expression
    else if (!/[A-Z]/.test(password)) {
      Swal.fire({
        title: "Ops Sorry",
        text: "Password Should Contain Atleast One Uppercase Character",
        icon: "error",
      });
      setShowError();
      return;
    }

    // reset success message
    setShowSuccess("");
    // reset error message
    setShowError("");

    createUser(email, password)
      .then((result) => {
        // console.log(result.user);
        result.user.displayName = name;
        result.user.email = email;
        result.user.photoURL = photo;
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        });
        navigate("/");

        if (result.user) {
          Swal.fire({
            title: "Welcome",
            text: "Account Created Successfully",
            icon: "success",
          });
          setShowSuccess();
        }
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        if (error.message) {
          Swal.fire({
            title: "We Are, Sorry",
            text: "The Account Already Exists",
            icon: "error",
          });
          setShowError();
        }
      });
  };

  const hangleGoogle = () => {
    signUpWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        if (user) {
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <section className="bg-white dark:bg-gray-900 min-h-screen">
        <div className="container flex items-center justify-center  px-6 mx-auto">
          <form onSubmit={handleRegister} className="w-full max-w-md">
            <img className="w-auto h-20" src={logo} alt="" />

            <h1 className="mt-2 text-2xl font-semibold text-gray-800 capitalize sm:text-3xl dark:text-white">
              Register
            </h1>

            <div className="relative flex items-center mt-8">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </span>

              <input
                type="text"
                name="name"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Username"
              />
            </div>

            <div className="relative flex items-center mt-8">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
              </span>

              <input
                type="text"
                name="photo"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Photo URL"
              />
            </div>

            <div className="relative flex items-center mt-8">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>

              <input
                type="email"
                name="email"
                required
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Email address"
              />
            </div>

            <div className="relative flex items-center mt-4">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </span>

              <input
                type="password"
                name="password"
                required
                className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Password"
              />
            </div>

            <div className="mt-6">
              <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                Register
              </button>

              <p className="mt-4 text-center text-gray-600 dark:text-gray-400">
                or register in with
              </p>
            </div>
          </form>
        </div>
        <div className="mt-4 flex justify-center gap-3 ">
          <FcGoogle onClick={hangleGoogle} className="text-4xl" />
        </div>
        <div className="mt-6 text-center ">
          <Link
            to="/login"
            className="text-sm text-blue-500 hover:underline dark:text-blue-400"
          >
            Already Have A Account? Sign in
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Register;
