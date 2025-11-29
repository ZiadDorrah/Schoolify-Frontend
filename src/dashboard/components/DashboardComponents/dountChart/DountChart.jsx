import React from "react";
import css from "./DountChart.module.css";

const DountChart = () => {
  return (
    <div>
      <div className={css.container}>
        <div className={css.dount}>
          <div className={css.dountSmall}>
            <p>كل الطلاب</p>
            <p>50,000</p>
          </div>
        </div>
        <div className={css.statitics}>
          <div className={css.statitic}>
            <span style={{ background: "green" }}></span>
            <h2>ذكور</h2>
          </div>
          <div className={css.statitic}>
            <span style={{ background: "orange" }}></span>
            <h2>إناث</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DountChart;
