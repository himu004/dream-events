import bg from "../../assets/banner-bg11.jpg";

const Banner = () => {
  return (
    <div>
        <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">
                Looking for someone, for arrange a memorable event for your family or business.
              </h1>
              <p className="mt-4 text-blue-500">
                Here We Are, We Will Arrange Any Kinds of Event You Want
              </p>
              <div className="grid gap-6 mt-8 sm:grid-cols-2">
                <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                  <svg
                    className="w-5 h-5 mx-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>

                  <span className="mx-3">Marriage Ceremony</span>
                </div>

                <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                  <svg
                    className="w-5 h-5 mx-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>

                  <span className="mx-3">Birthday Party</span>
                </div>

                <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                  <svg
                    className="w-5 h-5 mx-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>

                  <span className="mx-3">Business Conference</span>
                </div>

                <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                  <svg
                    className="w-5 h-5 mx-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>

                  <span className="mx-3">Inauguration</span>
                </div>

                <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                  <svg
                    className="w-5 h-5 mx-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>

                  <span className="mx-3">Farewell Party</span>
                </div>

                <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                  <svg
                    className="w-5 h-5 mx-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>

                  <span className="mx-3">Election Campaign</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
            <img className="rounded-lg" src={bg} alt="" />
          </div>
        </div>
        <hr />
    </div>
  );
};

export default Banner;
