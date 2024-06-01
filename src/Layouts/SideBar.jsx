import React from "react";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { LuTableProperties } from "react-icons/lu";
import sideBarData from "./sideBarData.json"; // Import the JSON file
import { SiGoogleclassroom } from "react-icons/si";

const icons = {
  MdDashboard: <MdDashboard size={30} className="mr-2" />,
  ImProfile: <ImProfile size={30} className="mr-2" />,
  LuTableProperties: <LuTableProperties size={30} className="mr-2" />,
  classDeatils: <SiGoogleclassroom size={30} className="mr-2" />,
  typographyIcon: (
    <img
      src="https://placehold.co/20x20"
      alt="typography icon"
      className="mr-2"
    />
  ),
  iconsIcon: (
    <img src="https://placehold.co/20x20" alt="icons icon" className="mr-2" />
  ),
  mapsIcon: (
    <img src="https://placehold.co/20x20" alt="maps icon" className="mr-2" />
  ),
  notificationsIcon: (
    <img
      src="https://placehold.co/20x20"
      alt="notifications icon"
      className="mr-2"
    />
  ),
};

const SideBar = () => {
  return (
    <aside className="w-64 bg-white dark:bg-zinc-100 shadow-md">
      <div className="p-4 font-bold text-lg">CREATIVE TIM</div>
      <nav className="mt-4">
        <ul>
          {sideBarData.map((item) => (
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
