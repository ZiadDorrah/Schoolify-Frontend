import React from "react";
import classes from "./HomePage.module.css";
import Image from "../../assets/images/Blbook.png";
import Image2 from "../../assets/images/arrow-down.png";

const BelongLesson = ({ files }) => {
  return (
    <>
      <div className={classes.blContainer}>
        <div className={classes.blTitle}>ملحقات الدرس</div>
        <div className={classes.blList}>
          {files.map((file) => (
            <div key={file.id} className={classes.blListElement}>
              <div className={classes.blListContent}>
                <div className={classes.blListIcon}>
                  <img src={Image} alt="book" />
                </div>
                <p>{file.description}</p>
              </div>
              <button>
                <a href={`${file.files}`} download>
                  <img src={Image2} alt="arrow-down" />
                </a>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BelongLesson;
