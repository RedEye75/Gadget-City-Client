import React from "react";
import Category from "./Category";

const Categories = () => {
  const categories = [
    {
      id: "01",
      name: "IMILAB KW66",
      category: "Xiaomi",
      img: "https://www.cnet.com/a/img/resize/755704844d1e6efc7481dc5c1ebf577eb1e7c733/hub/2017/10/31/312b3b6e-59b7-499a-aea4-9bc5f9721a21/iphone-x-54.jpg?auto=webp&width=768",
      "resale-price": "70000 tk",
      "orginal-price": "99,990 tk",
      "seller-name": "Nizam Uddin",
      location: "Dhaka , Dhanmondi",
      "year-of-use": "5 months",
      description:
        " Plumbing uses pipes, valves, plumbing fixtures, tanks, and other apparatuses to convey fluids. Heating and cooling, waste removal, and potable water delivery are among the most common uses for plumbing, but it is not limited to these applications.",
    },
    {
      id: "02",
      name: "Mibro A1",
      category: "Xiaomi",
      img: "https://www.cnet.com/a/img/resize/755704844d1e6efc7481dc5c1ebf577eb1e7c733/hub/2017/10/31/312b3b6e-59b7-499a-aea4-9bc5f9721a21/iphone-x-54.jpg?auto=webp&width=768",
      "resale-price": "70000 tk",
      "orginal-price": "99,990 tk",
      "seller-name": "Nizam Uddin",
      location: "Dhaka , Dhanmondi",
      "year-of-use": "5 months",
      description:
        " Plumbing uses pipes, valves, plumbing fixtures, tanks, and other apparatuses to convey fluids. Heating and cooling, waste removal, and potable water delivery are among the most common uses for plumbing, but it is not limited to these applications.",
    },
  ];

  return (
    <div>
      {categories.map((category) => {
        // console.log(category);
        <Category key={category.id} category={category} />;
      })}
    </div>
  );
};

export default Categories;
