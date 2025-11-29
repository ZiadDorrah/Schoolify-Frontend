import React from "react";
import classes from "./HomePage.module.css";
import UnitContent from "../Uitily/UnitContent";
import image from "../../assets/images/Arrow - Right 2.png";
import { NavLink } from "react-router-dom";

const ContentLesson = ({ exams }) => {
  return (
    <>
      <div className={classes.rsTitle}>
        <p>الاختبارات</p>
      </div>
      {exams.map((exam) => (
        <div key={exam.id} className={classes.rightSection}>
          <UnitContent />
          <NavLink to={`/subject/units/${exam.link}/unitExam`}>
            <button className={classes.rsButton}>
              <p>بدء الاختبار علي الوحده</p>
              <div className={classes.rsIconButton}>
                <img src={image} alt="arrow" />
              </div>
            </button>
          </NavLink>
        </div>
      ))}
    </>
  );
};

export default ContentLesson;
