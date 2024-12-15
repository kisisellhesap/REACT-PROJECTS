import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ProductProvider } from "./context/ProductContext.jsx";
import { BasketProvider } from "./context/BasketContext.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
createRoot(document.getElementById("root")).render(
  <BasketProvider>
    <ProductProvider>
      <App />
      <ToastContainer />
    </ProductProvider>
  </BasketProvider>
);
