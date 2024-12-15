import actionTypes from "./actionTypes";

const initialState = {
  list: [],
  loading: true,
  error: null,
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.getData:
      return { ...state, loading: false, error: null, list: action.payload };

    case actionTypes.loading:
      return { ...state, loading: true };

    case actionTypes.error:
      return { ...state, loading: false, error: action.payload };

    case actionTypes.addData:
      return { ...state, list: [...state.list, action.payload] };

    case actionTypes.removeData:
      // const filtered = state.list.filter(
      //   (item) => item.id !== action.payload.id
      // );

      return "X";

    default:
      return state;
  }
};

export default listReducer;
