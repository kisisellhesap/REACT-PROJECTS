import axios from "axios";
import basketActionTypes from "../actionTypes/basketActionTypes";
import { v4 as uuidv4 } from "uuid";

export const displayBasket = () => {
  return (dispatch) => {
    dispatch({ type: basketActionTypes.BASKET_LOADING });
    axios
      .get("http://localhost:3000/basket")
      .then((res) => {
        dispatch({ type: basketActionTypes.DİSPLAY_BASKET, payload: res.data });
      })
      .catch((err) => {
        dispatch({
          type: basketActionTypes.BASKET_ERROR,
          payload: err.message,
        });
      });
  };
};

export const addToBasket = (item) => {
  return (dispatch) => {
    const updateItem = {
      basketId: uuidv4(),
      category: item.category,
      id: item.id,
      title: item.title,
      price: item.price,
      photo: item.photo,
      quantity: 1,
    };
    console.log(updateItem);

    axios
      .post("http://localhost:3000/basket", updateItem)
      .then(() =>
        dispatch({ type: basketActionTypes.ADD_TO_BASKET, payload: updateItem })
      );
  };
};

export const deleteFromBasket = (productId) => {
  return (dispatch) => {
    console.log(productId);
    axios
      .delete(`http://localhost:3000/basket/${productId}`)
      .then((res) => {
        dispatch({
          type: basketActionTypes.REMOVE_FROM_BASKET,
          payload: productId,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const incQantity = (item) => {
  return (dispatch) => {
    const updateItem = { ...item, quantity: item.quantity + 1 };
    axios
      .put(`http://localhost:3000/basket/${item.id}`, updateItem)
      .then((res) => {
        console.log(res.data);
        dispatch({ type: basketActionTypes.INC_QUANTİTY, payload: res.data });
      });
  };
};
export const decQantity = (item) => {
  return (dispatch) => {
    const updateItem = { ...item, quantity: item.quantity - 1 };
    axios
      .put(`http://localhost:3000/basket/${item.id}`, updateItem)
      .then((res) => {
        console.log(res.data);
        dispatch({ type: basketActionTypes.INC_QUANTİTY, payload: res.data });
      });
  };
};
