import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage";
import UserProfilePage from "../pages/UserProfilePage";
import { addmission, admitCard, studentPannel, UNVERIFIED_STUDENT } from "./sideBarData"; // Import the JSON file
import MainLayout from "./MainLayout"; // Import MainLayout component
import DataTable from "../pages/examination/DataTable";
import UnthorizeAccessPage from "../pages/UnthorizeAccessPage";
import TotalCandidateApplied from "../pages/examination/TotalCandidateApplied";
import SelectedCandidateList from "../pages/examination/SelectedCandidateList";
import RejectedCandidateList from "../pages/examination/RejectedCandidateList";
import ExamPortalEventForm from "../components/ExamPortalEventForm";
import { useSelector } from "react-redux";
import AddmissionResult from "../pages/examination/AddmissionResult";
import ClassAndSeatDetails from "../pages/examination/ClassAndSeatDetails";
import StudentLandingPage from "../pages/studentPannel/StudentLandingPage";
import AddmissionForm from "../pages/addmission/AddmissionForm";

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
      case 'Student':
        setDataToRender(studentPannel)
        break;
      case 'UNVERIFIED_STUDENT':
        setDataToRender(UNVERIFIED_STUDENT)
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
    case "Student Dashboard":
      return <StudentLandingPage />;
    case "Student Addmission Form":
      return <AddmissionForm />;
    default:
      return <Unauthorized />;
  }
};

export default RenderPages;
