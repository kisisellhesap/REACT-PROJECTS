import React, { useEffect } from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { displayRestaurant } from "../redux/actions/restaurantAction";
import { displayBasket } from "../redux/actions/basketAction";

const MainLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(displayRestaurant());
    dispatch(displayBasket());
  }, []);
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
};

export default MainLayout;
