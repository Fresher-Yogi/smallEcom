import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const PrivateRoute = () => {
  let { loggedInUser, isLoading } = useSelector((store) => store.auth);
  console.log(loggedInUser);

  if (isLoading) return <h1>Loading</h1>;

  if (!loggedInUser) return <Navigate to="/" replace />;

  return <Outlet />;
};

export default PrivateRoute;
