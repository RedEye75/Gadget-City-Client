import React from "react";

const AllWatches = ({ data }) => {
  const {
    category,
    img,
    location,
    name,
    orginalPrice,
    resalePrice,
    sellerName,
    yearOfUse,
  } = data;
  return (
    <div>
      <h1>all watch</h1>
      <div className="px-25 mx-auto py-6">
        <div class="flex flex-col ">
          <a class="block relative rounded overflow-hidden">
            <img
              alt="ecommerce"
              class="object-cover object-center w-[145px] h-[145px] block"
              src={img}
            />
          </a>
          <div class="mt-4">
            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
              {category}
            </h3>
            <h2 class="text-gray-900 title-font text-lg font-medium">{name}</h2>
            <div className="flex justify-between">
              {" "}
              <p class="mt-1">{resalePrice}</p>
              <p class="mt-1 line-through">{orginalPrice}</p>
            </div>
          </div>
        </div>
        <button className="px-16 mt-3 py-2 bg-green-500 rounded border-black text-white font-bold">
          Buy now
        </button>
      </div>
    </div>
  );
};

export default AllWatches;
