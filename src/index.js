import React from "react";
import ReactDOM from "react-dom/client";
import "./css/style.css";
import Root from "./components/path/Root";
import Visuales from "./components/path/Visuales";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Otros from "./components/path/Otros";
import Error from "./components/path/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/visuales",
    element: <Visuales />,
  },
  {
    path: "/otros",
    element: <Otros />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
