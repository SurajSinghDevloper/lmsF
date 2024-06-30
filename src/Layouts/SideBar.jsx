import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdDashboard, MdOutlineEventNote } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { LuTableProperties } from "react-icons/lu";
import { addmission, admitCard } from "./sideBarData"; // Import the JSON file
import { SiGoogleclassroom } from "react-icons/si";
import { FaPeopleLine } from "react-icons/fa6";
import { LiaNewspaperSolid } from "react-icons/lia";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { useSelector } from "react-redux";


const icons = {
  MdDashboard: <MdDashboard size={30} className="mr-2" />,
  ImProfile: <ImProfile size={30} className="mr-2" />,
  LuTableProperties: <LuTableProperties size={30} className="mr-2" />,
  classDeatils: <SiGoogleclassroom size={30} className="mr-2" />,
  totalCandidateApplied: <FaPeopleLine color="blue" size={30} className="mr-2" />,
  selectedCandidate: <FaPeopleLine color="green" size={30} className="mr-2" />,
  rejectedCandidate: <FaPeopleLine color="red" size={30} className="mr-2" />,
  publisResult: <LiaNewspaperSolid size={30} className="mr-2" />,
  publisEvent: <MdOutlineEventNote size={30} className="mr-2" />,
  notificationsIcon: <MdOutlineNotificationsActive size={30} className="mr-2" />,
};

const SideBar = () => {
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
  return (
    <aside className="w-full h-full bg-white dark:bg-zinc-100 shadow-md ">
      <div className="p-4 font-bold text-lg">CREATIVE TIM</div>
      <nav className="mt-4">
        <ul>
          {dataToRender.map((item) => (
            <li
              key={item.pageName}
              className={`flex items-center p-2 cursor-pointer ${item.status === "active" ? "text-slate-800" : ""
                }`}
            >
              {icons[item.icon]}
              <Link to={item.route}>{item.pageName.toUpperCase()}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-auto p-4">
        <button className="w-full bg-blue-500 text-white py-2 rounded">
          UPGRADE TO PRO
        </button>
      </div>
    </aside>
  );
};

export default SideBar;
