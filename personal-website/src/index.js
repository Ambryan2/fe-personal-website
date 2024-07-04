import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HomePage } from "./app";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const container = document.getElementById("root");

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

const root = ReactDOM.createRoot(container);

root.render(<RouterProvider router={routes} />);
