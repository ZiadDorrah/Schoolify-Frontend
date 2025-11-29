import React, { useEffect } from "react";
import classes from "./content.module.css";
import Sidebar from "../../components/sidebar/Sidebar";
import CardsForAnalysis from "../../components/DashboardComponents/CardsForAnalysis/CardsForAnalysis";
import Header from "../../components/header/Header";
import SubjectSearch from "../../components/search/SubjectSearch";
import Button from "../../components/Button/Button";
import SubTitle from "../../components/Uitily/SubTitle";
import student from "../../../assets/images/student-signin-c13744e2 1.png";
import PlatformSubject from "../../components/Uitily/platformSubject";
import Swal from "sweetalert2";
const subjectButtons = [
  { title: "جميع المواد", path: "subjects" },
  { title: "الاختبارات", path: "challenges" },
  { title: "نتائج الاختبارات", path: "" },
  { title: "المسابقات", path: "" },
];

const Content = () => {
  function AddContent() {
    Swal.fire({
      title: "اضافة محتوى جديدة",
      html: `
      <style>#swal2-title {
        color: #333333;
        font-weight: bold; 
        font-size: 24px; 
        text-align: right; 
        margin-bottom: 20px; 
      }
        #swal-input1::placeholder { color: black; font-weight: 400; font-size:17px}
        #swal-input1,#swal-input2,#swal-input3{
          margin:10px 0px
        }
        .swal2-popup .swal2-actions .swal2-confirm {
          background-color: #56AD01; 
          color: white; 
          border-radius: 8px; 
        }
        .swal2-popup .swal2-actions .swal2-cancel {
          background-color: #EEEEEE;
          color: #666666;
          border-radius: 8px;
        }
        .swal2-popup .swal2-close {
          color: #000; 
          outline:none;
        }
      </style>
      <label style="width: 100% ;text-align: start; padding-right: 40px;">اسم المحتوى</label>
      <input id="swal-input1" class="swal2-input "  style="width: 80% ; border-radius: 10px; border: 1px solid #D6D6D6 ;outline:none;" placeholder="ادخل اسم المحتوى">
      <label style="width: 100%; text-align: start; padding-right: 40px;">الصف</label>
    <select id="swal-input2" class="swal2-input" style="width: 80%;  border-radius: 10px; border: 1px solid #D6D6D6; outline:none;">
      <option value="" disabled selected > اختر الصف الدراسي </option>
      <option value="1">الصف الأول</option>
      <option value="2">الصف الثاني</option>
      <option value="3">الصف الثالث</option>
    </select>
    <label style="width: 100%; text-align: start; padding-right: 40px;">الترم</label>
    <select id="swal-input3" class="swal2-input" style="width: 80%;  border-radius: 10px; border: 1px solid #D6D6D6; outline:none;">
      <option value="" disabled selected >اختر الترم الدراسي</option>
      <option value="first">الاول</option>
      <option value="second">الثاني</option>
    </select>
      `,
      focusConfirm: false,
      showCancelButton: true,
      showCloseButton: true,
      cancelButtonText: "الغاء",
      confirmButtonText: "اضافة المحتوى",
      showLoaderOnConfirm: true,
      allowOutsideClick: false,
      preConfirm: () => {},
    });
  }

  useEffect(() => {
    if (!window.localStorage.getItem("adminToken")) {
      window.location.href = "/dashboard/login";
    }
  }, []);
  return (
    <>
      <div className={classes.wrapper}>
        <Sidebar />
        <div className={classes.content}>
          <Header addTitle="المحتوي" />
          <div className={classes.holder}>
            <CardsForAnalysis />
            <div
              className={`Func d-flex justify-content-between align-items-center ${classes.search_div}`}
            >
              <SubjectSearch
              // searchTerm={searchTerm}
              // onSearchChange={handleSearchChange}
              />

              <Button addTitle={"اضافة محتوى"} click={AddContent} />
            </div>
            <div className={classes.search_div}>
              <SubTitle title="جميع المحتوى داخل المنصة" />
              <PlatformSubject subjectButtons={subjectButtons} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
