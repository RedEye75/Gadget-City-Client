import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Product from "./Product";

const CategoryProducts = () => {
  const data = useLoaderData();
  console.log(data?.category);
  useEffect(() => {
    fetch(`http://localhost:5000/products/${data?.category}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [data.category]);
  return (
    <div>
      {data.map((product) => (
        <Product product={product}></Product>
      ))}
    </div>
  );
};

export default CategoryProducts;
