import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./jobSlice.js";
const store = configureStore({
  reducer: {
    jobReducer,
  },
});

export default store;
