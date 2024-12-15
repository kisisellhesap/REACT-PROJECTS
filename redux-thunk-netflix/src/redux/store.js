import { applyMiddleware, combineReducers, createStore } from "redux";
import listReducer from "./listReducer";
import { thunk } from "redux-thunk";
const rootReducer = combineReducers({
  listReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
