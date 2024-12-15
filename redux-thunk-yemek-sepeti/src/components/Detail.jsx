import React, { useEffect, useState } from "react";
import DetailCard from "./DetailCard";
import { FaArrowDown } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";
import { FaStar } from "react-icons/fa";

import { FaFire } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import restaurantActionTypes from "../redux/actionTypes/restaurantActionTypes";
import axios from "axios";

const Detail = () => {
  const [restaurant, setRestaurant] = useState({});
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();
  const id = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/restaurants/${id.id}`)
      .then((res) => {
        setRestaurant(res.data);
      })
      .catch((err) => {
        dispatch({ type: restaurantActionTypes.ERROR, payload: err.message });
      });
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/products?restaurantId=${id.id}`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        dispatch({ type: restaurantActionTypes.ERROR, payload: err.message });
      });
  }, []);

  return (
    <section className="detail wrapper">
      <div className="detail-container">
        <div className="detail-header">
          <div className="detail-header-container container">
            <img src={restaurant.photo} alt="" />
            <div className="detail-header-info">
              <div className="detail-time-pay">
                <span>
                  <FaArrowDown />
                  {restaurant.minPrice} TL
                </span>
                <span>
                  <MdAccessTimeFilled />
                  min {restaurant.estimatedDelivery} dak.
                </span>
              </div>
              <p className="detail-restaurant-name">{restaurant.name}</p>
              <div className="detail-rating-comment">
                <span className="detail-rating">
                  <FaStar />
                  {restaurant.rating}
                </span>
                <p className="detail-comment"> Yorumları Gör </p>
              </div>
            </div>
          </div>
        </div>
        <div className="detail-body">
          <div className="detail-body-container container">
            {products.length === 0 ? (
              "Restaurant Servis Saatleri Dışındadır."
            ) : (
              <>
                <div className="detail-body-header">
                  <h2>
                    <FaFire />
                    Popüler
                  </h2>
                  <p>Restoranın en çok tercih edilen ürünleri</p>
                </div>
                <div className="detail-body-list">
                  {products.map((item) => (
                    <DetailCard key={item.id} item={item} />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detail;
