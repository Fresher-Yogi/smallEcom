import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router";

const PrivateRoute = () => {
  let { loggedInUser } = useSelector((store) => store.auth);

  if (!loggedInUser) return <h1> Loading State!! </h1>

  return <Outlet />;
};

export default PrivateRoute;