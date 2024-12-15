import React from "react";
import MainLayout from "../components/layouts/MainLayout";
import Detail from "../components/pages/Detail";
import Favourites from "../components/pages/Favourites";
import Home from "../components/pages/Home";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "movie/:id",
        element: <Detail />,
      },
      {
        path: "favourites",
        element: <Favourites />,
      },
    ],
  },
]);

export default router;
