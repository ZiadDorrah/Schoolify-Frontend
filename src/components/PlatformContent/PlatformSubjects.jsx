import React from "react";
import classes from "./PlatformContent.module.css";
import Header from "./../Uitily/Header";
import Welcome from "./../Uitily/Welcome";
import Medals from "./../Uitily/Medals";
import PlatformButtons from "./PlatformButtons";
import Footer from "./../Uitily/Footer";
import Sidebar from "../Uitily/Sidebar";
const PlatformSubjects = () => {
  return (
    <>
      <div className={`${classes.psWrapper}`}>
        <Sidebar />
        <div className={`${classes.psLeftSection}`}>
          <Header />
          <Welcome />
          <Medals />
          <PlatformButtons />
        </div>
      </div>
      {/* <Footer />  */}
    </>
  );
};

export default PlatformSubjects;
