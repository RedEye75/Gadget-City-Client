import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "./BookingModal";
import BrandProduct from "./BrandProduct";

const BrandProducts = () => {
  const brandProducts = useLoaderData();
  // console.log(brandProducts);
  const [item, setItem] = useState(null);

  return (
    <div>
      <div className="grid grid-cols-4 max-w-screen-lg mx-auto min-h-screen place-content-center gap-2 ">
        {brandProducts?.map((product) => (
          <BrandProduct
            key={product._id}
            setItem={setItem}
            product={product}
          ></BrandProduct>
        ))}
      </div>
      <BookingModal item={item}></BookingModal>
    </div>
  );
};

export default BrandProducts;
