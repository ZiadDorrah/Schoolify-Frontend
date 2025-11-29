import React from "react";
import classes from "./Sidebar.module.css";

import Information_student from "./Information_student";
import { NavLink } from "react-router-dom";

import { FaHome, FaStopwatch20 } from "react-icons/fa";
import { LiaBookSolid } from "react-icons/lia";
import { PiExam, PiStudent } from "react-icons/pi";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { HiOutlineLogout } from "react-icons/hi";

const Sidebar = () => {
  const logoutHandler = () => {
    localStorage.clear();
  };

  return (
    <div className={classes.sidebar}>
      <div className="container text-center ">
        <h4 className={classes.logo}>Schoolify</h4>
        <Information_student />
        <div className={`${classes["sidebar-buttons"]} `}>
          <ul>
            <NavLink
              to={"/home"}
              className={({ isActive }) => (isActive ? classes.active : "")}
              end
            >
              <li>
                <button className="btn d-flex justify-content-right align-items-center">
                  <FaHome />
                  <h2>لوحتى التعليمية</h2>
                </button>
              </li>
            </NavLink>
            <NavLink
              to={"/subject"}
              className={({ isActive }) => (isActive ? classes.active : "")}
              end
            >
              <li>
                <button className="btn d-flex justify-content-right align-items-center">
                  <LiaBookSolid />
                  <h2>المواد الدراسية</h2>
                </button>
              </li>
            </NavLink>
            <NavLink
              to={"/exams"}
              className={({ isActive }) => (isActive ? classes.active : "")}
              end
            >
              <li>
                <button className="btn d-flex justify-content-right align-items-center">
                  <PiExam />
                  <h2>الاختبارات</h2>
                </button>
              </li>
            </NavLink>
            <NavLink
              to={"/challenges"}
              className={({ isActive }) => (isActive ? classes.active : "")}
              end
            >
              <li>
                <button className="btn d-flex justify-content-right align-items-center">
                  <FaStopwatch20 />
                  <h2>المسابقات</h2>
                </button>
              </li>
            </NavLink>
            <NavLink
              to={"/results"}
              className={({ isActive }) => (isActive ? classes.active : "")}
              end
            >
              <li>
                <button className="btn d-flex justify-content-right align-items-center">
                  <IoCheckmarkDoneSharp />
                  <h2>نتائج الاختبارت</h2>
                </button>
              </li>
            </NavLink>
            <NavLink
              to={"/top-students"}
              className={({ isActive }) => (isActive ? classes.active : "")}
              end
            >
              <li>
                <button className="btn d-flex justify-content-right align-items-center">
                  <PiStudent />
                  <h2>الاوائل </h2>
                </button>
              </li>
            </NavLink>
            <NavLink
              to={"/wechsler"}
              className={({ isActive }) => (isActive ? classes.active : "")}
              end
            >
              <li>
                <button className="btn d-flex justify-content-right align-items-center">
                  <LiaBookSolid />
                  <h2>اختبار وكسلر </h2>
                </button>
              </li>
            </NavLink>
            <NavLink
              to={"/login"}
              className={({ isActive }) => (isActive ? classes.active : "")}
              end
            >
              <li>
                <div className={`${classes.logout} `}>
                  <button
                    onClick={logoutHandler}
                    className="btn p-0 d-flex justify-content-right align-items-center"
                  >
                    <HiOutlineLogout />
                    <h2>تسجيل الخروج </h2>
                  </button>
                </div>
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
