const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../components/Home");
const { default: Main } = require("../root/Main");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);
export default router;
