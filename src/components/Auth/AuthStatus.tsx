import { useAuth } from "@providers/AuthProvider";
import React from "react";
import { useNavigate } from "react-router-dom";

const AuthStatus = () => {
  console.log('Auth Status');
  const auth = useAuth();
  const navigate = useNavigate();

  if (!auth.user) {
    return <p>You are not logged in.</p>;
  }

  return (
    <p>
      Welcome {auth.user.displayName}!{" "}
      <button
        onClick={() => {
          auth.onSignOut();
          navigate("/");
        }}
      >
        Sign out
      </button>
    </p>
  );
};

export default AuthStatus;
