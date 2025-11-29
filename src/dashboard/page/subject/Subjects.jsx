import React, { useState, useEffect } from "react";
import classes from "./Subjects.module.css";

import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/header/Header";
import SubjectTable from "../../components/subjectTable/SubjectTable";
import { CiSearch } from "react-icons/ci";
import { useAuth } from "../../../dashStore/AuthContextDash";

import SubjectSearch from "../../components/search/SubjectSearch";
import Button from "../../components/Button/Button";
import Swal from "sweetalert2";
import Spinner from "react-bootstrap/Spinner";

const Subjects = () => {
  const [subjects, setSubjects] = useState();

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState();

  const [Grade, setGrade] = useState("1");
  const [term, setTerm] = useState("1");
  const [levels, setLevels] = useState([]);
  const { getSubjects, addSubject, delSubject, getGrades } = useAuth();

  const handleSearchChange = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
    const filteredData = subjects.filter((item) =>
      item.subject_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filteredData);
  };

  async function getAllGrades() {
    return await getGrades()
      .then((response) => {
        // console.log(response.data.message.grades);
        setLevels(response.data.message.grades);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Failed to delete",
          text: `${
            error.response ? error.response.data.message : "Error occurred"
          }`,
          showConfirmButton: false,
          timer: 5000,
        });
      });
  }
  useEffect(() => {
    getAllGrades();
  }, []);
  const handleDelete = async (subject_name) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        delSubject(Grade, { subject_name, term })
          .then(() => {
            getAllSubjects();
            Swal.fire("Deleted!", "The grade has been deleted.", "success");
          })
          .catch((error) => {
            Swal.fire({
              icon: "error",
              title: "Failed to delete",
              text: `${
                error.response ? error.response.data.message : "Error occurred"
              }`,
              showConfirmButton: false,
              timer: 5000,
            });
          });
      }
    });
  };

  const AddSubjectPop = () => {
    Swal.fire({
      title: "اضافة مادة جديدة",
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
          <label style="width: 100% ;text-align: start; padding-right: 40px;">اسم المادة</label>
          <input id="swal-input1" class="swal2-input "  style="width: 80% ; border-radius: 10px; border: 1px solid #D6D6D6 ;outline:none;" placeholder="ادخل اسم المادة">
          <label style="width: 100%; text-align: start; padding-right: 40px;">الصف</label>
        <select id="swal-input2" class="swal2-input" style="width: 80%;  border-radius: 10px; border: 1px solid #D6D6D6; outline:none;">
          <option value="" disabled selected > اختر الصف الدراسي </option>
          ${levels.map(
            (level) => `
            <option value=${level.id}  >
              ${level.grade_name}
            </option>;
          `
          )}
        </select>
        <label style="width: 100%; text-align: start; padding-right: 40px;">الترم</label>
        <select id="swal-input3" class="swal2-input" style="width: 80%;  border-radius: 10px; border: 1px solid #D6D6D6; outline:none;">
          <option value="" disabled selected >اختر الترم الدراسي</option>
          <option value="1">الاول</option>
          <option value="2">الثاني</option>
        </select>

          `,
      focusConfirm: false,
      showCancelButton: true,
      showCloseButton: true,
      cancelButtonText: "الغاء",
      confirmButtonText: "اضافة المادة",
      showLoaderOnConfirm: true,
      allowOutsideClick: false,
      preConfirm: () => {
        const subject_name = document.getElementById("swal-input1").value;
        const grade_id = document.getElementById("swal-input2").value;
        setTerm(document.getElementById("swal-input3").value);
        console.log(term);
        if (!subject_name || !grade_id || !term) {
          Swal.showValidationMessage("الرجاء ادخال بيانات المادة ");
          return false;
        }
        addNewSubject({ subject_name, grade_id, term });
      },
    });
  };

  async function addNewSubject({ subject_name, grade_id, term }) {
    console.log("Entered");
    console.log(grade_id, term, subject_name);
    return await addSubject({ grade_id, term, subject_name })
      .then((response) => {
        console.log(response);
        setSubjects([{ subject_name, grade_id, term }]);
        Swal.fire({
          icon: "success",
          title: "New subject created",
          timer: 5000,
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Failed to add",
          text: `${
            error.response ? error.response.data.message : "Error occurred"
          }`,
          showConfirmButton: false,
          timer: 5000,
        });
      });
  }

  async function getAllSubjects() {
    return await getSubjects(Grade, term)
      .then((response) => {
        setSubjects(response.data.message.subjects);
        setFilteredData(response.data.message.subjects);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Failed to get subjects",
          text: `${
            error.response ? error.response.data.message : "Error occurred"
          }`,
          showConfirmButton: false,
          timer: 5000,
        });
      });
  }

  useEffect(() => {
    if (!window.localStorage.getItem("adminToken")) {
      window.location.href = "/dashboard/login";
    }
    getAllSubjects();
  }, [Grade, term]);

  return (
    <>
      <main className="d-flex">
        <Sidebar />
        <div className="body w-100">
          <Header addTitle="المواد الدراسية" />
          <div className={classes.marginWrapper}>
            <div className="Func d-flex justify-content-between align-items-center">
              <h6>عرض المواد المقررة </h6>
              <div className="d-flex">
                <div className={classes["selectContainer"]}>
                  <select
                    value={Grade}
                    onChange={(e) => setGrade(e.target.value)}
                  >
                    <option value="1">الصف الأول</option>
                    <option value="2">الصف الثاني</option>
                    <option value="3">الصف الثالث</option>
                    <option value="4">الصف الرابع</option>
                    <option value="5">الصف الخامس</option>
                    <option value="6">الصف السادس</option>
                  </select>
                </div>
                <div className={classes["selectContainer"]}>
                  <select
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                  >
                    <option value="1">الترم الأول</option>
                    <option value="2">الترم الثاني</option>
                    {/* console.log(term); */}
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.holder}>
            <div className={classes.card}>
              <div className="Func d-flex justify-content-between align-items-center">
                <SubjectSearch
                  searchTerm={searchTerm}
                  onSearchChange={handleSearchChange}
                />
                <Button addTitle={"اضافة مادة"} click={AddSubjectPop} />
              </div>

              {subjects ? (
                <SubjectTable data={filteredData} onDelete={handleDelete} />
              ) : (
                <div className={classes.loading}>
                  <Spinner animation="border" variant="success" role="status">
                    <span className="visually-hidden text-center">
                      Loading...
                    </span>
                  </Spinner>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Subjects;
