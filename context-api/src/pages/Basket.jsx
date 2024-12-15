import React, { useContext } from "react";
import { BasketContext } from "../context/BasketContext";
import { Link } from "react-router-dom";
function Basket() {
  const { basket, minusQuantity, plusQuantity, deleteFromBasket } =
    useContext(BasketContext);
  let total = 0;
  let quantity = 0;

  basket.map((item) => {
    total += item.price * item.quantity;
    quantity += item.quantity;
  });

  return (
    <div className="basket">
      <div className="basket-header">
        <h1>{quantity} ürün sepete eklendi</h1>

        <h4> TOTAL : {total.toFixed(2)} ₺ </h4>
      </div>

      {basket.length === 0 ? (
        <div className="basket-empty">
          <p>Öncelikle sepete bir ürün ekleyin</p>
          <Link to="/home">Ürünlere Git</Link>
        </div>
      ) : (
        <div className="basket-list">
          {basket.map((item) => {
            return (
              <div className="basket-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="basket-info">
                  <h3>{item.title}</h3>
                  <div className="basket-body">
                    <h4>{item.category}</h4>
                    <p>{(item.price * item.quantity).toFixed(2)} ₺</p>
                  </div>

                  <div className="basket-settings">
                    <div className="basket-quantity">
                      <button onClick={() => minusQuantity(item.id)}>-</button>
                      <h5>Miktar : {item.quantity}</h5>
                      <button onClick={() => plusQuantity(item.id)}>+</button>
                    </div>

                    <button
                      className="basket-delete"
                      onClick={() => deleteFromBasket(item.id)}
                    >
                      Sil
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Basket;
