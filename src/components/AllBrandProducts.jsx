// import React, { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";
// import AllWatches from "./AllWatches";
// import BrandProduct from "./BrandProduct";

// const AllBrandProducts = () => {
//   const [datas, setData] = useState([]);
//   useEffect(() => {
//     fetch("http://localhost:5000/allWatches")
//       .then((res) => res.json())
//       .then((data) => setData(data));
//   }, []);
//   return <div>{datas.map((data) => console.log(data))}</div>;
// };

// export default AllBrandProducts;
