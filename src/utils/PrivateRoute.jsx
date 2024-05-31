import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { getCookie } from "../utils/Cookies";

const PrivateRoute = ({ isAuthenticated }) => {
    const token = getCookie("token");

    return isAuthenticated && token ? <Outlet /> : <Navigate to="/authentication" />;
};

export default PrivateRoute;
