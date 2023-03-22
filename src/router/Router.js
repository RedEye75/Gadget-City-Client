import Register from "../components/Authentication/Register";
import SignIn from "../components/Authentication/SignIn";
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
          fetch(`http://localhost:5000/category/${params.category}`);
          // .then((res) => res.json())
          // .then((data) => data);
        },
      },
      {
        path: "/watches",
        element: <Products />,
        loader: () => fetch("products.json"),
      },
      {
        path: "/login",
        element: <SignIn />,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/AllWatches",
        element: <Products />,
      },
    ],
  },
]);
export default router;
