import React, { useContext, useEffect, useState } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import icon from "../images/favicon.ico";

const Nav = () => {
  const [openNav, setOpenNav] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((e) => console.error(e));
  };

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold"
      >
        <NavLink to={"/"} className="flex items-center">
          Home
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold"
      >
        <NavLink to={"/dashboard"} className="flex items-center">
          Dashboard
        </NavLink>
      </Typography>
      {/* <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold"
      >
        <NavLink to={"/watches"} className="flex items-center">
          Watches
        </NavLink>
      </Typography> */}
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold"
      >
        <NavLink className="flex items-center">Blogs</NavLink>
      </Typography>
    </ul>
  );
  return (
    <div className="">
      <Navbar className="mx-auto border-none shadow-none max-w-screen-2xl py-2 px-4 lg:px-8 lg:py-4">
        <div className="container mx-auto flex items-center justify-around text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            variant="small"
            className="mr-4 flex cursor-pointer py-1.5 font-bold"
          >
            <img className="w-10" src={icon} alt="" />
            <strong className="text-4xl   text-black ">Gadget City</strong>
          </Typography>
          <div className="hidden  text-black lg:block">{navList}</div>
          {user?.uid ? (
            <>
              <Button
                variant="gradient"
                id="text"
                onClick={handleLogOut}
                className="hidden bg-[#941010] py-3 lg:inline-block"
              >
                <span>Sign Out</span>
              </Button>
            </>
          ) : (
            <>
              <div>
                <Link to={"/login"}>
                  <Button
                    variant="gradient"
                    size="sm"
                    className="hidden mr-3 bg-blue-500 py-3  text-white lg:inline-block"
                  >
                    <span>Sign In</span>
                  </Button>
                </Link>
                <Link to={"/register"}>
                  <Button
                    variant="gradient"
                    size="sm"
                    className="hidden   bg-green-800 py-3  text-white lg:inline-block"
                  >
                    <span>Sign Up</span>
                  </Button>
                </Link>
              </div>
            </>
          )}

          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
        <MobileNav open={openNav}>
          <div className="container mx-auto">
            {navList}
            <Button variant="gradient" size="sm" fullWidth className="mb-2">
              <span>Sign In</span>
            </Button>
            <Button variant="gradient" size="sm" fullWidth className="mb-2">
              <span>Register</span>
            </Button>
          </div>
        </MobileNav>
      </Navbar>
    </div>
  );
};

export default Nav;
