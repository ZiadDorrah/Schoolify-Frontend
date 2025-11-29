import React from "react";
import classes from "./PlatformContent.module.css";

import image from "../../assets/images/subject.png";

import SubTitle from "../Uitily/SubTitle";
import ico from "../../assets/images/student-signin-c13744e2 1.png";
import { NavLink, Link } from "react-router-dom";

const platformSubject = ({ subjectButtons, exam, path }) => {
  return (
    <div className={`${classes.mohamedsubjectsButtons}`}>
      {subjectButtons.map((subject, index) =>
        exam ? (
          <NavLink to={path} key={index}>
            <button className={`${classes.mohamedsubjectButton}`}>
              <p>{subject}</p>
              <img src={image} alt="group" />
            </button>
          </NavLink>
        ) : (
          <Link key={index} to={`/subject/units/${subject}`}>
            <button className={`${classes.mohamedsubjectButton}`}>
              <p>{subject}</p>
              <img src={image} alt="group" />
            </button>
          </Link>
        )
      )}
    </div>
  );
};

export default platformSubject;
