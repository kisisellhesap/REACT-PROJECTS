import React, { useEffect } from "react";
import MainLayout from "./components/layouts/MainLayout";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { useDispatch } from "react-redux";
import { getData } from "./redux/action";
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);
  return (
    <RouterProvider router={router}>
      <MainLayout />
    </RouterProvider>
  );
};

export default App;
