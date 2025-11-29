import React, { useEffect, useState } from "react";
import classes from "./Information_student.module.css";

import userLogo from "../../assets/images/student-signin-c13744e2 1.svg";
import { useAuth } from "../../store/AuthContext";
import { useNavigate } from "react-router-dom";

const Information_student = () => {
  const [studentName, setstudentName] = useState("");
  const [studentTrophies, setStudentTrophies] = useState(0);
  const [studentPoints, setStudentPoints] = useState(0);
  const navigate = useNavigate();


  useEffect(() => {
    if (!localStorage.getItem('userData')) {
      navigate('/login');
    }
    const data = JSON.parse(localStorage.getItem('userData'));
    try {
      setstudentName(`${data.first_name} ${data.last_name}`);
    } catch (error) {
      navigate('/login');
    }
  }, []);


  return (
    <>
      <div className={classes.user}>
        <div
          className={` ${classes.userName} d-flex justify-content-center align-items-center`}
        >
          <img src={userLogo} alt="" />
          <h2>{studentName}</h2>
        </div>
        <div
          className={`${classes.userPoints} d-flex justify-content-center align-items-center`}
        >
          <div className={classes.points}>
            <span>{studentPoints}</span>
            <h5>عددالنقط</h5>
          </div>
          <span className={classes.separator}></span>
          <div className="trophies">
            <span>{studentTrophies}</span>
            <h5>الاوسمة</h5>
          </div>
        </div>
      </div>
      <div className={classes.userRes}>
        <div
          className={` ${classes.userName} d-flex justify-content-start align-items-center`}
        >
          <img src={userLogo} alt="" />
          <h2>اهلا بيك {studentName.split(" ")[0]}..</h2>
        </div>
        <div
          className={`${classes.userPoints} d-flex justify-content-around align-items-center text-center`}
        >
          <div className={classes.points}>
            <span>{studentPoints}</span>
            <h2>عددالنقط</h2>
          </div>
          <div className="trophies">
            <span>{studentTrophies}</span>
            <h2>الاوسمة</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Information_student;
