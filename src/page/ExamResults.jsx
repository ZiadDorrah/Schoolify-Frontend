import React, { useState } from "react";
import classes from "./ExamResults.module.css";
import Sidebar from "./../components/Uitily/Sidebar";
import Header from "./../components/Uitily/Header";
import Medals from "../components/Uitily/Medals";
import calendar from "../assets/images/calendar.svg";
import arrowUp from "../assets/images/arrow-up.svg";
import Footer from "../components/Uitily/Footer";
import TermsComponent from "../components/Uitily/TermsComponent";
import DrawerComponent from "./../components/Uitily/DrawerComponent";

const ExamResults = () => {
  const [isDrawer, setIsDrawer] = useState(false);

  const handleDrawer = (data) => {
    console.log(data);
    setIsDrawer(data);
  };

  const arrowDownStyle = {
    transform: "rotate(180deg)",
  };

  const [isListOpen, setListOpen] = useState({});

  const toggleList = (subject) => {
    setListOpen((prevState) => ({
      ...prevState,
      [subject]: !prevState[subject],
    }));
  };

  function calculatePercentage(score, maxScore) {
    return (score / maxScore) * 100;
  }

  return (
    <>
      <div className={`container-fluid`}>
        <div className={`${classes.results} d-flex justify-content-between`}>
          <Sidebar />
          <div className={`w-100 ${classes.resultPage}`}>
            <Header onDrawer={handleDrawer} />
            {!isDrawer ? (
              <div className={classes["padded-container"]}>
                <Medals />
                <div className={classes.result}>
                  <h1>نتائج الاختبارات</h1>
                  {/* <TermsComponent /> */}

                  {[
                    "اللغة العربية",
                    "العلوم",
                    "الرياضيات",
                    "اللغة الاجليزية",
                  ].map((subject) => (
                    <div
                      key={subject}
                      className={`${classes.subject} ${
                        isListOpen[subject] ? classes.open : ""
                      }`}
                    >
                      <div
                        className={`${classes["frame"]} ${
                          isListOpen[subject] ? classes.openFrame : ""
                        }`}
                      >
                        <div className="d-flex align-items-center justify-content-between ">
                          <img
                            className={`${classes["calendar"]} ms-2`}
                            src={calendar}
                            alt=""
                          />
                          <p className={classes["name"]}>
                            نتيجة اختبار مادة {subject}
                          </p>
                        </div>

                        <div className="d-flex align-items-center justify-content-between ">
                          <p className={classes["element"]}>
                            <span className={classes["text-wrapper"]}>
                              المجموع التراكمي للمادة خلال التيرم :
                            </span>
                            <span className={`${classes["span"]} mx-3`}></span>
                          </p>

                          <img
                            className={classes["arrow"]}
                            src={isListOpen[subject] ? arrowUp : arrowUp}
                            alt=""
                            style={isListOpen[subject] ? {} : arrowDownStyle}
                            onClick={() => toggleList(subject)}
                          />
                        </div>
                      </div>

                      {isListOpen[subject] && (
                        <div className={classes.dropdownList}>
                          <div className={classes.frame}>
                            <p className={classes["name"]}>
                              نتيجة اختبار مادة {subject} على الدرس الاول
                            </p>
                            <p className={classes["element"]}>
                              <span
                                className={
                                  calculatePercentage(100, 70) >= 50
                                    ? classes["goodDegree"]
                                    : classes["badDegree"]
                                }
                              >
                                80%
                              </span>
                            </p>
                          </div>
                          <div className={classes.frame}>
                            <p className={classes["name"]}>
                              نتيجة اختبار مادة {subject} على الدرس الثاني
                            </p>
                            <p className={classes["element"]}>
                              <span
                                className={
                                  calculatePercentage(100, 70) >= 50
                                    ? classes["goodDegree"]
                                    : classes["badDegree"]
                                }
                              ></span>
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
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

export default ExamResults;
