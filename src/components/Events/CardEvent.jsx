import { Link } from "react-router-dom";
import bg from "../../assets/banner-bg11.jpg";

const CardEvent = ({ event }) => {
    const {id, img, title, short_description, price, venue, location } = event;

  return (
    <div>
      <div className="relative flex w-full h-full flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        
        <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
          <img src={img} alt="image" className="object-cover w-full h-full" />
        </div>
        <div className="p-6">
          <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-pink-500 uppercase">
            {title}
          </h6>
          <h4 className="block mb-2 h-[100px] font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {short_description}
          </h4>
          <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
          {venue}
          <br />
          {location}
          </p>
          <Link to={`/details/${id}`} className="inline-block">
            <button
              className="flex items-center gap-2   font-sans text-xs font-bold text-center text-pink-500 uppercase align-middle transition-all rounded-lg select-none hover:underline"
              type="button"
            >
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                className="w-4 h-4"
              >
                <path d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardEvent;
