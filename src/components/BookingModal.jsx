import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../context/AuthProvider";

const BookingModal = ({ item, setItem }) => {
  const { user } = useContext(AuthContext);
  // console.log(user);
  // console.log(item);

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const sellerName = form.name.value;
    const email = form.email.value;
    const productName = form.item.value;
    const brand = form.brand.value;
    const yearOfUse = form.useTime.value;
    const resalePrice = form.resalePrice.value;
    const orginalPrice = form.orginalPrice.value;
    const sellerLocation = form.sellerLocation.value;
    const img = form.img.value;

    const booking = {
      sellerName,
      email,
      productName,
      brand,
      img,
      yearOfUse,
      orginalPrice,
      resalePrice,
      sellerLocation,
    };
    setItem(null);
    // console.log(booking);
    fetch(`https://gadget-city-server.vercel.app/bookings`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Your order successfully added!");
        } else {
          toast.error("opps..!something went wrong");
        }
      });
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{item?.name}</h3>
          <form onSubmit={handleBooking} className="mt-10">
            <div className="space-y-2">
              <input
                type="text"
                name="name"
                value={user?.displayName}
                className="input input-bordered w-full max-w-xs"
              />

              <input
                type="text"
                name="email"
                value={user?.email}
                className="input input-bordered w-full max-w-xs"
              />
              <div className="flex gap-1 justify-center">
                <input
                  type="text"
                  name="item"
                  value={item?.name}
                  className="input input-bordered  w-[170px] "
                />
                <input
                  type="text"
                  name="brand"
                  value={item?.category}
                  className="input input-bordered w-[150px]"
                />
              </div>
              <input
                type="text"
                name="img"
                value={item?.img}
                className="input input-bordered  w-full max-w-xs "
              />
              <input
                type="text"
                name="useTime"
                value={item?.yearOfUse}
                className="input input-bordered w-full max-w-xs"
              />
              <div className="flex gap-1 justify-center">
                <div>
                  <label className="label">
                    <span className="label-text">Resale Price</span>
                  </label>
                  <input
                    type="text"
                    name="resalePrice"
                    value={item?.resalePrice}
                    className="input input-bordered w-[170px]"
                  />{" "}
                </div>
                <div>
                  <label className="label">
                    <span className="label-text">Orginal Price</span>
                  </label>
                  <input
                    type="text"
                    name="orginalPrice"
                    value={item?.orginalPrice}
                    className="input input-bordered w-[150px]"
                  />
                </div>
              </div>
              <input
                type="text"
                name="sellerLocation"
                value={item?.location}
                className="input input-bordered  w-full max-w-xs"
              />
              <input
                type="submit"
                value="Submit"
                className="w-full max-w-xs mt-3 py-2 btn bg-green-500 rounded border-none text-white font-bold"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
