import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Sidebar.module.css";
import { HiOutlineHome } from "react-icons/hi2";

const Sidebar = () => {
  return (
    <>
      <div className={classes.sidebar}>
        <h1 className={classes.logo}>Schoolify</h1>
        <div className={classes.sidebarButtons}>
          <ul>
            <NavLink
              to={"/dashboard"}
              className={({ isActive }) => (isActive ? classes.active : "")}
              end
            >
              <li>
                <button className="btn d-flex justify-content-right align-items-center">
                  <HiOutlineHome className={classes.icon} />
                  <h2>لوحة المعلومات</h2>
                </button>
              </li>
            </NavLink>
            <NavLink
              to={"/dashboard/subjects"}
              className={({ isActive }) => (isActive ? classes.active : "")}
              end
            >
              <li>
                <button className="btn d-flex justify-content-right align-items-center">
                  <HiOutlineHome className={classes.icon} />
                  <h2>المواد الدراسية</h2>
                </button>
              </li>
            </NavLink>
            <NavLink
              to={"/dashboard/levels"}
              className={({ isActive }) => (isActive ? classes.active : "")}
              end
            >
              <li>
                <button className="btn d-flex justify-content-right align-items-center">
                  <HiOutlineHome className={classes.icon} />
                  <h2>جميع الصفوف</h2>
                </button>
              </li>
            </NavLink>
            <NavLink
              to={"/dashboard/teachers"}
              className={({ isActive }) => (isActive ? classes.active : "")}
              end
            >
              <li>
                <button className="btn d-flex justify-content-right align-items-center">
                  <HiOutlineHome className={classes.icon} />
                  <h2>المدرسين</h2>
                </button>
              </li>
            </NavLink>
            <NavLink
              to={"/dashboard/students"}
              className={({ isActive }) => (isActive ? classes.active : "")}
              end
            >
              <li>
                <button className="btn d-flex justify-content-right align-items-center">
                  <HiOutlineHome className={classes.icon} />
                  <h2>الطلاب</h2>
                </button>
              </li>
            </NavLink>
            <NavLink
              to={"/dashboard/content"}
              className={({ isActive }) => (isActive ? classes.active : "")}
              end
            >
              <li>
                <button className="btn d-flex justify-content-right align-items-center">
                  <HiOutlineHome className={classes.icon} />
                  <h2>المحتوي</h2>
                </button>
              </li>
            </NavLink>
            <NavLink
              to={"/dashboard/addnewunits"}
              className={({ isActive }) => (isActive ? classes.active : "")}
              end
            >
              <li>
                <button className="btn d-flex justify-content-right align-items-center">
                  <HiOutlineHome className={classes.icon} />
                  <h2>الوحدات</h2>
                </button>
              </li>
            </NavLink>
            <NavLink
              to={"/dashboard/challenges"}
              className={({ isActive }) => (isActive ? classes.active : "")}
              end
            >
              <li>
                <button className="btn d-flex justify-content-right align-items-center">
                  <HiOutlineHome className={classes.icon} />
                  <h2>الاختبارات</h2>
                </button>
              </li>
            </NavLink>
            <NavLink
              to={"/dashboard/addmember"}
              className={({ isActive }) => (isActive ? classes.active : "")}
              end
            >
              <li>
                <button className="btn d-flex justify-content-right align-items-center">
                  <HiOutlineHome className={classes.icon} />
                  <h2>اضافه عضو جديد </h2>
                </button>
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
