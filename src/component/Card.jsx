import { Link } from "react-router-dom";

const Card = ({src}) => {
  return (
    <div className="min-h-60 relative w-100 bg-white border border-gray-200 rounded-lg shadow flex flex-col">
      <div className=" w-full min-h-1/3" >
        <img
          className="rounded-t-lg"
          src={src}
          alt=""
          style={
            {width: "100%"}
          }

        />
      </div>
   
      <div className="p-5">
          <p className="mb-3 font-normal text-gray-700 ">
        Surrounded by scenic beauty and attractive tourist attractions we make it convenient for you to visit all the beautiful places with our inhouse guide. We can also help you arrange transport facilities for an easier commute to nearby places.

        </p>
        <Link
          to={'/'}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-sm hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
        >
          Read more
      
        </Link>
      </div>
    </div>
  );
};

export default Card;
