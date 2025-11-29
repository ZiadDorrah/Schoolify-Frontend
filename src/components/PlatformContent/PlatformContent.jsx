import React from "react";
import classes from "./PlatformContent.module.css";
import PlatformButtons from "./PlatformButtons";
import PlatformSubjects from "./PlatformSubjects";
import Footer from "../Uitily/Footer";

const PlatformContent = () => {
  return (
    <>
      <div className="container-fluid">
        <PlatformSubjects />
      </div>
      <Footer/>
    </>
  );
};

export default PlatformContent;
