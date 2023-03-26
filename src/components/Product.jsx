// import React, { useContext } from "react";
// import { Navigate } from "react-router-dom";
// import { AuthContext } from "../context/AuthProvider";

// const Product = ({ product, setItem }) => {
//   const { user } = useContext(AuthContext);
//   console.log(product);

//   // const handleBooking = () => {};

//   const {
//     name,
//     description,
//     location,
//     category,
//     sellerName,
//     yearOfUse,
//     orginalPrice,
//     img,
//     resalePrice,
//   } = product;

//   return (
//     <div className="px-25 mx-auto py-6">
//       <div class="flex flex-col ">
//         <a class="block relative rounded overflow-hidden">
//           <img
//             alt="ecommerce"
//             class="object-cover mx-auto object-center w-[145px] h-[145px] block"
//             src={img}
//           />
//         </a>
//         <div class="mt-4">
//           <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
//             {category}
//           </h3>
//           <h2 class="text-gray-900 title-font text-lg font-medium">{name}</h2>
//           <div className="flex justify-between">
//             <p class="mt-1">{resalePrice}</p>
//             <p class="mt-1 line-through">{orginalPrice}</p>
//           </div>

//           <label
//             // onClick={() => setItem(product)}
//             htmlFor="booking-modal"
//             className="px-16 mt-3 py-2 btn bg-green-500 rounded border-none text-white font-bold"
//           >
//             Book Now
//           </label>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Product;
