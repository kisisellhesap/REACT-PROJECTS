import React, { Children } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Category from "./pages/Category";
import MainLayout from "./layouts/MainLayout";
import Detail from "./components/Detail";
import Undefined from "./components/Undefined";

const router = createBrowserRouter(
  [
    {
      index: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "detail/:id",
          element: <Detail />,
        },
        {
          path: "category",
          element: <Category />,
          children: [
            {
              index: true,
              element: <h1>TARİH</h1>,
            },
            {
              path: "tarih",
              element: <h1>TARİH</h1>,
            },
            {
              path: "bilim",
              element: <h1>BİLİM</h1>,
            },
            {
              path: "roman",
              element: <h1>ROMAN</h1>,
            },
          ],
        },
        { path: "*", element: <Undefined /> },
      ],
    },
  ],
  {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

function App() {
  return (
    <RouterProvider
      router={router}
      future={{
        v7_startTransition: true,
      }}
    />
  );
}

export default App;
