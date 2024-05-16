// import PhotoCarousal from "../component/PhotoCarousal";
import { FaBus, FaCalendarCheck, FaCalendarDays, FaHotel, FaPhone, FaStar, FaUser, FaUtensils } from "react-icons/fa6";
import "./Booking.css";
import { FaRegHeart } from "react-icons/fa";
import PhotoCarousal from "../component/PhotoCarousal";
import { MdHeight } from "react-icons/md";


const Booking = () => {
  return (
    <>
      <div className="tour container">
        <div className="tour-head">
          <div className="tour-head-left">
            <div className="tour-title">
              Best of Turkey: Istanbul, Fethiye, Cappadocia
            </div>
            <div className="tour-overview">
              <div className="tour-overview-item">
                Start and end in <span>Istanbul</span>
              </div>
              <div className="tour-overview-item">
                <span>9</span> days
              </div>
              <div className="tour-overview-item flex items-center justify-center bg-red">
                <span className="material-icons-outlined inline-block p-1"> <FaStar /> </span>
                <span>4.7</span> (55 reviews)
              </div>
            </div>
          </div>
        </div>
        {/* tour head */}
        <div className="tour-wrapper">
          <div className="tour-content">
            <div className="tour-hero">
              <div className="tour-image" />
            </div>
            {/* tour hero */}
            <div className="tour-content-block">
              <div className="tour-description">
                Discover the ancient wonders of Turkey in our 12 day Best of
                Turkey by Land tour. Embrace the culture and history of Istanbul
                & Gallipoli, ride through the magnificent Aegean Coast and
                in-land wonders of Anatolia. Start your tour exploring the
                magnificent museums and mosques of Istanbul and then travel
                south along the Aegean Coast, capturing wonderful visions of
                ancient cities. After, we'll head inland to experience the
                incredible natural marvels of fairy chimney formations in
                Cappadocia...
              </div>
            </div>
            {/* block */}
            <div className="tour-content-block">
              <div className="tour-content-title">Places You’ll See</div>
              <div className="tour-places">
                <div className="swiper">
                  <div className="swiper-wrapper flex gap-4">
                    <div className="swiper-slide ">
                      <div className="swiper-image">
                        <img
                          src="https://tailwind-css-travel-booking.vercel.app/dist/images/tour-istanbul.jpeg"
                          alt="image"
                        />
                      </div>
                      <div className="swiper-title">Istanbul</div>
                    </div>
                    <div className="swiper-slide">
                      <div className="swiper-image">
                        <img
                          src="https://tailwind-css-travel-booking.vercel.app/dist/images/tour-gallipoli.jpeg"
                          alt="image"
                        />
                      </div>
                      <div className="swiper-title">Gallipoli</div>
                    </div>
                    <div className="swiper-slide">
                      <div className="swiper-image">
                        <img
                          src="https://tailwind-css-travel-booking.vercel.app/dist/images/tour-troy.jpeg"
                          alt="image"
                        />
                      </div>
                      <div className="swiper-title">Troy</div>
                    </div>
                  
                  </div>
                                 
                </div>
              </div> 

               {/* <div
                id="default-carousel"
                className="relative w-full"
                data-carousel="slide"
              >
                <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                  <div
                    className="hidden duration-700 ease-in-out"
                    data-carousel-item
                  >
                    1
                  </div>
                  <div
                    className="hidden duration-700 ease-in-out"
                    data-carousel-item
                  >
                    2
                  </div>
                </div>

                <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                  <button
                    type="button"
                    className="w-3 h-3 rounded-full"
                    aria-current="true"
                    aria-label="Slide 1"
                    data-carousel-slide-to="0"
                  />
                  <button
                    type="button"
                    className="w-3 h-3 rounded-full"
                    aria-current="false"
                    aria-label="Slide 2"
                    data-carousel-slide-to="1"
                  />
                  <button
                    type="button"
                    className="w-3 h-3 rounded-full"
                    aria-current="false"
                    aria-label="Slide 3"
                    data-carousel-slide-to="2"
                  />
                  <button
                    type="button"
                    className="w-3 h-3 rounded-full"
                    aria-current="false"
                    aria-label="Slide 4"
                    data-carousel-slide-to="3"
                  />
                  <button
                    type="button"
                    className="w-3 h-3 rounded-full"
                    aria-current="false"
                    aria-label="Slide 5"
                    data-carousel-slide-to="4"
                  />
                </div>

                <button
                  type="button"
                  className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                  data-carousel-prev
                >
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                      className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 1 1 5l4 4"
                      />
                    </svg>
                    <span className="sr-only">Previous</span>
                  </span>
                </button>

                <button
                  type="button"
                  className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                  data-carousel-next
                >
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                      className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                    <span className="sr-only">Next</span>
                  </span>
                </button>
              </div>

              {/* <PhotoCarousal />  */}
            </div>
            {/* block */}
            <div className="tour-content-block">
              <div className="tour-content-title mb-8">Itinerary</div>
              <div className="tour-itinerary">
                <div className="accordion">
                  
                  <div className="accordion-panel accordion-introduction active">
                    <div className="accordion-trigger">Introduction 
                    <span>
                    <i className="bi bi-1-circle-fill" />
                    </span>
                    +
                    </div>
                    <div className="accordion-content">
                      <p>
                        Start and end in Istanbul! With the Explorer tour Best
                        of Turkey by Land, you have a 9 days tour package taking
                        you through Istanbul, Turkey and 11 other destinations
                        in Turkey. Best of Turkey by Land includes accommodation
                        in a hotel as well as an expert guide, meals, transport
                        and more.
                      </p>
                    </div>
                  </div>
                  {/* item */}
                  <div className="accordion-panel accordion-start">
                    <div className="accordion-trigger">
                      <span>Day 1:</span> Istanbul
                    </div>
                    <div className="accordion-content">
                      <p>
                        Istanbul, formerly known as Constantinople, is the
                        largest city in Turkey, serving as the countrys
                        economic, cultural and historic hub. The city straddles
                        the Bosporus strait, lying in both Europe and Asia, and
                        has a population of over 15 million residents,
                        comprising 19% of the population of Turkey. Istanbul is
                        the most populous European city, and the worlds
                        15th-largest city.
                      </p>
                      <p>
                        The city was founded as Byzantium (Byzantion) in the 7th
                        century BC by Greek settlers from Megara. In 330 CE, the
                        Roman emperor Constantine the Great made it his imperial
                        capital, renaming it first as New Rome (Nova Roma)and
                        then as Constantinople (Constantinopolis) after himself.
                        The city grew in size and influence, eventually becoming
                        a beacon of the Silk Road and one of the most important
                        cities in history.
                      </p>
                    </div>
                  </div>
                  {/* item */}
                  <div className="accordion-panel">
                    <div className="accordion-trigger">
                      <span>Day 2:</span> Gallipoli
                    </div>
                    <div className="accordion-content">
                      <p>
                        The Gallipoli peninsula is located in the southern part
                        of East Thrace, the European part of Turkey, with the
                        Aegean Sea to the west and the Dardanelles strait to the
                        east.
                      </p>
                      <p>
                        Gallipoli is the Italian form of the Greek name
                        Καλλίπολις (Kallípolis), meaning 'beautiful city', the
                        original name of the modern town of Gelibolu. In
                        antiquity, the peninsula was known as the Thracian
                        Chersonese.
                      </p>
                    </div>
                  </div>
                  {/* item */}
                  <div className="accordion-panel">
                    <div className="accordion-trigger">
                      <span>Day 3:</span> Troy
                    </div>
                    <div className="accordion-content">
                      <p>
                        Troy or Ilium was an ancient city located at Hisarlik in
                        present-day Turkey, 30 kilometres (19 mi) south-west of
                        Çanakkale. It is known as the setting for the Greek myth
                        of the Trojan War.
                      </p>
                      <p>
                        In Ancient Greek literature, Troy is portrayed as a
                        powerful kingdom of the Heroic Age, a mythic era when
                        monsters roamed the earth and gods interacted directly
                        with humans. The city was said to have ruled the Troad
                        until the Trojan War led to its complete destruction at
                        the hands of the Greeks. The story of its destruction
                        was one of the cornerstones of Greek mythology and
                        literature, featuring prominently in the Iliad and the
                        Odyssey, as well as numerous other poems and plays. Its
                        legacy played a large role in Greek society, with many
                        prominent families claiming descent from those who had
                        fought there. In the Archaic era, a new city was built
                        at the site where legendary Troy was believed to have
                        stood. In the Classical era, this city became a tourist
                        destination, where visitors would leave offerings to the
                        legendary heroes.
                      </p>
                    </div>
                  </div>
                  {/* item */}
                  <div className="accordion-panel">
                    <div className="accordion-trigger">
                      <span>Day 4:</span> Kusadasi
                    </div>
                    <div className="accordion-content">
                      <p>
                        Kuşadas is a large resort town on Turkey's Aegean
                        coast, and the center of the seaside district of the
                        same name within Aydn Province. Kuşadas is 95 km (59
                        mi) south of İzmir, and about 60 km (37 mi) from Aydn.
                        The municipality's primary industry is tourism. The
                        mayor of the district is Oğuzhan Turan.
                      </p>
                    </div>
                  </div>
                  {/* item */}
                  <div className="accordion-panel">
                    <div className="accordion-trigger">
                      <span>Day 5:</span> Fethiye
                    </div>
                    <div className="accordion-content">
                      <p>
                        Fethiye, formerly Makri (Greek: Μάκρη), is a city and
                        district of Muğla Province in the Aegean Region of
                        Turkey. It is one of the prominent tourist destinations
                        in the Turkish Riviera. In 2019 its population was
                        162,686.
                      </p>
                    </div>
                  </div>
                  {/* item */}
                  <div className="accordion-panel">
                    <div className="accordion-trigger">
                      <span>Day 6:</span> Oludeniz
                    </div>
                    <div className="accordion-content">
                      <p>
                        Ölüdeniz is a small neighbourhood and beach resort in
                        the Fethiye district of Muğla Province, on the Turquoise
                        Coast of southwestern Turkey, at the conjunction point
                        of the Aegean and Mediterranean sea. It is located 14 km
                        (9 mi) to the south of Fethiye, near Mount Babadağ.
                      </p>
                    </div>
                  </div>
                  {/* item */}
                  <div className="accordion-panel">
                    <div className="accordion-trigger">
                      <span>Day 7:</span> Dalyan
                    </div>
                    <div className="accordion-content">
                      <p>
                        Dalyan is a town in Muğla Province located between the
                        districts of Marmaris and Fethiye on the south-west
                        coast of Turkey. The town is an independent
                        municipality, within the administrative district of
                        Ortaca.
                      </p>
                      <p>
                        Dalyan achieved international fame in 1987 when
                        developers wanted to build a luxury hotel on the nearby
                        İztuzu Beach, a breeding ground for the endangered
                        loggerhead sea turtle species. The incident created
                        major international storm when David Bellamy championed
                        the cause of conservationists such as June Haimoff,
                        Peter Günther, Nergis Yazgan, Lily Venizelos and Keith
                        Corbett. The development project was temporarily stopped
                        after Prince Philip called for a moratorium and in 1988
                        the beach and its hinterland were declared a protected
                        area, viz. Köyceğiz-Dalyan Special Environmental
                        Protection Area.
                      </p>
                      <p>
                        Life in Dalyan revolves around the Dalyan Çayı River
                        which flows past the town. The boats that ply up and
                        down the river, navigating the maze of reeds, are the
                        preferred means of transport to local sites.
                      </p>
                    </div>
                  </div>
                  {/* item */}
                  <div className="accordion-panel">
                    <div className="accordion-trigger">
                      <span>Day 8:</span> Cappadocia
                    </div>
                    <div className="accordion-content">
                      <p>
                        Cappadocia is a historical region in Central Anatolia,
                        largely in the Nevşehir, Kayseri, Aksaray, Kırşehir,
                        Sivas and Niğde provinces in Turkey.
                      </p>
                      <p>
                        Since the late 300s BC the name Cappadocia came to be
                        restricted to the inland province (sometimes called
                        Great Cappadocia), Upper Cappadocia, which alone will be
                        the focus of this article. Lower Cappadocia is focused
                        to elsewhere.
                      </p>
                      <p>
                        According to Herodotus, in the time of the Ionian Revolt
                        (499 BC), the Cappadocians were reported as occupying a
                        region from Mount Taurus to the vicinity of the Euxine
                        (Black Sea). Cappadocia, in this sense, was bounded in
                        the south by the chain of the Taurus Mountains that
                        separate it from Cilicia, to the east by the upper
                        Euphrates, to the north by Pontus, and to the west by
                        Lycaonia and eastern Galatia.
                      </p>
                    </div>
                  </div>
                  {/* item */}
                  <div className="accordion-panel">
                    <div className="accordion-trigger">
                      <span>Day 9:</span> Istanbul
                    </div>
                    <div className="accordion-content">
                      <p>
                        Our trip will end after we say goodbye to our new
                        friends over breakfast, bid you safe travels, and
                        check-out of the hotel.
                      </p>
                    </div>
                  </div>
                  {/* item */}
                </div>
              </div>
            </div>
            {/* block */}
            <div className="tour-content-block">
              <div className="tour-content-title">Customer Reviews</div>
              <div className="tour-reviews">
                <div className="tour-reviews-feedback">
                  <div className="tour-reviews-feedback-item">
                    <div className="tour-reviews-feedback-content">
                      <div className="tour-reviews-feedback-icon h-[32px] pr-4">
                        <span className="material-icons-outlined ">
                          <FaUtensils style={ {width: "auto", height: "24px"} }  />
                        </span>
                      </div>
                      <div className="tour-reviews-feedback-content-inner">
                        <div className="tour-reviews-feedback-title">
                          Itinerary
                        </div>
                        <div className="tour-reviews-feedback-text">
                          Excellent
                        </div>
                      </div>
                    </div>
                    <div className="tour-reviews-feedback-rating">4.8</div>
                  </div>
                
                  <div className="tour-reviews-feedback-item">
                    <div className="tour-reviews-feedback-content">
                      <div className="tour-reviews-feedback-icon h-[32px] pr-4">
                        <span className="material-icons-outlined">
                          <FaBus style={ {width: "auto", height: "24px"} } />
                        </span>
                      </div>
                      <div className="tour-reviews-feedback-content-inner">
                        <div className="tour-reviews-feedback-title">
                          Transport
                        </div>
                        <div className="tour-reviews-feedback-text">
                          Excellent
                        </div>
                      </div>
                    </div>
                    <div className="tour-reviews-feedback-rating">4.9</div>
                  </div>
                  <div className="tour-reviews-feedback-item">
                    <div className="flex  tour-reviews-feedback-content">
                      <div className="tour-reviews-feedback-icon h-[32px] pr-4">
                        <span className="material-icons-outlined">
                          <FaHotel style={ {width: "auto", height: "24px"} } />
                        </span>
                      </div>
                      <div className="tour-reviews-feedback-content-inner">
                        <div className="tour-reviews-feedback-title">
                          Accommodation
                        </div>
                        <div className="tour-reviews-feedback-text">
                          Excellent
                        </div>
                      </div>
                    </div>
                    <div className="tour-reviews-feedback-rating">4.5</div>
                  </div>
                 
                  <div className="tour-reviews-feedback-item">
                    <div className="tour-reviews-feedback-content">
                      <div className="tour-reviews-feedback-icon h-[32px] pr-4">
                        <span className="material-icons-outlined">
                          <FaPhone style={ {width: "auto", height: "24px"} }  />
                        </span>
                      </div>
                      <div className="tour-reviews-feedback-content-inner">
                        <div className="tour-reviews-feedback-title">
                          Tour Operator
                        </div>
                        <div className="tour-reviews-feedback-text">
                          Travel Walk
                        </div>
                      </div>
                    </div>
                    <div className="tour-reviews-feedback-rating">4.5</div>
                  </div>
                </div>
                <div className="tour-reviews-overall">
                  <div className="tour-reviews-content">
                    <div className="tour-reviews-overall-title">
                      Overall Rating
                    </div>
                    <div className="tour-reviews-overall-text">Excellent</div>
                    <div className="tour-reviews-overall-rating">4.7</div>
                  </div>
                </div>
              </div>
            </div>
            {/* block */}
            <div className="tour-content-block">
              <div className="tour-help">
                <div className="tour-help-inner">
                  <div className="tour-help-content">
                    <div className="tour-help-title">Need Help Booking?</div>
                    <div className="tour-help-text">
                      Call our customer services team on the number below to
                      speak to one of our advisors who will help you with all of
                      your holiday needs.
                    </div>
                  </div>
                  <div className="tour-help-call">
                    <span className="material-icons-outlined"> call </span>
                    <div className="tour-help-call-text">+90 362 555 1919</div>
                  </div>
                </div>
              </div>
            </div>
            {/* block */}
          </div>
          {/* content */}
          <div className="tour-sidebar">
            <div className="tour-receipt">
              <div className="tour-receipt-head">
                <div className="tour-amount">
                  <span className="tour-amount-old">$119</span> $109
                  <span>/night</span>
                </div>
                <div className="tour-discount">-10%</div>
              </div>
              <div className="tour-receipt-select">
                <div className="tour-receipt-select-top">
                  <div className="tour-receipt-select-item">
                    <div className="tour-receipt-select-icon">
                      <span className="material-icons-outlined">
                      <FaCalendarDays />
                      </span>
                    </div>
                    <div className="tour-receipt-select-content">
                      <div className="tour-receipt-select-title">07 May</div>
                      <div className="tour-receipt-select-text">Check in</div>
                    </div>
                  </div>
                  <div className="tour-receipt-select-item">
                    <div className="tour-receipt-select-icon">
                      <span className="material-icons-outlined">
                      <FaCalendarCheck />
                      </span>
                    </div>
                    <div className="tour-receipt-select-content">
                      <div className="tour-receipt-select-title">16 May</div>
                      <div className="tour-receipt-select-text">Check out</div>
                    </div>
                  </div>
                </div>
                <div className="tour-receipt-select-bottom">
                  <div className="tour-receipt-select-item">
                    <div className="tour-receipt-select-icon">
                      <span className="material-icons-outlined">
                      <FaUser />
                      </span>
                    </div>
                    <div className="tour-receipt-select-content">
                      <div className="tour-receipt-select-title">3 Guests</div>
                      <div className="tour-receipt-select-text">Guests</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tour-receipt-detail">
                <div className="tour-receipt-detail-item">
                  <div className="tour-receipt-detail-title">
                    $119 x 9 nights
                  </div>
                  <div className="tour-receipt-detail-price">$1,071</div>
                </div>
                <div className="tour-receipt-detail-item">
                  <div className="tour-receipt-detail-title">
                    10% campaign discount
                  </div>
                  <div className="tour-receipt-detail-price">-$175</div>
                </div>
                <div className="tour-receipt-detail-item">
                  <div className="tour-receipt-detail-title">Service fee</div>
                  <div className="tour-receipt-detail-price">$0</div>
                </div>
                <div className="tour-receipt-detail-item tour-receipt-detail-total">
                  <div className="tour-receipt-detail-title">Total</div>
                  <div className="tour-receipt-detail-price">$1,246</div>
                </div>
              </div>
              <div className="tour-receipt-button">
                <button className="tour-favorite">
                  <span className="material-icons-outlined">
                  <FaRegHeart /> 
                  
                  </span>
                </button>
                <button className="tour-reserve">Book Now</button>
              </div>
            </div>
          </div>
          {/* sidebar */}
        </div>
      </div>
      
      {/* overlay */}
    </>
  );
};

export default Booking;
