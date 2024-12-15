import { createContext, useState } from "react";
import { toast } from "react-toastify";
export const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  const addToBasket = (item) => {
    toast.success("ürün sepete eklendi.");

    const found = basket.find((i) => i.id === item.id);
    if (!found) {
      setBasket([...basket, { ...item, quantity: 1 }]);
    } else {
      setBasket(
        basket.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      );
    }
  };

  const deleteFromBasket = (id) => {
    setBasket(basket.filter((item) => item.id !== id));
    toast.warning("ürün sepetten silindi.");
  };

  const plusQuantity = (id) => {
    setBasket(
      basket.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      })
    );
  };

  const minusQuantity = (id) => {
    const found = basket.find((item) => item.id === id);

    if (found.quantity === 1) {
      deleteFromBasket(id);
    } else {
      setBasket(
        basket.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
      );
    }
  };

  return (
    <BasketContext.Provider
      value={{
        basket,
        setBasket,
        addToBasket,
        deleteFromBasket,
        minusQuantity,
        plusQuantity,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};
