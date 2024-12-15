import React from "react";
import MainLayout from "./layout/MainLayout";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
const App = () => {
  return (
    <RouterProvider router={router}>
      <MainLayout />;
    </RouterProvider>
  );
};

export default App;
