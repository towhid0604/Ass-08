import banner from "../../assets/banner.jpg";

const Banner = () => {
  return (
    <div className=" mb-[-80px] relative">
      <div className="hero bg-primary text-white pt-10 pb-48">
        <div className="hero-content text-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">
              Upgrade Your Tech Accessories with Gadget Heaven
            </h1>
            <p className="py-4 text-center text-sm lg:text-lg">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <button className="btn bg-white text-primary px-6 py-3 rounded-lg mt-6 hover:bg-gray-200">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* Banner Image Section */}
      <div className="absolute top-[110%] inset-0 flex items-center justify-center z-10">
        <div className="w-full max-w-2xl bg-second p-3 rounded-lg z-100">
          <img
            src={banner}
            alt="Gadget Heaven Banner"
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
