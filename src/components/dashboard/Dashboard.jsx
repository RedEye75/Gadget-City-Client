import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="">
      <div class="drawer  drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />

        <div class="drawer-content w-full  ">
          <Outlet />
        </div>
        <div class="drawer-side bg-gray-500">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu text-gray-100 font-bold p-4 w-60 mt-5  ">
            <li>
              <Link
                className="border-l-4 border-red-800"
                to={"/dashboard/addItem"}
              >
                Add Item
              </Link>
            </li>
            <li>
              <Link to={"/dashboard/allSeller"}>All Seller</Link>
            </li>
            <li>
              <Link to={"/dashboard/allBuyer"}>All Buyer</Link>
            </li>
            <li>
              <Link to={"/dashboard"}>My Orders</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
