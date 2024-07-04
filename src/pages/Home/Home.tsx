import { useAuth } from "@providers/AuthProvider";
import React from "react";

const Home = () => {
  const { onSignOut } = useAuth();
  return (
    <div>
      <button onClick={onSignOut}>Log out</button>
    </div>
  );
};

export default Home;
