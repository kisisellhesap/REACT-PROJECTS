import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { BasketContext } from "../context/BasketContext";

function Home() {
  const { product, setProduct, setCategory } = useContext(ProductContext);
  const { basket, addToBasket } = useContext(BasketContext);

  return (
    <div className="home">
      <div className="product-header">
        {product.length > 0 && <h1>{product.length} ürün bulundu</h1>}

        <select
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        >
          <option value="all">all</option>
          <option value="men's clothing">men's clothing</option>
          <option value="jewelery">jewelery</option>
          <option value="electronics">electronics</option>
          <option value="women's clothing">women's clothing</option>
        </select>
      </div>
      <div className="product-list">
        {product.map((item) => (
          <div className="product-item" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="item-info">
              <h3>{item.title}</h3>
              <div className="item-body">
                <h4>{item.category}</h4>
                <p>{item.price} ₺</p>
              </div>
              <button onClick={() => addToBasket(item)}> Sepete Ekle</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
