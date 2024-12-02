import { useEffect, useState } from "react";
import Gadget from "./Gadget";
import Category from "../Category/Category";

const Gadgets = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All Product");

  useEffect(() => {
    fetch("/data.JSON")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);

    if (category === "All Product") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category === category
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="px-5 mt-[360px] lg:mt-[400px]">
      <h4 className="text-3xl text-primary text-center font-bold">
        Explore Cutting-Edge Gadgets
      </h4>
      <div className="flex flex-col lg:flex-row gap-5 py-10">
        <div>
          <Category onCategorySelect={handleCategoryChange} />
        </div>
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {filteredProducts.length === 0 ? (
              <p className="text-center">No products found in this category.</p>
            ) : (
              filteredProducts.map((product) => (
                <Gadget key={product.product_id} product={product} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gadgets;
