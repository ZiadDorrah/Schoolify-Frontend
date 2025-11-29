import React, { useEffect } from "react";
import classes from "./Dashboard.module.css";
import Sidebar from "../../components/sidebar/Sidebar";
import CardsForAnalysis from "../../components/DashboardComponents/CardsForAnalysis/CardsForAnalysis";
import StudentTable from "../../components/DashboardComponents/StudentTable/StudentTable";
import DountChart from "../../components/DashboardComponents/dountChart/DountChart";
import Header from "../../components/header/Header";
import Button from "../../components/Button/Button";
import Swal from "sweetalert2";

const Dashboard = () => {
  useEffect(() => {
    if (!window.localStorage.getItem("adminToken")) {
      window.location.href = "/dashboard/login";
    }
  }, []);

  const addPopup = async () => {
    const inputOptions = new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          1: "الترم الاول",
          2: "الترم الثاني",
        });
      }, 1000);
    });

    const result = await Swal.fire({
      title: "اختار الترم الدراسي",
      input: "radio",
      inputOptions,
      inputValidator: (term) => {
        if (!term) {
          return "You need to choose something!";
        }
      },
    });

    const name = result.value;

    if (name) {
      console.log(name);
      Swal.fire({ html: `You selected: ${name}` });
    }
  };

  return (
    <>
      <div className={classes.wrapper}>
        <Sidebar />
        <div className={classes.content}>
          <Header addTitle="لوحه المعلومات" />

          <div className={classes.holder}>
            <CardsForAnalysis />
            <div
              className={`Func d-flex justify-content-between align-items-center ${classes.search_div}`}
            >
              <StudentTable />
              <div>
                <Button addTitle={"اختار الترم الدراسي"} click={addPopup} />
                <DountChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
