import "./App.css";
import { RouterProvider } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import router from "./router/Router";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}> </RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
