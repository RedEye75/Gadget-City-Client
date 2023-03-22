import React from "react";
import { useLoaderData } from "react-router-dom";
import Product from "./Product";

const Products = () => {
  const data = useLoaderData();
  return (
    <div className="grid grid-cols-6 m-5">
      {data.map((product) => (
        <Product product={product}></Product>
      ))}
    </div>
  );
};

export default Products;
