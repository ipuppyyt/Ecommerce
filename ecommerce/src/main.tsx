import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import HomePage from './pages/HomePage.tsx'
import NotFoundPage from './pages/NotFoundPage.tsx';
import './index.css'
import ProductsPage from './pages/ProductsPage.tsx';
import ProductDetails from './pages/ProductDetails.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
    errorElement:<NotFoundPage/>,
  },
  {
    path: "/products",
    element: <ProductsPage/>
  },
  {
    path: "/products/:productid",
    element: <ProductDetails/>
  }
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
