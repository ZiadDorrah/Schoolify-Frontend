import React, { useState } from "react";
// import classes from '../../page/ExamResults.module.css'
import classes from '../PlatformContent/PlatformContent.module.css';
const TermsComponent = ({ onSetTerm }) => {
  const [activeButton, setActiveButton] = useState(1);

  const toggleButtonHandler = (buttonNumber) => {
    setActiveButton(buttonNumber);
    console.log(buttonNumber);
    onSetTerm(buttonNumber);
  };

  return (
    <div className={classes.headerSubjectsButtons}>
      <button
        onClick={() => toggleButtonHandler(1)}
        className={`${classes.headerSubjectButton} ${activeButton === 1 ? classes.clickedButton : ""
          }`}
      >
        الصف الدراسى الاول
      </button>
      <button
        onClick={() => toggleButtonHandler(2)}
        className={`${classes.headerSubjectButton} ${activeButton === 2 ? classes.clickedButton : ""
          }`}
      >
        الصف الدراسى الثانى
      </button>
    </div>
  );
};

export default TermsComponent;