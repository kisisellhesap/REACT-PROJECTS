import { createBrowserRouter } from "react-router-dom";
import Detail from "../components/Detail";
import Home from "../components/Home";
import MainLayout from "../layout/MainLayout";
import Basket from "../components/Basket";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: ":id",
        element: <Detail />,
      },
      {
        path: "basket",
        element: <Basket />,
      },
    ],
  },
]);

export default router;
