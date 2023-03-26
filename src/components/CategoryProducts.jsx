import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "./BookingModal";
import Product from "./Product";

const CategoryProducts = () => {
  const data = useLoaderData();
  // console.log(data?.category);
  // useEffect(() => {
  //   fetch()
  // }, []);

  const [item, setItem] = useState(null);

  console.log(item);

  return (
    <div>
      <div>
        {data.map((product) => (
          // <Product setItem={setItem} product={product}></Product>

          <h1>{product.name}</h1>
        ))}
      </div>

      {/* <BookingModal></BookingModal> */}
    </div>
  );
};

export default CategoryProducts;
