import React from "react";
import {
  FaBookOpenReader,
  FaRegFolderOpen,
  FaSheetPlastic,
} from "react-icons/fa6";
import { HiOutlineBookmarkAlt } from "react-icons/hi";
import { IoNewspaperOutline } from "react-icons/io5";
import { BsPeople } from "react-icons/bs";
import { TbBooks } from "react-icons/tb";
import { GiBus } from "react-icons/gi";
import { FcBusinessman } from "react-icons/fc";
import { SiGoogleclassroom } from "react-icons/si";
import { MdOutlineAccountBalanceWallet, MdOutlineClass } from "react-icons/md";
import PageNavbar from "./../PageNavbar";
import PagesFooter from "./../PagesFooter";
import LandingPageCards from "./../../components/LandingPageCards";

const MainLandingPage = () => {
  return (
    <>
      <PageNavbar />
      <div className="flex space-x-9 justify-center w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-2">
            <LandingPageCards
              title="Admission Portal"
              description="Managing admissions comprehensively, covering all admission components."
              link="#"
              icon={HiOutlineBookmarkAlt}
            />
          </div>
          <div className="p-2">
            <LandingPageCards
              title="Admit Card Services"
              description="Issuing of admit cards class-wise and managing the admit card process."
              link="#"
              icon={IoNewspaperOutline}
            />
          </div>
          <div className="p-2">
            <LandingPageCards
              title="Examination Portal"
              description="Examination portal for marks uploading and managing examinations."
              link="#"
              icon={FaBookOpenReader}
            />
          </div>
          <div className="p-2">
            <LandingPageCards
              title="Result Portal"
              description="Result portal for Declaring the Result class wise and managing Result Declaration"
              link="#"
              icon={FaSheetPlastic}
            />
          </div>
          <div className="p-2">
            <LandingPageCards
              title="Staff Management"
              description="Effective staff management optimizes productivity and fosters a positive work environment."
              link="#"
              icon={BsPeople}
            />
          </div>
          <div className="p-2">
            <LandingPageCards
              title="Library Management"
              description="Effective library management enhances service quality and promotes a welcoming atmosphere."
              link="#"
              icon={TbBooks}
            />
          </div>
          <div className="p-2">
            <LandingPageCards
              title="Bus Services Management"
              description="Bus service management ensures efficient operations and enhances customer satisfaction."
              link="#"
              icon={GiBus}
            />
          </div>
          <div className="p-2">
            <LandingPageCards
              title="Student Services"
              description="Efficient student management enhances performance and cultivates a conducive learning atmosphere."
              icon={FcBusinessman}
            />
          </div>
          <div className="p-2">
            <LandingPageCards
              title="Class Services and Management"
              description="Effective Class Management boost academic achievement and create effective campus atmosphere."
              link="#"
              icon={SiGoogleclassroom}
            />
          </div>
          <div className="p-2">
            <LandingPageCards
              title="Certificates"
              description="Streamlined student certificate distribution enhances operational efficiency and cultivates a conducive academic ambiance."
              link="#"
              icon={MdOutlineClass}
            />
          </div>
          <div className="p-2">
            <LandingPageCards
              title="Accounts Services"
              description="Streamlined student certificate distribution enhances operational efficiency and cultivates a conducive academic ambiance."
              link="#"
              icon={MdOutlineAccountBalanceWallet}
            />
          </div>
          <div className="p-2">
            <LandingPageCards
              title="Record  House"
              description="Organized record room management enhances procedural efficiency and fosters a conducive academic environment."
              link="#"
              icon={FaRegFolderOpen}
            />
          </div>
        </div>
      </div>
      <div>
        <PagesFooter />
      </div>
    </>
  );
};

export default MainLandingPage;
