import { Link } from "react-router-dom";
import Card from "../component/Card";
import "./Home.css";
import Button from "../component/Button";

const Home = () => {
  return (
    <main>
      <section className="landing-image ">
        <div className="relative pt-24 lg:pt-28">
          <div className="mx-auto px-6 max-w-7xl md:px-12">
            <div className="text-center sm:mx-auto sm:w-10/12 lg:mr-auto lg:mt-0 lg:w-4/5">
              <h1 className="mt-8 text-wrap text-6xl md:text-5xl font-semibold text-white">
                Amenities & Facilities
              </h1>
              <p className="text-wrap mx-auto mt-8 max-w-2xl text-lg text-white hidden sm:block">
                We do not give you just rooms to stay. We give you an
                environment so you can experience the best while on a holiday
                with us. Walk into our hotel and enjoy a refreshing,
                rejuvenating, day-off with us.
              </p>
              <p className="text-wrap mx-auto mt-6 max-w-2xl text-gray-700 dark:text-gray-300 sm:hidden">
                Highly customizable components for building modern websites and
                applications, with your personal spark.
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2  relative -bottom-30 left-1/2 translate-x-[-100%] translate-y-[100%] p-4 -mx-6 mt-8 mx-auto bg-white rounded-md">
          <form className="flex flex-col">
            <div className="flex justify-between gap-6 mb-2">
              <div className="flex-1">
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Destination
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="eg. Kathmandu"
                  required
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="last_name"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Arrival
                </label>
                <input
                  type="Date"
                  id="Arrival"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="Doe"
                  required
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="company"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  End date
                </label>
                <input
                  type="date"
                  id="company"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="Time"
                  required
                />
              </div>
            </div>
            <Button type={"submit"} value={"Submit"} />
          </form>
        </div>
      </section>

      <div className="p-4 my-20 mx-6 flex items-center justify-around gap-6">
        <Link to="/booking">
          <Card
            src={
              "https://websitedemos.net/travel-and-tourism-02/wp-content/uploads/sites/840/2021/05/about-us.jpg"
            }
          />
        </Link>
        <Link to="/booking">
          <Card
            src={
              "https://websitedemos.net/travel-and-tourism-02/wp-content/uploads/sites/840/2021/05/about-us-2-1.jpg"
            }
          />
        </Link>
        <Link to="/booking">
          <Card
            src={
              "https://websitedemos.net/travel-and-tourism-02/wp-content/uploads/sites/840/2021/05/about-us-2-1.jpg"
            }
          />
        </Link>
      </div>

      <div className="p-4 my-20 mx-6">
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow ">
          <div
            className="p-4  bg-white rounded-lg md:p-8 "
            id="stats"
            role="tabpanel"
            aria-labelledby="stats-tab"
          >
            <dl className=" flex items-center justify-between max-w-screen-xl  gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-3xl text-blue-800 font-extrabold">
                  73M+
                </dt>
                <dd className="text-gray-500">Customers</dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-3xl text-blue-800 font-extrabold">
                  73M+
                </dt>
                <dd className="text-gray-500">Hotels</dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-3xl text-blue-800 font-extrabold">
                  100M+
                </dt>
                <dd className="text-gray-500">Transportation</dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-3xl text-blue-800 font-extrabold">
                  1000s
                </dt>
                <dd className="text-gray-500">Massage</dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-3xl text-blue-800 font-extrabold">
                  1B+
                </dt>
                <dd className="text-gray-500">Spa</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
