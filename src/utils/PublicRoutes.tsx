import { useAuth } from "@providers/AuthProvider";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = () => {
  const auth = useAuth();
  const accessToken = sessionStorage.getItem("accessToken");
  if (!accessToken) {
    return <Outlet />;
  }

  return <Navigate to="/" />;
};

export default PublicRoutes;
