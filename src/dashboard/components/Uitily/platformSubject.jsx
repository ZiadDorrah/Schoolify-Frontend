import React from "react";
import { NavLink, Link } from "react-router-dom";
import classes from "./PlatformContent.module.css";
import image from "../../../assets/images/subject.png";

const PlatformSubject = ({ subjectButtons, exam, path }) => {
  return (
    <div className={classes.mohamedsubjectsButtons}>
      {subjectButtons.map((subject, index) => (
        exam ? (
          <NavLink to={subject.path} key={index}>
            <button className={classes.mohamedsubjectButton}>
              <p>{subject.title}</p>
              <img src={image} alt="group" />
            </button>
          </NavLink>
        ) : (
          <Link to={`/dashboard/${subject.path}`} key={index}>
            <button className={classes.mohamedsubjectButton}>
              <p>{subject.title}</p>
              <img src={image} alt="group" />
            </button>
          </Link>
        )
      ))}
    </div>
  );
};

export default PlatformSubject;
