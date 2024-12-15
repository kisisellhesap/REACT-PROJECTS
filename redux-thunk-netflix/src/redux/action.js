import api from "../api/api";
import actionTypes from "./actionTypes";

export const getData = () => {
  return (dispatch) => {
    dispatch({ type: actionTypes.loading });

    api
      .get("/account/{20020171}/watchlist/movies")
      .then((res) => {
        dispatch({ type: actionTypes.getData, payload: res.data.results });
      })
      .catch((err) => {
        // console.log(err);
        dispatch({ type: actionTypes.error, payload: err.message });
      });
  };
};

export const toggleList = (detail, isAdded) => {
  console.log("action isAdded", isAdded);

  console.log("detail.id", detail.id);
  return (dispatch) => {
    const body = {
      media_type: "movie",
      media_id: detail.id,
      watchlist: isAdded,
    };
    api
      .post("/account/20020171/watchlist", body)
      .then((res) => {
        console.log(res);
        // dispatch({ type: actionTypes.addData, data: detail });
        //   : dispatch({ type: actionTypes.removeData, data: detail });
      })
      .catch((err) => console.log(err));
  };
};
