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
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 mx-4">
          <div className="p-2 h-full">
            <LandingPageCards
              title="Admission Portal"
              description="Managing admissions comprehensively, covering all admission components."
              type="Admission"
              icon={HiOutlineBookmarkAlt}
            />
          </div>
          <div className="p-2 h-full">
            <LandingPageCards
              title="Admit Card Services"
              description="Issuing of admit cards class-wise and managing the admit card process."
              type="AdmitCard"
              icon={IoNewspaperOutline}
            />
          </div>
          <div className="p-2 h-full">
            <LandingPageCards
              title="Examination Portal"
              description="Examination portal for marks uploading and managing examinations."
              type="Examination"
              icon={FaBookOpenReader}
            />
          </div>
          <div className="p-2 h-full">
            <LandingPageCards
              title="Result Portal"
              description="Result portal for Declaring the Result class wise and managing Result "
              type="Result"
              icon={FaSheetPlastic}
            />
          </div>
          <div className="p-2 h-full">
            <LandingPageCards
              title="Staff Management"
              description="Effective staff management optimizes productivity and fosters a positive work environment."
              type="Staff"
              icon={BsPeople}
            />
          </div>
          <div className="p-2 h-full">
            <LandingPageCards
              title="Library Management"
              description="Effective library management enhances service quality and promotes a welcoming atmosphere."
              type="Library"
              icon={TbBooks}
            />
          </div>
          <div className="p-2 h-full">
            <LandingPageCards
              title="Bus Services Management"
              description="Bus service management ensures efficient operations and enhances customer satisfaction."
              type="Bus"
              icon={GiBus}
            />
          </div>
          <div className="p-2 h-full">
            <LandingPageCards
              title="Student Services"
              description="Efficient student management enhances performance and cultivates a conducive learning atmosphere."
              type="Student"
              icon={FcBusinessman}
            />
          </div>
          <div className="p-2 h-full">
            <LandingPageCards
              title="Class Services and Management"
              description="Effective Class Management boost academic achievement and create effective campus atmosphere."
              type="ClassServices"
              icon={SiGoogleclassroom}
            />
          </div>
          <div className="p-2 h-full">
            <LandingPageCards
              title="Certificates"
              description="Streamlined student certificate distribution enhances operational efficiency and cultivates a conducive ."
              type="Certificates"
              icon={MdOutlineClass}
            />
          </div>
          <div className="p-2 h-full">
            <LandingPageCards
              title="Accounts Services"
              description="Streamlined student certificate distribution enhances operational efficiency and cultivates a conducive ."
              type="Accounts"
              icon={MdOutlineAccountBalanceWallet}
            />
          </div>
          <div className="p-2 h-full">
            <LandingPageCards
              title="Record  House"
              description="Organized record room management enhances procedural efficiency and fosters a conducive academic."
              type="Record"
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
