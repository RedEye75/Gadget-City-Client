import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

import Product from "./Product";

const Products = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  // const data = useLoaderData();
  // console.log(data);
  return (
    <div className="grid grid-cols-6 m-5">
      {data?.map((product) => (
        <Product product={product}></Product>
      ))}{" "}
    </div>
  );
};

export default Products;
