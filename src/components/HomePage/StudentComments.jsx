import React from "react";
import classes from "./HomePage.module.css";
import image2 from "../../assets/images/image 2.png";
import { NavLink } from "react-router-dom";
const StudentComments = ({ exams }) => {
  return (
    <>
      <div className={`${classes.scContainer}`}>
        <h2>الاختبارات</h2>
        <div className={`${classes.scComments}`}>
          {exams.map((exam) => (
            <div key={exam.id} className={`${classes.scComment} bg-white`}>
              <div className={`${classes.scCommentImgContainer} bg-danger`}>
                <img src={image2} alt="avatar" />
              </div>
              <div className={`${classes.scCommentContent}`}>
                <h2>اختبار {exam.id}</h2>
                <p>الدرجة: {exam.score}</p>
                <NavLink to={`/exams`}>
                  <button className={classes.rsButton}>
                    <p
                      style={{
                        textAlign: "end",
                        display: "block",
                        margin: "0 auto",
                      }}
                    >
                      بدء الاختبار
                    </p>
                  </button>
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default StudentComments;
