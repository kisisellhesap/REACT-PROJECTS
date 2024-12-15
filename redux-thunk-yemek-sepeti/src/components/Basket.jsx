import { Link } from "react-router-dom";
import BasketCard from "./BasketCard";
import { useDispatch, useSelector } from "react-redux";
const Basket = () => {
  const { basket } = useSelector((store) => store.basketReducer);
  const dispatch = useDispatch();

  const quantity = basket.reduce((total, i) => total + i.quantity, 0);
  const total = basket.reduce((total, i) => total + i.quantity * i.price, 0);

  return (
    <section className="basket wrapper">
      <div className="basket-container container">
        <h2>Sepet</h2>

        {basket.length === 0 ? (
          "Sepetiniz Boş"
        ) : (
          <div className="basket-main">
            <div className="basket-list">
              {basket.map((item) => {
                return <BasketCard key={item.id} item={item} />;
              })}
            </div>
            <div className="basket-details">
              <h3>Sipariş Detayları</h3>
              <p className="product-total-quantity">
                Ürün Adedi : <span>{quantity}</span>
              </p>
              <p className="product-total-price">
                Toplam Fiyat : <span>{total.toFixed(2)} $</span>
              </p>
              <Link to="/"> Siparişi Onayla</Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Basket;
