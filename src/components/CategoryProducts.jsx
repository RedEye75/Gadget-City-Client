import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Product from "./Product";

const CategoryProducts = () => {
  const data = useLoaderData();
  const [watch, setWatch] = useState(null);
  console.log(data);
  return (
    <div>
      {data.map((product) => (
        <Product product={product} setWatch={setWatch}></Product>
      ))}
    </div>
  );
};

export default CategoryProducts;
