import AuthStatus from "@components/Auth/AuthStatus";
import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      {/* <AuthStatus />

      <ul>
        <li className="font-bold text-primary">
          <Link to="/">Home Page</Link>
        </li>
        <li className="font-bold text-primary">
          <Link to="/protected">Protected Page</Link>
        </li>
      </ul> */}

      <Outlet />
    </div>
  );
};

export default Layout;
