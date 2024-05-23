import CustomeInput from "../component/CustomeInput";
import Form from "../component/Form";
import bg from "../media/himachal/pack3.jpg";
import contactbg from "../media/Contact.png";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact " id="contact">
      <section className="mx-20 flex items-center" id="how">
        <div className="row ">
          <div className="img absolute top-0 left-0 -z-50 w-full">
            <img src={bg} id="contactimg" alt={""} />
          </div>
          <div className="w-1/2 mx-auto bg-white rounded-md flex items-center justify-center">
            <img src={contactbg} width={"65%"} alt="" className="flex-1" />
            <form
              action=""
              className="flex-1 w-1/2 relative z-50 bg-white p-8 rounded-md flex flex-col gap-4"
            >
              <h2 className="text-blue-400 text-lg leading-tight font-bold">Contact Us</h2>
              <div className="flex-1">
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Email
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
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Contact
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
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Description
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
      
                <button
                   className="bg-blue-500 text-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                > Send </button>
              </div>
            </form>
          </div>

          {/* <Form /> */}
        </div>
      </section>
    </section>
  );
};

export default Contact;
