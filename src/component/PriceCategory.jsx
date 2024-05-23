import { useState } from "react";
import RangeSlider from "./RangeSlider";
import CustomeInput from "../component/CustomeInput";


const PriceCategory = () => {

  const [price, setPrice] = useState(50);

  const handlePriceChange = (newPrice) => {
    setPrice(newPrice);
  };
  return (
    <div className=" border-r-2 flex-col justify-start items-start gap-8 inline-flex">
      <div className="text-neutral-900 text-xl font-semibold font-['Montserrat']">
        Filters
      </div>
      <div className="flex-col justify-start items-start gap-4 flex">
        
        <div className="self-stretch justify-between items-start inline-flex">
          <div className="text-neutral-900 text-base font-semibold font-['Montserrat']">
              
            <RangeSlider min={50} max={1000} onChange={handlePriceChange } />
          </div>
          <div className="w-6 h-6 px-[5.25px] pt-[9px] pb-[8.25px] origin-top-left rotate-180 justify-center items-center flex"></div>
        </div>
      
      </div>
      <div className="w-[343px] h-[0.50px] opacity-25 bg-neutral-900"></div>

      
      <div className="w-[343px] h-[0.50px] opacity-25 bg-neutral-900"></div>

      <div className="self-stretch h-48 flex-col justify-start items-start gap-4 flex">
        <div className="self-stretch justify-between items-start inline-flex">
          <div className="text-neutral-900 text-base font-semibold font-['Montserrat']">
            Freebies
          </div>
          <div className="w-6 h-6 px-[5.25px] pt-[9px] pb-[8.25px] origin-top-left rotate-180 justify-center items-center flex"></div>
        </div>
        <div className="self-stretch h-[152px] flex-col justify-start items-start gap-2 flex">
          <div className="self-stretch justify-start items-center gap-2 inline-flex">
            <div className="w-6 h-6 p-[3px] justify-center items-center flex">
            <CustomeInput type={"checkbox"} />
            </div>
            
            <div className="text-neutral-900 text-sm font-medium font-['Montserrat']">
              Free breakfast
            </div>
          </div>
          <div className="self-stretch justify-start items-center gap-2 inline-flex">
            <div className="w-6 h-6 p-[3px] justify-center items-center flex">
            <CustomeInput type={"checkbox"} />
            </div>
            <div className="text-neutral-900 text-sm font-medium font-['Montserrat']">
              Free parking
            </div>
          </div>
          <div className="self-stretch justify-start items-center gap-2 inline-flex">
            <div className="w-6 h-6 p-[3px] justify-center items-center flex">
            <CustomeInput type={"checkbox"} />
            </div>
            <div className="text-neutral-900 text-sm font-medium font-['Montserrat']">
              Free internet
            </div>
          </div>
          <div className="self-stretch justify-start items-center gap-2 inline-flex">
            <div className="w-6 h-6 p-[3px] justify-center items-center flex">
              <CustomeInput type={"checkbox"} />
            </div>
            <div className="text-neutral-900 text-sm font-medium font-['Montserrat']">
              Free airport shuttle
            </div>
          </div>
          <div className="self-stretch justify-start items-center gap-2 inline-flex">
            <div className="w-6 h-6 p-[3px] justify-center items-center flex">
              <CustomeInput type={"checkbox"} />
            </div>
            <div className="text-neutral-900 text-sm font-medium font-['Montserrat']">
              Free cancellation
            </div>
          </div>
        </div>
      </div>
      <div className="w-[343px] h-[0.50px] opacity-25 bg-neutral-900"></div>
      <div className="self-stretch h-[185px] flex-col justify-start items-start gap-2 flex">
        <div className="self-stretch h-40 flex-col justify-start items-start gap-4 flex">
          <div className="self-stretch justify-between items-start inline-flex">
            <div className="text-neutral-900 text-base font-semibold font-['Montserrat']">
              Amenities
            </div>
            <div className="w-6 h-6 px-[5.25px] pt-[9px] pb-[8.25px] origin-top-left rotate-180 justify-center items-center flex"></div>
          </div>
          <div className="self-stretch h-[120px] flex-col justify-start items-start gap-2 flex">
            <div className="justify-start items-center gap-2 inline-flex">
              <div className="w-6 h-6 p-[3px] justify-center items-center flex">
                <CustomeInput type={"checkbox"} />
              </div>
              <div className="text-neutral-900 text-sm font-medium font-['Montserrat']">
                24hr front desk
              </div>
            </div>
            <div className="justify-start items-center gap-2 inline-flex">
              <div className="w-6 h-6 p-[3px] justify-center items-center flex">
                <CustomeInput type={"checkbox"} />
              </div>
              <div className="text-neutral-900 text-sm font-medium font-['Montserrat']">
                Air-conditioned
              </div>
            </div>
            <div className="justify-start items-center gap-2 inline-flex">
              <div className="w-6 h-6 p-[3px] justify-center items-center flex">
                <CustomeInput type={"checkbox"} />
              </div>
              <div className="text-neutral-900 text-sm font-medium font-['Montserrat']">
                Fitness
              </div>
            </div>
            <div className="justify-start items-center gap-2 inline-flex">
              <div className="w-6 h-6 p-[3px] justify-center items-center flex">
                <CustomeInput type={"checkbox"} />
              </div>
              <div className="text-neutral-900 text-sm font-medium font-['Montserrat']">
                Pool
              </div>
            </div>
          </div>
        </div>
 
      </div>
    </div>
  );
};

export default PriceCategory;
