import React from "react";
import { FaStar } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";
import { MdDeliveryDining } from "react-icons/md";

const RestaurantCard = ({ item }) => {
  return (
    <div className="restaurant-card">
      <span className="distance">{item.distance} km uzakta</span>
      <img src={item.photo} alt="" />

      <div className="restaurant-card-body">
        <div className="restaurant-name-rating">
          <p className="restaurant-name">{item.name}</p>
          <div className="restaurant-rating">
            <FaStar />
            <span>{item.rating}</span>
          </div>
        </div>
        <p className="restaurant-minimum-pay"> {item.minPrice} TL minimum</p>
        <div className="restaurant-time-delivery">
          <p className="restaurant-time">
            <MdAccessTimeFilled />
            {item.estimatedDelivery} dak.
          </p>
          <p className="restaurant-delivery">
            <MdDeliveryDining />
            {item.isDeliveryFree ? "Ücretsiz" : "Ücretli"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
