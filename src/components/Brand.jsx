import React from "react";
import { Link } from "react-router-dom";

const Brand = ({ value }) => {
  // console.log(value);
  const { category } = value;

  return (
    <div className="max-w-screen-sm ">
      <Link to={`/brand/${category}`}>
        <h2 class="  py-3 rounded-lg border  border-gray-300  font-medium text-xl text-gray-900">
          {value?.category}
        </h2>
      </Link>
    </div>
  );
};

export default Brand;
