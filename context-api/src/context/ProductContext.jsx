import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();
export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState("all");

  useEffect(() => {
    axios
      .get(
        category === "all"
          ? "https://fakestoreapi.com/products"
          : `https://fakestoreapi.com/products/category/${category}`
      )
      .then((res) => {
        if (res.status === 200) {
          setProduct(res.data);
        } else {
          throw new Error("Couldn't");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [category]);

  return (
    <ProductContext.Provider value={{ product, setProduct, setCategory }}>
      {children}
    </ProductContext.Provider>
  );
};
