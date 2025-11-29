import React, { useState } from "react";
import css from "./ButtonsBar.module.css";

const ButtonsBar = ({ clicked }) => {
  const [clickedButton, setClickedButton] = useState("pending");

  const handleClickedButton = (e) => {
    const getStatus = e.target.name;
    if (getStatus === "pending") {
      clicked("pending");
      setClickedButton("pending");
    } else if (getStatus === "active") {
      clicked("active");
      setClickedButton("active");
    } else {
      clicked("inactive");
      setClickedButton("inactive");
    }
  };
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <div className={css.buttonBar}>
          <button
            name="pending"
            className={`${css.button} ${clickedButton === "pending" && css.clicked
              }`}
            onClick={handleClickedButton}
          >
            الطلبات الجديدة
          </button>
          <button
            name="active"
            className={`${css.button} ${clickedButton === "active" && css.clicked
              }`}
            onClick={handleClickedButton}
          >
            الطلبات المقبولة
          </button>
          <button
            name="inactive"
            className={`${css.button} ${clickedButton === "inactive" && css.clicked
              }`}
            onClick={handleClickedButton}
          >
            الطلبات المرفوضه
          </button>
        </div>
      </div>
    </div>
  );
};

export default ButtonsBar;
