import React from "react";
import classes from "./HomePage.module.css";

const LessonDiscreption = ({ descriptions }) => {
  return (
    <>
      <div className={classes.ldContainer}>
        <div className={classes.ldContainerContent}>
          <h2>وصف الدرس</h2>
          {descriptions.map((desc, index) => (
            <div key={index}>
              {/* <h3>{desc.name}</h3> */}
              <p>{desc.description || "لم يتم توفير وصف لهذا الدرس"}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LessonDiscreption;
