import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { IoRestaurant } from "react-icons/io5";
import { BsBasket } from "react-icons/bs";
import { useSelector } from "react-redux";
const Header = () => {
  const restaurantState = useSelector((store) => store.restaurantReducer);
  const { basket } = useSelector((store) => store.basketReducer);
  const quantity = basket.reduce((total, i) => total + i.quantity, 0);
  return (
    <header className="wrapper">
      <div className="header-container container">
        <Link to="/">ThunkSepeti</Link>
        <div className="header-right">
          <Link to="/" className="res-length-info">
            Yakınınızda {restaurantState.restaurants?.length}
            <span>
              <IoRestaurant />
            </span>
            Restoran var
          </Link>
          <div className="header-btns">
            <button>Giriş Yap</button>
            <button>Kayıt Ol</button>
          </div>
          <Link to="basket">
            <span>
              <BsBasket />
            </span>

            <span className="basket-length">{quantity}</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
