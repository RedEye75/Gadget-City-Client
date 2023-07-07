import React, { useEffect, useState } from "react";

const AllSeller = () => {
  const [sellers, setSellers] = useState([]);
  useEffect(() => {
    fetch(`https://gadget-city-server.vercel.app/sellers`)
      .then((res) => res.json())
      .then((data) => setSellers(data));
  }, []);
  // console.log(sellers);

  const makeAdmin = (id) => {
    fetch(`http://localhost:5000/users/admin/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div>
      <header class="text-center mb-10">
        <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">All Seller</h2>

        <p class="max-w-md mx-auto mt-4 text-gray-500">
          "Find your perfect match - Explore our diverse range of sellers and
          discover the best products and services for your needs, all in one
          place."
        </p>
      </header>
      <section class="container mx-auto font-mono">
        <div class="w-full overflow-hidden rounded-lg shadow-lg">
          <div class="w-full overflow-x-auto">
            <table class="w-full">
              <thead>
                <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                  <th class="px-4 text-center py-3">Name</th>

                  <th class="px-4 text-center py-3">Status</th>
                  <th class="px-4 text-center py-3">Delete</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </section>
      {sellers &&
        sellers.map((seller) => (
          <section class="container mx-auto p-3 font-mono">
            <div class="w-full  overflow-hidden rounded-lg shadow-lg">
              <div class="w-full overflow-x-auto">
                <table class="w-full">
                  <tbody class="bg-white">
                    <tr class="text-gray-700">
                      <td class="px-4 py-3 border">
                        <div class="flex items-center text-sm">
                          <div class="relative w-8 h-8 mr-3 rounded-full md:block">
                            <img
                              class="object-cover w-full h-full rounded-full"
                              src={seller?.img}
                              alt=""
                              loading="lazy"
                            />
                            <div
                              class="absolute inset-0 rounded-full shadow-inner"
                              aria-hidden="true"
                            ></div>
                          </div>
                          <div>
                            <p class="font-semibold text-start text-black">
                              {seller?.name}
                            </p>
                            <p class="text-xs text-start text-gray-600">
                              {seller?.email}
                            </p>
                            {/* <p>{seller?._id}</p> */}
                          </div>
                        </div>
                      </td>

                      <td class="px-4 py-3 flex flex-col text-xs">
                        <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                          {seller?.role}
                        </span>{" "}
                        <button
                          onClick={() => makeAdmin(seller?._id)}
                          className="px-10 py-2 bg-blue-800 rounded font-medium btn-outline text-white"
                        >
                          Make Verify
                        </button>
                      </td>
                      <td class="px-4 py-3 text-sm border">
                        <button className="px-10 py-2 bg-red-800 rounded font-medium btn-outline text-white">
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        ))}
    </div>
  );
};

export default AllSeller;
