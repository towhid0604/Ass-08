import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
  const contactUs = () => {
    toast("Thanks For Contact With Us");
  };
  return (
    <div>
      <div className="grid grid-cols-1 mb-16 lg:grid-cols-2 gap-16 items-center relative overflow-hidden p-8 rounded-3xl max-w-6xl mx-auto bg-white mt-4 font-[sans-serif] before:absolute before:right-0 before:w-[300px] before:h-full max-md:before:hidden">
        <div>
          <h2 className="text-gray-800 text-3xl font-extrabold">
            Get In Touch
          </h2>
          <p className="text-sm text-gray-500 mt-4 leading-relaxed">
            Contact Us for More Information
          </p>

          <form>
            <div className="space-y-4 mt-8">
              <input
                required
                type="text"
                placeholder="Full Name"
                className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
              />
              <input
                required
                type="text"
                placeholder="Street"
                className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
              />
              <div className="grid grid-cols-2 gap-6">
                <input
                  required
                  type="text"
                  placeholder="City"
                  className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
                />

                <input
                  type="text"
                  placeholder="Postcode"
                  className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
                />
              </div>
              <input
                required
                type="number"
                placeholder="Phone No."
                className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
              />

              <input
                required
                type="email"
                placeholder="Email"
                className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
              />

              <textarea
                required
                placeholder="Write Message"
                className="px-2 pt-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
              ></textarea>
            </div>

            <button
              onClick={contactUs}
              type="button"
              className="mt-8 flex items-center justify-center text-sm w-full rounded-md px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white"
            >
              Send Message
            </button>
            <ToastContainer />
          </form>
        </div>
        <div className="z-10 relative h-full max-md:min-h-[350px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236153.75658880244!2d91.65422540320962!3d22.35731206162862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8a64095dfd3%3A0x5015cc5bcb6905d9!2sChattogram!5e0!3m2!1sen!2sbd!4v1733077347440!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{ border: "0", height: "100%", width: "100%" }}
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
