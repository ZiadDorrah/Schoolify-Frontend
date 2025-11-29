import React, { useState } from "react";
// import ButtonBase from '../assets/images/ButtonBase.svg'
import classes from "./Subject.module.css";
import Sidebar from "../components/Uitily/Sidebar";
import Header from "../components/Uitily/Header";
import Footer from "../components/Uitily/Footer";
import UnitContent from "../components/Uitily/UnitContent";
import StartExam from "../components/Uitily/StartExam";
// import Subject from '../components/Uitily/UnitExam';
import DrawerComponent from "./../components/Uitily/DrawerComponent";
import { useLocation } from "react-router-dom";

const Subject = () => {
  const [isDrawer, setIsDrawer] = useState(false);

  const location = useLocation();
  const { lessonName, examLink } = location.state || {};

  const handleDrawer = (data) => {
    setIsDrawer(data);
  };

  return (
    <>
      <div className={`container-fluid`}>
        <div className={`${classes.subject} `}>
          <Sidebar />
          <div className={` ${classes.subjectPage}`}>
            <Header onDrawer={handleDrawer} />
            {!isDrawer ? (
              <div className={classes.subjectt}>
                <StartExam lessonName={lessonName} examLink={examLink} />
              </div>
            ) : (
              <DrawerComponent />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Subject;
