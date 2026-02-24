import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductList from "../pages/ProductList";
import ContactUs from "../pages/ContactUs";
import AboutUs from "../pages/AboutUs";
import Certificates from "../pages/Certificates";
import ProductsDetail from "../pages/ProductsDetail";
import NotFound from "../pages/NotFound";
import Layout from "../layouts/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/ProductList", element: <ProductList /> },
      { path: "/ContactUs", element: <ContactUs /> },
      { path: "/AboutUs", element: <AboutUs /> },
      { path: "/Certificates", element: <Certificates /> },
      { path: "/Products/:id", element: <ProductsDetail /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
export default router;
