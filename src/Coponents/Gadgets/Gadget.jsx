import { Link } from "react-router-dom";

const Gadget = ({ product }) => {
  const { product_title, product_image, price, product_id } = product;

  return (
    <div className="card bg-base-100">
      <figure>
        <img
          src={product_image}
          alt={product_title}
          className="w-96 h-64 object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product_title}</h2>
        <div className="flex items-center space-x-2">
          <span className="text-primary">Price: {price}</span>
        </div>
        <div className="card-actions">
          <Link to={`/Gadgets/${product_id}`}>
            <button className="btn btn-outline btn-accent">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Gadget;
