import Brand from "../components/Brand";
import Categories from "../components/Categories";
import Product from "../components/Product";
import Products from "../components/Products";

const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../components/Home");
const { default: Main } = require("../root/Main");
const { default: CategoryProducts } = require("../components/CategoryProducts");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/:category",
        element: <CategoryProducts />,
        loader: ({ params }) => {
          console.log(params);
          fetch(`http://localhost:3000/${params.category}`)
            .then((res) => res.json())
            .then((data) => data);
        },
      },
      {
        path: "/watches",
        element: <Products />,
        loader: () => fetch("products.json"),
      },
    ],
  },
]);
export default router;
