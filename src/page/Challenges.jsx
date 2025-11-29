import React, { useEffect, useState } from "react";
import classes from "./Challenges.module.css";

import Sidebar from "./../components/Uitily/Sidebar";
import Header from "./../components/Uitily/Header";
import Welcome from "../components/Uitily/Welcome";
import Medals from "../components/Uitily/Medals";

import levelsIcon from "../assets/images/levels-challenge.svg";
import currentLevelIcon from "../assets/images/currentLevel.svg";
import currentPiontsIcon from "../assets/images/currentPiontsIcon.svg";
import challengesUnits from "../assets/images/challenges-units.svg";
import noChallenge from "../assets/images/no-challenge.svg";
import Information_student from "./../components/Uitily/Information_student";
import Footer from "../components/Uitily/Footer";
import DrawerComponent from "./../components/Uitily/DrawerComponent";

import Swal from "sweetalert2";
import styles from "../assets/css/popup.module.css";
import mark from "../assets/images/Mask group.png";
import popImage2 from "../assets/images/popIamge2.png";

const Challenges = () => {
  const title = "مستويات التعليمية";
  const text =
    "الان ف منصة يمكنك كسب المزيد من النقاط والارتقاء بمستويات اعلى للحصول على مكافاة";

  const [currentLevel, setCurrentLevel] = useState(0);
  const [currentPoints, setCurrentPoints] = useState(0);
  const [isChallenge, setIsChallenge] = useState(true);
  const [challengeStarted, setChallengeStarted] = useState({
    is: true,
    width: 25,
  });

  const [isDrawer, setIsDrawer] = useState(false);

  const handleDrawer = (data) => {
    console.log(data);
    setIsDrawer(data);
  };
  const showPopup = () => {
    Swal.fire({
      showCloseButton: true,
      showCancelButton: false,
      customClass: {
        title: styles["popup-title"],
        container: styles["custom-popup-container"],
      },
      html: `
            <div class="${styles["popup-content"]}">
              <h1 class="${styles["popup-title"]}">${title}</h1>
              <p class="${styles["popup-text"]}">${text}</p>
              <img src="${popImage2}" alt="image" class="${styles["popup2-image"]}">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th style="text-align:start;">المستوى</th>
                    <th style="text-align:end;">عدد النقاط</th>
                    <!-- Add more columns as needed -->
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style="text-align:start;"><img src="${mark}" alt="image" "> المستوى الاول</td>
                    <td style="text-align:end;">500</td>
                  </tr>
                  <tr>
                    <td style="text-align:start;"><img src="${mark}" alt="image" "> المستوى الاول</td>
                    <td style="text-align:end;">500</td>
                  </tr>
                </tbody>
              </table>
              
            </div>
          `,
      showConfirmButton: false, // Hide the default confirm button
    }).then((result) => {
      // You can handle the confirmation action here if needed
      if (result.isDismissed) {
        console.log("Cancelled");
      }
    });
  };

  return (
    <>
      <div className={`container-fluid`}>
        <div
          className={`${classes.chachallengs}  d-flex justify-content-between`}
        >
          <Sidebar />
          <div className={`w-100 ${classes.page}`}>
            <Header onDrawer={handleDrawer} />
            {!isDrawer ? (
              <>
                <div className={classes["info-stu-res"]}>
                  <Information_student />
                </div>
                <Welcome />
                <Medals />
                <div className={classes.challenge}>
                  <h1>التحديات</h1>
                  <div className={classes["challenge-pionts"]}>
                    <div className="d-flex justify-content-between align-items-center flex-wrap">
                      <div
                        className={`${classes.points} d-flex justify-content-between align-items-center`}
                      >
                        <div
                          className={`${classes["current-level"]} d-flex justify-content-between align-items-center`}
                        >
                          <img src={currentLevelIcon} alt="" />
                          <div>
                            <h2 style={{ fontSize: "1.5rem" }}>
                              المستوي الحالي
                            </h2>
                            <span>{currentLevel}</span>
                          </div>
                        </div>
                        <div
                          className={`${classes["current-points"]} d-flex justify-content-between align-items-center`}
                        >
                          <img src={currentPiontsIcon} alt="" />
                          <div>
                            <h2 style={{ fontSize: "1.5rem" }}>
                              المستوي الحالي
                            </h2>
                            <span>{currentPoints}</span>
                          </div>
                        </div>
                      </div>
                      <button className="btn" onClick={() => showPopup()}>
                        <div
                          className={`${classes.levels} d-flex justify-content-between align-items-center`}
                        >
                          <img src={levelsIcon} alt="" />
                          <h1>عن المستويات</h1>
                        </div>
                      </button>
                    </div>
                  </div>
                  {isChallenge ? (
                    <div
                      className={`${classes["Challenges-units"]} d-flex justify-content-between align-items-center`}
                    >
                      <div className={`${classes.card} text-center`}>
                        <img src={challengesUnits} alt="" />
                        <h2>اكمال الوحدة الاولى في اسبوع</h2>
                        {!challengeStarted.is ? (
                          <div className={`btn ${classes.btn} `}>
                            ابدا التحدي
                          </div>
                        ) : (
                          <div>
                            <div className={`progress ${classes.progress}`}>
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{
                                  width: `${challengeStarted.width}%`,
                                  backgroundColor: "#56AD01",
                                  borderRadius: "9px",
                                }}
                                aria-valuenow="25"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center flex-wrap">
                              <h3 style={{ color: "#000" }}>لقد انتهيت من </h3>
                              <span
                                style={{ color: "#F6A609" }}
                              >{`${challengeStarted.width} %`}</span>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className={`${classes.card} text-center`}>
                        <img src={challengesUnits} alt="" />
                        <h2> اكمال الوحدة الثانية ف يومين</h2>
                        {!challengeStarted.is ? (
                          <div className={`btn ${classes.btn} `}>
                            ابدا التحدي
                          </div>
                        ) : (
                          <div>
                            <div className={`progress ${classes.progress}`}>
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{
                                  width: `${challengeStarted.width}%`,
                                  backgroundColor: "#56AD01",
                                  borderRadius: "9px",
                                }}
                                aria-valuenow="25"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center flex-wrap">
                              <h3 style={{ color: "#000" }}>لقد انتهيت من </h3>
                              <span style={{ color: "#F6A609" }}>{`50 %`}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className={`${classes.noChallenge} text-center`}>
                      <img className="text-center" src={noChallenge} alt="" />
                    </div>
                  )}
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

export default Challenges;
