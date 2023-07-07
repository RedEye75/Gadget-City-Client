import AllBrandProducts from "../components/AllBrandProducts";
import Register from "../components/Authentication/Register";
import SignIn from "../components/Authentication/SignIn";
import Blog from "../components/Blog";
import Brand from "../components/Brand";
import BrandProducts from "../components/BrandProducts";
import Categories from "../components/Categories";
import AddItem from "../components/dashboard/AddItem";
import AllBuyer from "../components/dashboard/AllBuyer";
import AllSeller from "../components/dashboard/AllSeller";
import Dashboard from "../components/dashboard/Dashboard";
import MyOrders from "../components/dashboard/MyOrders";
import WelcomeDashboard from "../components/dashboard/WelcomeDashboard";
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
          // console.log(params);
          fetch(
            `https://gadget-city-server.vercel.app/category/${params.category}`
          );
        },
      },
      // {
      //   path: "/watches",
      //   element: <Products />,
      //   loader: () => fetch("products.json"),
      // },
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
        path: "/blogs",
        element: <Blog></Blog>,
      },
      {
        path: "/brand/:category",
        element: <BrandProducts></BrandProducts>,
        loader: ({ params }) =>
          fetch(
            `https://gadget-city-server.vercel.app/brand/${params.category}`
          ),
      },
      {
        path: "/allWatches",
        element: <AllBrandProducts />,
      },

      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: "/dashboard",
            element: <WelcomeDashboard />,
          },
          {
            path: "/dashboard/addItem",
            element: <AddItem></AddItem>,
          },

          {
            path: "/dashboard/myOrders",
            element: <MyOrders></MyOrders>,
            loader: () =>
              fetch(`https://gadget-city-server.vercel.app/bookings`),
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
