import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "./BookingModal";

import Product from "./Product";

const Products = () => {
  const [data, setData] = useState([]);
  const [item, setItem] = useState(null);

  // console.log(item);
  useEffect(() => {
    fetch("https://gadget-city-server.vercel.app/watches")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  // const data = useLoaderData();
  // console.log(data);
  return (
    <div className="grid grid-cols-6 m-5">
      {data?.map((product) => (
        <div className="px-25 mx-auto py-6">
          <div class="flex flex-col ">
            <a class="block relative rounded overflow-hidden">
              <img
                alt="ecommerce"
                class="object-cover mx-auto object-center w-[145px] h-[145px] block"
                src={product?.img}
              />
            </a>
            <div class="mt-4">
              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                {product?.category}
              </h3>
              <h2 class="text-gray-900 title-font text-lg font-medium">
                {product?.name}
              </h2>
              <div className="flex justify-between">
                <p class="mt-1">{product?.resalePrice}</p>
                <p class="mt-1 line-through">{product?.orginalPrice}</p>
              </div>

              <label
                onClick={() => setItem(product)}
                htmlFor="booking-modal"
                className="px-16 mt-3 py-2 btn bg-green-500 rounded border-none text-white font-bold"
              >
                Book Now
              </label>
            </div>
          </div>
        </div>
      ))}
      {item && <BookingModal setItem={setItem} item={item}></BookingModal>}
    </div>
  );
};

export default Products;
