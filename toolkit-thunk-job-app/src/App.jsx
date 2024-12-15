import React, { useEffect } from "react";
import MainLayout from "./layouts/MainLayout";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import axios from "axios";
import { useDispatch } from "react-redux";
import { displayJob, error, loading } from "./slices/jobSlice";
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loading());
    axios
      .get("http://localhost:3000/jobs")
      .then((res) => {
        // console.log(res.data);
        dispatch(displayJob(res.data));
      })
      .catch((err) => dispatch(error(err)));
  }, []);
  return (
    <RouterProvider router={router}>
      <MainLayout />
    </RouterProvider>
  );
};

export default App;
