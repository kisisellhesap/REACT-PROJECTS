import { applyMiddleware, combineReducers, createStore } from "redux";
import restaurantReducer from "./reducers/restaurantReducer";
import { thunk } from "redux-thunk";
import basketReducer from "./reducers/basketReducer";

const rootReducer = combineReducers({
  restaurantReducer,
  basketReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
