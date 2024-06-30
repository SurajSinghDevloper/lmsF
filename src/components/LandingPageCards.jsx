import { Button } from "@nextui-org/react";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setPageType } from "../Redux/Slices/PageTypeSlice";

const LandingPageCards = ({ title, description, icon: Icon, type }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleRoute = () => {
    console.log(type)
    switch (type) {
      case "Admission":
        dispatch(setPageType(type));
        navigate('/addmission-portal/dashboard');
        break;
      case "AdmitCard":
        dispatch(setPageType(type));
        navigate('/admit-card/dashboard');
        break;
      case "Examination":
        dispatch(setPageType(type));
        navigate('/dashboard');
        break;
      case "Result":
        dispatch(setPageType(type));
        navigate('/dashboard');
        break;
      case "Staff":
        dispatch(setPageType(type));
        navigate('/dashboard');
        break;
      case "Library":
        dispatch(setPageType(type));
        navigate('/dashboard');
        break;
      case "Bus":
        dispatch(setPageType(type));
        navigate('/dashboard');
        break;
      case "Student":
        dispatch(setPageType(type));
        navigate('/dashboard');
        break;
      case "ClassServices":
        dispatch(setPageType(type));
        navigate('/dashboard');
        break;
      case "Certificates":
        dispatch(setPageType(type));
        navigate('/dashboard');
        break;
      case "Accounts":
        dispatch(setPageType(type));
        navigate('/dashboard');
        break;
      case "Record":
        dispatch(setPageType(type));
        navigate('/dashboard');
        break;
      default:
        break;
    }
  }
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href={type}>
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          <span>
            <Icon size={50} />{" "}
          </span>{" "}
          {title}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {description}
      </p>
      <Button onClick={handleRoute} color="primary" variant="bordered">
        Go
      </Button>
    </div>
  );
};

export default LandingPageCards;
