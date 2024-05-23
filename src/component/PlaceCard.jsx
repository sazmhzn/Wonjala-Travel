import {
  FaBookmark,
  FaBus,
  FaCalendarCheck,
  FaCalendarDays,
  FaHotel,
  FaPhone,
  FaStar,
  FaUser,
  FaUtensils,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const PlaceCard = () => {
  return (
    <div className="shadow justify-start items-start inline-flex">
      <img
        className="w-[300px] self-stretch rounded-tl-xl rounded-bl-xl"
        src="https://via.placeholder.com/300x298"
      />

      <div className="w-[540px] p-6 bg-white rounded-tr-xl rounded-br-xl flex-col justify-start items-start gap-6 inline-flex">
        <div className="self-stretch justify-start items-start gap-6 inline-flex">
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
            <div className="self-stretch text-neutral-900 text-xl font-bold font-['Montserrat']">
              Park Bosphorus Hotel
            </div>
            <div className="flex-col justify-start items-start gap-3 flex">
              <div className="opacity-75 text-neutral-900 text-sm font-medium font-['Montserrat']">
                Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437
              </div>
              <div className="flex justify-start items-start gap-8">
                <div className="justify-start items-center gap-1 flex">
                  <div className="flex items-center text-neutral-900 text-sm font-medium font-['Montserrat']">
                    <span className=" inline-block p-1">
                      <FaStar />
                    </span>
                    5 Star Hotel
                  </div>
                </div>
                <div className="justify-start items-start gap-1 flex">
                  <span className="text-neutral-900 text-sm font-bold font-['Montserrat']">
                    20+
                  </span>
                  <span className="text-neutral-900 text-sm font-medium font-['Montserrat']">
                    Aminities
                  </span>
                </div>
              </div>
              <div className="justify-start items-center gap-1 inline-flex">
        
                <div className="flex gap-4">
                  <span className="text-blue-700 text-sm font-bold font-['Montserrat']">
                    Very Good
                  </span>
                  <span className="text-neutral-900 text-sm font-medium font-['Montserrat']">
                    {" "}
                    371 reviews
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col justify-start items-end inline-flex">
            <div className="self-stretch opacity-75 text-neutral-900 text-sm font-medium font-['Montserrat']">
              starting from
            </div>

              <span className="text-rose-400 text-2xl font-bold font-['Montserrat']">
                $240 /night     
              </span>
                  
            <div className="opacity-75  text-xs font-medium font-['Montserrat']">
              excl. tax
            </div>
          </div>
        </div>
        <div className="self-stretch h-[0.50px] opacity-25 bg-neutral-900"></div>
        <div className="w-[492px] justify-start items-start gap-4 inline-flex">
          <div className="flex-col justify-start items-start gap-2.5 inline-flex">
            <div className="w-12 h-12 px-4 py-2 rounded border border-blue-300 justify-center items-center gap-1 inline-flex">
              <FaBookmark color="blue"/>
            </div>
          </div>
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex">
            <div className="self-stretch h-12 px-4 py-2 bg-blue-300 rounded justify-center items-center gap-1 inline-flex">
              <Link to={'/booking'} className="text-neutral-900 text-sm font-semibold font-['Montserrat']">
                View Place
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;
