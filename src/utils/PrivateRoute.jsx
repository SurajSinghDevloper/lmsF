import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { getCookie } from "../utils/Cookies";

const PrivateRoute = () => {
    const token = getCookie("token");

    return token ? <Outlet /> : <Navigate to="/authentication" />;
};

export default PrivateRoute;
