import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  const handleLink = ({ isActive }) => {
    // console.log(isActive);
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "white" : "black",
    };
  };
  return (
    <div className="">
      <div class="drawer  drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />

        <div class="drawer-content w-full  ">
          <Outlet />
        </div>
        <div class="drawer-side ">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu space-y-2 border-r-2 border-black text-black font-bold p-4 w-60 mt-5  ">
            <li>
              <NavLink
                style={handleLink}
                className="border-l-4 border-green-800"
                to={"/dashboard/addItem"}
              >
                Add Item
              </NavLink>
            </li>
            <li>
              <NavLink
                className="border-l-4 border-yellow-400"
                style={handleLink}
                to={"/dashboard/allSeller"}
              >
                All Seller
              </NavLink>
            </li>
            <li>
              <NavLink
                className="border-l-4 border-sky-800"
                style={handleLink}
                to={"/dashboard/allBuyer"}
              >
                All Buyer
              </NavLink>
            </li>
            <li>
              <NavLink
                className="border-l-4 border-red-800"
                style={handleLink}
                to={"/dashboard/myOrders"}
              >
                My Orders
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
