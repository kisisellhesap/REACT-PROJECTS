import axios from "axios";
import restaurantActionTypes from "../actionTypes/restaurantActionTypes";

export const displayRestaurant = () => {
  return (dispatch) => {
    dispatch({ type: restaurantActionTypes.LOADING });

    axios
      .get("http://localhost:3000/restaurants")
      .then((res) => {
        dispatch({
          type: restaurantActionTypes.DİSPLAY_RESTAURANT,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({ type: restaurantActionTypes.ERROR, payload: err.message });
      });
  };
};
