import React from "react";
import classes from "./HomePage.module.css";
import Image from "../../assets/images/ltAvatar.png";
const LessonTitle = ({ descriptions }) => {
  return (
    <>
      <div className={classes.ltContainer}>
        <p className={classes.ltContainerTitle}>
          {descriptions.map((desc, index) => (
            <div key={index}>
              <h3 className={classes.ltContainerTitle}>
                {" "}
                اسم الدرس :- {desc.name}
              </h3>
            </div>
          ))}{" "}
        </p>
        {/* <div className={classes.ltContainerAvatar}>
          <img src={Image} alt="avatar" />
          <div className={classes.ltTeacherInfo}>
            <h2>أسامة عبدالمقصود</h2>
            <p>مدرس رياضيات</p>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default LessonTitle;
