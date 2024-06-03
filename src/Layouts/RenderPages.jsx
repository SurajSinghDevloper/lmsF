import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage";
import UserProfilePage from "../pages/UserProfilePage";
import sideBarData from "./sideBarData.json"; // Import the JSON file
import MainLayout from "./MainLayout"; // Import MainLayout component
import ClassAndSeatDetails from "../components/Tables/ClassAndSeatDetails";
import DataTable from "../components/Tables/DataTable";
import UnthorizeAccessPage from "../pages/UnthorizeAccessPage";
import TotalCandidateApplied from "../components/Tables/TotalCandidateApplied";
import SelectedCandidateList from "../components/Tables/SelectedCandidateList";
import RejectedCandidateList from "../components/Tables/RejectedCandidateList";
import AddmissionResult from "../components/Tables/AddmissionResult";
import ExamPortalEventForm from "../components/ExamPortalEventForm";

const Unauthorized = () => <div><UnthorizeAccessPage /></div>;

const RenderPages = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
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
      </Route>
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
      return <DataTable />;
    case "Class Detials":
      return <ClassAndSeatDetails />;
    case "Total Candidate Applied":
      return <TotalCandidateApplied />;
    case "Selected Candidate":
      return <SelectedCandidateList />;
    case "Rejected Candidate":
      return <RejectedCandidateList />;
    case "Publish Result":
      return <AddmissionResult />;
    case "Publish Event":
      return <ExamPortalEventForm />;
    default:
      return <Unauthorized />;
  }
};

export default RenderPages;
