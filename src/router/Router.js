import Register from "../components/Authentication/Register";
import SignIn from "../components/Authentication/SignIn";
import Brand from "../components/Brand";
import Categories from "../components/Categories";
import AddProduct from "../components/dashboard/AddProduct";
import AllBuyer from "../components/dashboard/AllBuyer";
import AllSeller from "../components/dashboard/AllSeller";
import Dashboard from "../components/dashboard/Dashboard";
import MyOrders from "../components/dashboard/MyOrders";
import Error from "../components/Error";
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
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: "/dashboard/addProduct",
            element: <AddProduct></AddProduct>,
          },
          {
            path: "/dashboard",
            element: <MyOrders></MyOrders>,
          },
          {
            path: "/dashboard/allSeller",
            element: <AllSeller></AllSeller>,
          },
          {
            path: "/dashboard/allBuyer",
            element: <AllBuyer></AllBuyer>,
          },
        ],
      },
      {
        path: "*",
        element: <Error></Error>,
      },
    ],
  },
]);
export default router;
