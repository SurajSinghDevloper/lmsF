import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage";
import UserProfilePage from "../pages/UserProfilePage";
import { addmission, admitCard } from "./sideBarData"; // Import the JSON file
import MainLayout from "./MainLayout"; // Import MainLayout component
import ClassAndSeatDetails from "../components/Tables/ClassAndSeatDetails";
import DataTable from "../components/Tables/DataTable";
import UnthorizeAccessPage from "../pages/UnthorizeAccessPage";
import TotalCandidateApplied from "../components/Tables/TotalCandidateApplied";
import SelectedCandidateList from "../components/Tables/SelectedCandidateList";
import RejectedCandidateList from "../components/Tables/RejectedCandidateList";
import AddmissionResult from "../components/Tables/AddmissionResult";
import ExamPortalEventForm from "../components/ExamPortalEventForm";
import { useSelector } from "react-redux";

const Unauthorized = () => <div><UnthorizeAccessPage /></div>;

const RenderPages = () => {
  const pageType = useSelector((state) => state.pageType)
  const [dataToRender, setDataToRender] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    switch (pageType) {
      case 'Admission':
        setDataToRender(addmission)
        break;
      case 'AdmitCard':
        setDataToRender(admitCard)
        break;
      default:
        navigate('/features')
    }
  }, [pageType])
  console.log("🚓🚒🏴🏳", dataToRender)
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {dataToRender.map((item) =>
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
              element={<UnthorizeAccessPage />}
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

      console.log("PAGE NAME-====>", pageName)
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
    case "Admit Card Dashboard":
      return <DashboardPage />;
    default:
      return <Unauthorized />;
  }
};

export default RenderPages;
