import React from "react";
import { useLoaderData } from "react-router-dom";
import { MdPayment } from "react-icons/md";

const MyOrders = () => {
  const bookingData = useLoaderData();
  console.log(bookingData);

  return (
    <div>
      <header class="text-center">
        <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">My Orders</h2>

        <p class="max-w-md mx-auto mt-4 text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
          praesentium cumque iure dicta incidunt est ipsam, officia dolor fugit
          natus?
        </p>
      </header>
      <div className="max-w-screen-lg mx-auto">
        {bookingData.map((data) => (
          <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100">
            <ul className="flex flex-col divide-y divide-gray-700">
              <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                <div className="flex w-full space-x-2 sm:space-x-4">
                  <img
                    className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                    src={data?.img}
                    alt="Polaroid camera"
                  />
                  <div className="flex flex-col justify-between w-full pb-4">
                    <div className="flex justify-between w-full pb-2 space-x-2">
                      <div className="space-y-1">
                        <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                          {data?.productName}
                        </h3>
                        <p className="text-sm text-start dark:text-gray-400">
                          {data?.brand}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-semibold">
                          {data?.resalePrice}
                        </p>
                        <p className="text-sm line-through dark:text-gray-600">
                          {data?.orginalPrice}
                        </p>
                      </div>
                    </div>
                    <div className="flex text-sm divide-x">
                      <button
                        type="button"
                        className="flex items-center text-center px-5 text-white rounded py-2 bg-green-600 pl-0 space-x-1"
                      >
                        <MdPayment className="ml-3" />
                        <span>Pay</span>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        ))}
      </div>{" "}
      <div className="flex justify-end space-x-4">
        <button
          type="button"
          className="px-6 py-2 border rounded-md dark:border-violet-400"
        >
          Back
          <span className="sr-only sm:not-sr-only">to shop</span>
        </button>
        <button
          type="button"
          className="px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400"
        >
          <span className="sr-only sm:not-sr-only">Continue to</span>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default MyOrders;
