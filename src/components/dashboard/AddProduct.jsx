// import React, { useContext, useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";
// import { AuthContext } from "../../context/AuthProvider";

// const AddProduct = () => {
//   const { user } = useContext(AuthContext);

//   // const categoryName = useLoaderData();
//   // console.log(categoryName);

//   const [datas, setDatas] = useState([]);
//   useEffect(() => {
//     fetch("http://localhost:5000/category")
//       .then((res) => res.json())
//       .then((data) => setDatas(data));
//   }, []);

//   const imageHostKey = process.env.REACT_APP_imgbbkey;
//   const addProduct = (event) => {
//     event.preventDefault();

//     // const form = event.target;
//     const sellerName = event.target.sellerName.value;
//     const productName = event.target.productName.value;
//     const location = event.target.location.value;
//     const useTime = event.target.useTime.value;
//     const image = event.target.photo[0];
//     const number = event.target.number.value;

//     // console.log(sellerName, productName, location, image, useTime, number);
//     // console.log(image);

//     const formData = new FormData();
//     formData.append("image", image);
//     const url = `https://api.imgbb.com/1/upload?&key=${imageHostKey}`;

//     fetch(url, {
//       method: "POST",
//       body: formData,
//     })
//       .then((res) => res.json())
//       .then((result) => {
//         console.log(result);
//       });
//   };

//   return (
//     <div className="ml-5">
//       <h1 className="text-4xl font-bold text-green-700">Add product</h1>

//       <form onSubmit={addProduct}>
//         <div className=" gap-3 grid grid-cols-2  mt-10">
//           <div>
//             <input
//               type="text"
//               name="sellerName"
//               placeholder="Seller Name"
//               className="input input-bordered w-full  max-w-xs"
//             />
//           </div>
//           <div>
//             <input
//               type="text"
//               name="email"
//               value={user?.email}
//               placeholder="Email"
//               className="input input-bordered w-full max-w-xs"
//             />
//           </div>
//           <div>
//             <input
//               type="file"
//               name="photo"
//               className="file-input file-input-bordered w-full max-w-xs"
//             />
//           </div>
//           <div>
//             <select class="select select-bordered w-full max-w-xs">
//               <option disabled selected>
//                 Select brand
//               </option>
//               {datas.map((data) => (
//                 <option value={data.category}>{data.category}</option>
//               ))}
//             </select>
//           </div>
//           <div>
//             <input
//               type="text"
//               name="productName"
//               placeholder="Product Name"
//               className="input input-bordered w-full max-w-xs"
//             />
//           </div>
//           <div>
//             <input
//               type="text"
//               name="useTime"
//               placeholder="Use Time"
//               className="input input-bordered w-full max-w-xs"
//             />
//           </div>

//           <div>
//             <input
//               type="text"
//               name="reSalePrice"
//               placeholder="Resale Price"
//               className="input input-bordered w-full  max-w-xs"
//             />
//           </div>
//           <div>
//             <input
//               type="text"
//               name="OrginalPrice"
//               placeholder="Orginal Price"
//               className="input input-bordered w-full max-w-xs"
//             />
//           </div>

//           <div>
//             <input
//               type="text"
//               name="number"
//               placeholder="Number"
//               className="input input-bordered w-full max-w-xs"
//             />
//           </div>
//           <div>
//             <input
//               type="text"
//               name="location"
//               placeholder="location"
//               className="input input-bordered w-full max-w-xs"
//             />
//           </div>
//           <div>
//             <input
//               type="submit"
//               value="Add Product"
//               className="input input-bordered bg-green-700 text-white w-full max-w-xs"
//             />
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddProduct;
