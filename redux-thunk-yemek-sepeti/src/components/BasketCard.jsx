import React from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  decQantity,
  deleteFromBasket,
  incQantity,
} from "../redux/actions/basketAction";

const BasketCard = ({ item }) => {
  const { basket } = useSelector((store) => store.basketReducer);
  const dispatch = useDispatch();

  const inc = () => {
    dispatch(incQantity(item));
  };
  const dec = () => {
    const filtered = basket.find((i) => i.id === item.id);

    if (filtered.quantity === 0) {
      dispatch(deleteFromBasket(item.id));
      // console.log("sil");
    } else {
      dispatch(decQantity(item));
      // console.log("azaltmaya devam et");
    }
  };

  return (
    <div className="basket-card">
      <img src={item.photo} alt="" />
      <div className="basket-card-info">
        <p className="basket-name">{item.title}</p>
        <div className="basket-card-price-quantity">
          <p className="basket-card-price">{item.price} $</p>
          <div className="basket-card-quantity-container">
            <button className="decrement" onClick={dec}>
              -
            </button>
            <span className="basket-card-quantity">{item.quantity}</span>
            <button className="increment" onClick={inc}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketCard;
