import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./assets/default.scss";
import store from "./slices/store";
import { Provider } from "react-redux";
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
