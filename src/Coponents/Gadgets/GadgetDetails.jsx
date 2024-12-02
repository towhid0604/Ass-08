import { useLoaderData, useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const GadgetDetails = () => {
  const { product_id } = useParams();
  const data = useLoaderData();
  const product = data
    ? data.find((item) => item.product_id === product_id)
    : null;
  const {
    product_title,
    product_image,
    price,
    description,
    specifications,
    availability,
    rating,
  } = product;

  const addToCard = () => {
    toast(`${product_title} has been added to your cart!`);
  };
  const addToWishList = () => {
    toast(`${product_title} has been added to your Wishist!`);
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative mb-[380px]">
        <div className="hero bg-primary text-white pt-10 pb-48">
          <div className="hero-content text-center">
            <div className="max-w-2xl mx-auto">
              <h1 className="text-3xl lg:text-3xl font-bold">
                Product Details
              </h1>
              <p className="py-4 text-center text-sm lg:text-lg w-2/3 mx-auto">
                Explore the latest gadgets that will take your experience to the
                next level. From smart devices to the coolest accessories, we
                have it all!
              </p>
            </div>
          </div>
        </div>

        {/* Product Details Card */}
        <div className="absolute top-[120%] inset-0 flex items-center justify-center z-10">
          <div className="card bg-white shadow-md flex items-center flex-row w-2/3 mx-auto my-5">
            <figure className="w-full h-full">
              {product_image ? (
                <img
                  src={product_image}
                  alt={product_title}
                  className="w-3/4 h-3/4 rounded-lg"
                />
              ) : (
                <div className="bg-gray-200 w-full h-64 flex items-center justify-center text-gray-500">
                  Image not available
                </div>
              )}
            </figure>
            <div className="card-body">
              <h2 className="card-title text-3xl">{product_title}</h2>
              <p>
                <strong>Price: ${price}</strong>
              </p>
              <div>
                <button className="btn btn-outline">
                  {availability ? "In Stock" : "Out of Stock"}
                </button>
              </div>
              <p>{description}</p>
              <ul>
                <strong>Specifications:</strong>
                {specifications && specifications.length > 0 ? (
                  specifications.map((specification, index) => (
                    <li key={index}>
                      {index + 1}. {specification}
                    </li>
                  ))
                ) : (
                  <li>No specifications available</li>
                )}
              </ul>

              <p>Rating: </p>
              <div className="flex items-center gap-3">
                <ReactStars
                  count={5}
                  size={24}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />

                <div className="py-1 px-3 bg-gray-200 rounded-2xl">
                  <p>{rating}</p>
                </div>
              </div>
              <div className="card-actions flex items-center gap-4">
                <button
                  onClick={addToCard}
                  className="btn bg-primary hover:bg-black rounded-full text-white"
                >
                  Add To Cart <FaShoppingCart />
                  <ToastContainer />
                </button>
                <button
                  onClick={addToWishList}
                  className="bg-white rounded-full border hover:bg-red-500 hover:text-white hover:border-red-500 border-black p-2"
                >
                  <CiHeart className="text-3xl  text-black hover:text-white " />
                  <ToastContainer />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CiHeart } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
export default GadgetDetails;
