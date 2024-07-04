import RequiredAuth from "@pages/Auth";
import Home from "@pages/Home";
import Protected from "@pages/Protected";
import SignIn from "@pages/SignIn";
import SignUp from "@pages/SignUp";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { useAuth } from "@providers/AuthProvider";
import PrivateRoutes from "@utils/PrivateRoutes";
import PublicRoutes from "@utils/PublicRoutes";

const AppRoutes = () => {
  const { user } = useAuth();
  console.log(user);

  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
      <Route element={<PublicRoutes />}>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
