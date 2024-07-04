import { useAuth } from "@providers/AuthProvider";
import { getAuth } from "firebase/auth";
import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "store";

const PrivateRoutes = () => {
  const auth = useAuth();
  const accessToken = sessionStorage.getItem("accessToken");
  const userEmail = useSelector((state: RootState) => state.auth.user?.email);
  console.log(userEmail, auth);
  if (accessToken) {
    return <Outlet />;
  }

  return <Navigate to="/signin" />;
};

export default PrivateRoutes;
