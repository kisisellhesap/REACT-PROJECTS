import basketActionTypes from "../actionTypes/basketActionTypes";

const initialState = {
  basket: [],
  isLoading: true,
  error: null,
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case basketActionTypes.DİSPLAY_BASKET:
      return {
        ...state,
        basket: action.payload,
        error: null,
        isLoading: false,
      };

    case basketActionTypes.ADD_TO_BASKET:
      return { ...state, basket: [...state.basket, action.payload] };

    case basketActionTypes.REMOVE_FROM_BASKET:
      const filtered = state.basket.filter((i) => i.id !== action.payload);

      return { ...state, basket: filtered };

    case basketActionTypes.INC_QUANTİTY:
      const updated = state.basket.map((i) =>
        i.id === action.payload.id ? action.payload : i
      );

      return { ...state, basket: updated };

    case basketActionTypes.DEC_QUANTİTY:
      const updatedItem = state.basket.map((i) =>
        i.id === action.payload.id ? action.payload : i
      );
      return { ...state, basket: updatedItem };

    case basketActionTypes.BASKET_LOADING:
      return { ...state, isLoading: true };

    case basketActionTypes.BASKET_ERROR:
      return { ...state, error: action.payload, isLoading: false };

    default:
      return state;
  }
};

export default basketReducer;
