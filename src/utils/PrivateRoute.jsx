import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getCookie } from "./Cookies";

const PrivateRoute = ({ isAuthenticated }) => {
    const token = getCookie("token") || isAuthenticated;
    console.log("TOKEN => ", token);
    return token ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
