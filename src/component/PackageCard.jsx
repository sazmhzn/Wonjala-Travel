import "./PackageCard.css";
import { FaMapLocation } from "react-icons/fa6";

import { Link } from "react-router-dom";

export const PackageCard = (props) => {
  return (
    <div className="card module flex flex-col">
      <div className="img flex-1 h-1/2 bg-red-900">
        <img src={props.img} className="min-h-1/2" id="placeimg" alt={props.placeName}/>
      </div>
      <div className="cont font-medium text-sm font-[Montserrat]">
        <div className="name flex gap-2 text-blue-600 font-semibold">
          <FaMapLocation /> {props.placeName}
        </div>
        <p className="mb-3 font-normal text-gray-700 ">
        Surrounded by scenic beauty and attractive tourist attractions we make it convenient for you to visit all the beautiful places with our inhouse guide. We can also help you arrange transport facilities for an easier commute to nearby places.

        </p>
        <div className="price text-sm text-gray-800">{props.price}</div>
        <div className="go-btn">
          <Link to={`/locations/${props.location}`}>
            <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-sm hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 0">
              View plans
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
