import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Coponents/Basic/Root";
import Statistics from "./Coponents/Statistics/Statistics";
import Dashboard from "./Coponents/Dashboard/Dashboard";
import Home from "./Coponents/Basic/Home";
import GadgetDetails from "./Coponents/Gadgets/GadgetDetails";
import Error from "./Coponents/Basic/Error";
import Contact from "./Coponents/Basic/Contact";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Contact",
        element: <Contact></Contact>,
      },
      {
        path: "/Statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/Gadgets/:product_id",
        element: <GadgetDetails></GadgetDetails>,
        loader: () => fetch("/data.JSON"),
      },
      {
        path: "/Dashboard",
        element: <Dashboard></Dashboard>,
        loader: () => fetch("/data.JSON"),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
