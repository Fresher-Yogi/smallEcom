import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Authlayout from "../app/layouts/Authlayout";
import LoginPage from "../features/auth/ui/pages/LoginPage";
import RegisterPage from "../features/auth/ui/pages/RegisterPage";
import MainLayout from "../app/layouts/MainLayout";
import HomePage from "../shared/ui/pages/HomePage";
import AboutPage from "../shared/ui/pages/AboutPage";
import PublicRoute from "./protectedRoutes/PublicRoute";
import PrivateRoute from "./protectedRoutes/PrivateRoute";
import { useDispatch } from "react-redux";
import { hydrateUserAction } from "../features/auth/api/authAction";
// import ProductPage from "../features/proudct/ui/ProductsPage";
import ProductPage from "../features/proudct/ui/ProductPage";
import Collections from "../shared/ui/pages/Collections";

const AppRoutes = () => {
    let dispatch = useDispatch()


  useEffect(() => {
   ( ()=>{
      try {
        dispatch(hydrateUserAction())
      } catch (error) {
        console.log('errror ', error);
      }
    })()
  }, []);




  let router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoute />,
      children: [
        {
          path: "",
          element: <Authlayout />,
          children: [
            {
              path: "",
              element: <LoginPage />,
            },
            {
              path: "reg",
              element: <RegisterPage />,
            },
          ],
        },
      ],
    },
    {
      path: "/main",
      element: <PrivateRoute />,
      children: [
        {
          path: "",
          element: <MainLayout />,
          children: [
            {
              path: "",
              element: <HomePage />,
            },
            {
              path: "about",
              element: <AboutPage />,
            },
            {
              path: 'shop',
              element: <ProductPage/>
            },
            {
              path: 'collections',
              element: <Collections/>
            }
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
