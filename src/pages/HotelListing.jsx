import Button from "../component/Button";
import PlaceCard from "../component/PlaceCard";
import PriceCategory from "../component/PriceCategory";

const HotelListing = () => {
  return (
    <div className="pt-6 flex flex-col justify-center min-h-[100vh]">
      <div className="h-[120px] px-6 py-8 mx-auto bg-white rounded-2xl shadow flex-col justify-center items-end gap-8 inline-flex">
        <div className="flex justify-start items-center gap-4">
          <div className="flex-1 h-14 rounded-tl rounded-tr flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-14 bg-white rounded border border-zinc-500 flex-col justify-start items-start gap-2.5 flex">
              <div className="self-stretch pr-4 py-1 rounded-tl rounded-tr justify-start items-center inline-flex">
                <div className="w-12 h-12 flex-col justify-center items-center gap-2.5 inline-flex">
                  <div className="rounded-[100px] justify-center items-center gap-2.5 inline-flex">
                    <div className="p-2 justify-center items-center gap-2.5 flex">
                      <div className="w-6 h-6 px-[1.50px] py-[3.75px] justify-center items-center flex"></div>
                    </div>
                  </div>
                </div>
                <div className="grow shrink basis-0 h-10 flex-col justify-center items-start inline-flex">
                  <div className="px-1 bg-white justify-start items-center inline-flex">
                    <label className="text-zinc-900 text-sm font-normal font-['Montserrat']">
                      Enter Destination
                    </label>
                  </div>
                  <div className="justify-start items-center inline-flex">
                    <input
                      type="text"
                      placeholder="Istanbul, Turkey"
                      className="text-zinc-900 text-base outline-none font-normal font-['Montserrat']"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 h-14 rounded-tl rounded-tr flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-14 bg-white rounded border border-zinc-500 flex-col justify-start items-start gap-2.5 flex">
              <div className="self-stretch pl-4 py-1 rounded-tl rounded-tr justify-start items-center inline-flex">
                <div className="grow shrink basis-0 h-10 flex-col justify-center items-start inline-flex">
                  <div className="px-1 bg-white justify-start items-center inline-flex">
                    <label className="text-neutral-900 text-sm font-normal font-['Montserrat']">
                      Check In
                    </label>
                  </div>
                  <div className="justify-start items-center inline-flex">
                    <input
                      type="date"
                      placeholder="Fri 12/2"
                      className="text-zinc-900 text-base font-normal font-['Montserrat']"
                    />
                  </div>
                </div>
                <div className="w-12 h-12 p-3 flex-col justify-center items-center gap-2.5 inline-flex">
                  <div className="w-6 h-6 p-[3px] justify-center items-center inline-flex"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 h-14 rounded-tl rounded-tr flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-14 bg-white rounded border border-zinc-500 flex-col justify-start items-start gap-2.5 flex">
              <div className="self-stretch pl-4 py-1 rounded-tl rounded-tr justify-start items-center inline-flex">
                <div className="grow shrink basis-0 h-10 flex-col justify-center items-start inline-flex">
                  <div className="px-1 bg-white justify-start items-center inline-flex">
                    <label className="text-neutral-900 text-sm font-normal font-['Montserrat']">
                      Check Out
                    </label>
                  </div>
                  <div className="justify-start items-center inline-flex">
                    <input
                      type="date"
                      placeholder="Fri 12/2"
                      className="text-zinc-900 text-base font-normal font-['Montserrat']"
                    />
                  </div>
                </div>
                <div className="w-12 h-12 p-3 flex-col justify-center items-center gap-2.5 inline-flex">
                  <div className="w-6 h-6 p-[3px] justify-center items-center inline-flex"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="flex justify-center items-center gap-1 inline-flex">
              <Button type={"submit"} value={"search"} />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="w-[0.50px] h-[1420px] left-[471px] top-[287px] absolute opacity-25 bg-neutral-900"></div> */}
      <div className="flex outline-red-300 w-full min-h-[100vh] p-12">
        <div> </div>
        <PriceCategory />

        <div className="w-[100%] px-8 flex flex-col gap-4 items-center justify-start">
          <div className="w-full px-6 py-4 rounded-xl shadow justify-center items-center gap-6 flex">
            <div className="flex-1 flex-col justify-center items-center gap-2 inline-flex">
              <div className="justify-start items-start gap-2 inline-flex">
                <div className="text-blue-700 text-base font-semibold font-['Montserrat']">
                  Hotels
                </div>
              </div>
              <div className=" text-neutral-900 text-center text-sm font-semibold font-['Montserrat']">
                257 places
              </div>
            </div>
            <div className="flex-1 flex-col justify-center items-center gap-2 inline-flex">
              <div className="justify-start items-start gap-2 inline-flex">
                <div className="text-blue-700 text-base text-center font-semibold font-['Montserrat']">
                  Motels
                </div>
              </div>
              <div className=" text-neutral-900 text-center text-sm font-semibold font-['Montserrat']">
                51 places
              </div>
            </div>
            <div className="flex-1 flex-col justify-center items-center gap-1 inline-flex">
              <div className="justify-start items-start gap-2 inline-flex">
                <div className="text-blue-700 text-base font-semibold font-['Montserrat']">
                  Resorts
                </div>
              </div>
              <div className=" text-neutral-900 text-center text-sm font-semibold font-['Montserrat']">
                72 places
              </div>
            </div>
          </div>

          <div className="flex w-full items-center justify-between">
            <div>
              <span className="text-neutral-900 text-sm font-semibold font-['Montserrat']">
                Showing 4 of{" "}
              </span>
              <span className="text-rose-400 text-sm font-semibold font-['Montserrat']">
                257 places
              </span>
            </div>
            <div className="justify-start items-start gap-1 flex">
              <div className="text-right">
                <span className="text-neutral-900 text-sm font-normal font-['Montserrat']">
                  Sort by
                </span>
                <span className="text-neutral-900 text-sm font-semibold font-['Montserrat']">
                  {" "}
                  Recommended
                </span>
              </div>
              <div className="w-[18px] h-[18px] px-[3.94px] pt-[6.75px] pb-[6.19px] justify-center items-center flex"></div>
            </div>
          </div>



          <div className="flex-col justify-start items-start gap-6 flex">
            <PlaceCard />
            <PlaceCard />
            <PlaceCard />
         
          </div>

        </div>
      </div>

      {/* <div className="w-[1440px] h-[573px] left-0 top-[1915px] absolute rounded-[30px] shadow flex-col justify-end items-center gap-32 inline-flex">
        <div className="w-[1440px] px-[104px] pt-8 pb-16 bg-green-300 flex-col justify-end items-center gap-16 flex">
          <div className="w-[1232px] px-6 bg-emerald-100 rounded-[20px] shadow justify-between items-end inline-flex">
            <div className="self-stretch py-6 flex-col justify-between items-start inline-flex">
              <div className="w-[364px] text-neutral-900 text-[44px] font-bold font-['TradeGothic LT Extended'] leading-[54px]">
                Subscribe Newsletter
              </div>
              <div className="flex-col justify-start items-start gap-4 flex">
                <div className="flex-col justify-start items-start gap-2 flex">
                  <div className="opacity-80 text-neutral-900 text-xl font-bold font-['TradeGothic LT Extended']">
                    The Travel
                  </div>
                  <div className="opacity-70 text-neutral-900 text-base font-medium font-['Montserrat']">
                    Get inspired! Receive travel discounts, tips and behind the
                    scenes stories.
                  </div>
                </div>
                <div className="w-[593px] justify-start items-center gap-4 inline-flex">
                  <div className="grow shrink basis-0 h-14 rounded-tl rounded-tr flex-col justify-start items-start inline-flex">
                    <div className="self-stretch h-14 bg-white rounded flex-col justify-start items-start gap-2.5 flex">
                      <div className="self-stretch pl-4 py-2 rounded-tl rounded-tr justify-start items-center inline-flex">
                        <div className="grow shrink basis-0 h-10 flex-col justify-center items-start inline-flex">
                          <div className="bg-white justify-start items-center inline-flex">
                            <div className="text-zinc-900 text-base font-normal font-['Montserrat']">
                              Your email address
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex-col justify-start items-start gap-2.5 inline-flex">
                    <div className="self-stretch grow shrink basis-0 px-4 py-2 bg-neutral-900 rounded justify-center items-center gap-1 inline-flex">
                      <div className="text-white text-sm font-semibold font-['Montserrat']">
                        Subscribe
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[400px] h-[305px] relative">
              <div className="w-[84.69px] h-[259.41px] left-[156px] top-[117.35px] absolute"></div>
              <div className="w-[361.29px] h-[191.16px] left-0 top-[47px] absolute"></div>
            </div>
          </div>
          <div className="w-[1232px] justify-start items-start gap-[140px] inline-flex">
            <div className="flex-col justify-start items-start gap-6 inline-flex">
              <div className="w-[120px] h-[39.15px] justify-center items-center inline-flex">
                <div className="w-[120px] h-[39.15px] relative">
                  <img
                    className="w-[19.91px] h-5 left-[24.31px] top-[7.62px] absolute"
                    src="https://via.placeholder.com/20x20"
                  />
                </div>
              </div>
              <div className="justify-start items-start gap-3 inline-flex">
                <div className="w-5 h-5 px-px pt-[0.85px] pb-[1.15px] justify-center items-center flex"></div>
                <div className="w-5 h-5 pl-[0.78px] pr-[0.30px] pt-[2.29px] pb-[2.33px] justify-center items-center flex"></div>
                <div className="w-5 h-5 py-[3.33px] justify-center items-center flex"></div>
                <div className="w-5 h-5 pl-px pr-0.5 pt-[1.85px] pb-[1.15px] justify-center items-center flex"></div>
              </div>
            </div>
            <div className="grow shrink basis-0 h-[140px] justify-end items-start gap-6 flex">
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
                <div className="text-neutral-900 text-base font-bold font-['TradeGothic LT Extended']">
                  Our Destinations
                </div>
                <div className="flex-col justify-start items-start gap-3 flex">
                  <div className="w-[175.20px] opacity-70 text-neutral-900 text-sm font-medium font-['Montserrat']">
                    Canada
                  </div>
                  <div className="w-[175.20px] opacity-70 text-neutral-900 text-sm font-medium font-['Montserrat']">
                    Alaksa
                  </div>
                  <div className="w-[175.20px] opacity-70 text-neutral-900 text-sm font-medium font-['Montserrat']">
                    France
                  </div>
                  <div className="w-[175.20px] opacity-70 text-neutral-900 text-sm font-medium font-['Montserrat']">
                    Iceland
                  </div>
                </div>
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
                <div className="text-neutral-900 text-base font-bold font-['TradeGothic LT Extended']">
                  Our Activities
                </div>
                <div className="flex-col justify-start items-start gap-3 flex">
                  <div className="w-[175.20px] opacity-70 text-neutral-900 text-sm font-medium font-['Montserrat']">
                    Northern Lights
                  </div>
                  <div className="w-[175.20px] opacity-70 text-neutral-900 text-sm font-medium font-['Montserrat']">
                    Cruising & sailing
                  </div>
                  <div className="w-[175.20px] opacity-70 text-neutral-900 text-sm font-medium font-['Montserrat']">
                    Multi-activities
                  </div>
                  <div className="w-[175.20px] opacity-70 text-neutral-900 text-sm font-medium font-['Montserrat']">
                    Kayaing
                  </div>
                </div>
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
                <div className="text-neutral-900 text-base font-bold font-['TradeGothic LT Extended']">
                  Travel Blogs
                </div>
                <div className="flex-col justify-start items-start gap-3 flex">
                  <div className="w-[175.20px] opacity-70 text-neutral-900 text-sm font-medium font-['Montserrat']">
                    Bali Travel Guide
                  </div>
                  <div className="w-[175.20px] opacity-70 text-neutral-900 text-sm font-medium font-['Montserrat']">
                    Sri Lanks Travel Guide
                  </div>
                  <div className="w-[175.20px] opacity-70 text-neutral-900 text-sm font-medium font-['Montserrat']">
                    Peru Travel Guide
                  </div>
                  <div className="w-[175.20px] opacity-70 text-neutral-900 text-sm font-medium font-['Montserrat']">
                    Bali Travel Guide
                  </div>
                </div>
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
                <div className="text-neutral-900 text-base font-bold font-['TradeGothic LT Extended']">
                  About Us
                </div>
                <div className="flex-col justify-start items-start gap-3 flex">
                  <div className="w-[175.20px] opacity-70 text-neutral-900 text-sm font-medium font-['Montserrat']">
                    Our Story
                  </div>
                  <div className="w-[175.20px] opacity-70 text-neutral-900 text-sm font-medium font-['Montserrat']">
                    Work with us
                  </div>
                </div>
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
                <div className="text-neutral-900 text-base font-bold font-['TradeGothic LT Extended']">
                  Contact Us
                </div>
                <div className="flex-col justify-start items-start gap-3 flex">
                  <div className="w-[175.20px] opacity-70 text-neutral-900 text-sm font-medium font-['Montserrat']">
                    Our Story
                  </div>
                  <div className="w-[175.20px] opacity-70 text-neutral-900 text-sm font-medium font-['Montserrat']">
                    Work with us
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default HotelListing;
