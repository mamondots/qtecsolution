import Main from "@/Layout/Main";
import CartPage from "@/pages/Home_pages/CartPage/CartPage";
import Home from "@/pages/Home_pages/Home/Home";
import ProductDetails from "@/pages/Home_pages/ProductDetails/ProductDetails";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/product/:id", element: <ProductDetails /> },
      { path: "/cart", element: <CartPage /> },
    ],
  },
]);
