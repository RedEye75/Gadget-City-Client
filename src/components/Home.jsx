import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../images/bg4.jpg";
import Brand from "./Brand";
import Categories from "./Categories";
import Product from "./Product";
import Products from "./Products";

// style={{
//   backgroundImage: `url(${backgroundImage})`,
// }}

const Home = () => {
  return (
    <div className="">
      <section
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
        class=" bg-cover bg-center bg-no-repeat"
      >
        <div class=""></div>

        <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div class="max-w-xl text-center sm:text-left">
            <h1 class="text-3xl font-extrabold text-white sm:text-5xl">
              Tech Meets Fashion
              <strong class="block font-extrabold text-red-700">
                Discover Smartwatches at Our Shop.
              </strong>
            </h1>

            <p class="mt-4 text-gray-200 max-w-lg sm:text-xl sm:leading-relaxed">
              Stay connected and stylish with our cutting-edge smartwatches -
              shop now and elevate your everyday
            </p>

            <div class="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#brand"
                class="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Get Started
              </a>

              <Link
                to={"/blogs"}
                class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Categories />
      <Products />
    </div>
  );
};

export default Home;
