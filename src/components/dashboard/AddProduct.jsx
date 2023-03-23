import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const AddProduct = () => {
  const { user } = useContext(AuthContext);

  // const categoryName = useLoaderData();
  // console.log(categoryName);

  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/category")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);

  const addProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const sellerName = form.sellerName.value;
    const productName = form.productName.value;
    const location = form.location.value;
    const useTime = form.useTime.value;
    // const image = form.photo.file[0];
    const number = form.number.value;

    console.log(sellerName, productName, location, useTime, number);
  };
  return (
    <div className="ml-5">
      <h1 className="text-4xl font-bold text-green-700">Add product</h1>
      <form onSubmit={addProduct}>
        <div className=" gap-3 grid grid-cols-2  mt-10">
          <div>
            <input
              type="text"
              name="sellerName"
              placeholder="Seller Name"
              className="input input-bordered w-full  max-w-xs"
            />
          </div>
          <div>
            <input
              type="text"
              name="email"
              value={user?.email}
              placeholder="Email"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div>
            <input
              type="file"
              name="photo"
              className="file-input file-input-bordered w-full max-w-xs"
            />
          </div>
          <div>
            <select class="select select-bordered w-full max-w-xs">
              <option disabled selected>
                Select brand
              </option>
              {datas.map((data) => (
                <option value={data.category}>{data.category}</option>
              ))}
            </select>
          </div>
          <div>
            <input
              type="text"
              name="productName"
              placeholder="Product Name"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div>
            <input
              type="text"
              name="useTime"
              placeholder="Use Time"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div>
            <input
              type="text"
              name="reSalePrice"
              placeholder="Resale Price"
              className="input input-bordered w-full  max-w-xs"
            />
          </div>
          <div>
            <input
              type="text"
              name="OrginalPrice"
              placeholder="Orginal Price"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div>
            <input
              type="text"
              name="number"
              placeholder="Number"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div>
            <input
              type="submit"
              value="Add Product"
              className="input input-bordered bg-green-700 text-white w-full max-w-xs"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
