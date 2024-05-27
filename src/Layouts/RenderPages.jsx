import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage";
import UserProfilePage from "../pages/UserProfilePage";
import TableListPage from "../pages/TableListPage";
import sideBarData from "./sideBarData.json"; // Import the JSON file

const Unauthorized = () => <div>Unauthorized Access</div>;

const RenderPages = () => {
  return (
    <Routes>
      {sideBarData.map((item) =>
        item.status === "active" ? (
          <Route
            key={item.route}
            path={item.route}
            element={getPageComponent(item.pageName)}
          />
        ) : (
          <Route
            key={item.route}
            path={item.route}
            element={<Unauthorized />}
          />
        )
      )}
      {/* <Route path="*" element={<Navigate to="/dashboard" />} /> */}
    </Routes>
  );
};

const getPageComponent = (pageName) => {
  switch (pageName) {
    case "Dashboard":
      return <DashboardPage />;
    case "User Profile":
      return <UserProfilePage />;
    case "Table List":
      return <TableListPage />;
    default:
      return <Unauthorized />;
  }
};

export default RenderPages;
