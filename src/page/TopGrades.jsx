import React, { useState } from "react";
import classes from "./TopGrades.module.css";
import Sidebar from "./../components/Uitily/Sidebar";
import Header from "./../components/Uitily/Header";
import Medals from "../components/Uitily/Medals";
import imageHolder from "../assets/images/imageHolder.svg";
import medalstar from "../assets/images/medalstar.svg";

import Footer from "../components/Uitily/Footer";
import TermsComponent from "../components/Uitily/TermsComponent";
import DrawerComponent from "./../components/Uitily/DrawerComponent";

const TopGrades = () => {
  const [isDrawer, setIsDrawer] = useState(false);

  const handleDrawer = (data) => {
    console.log(data);
    setIsDrawer(data);
  };
  return (
    <>
      <div className={`container-fluid`}>
        <div
          className={`${classes.results} d-flex justify-content-between align-items-start`}
        >
          <Sidebar />
          <div className={`w-100 ${classes.resultPage}`}>
            <Header onDrawer={handleDrawer} />
            {!isDrawer ? (
              <>
                <Medals />
                <div className={classes.top}>
                  <h1>قائمة الأوائل </h1>
                  {/* <TermsComponent /> */}

                  <div className={classes["top-students"]}>
                    <div className={`${classes["frame"]} `}>
                      <div className="d-flex align-items-center justify-content-center">
                        <div>
                          <img
                            className={classes["imageHolder"]}
                            src={imageHolder}
                            alt=""
                          />
                        </div>
                        <div className={classes["element"]}>
                          <span className={classes["name"]}> محمد نظير </span>
                          <span className={classes["rank"]}>المركز الأول</span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-center">
                        <p className={classes["grade"]}> </p>
                        <img
                          className={classes["medalstar"]}
                          src={medalstar}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </>
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

export default TopGrades;
