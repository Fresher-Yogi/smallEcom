import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const PublicRoute = () => {
  let { loggedInUser, isLoading } = useSelector((store) => store.auth);

  if (isLoading) return <h1>Loading...</h1>;

  if (loggedInUser) return <Navigate to={"/main"} replace/>;

  return <Outlet />;
};

export default PublicRoute;
