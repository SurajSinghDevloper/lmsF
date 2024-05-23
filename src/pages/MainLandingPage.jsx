import React from "react";
import PageNavbar from "./PageNavbar";
import PagesFooter from "./PagesFooter";
import LandingPageCards from "../components/LandingPageCards";

const MainLandingPage = () => {
  return (
    <>
      <PageNavbar />
      <div className="flex ">
        <div>
          <LandingPageCards />
          <LandingPageCards />
          <LandingPageCards />
        </div>
        <div>
          <LandingPageCards />
          <LandingPageCards />
          <LandingPageCards />
        </div>
        <div>
          <LandingPageCards />
          <LandingPageCards />
          <LandingPageCards />
        </div>
        <div>
          <LandingPageCards />
          <LandingPageCards />
          <LandingPageCards />
        </div>
      </div>
      <PagesFooter />
    </>
  );
};

export default MainLandingPage;
