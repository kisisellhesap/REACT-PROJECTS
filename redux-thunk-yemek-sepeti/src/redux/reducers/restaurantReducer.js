import restaurantActionTypes from "../actionTypes/restaurantActionTypes";

const initialState = {
  restaurants: [],
  isLoading: true,
  error: null,
};

const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case restaurantActionTypes.DİSPLAY_RESTAURANT:
      return {
        ...state,
        isLoading: false,
        error: null,
        restaurants: action.payload,
      };
    case restaurantActionTypes.LOADING:
      return { ...state, isLoading: true };
    case restaurantActionTypes.ERROR:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};

export default restaurantReducer;
