import React, { useState } from "react";
import css from "./ChallengeButtonBar.module.css";

const buttonsText = [
  { title: "التحديات الحالية" },
  { title: "التحديات المنتهية" },
];
const ChallengeButtonBar = () => {
  const [clickedButton, setClickedButton] = useState(0);

  const handleClickedButton = (index) => {
    setClickedButton(index);
  };
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <div className={css.buttonBar}>
          {buttonsText.map((button, index) => (
            <div
              key={index}
              onClick={() => handleClickedButton(index)}
              className={
                clickedButton === index
                  ? `${css.button} ${css.clicked}`
                  : `${css.button}`
              }
            >
              {button.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChallengeButtonBar;
