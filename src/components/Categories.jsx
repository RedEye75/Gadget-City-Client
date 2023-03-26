import React from "react";
import { Link } from "react-router-dom";
import Brand from "./Brand";

const Categories = () => {
  const categories = [
    {
      categoryId: "Apple-watch",
      category: "Apple",
    },

    {
      categoryId: "Samsung-watch",
      category: "Samsung",
    },

    {
      categoryId: "Xiaomi-watch",
      category: "Xiaomi",
    },

    {
      categoryId: "Amazfit -watch",
      category: "Amazfit ",
    },
  ];
  return (
    <div className="mt-20">
      <h1 className="text-3xl text-gray-900">FEATURED BRANDS</h1>
      <p className="text-xl ">Get your desired product from here</p>
      <div className="grid grid-cols-5 max-w-screen-sm mx-auto gap-3 mt-10">
        <Link to={"/allWatches"}>
          <h2 class="  py-3 rounded-lg border  border-gray-300  font-medium text-xl text-gray-900">
            All
          </h2>
        </Link>
        {categories.map((category) => (
          <Brand key={category.categoryId} value={category} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
