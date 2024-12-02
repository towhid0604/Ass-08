const categories = [
  "All Product",
  "Laptop",
  "Phone",
  "Accessories",
  "Smartwatch",
];

const Category = ({ onCategorySelect }) => {
  return (
    <div className="bg-white border rounded-lg p-7 flex flex-col gap-y-4">
      <ul className="flex flex-col gap-5">
        {categories.map((category) => (
          <li key={category}>
            <button
              onClick={() => onCategorySelect(category)}
              className="btn w-full rounded-full hover:bg-primary hover:text-white"
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
