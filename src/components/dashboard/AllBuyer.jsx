import React, { useEffect, useState } from "react";

const AllBuyer = () => {
  const [buyers, setbuyers] = useState([]);
  useEffect(() => {
    fetch(`https://gadget-city-server.vercel.app/buyers`)
      .then((res) => res.json())
      .then((data) => setbuyers(data));
  }, []);
  return (
    <div>
      <header class="text-center mb-10">
        <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">All Buyers</h2>

        <p class="max-w-md mx-auto mt-4 text-gray-500">
          "Join our thriving community of buyers - Connect with like-minded
          shoppers, access exclusive deals, and discover the latest trends in
          our diverse online marketplace."
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

      {buyers.map((data) => (
        <section class="container mx-auto p-3 font-mono">
          <div class="w-full  overflow-hidden rounded-lg shadow-lg">
            <div class="w-full overflow-x-auto">
              <table class="w-full">
                <tbody class="bg-white">
                  <tr class="text-gray-700">
                    <td class="px-4  py-3 border">
                      <div class="flex items-center text-sm">
                        <div class="relative w-8 h-8 mr-3 rounded-full md:block">
                          <img
                            class="object-cover w-full h-full rounded-full"
                            src={data?.img}
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
                            {data?.name}
                          </p>
                          <p class="text-xs text-start text-gray-600">
                            {data?.email}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td class="px-4 py-3 flex flex-col  text-xs">
                      <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                        {data?.role}
                      </span>{" "}
                      <button className="px-10 py-2 bg-blue-800 rounded font-medium btn-outline text-white">
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

export default AllBuyer;
