import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthProvider";

const AddItem = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  const { user } = useContext(AuthContext);
  const [categories, setCategory] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/category")
      .then((res) => res.json())
      .then((catData) => setCategory(catData));
  }, []);

  const imgBBKey = process.env.REACT_APP_imgbb_key;
  //   console.log(imgBBKey);
  //   seller account: anas@gmail.com

  //  function for add product
  const addProduct = (data) => {
    const img = data.photo[0];
    // console.log(image);
    const formData = new FormData();
    formData.append("image", img);

    const url = `https://api.imgbb.com/1/upload?&key=${imgBBKey}`;
    // console.log(url);
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        console.log(imgData.data.url);

        if (imgData.success) {
          //   product
          const product = {
            sellerName: data.sellerName,
            email: data.email,
            name: data.itemName,
            category: data.brand,
            img: imgData.data.url,
            number: data.number,
            location: data.sellerLocation,
            yearOfUse: data.useTime,
            orginalPrice: data.orginalPrice,
            resalePrice: data.reSalePrice,
          };
          //   console.log(product);
          fetch("http://localhost:5000/watches", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((data) => console.log(data));
          alert("product inserted successfully");
        }
      });
  };

  return (
    <div>
      <h1 className="text-4xl  font-bold text-green-600">Add Product</h1>
      <div>
        <form
          className="grid grid-cols-2 gap-2"
          onSubmit={handleSubmit(addProduct)}
        >
          <input
            {...register("sellerName")}
            type="text"
            className="input input-bordered w-full max-w-xs"
            placeholder="Seller Name"
          />
          <input
            {...register("email")}
            type="email"
            value={user?.email}
            className="input input-bordered w-full max-w-xs"
            placeholder="Email"
          />
          <input
            {...register("itemName")}
            type="text"
            className="input input-bordered w-full max-w-xs"
            placeholder="Product Name"
          />

          <select
            className="input input-bordered"
            {...register("brand", { required: true })}
          >
            {/* <option selected disabled>
              Select Brand
            </option> */}
            {categories.map((category) => (
              <option value={category.category}>{category.category}</option>
            ))}
          </select>
          <input
            {...register("photo")}
            type="file"
            className="file-input file-input-bordered w-full max-w-xs"
          />
          <input
            {...register("reSalePrice")}
            type="text"
            className="input input-bordered w-full max-w-xs"
            placeholder="Resale Price"
          />
          <input
            {...register("orginalPrice")}
            type="text"
            className="input input-bordered w-full max-w-xs"
            placeholder="Orginal price"
          />
          <input
            {...register("useTime")}
            type="text"
            className="input input-bordered w-full max-w-xs"
            placeholder="Use Time"
          />
          <input
            {...register("sellerLocation")}
            type="text"
            className="input input-bordered w-full max-w-xs"
            placeholder="Seller Location"
          />
          <input
            {...register("number")}
            type="text"
            className="input input-bordered w-full max-w-xs"
            placeholder="Number"
          />

          <p>{data}</p>
          <input
            type="submit"
            className="btn btn-outline bg-green-600 text-white"
          />
        </form>
      </div>
    </div>
  );
};

export default AddItem;
