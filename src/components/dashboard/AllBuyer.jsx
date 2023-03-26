import React from "react";

const AllBuyer = () => {
  return (
    <div>
      <h1>all buyer </h1>
      <div>
        <div class="overflow-x-auto">
          <table class="divide-y-2 divide-gray-200 text-sm">
            <thead>
              <tr>
                <th class="whitespace-nowrap mx-auto px-4 py-2 text-left font-medium text-gray-900">
                  Name
                </th>

                <th class="whitespace-nowrap  px-4 py-2 text-left font-medium text-gray-900">
                  Role
                </th>

                <th class="px-4 py-2"></th>
              </tr>
            </thead>

            <tbody class="divide-y divide-gray-200">
              <tr>
                <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  John Doe
                </td>

                <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                  Web Developer
                </td>

                <td class="whitespace-nowrap px-4 py-2">
                  <a
                    href="#"
                    class="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                  >
                    Delete
                  </a>
                </td>
              </tr>

              <tr>
                <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Jane Doe
                </td>

                <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                  Web Designer
                </td>

                <td class="whitespace-nowrap px-4 py-2">
                  <a
                    href="#"
                    class="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                  >
                    Delete
                  </a>
                </td>
              </tr>

              <tr>
                <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Gary Barlow
                </td>

                <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                  Singer
                </td>

                <td class="whitespace-nowrap px-4 py-2">
                  <a
                    href="#"
                    class="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                  >
                    Delete
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllBuyer;
