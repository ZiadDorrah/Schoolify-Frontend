import React, { useEffect, useState } from "react";
import classes from "./AddNewUnits.module.css";
import Sidebar from "../../components/sidebar/Sidebar";
import CardsForAnalysis from "../../components/DashboardComponents/CardsForAnalysis/CardsForAnalysis";
import Header from "../../components/header/Header";
import SubjectSearch from "../../components/search/SubjectSearch";
import Button from "../../components/Button/Button";

import Swal from "sweetalert2";
import Spinner from "react-bootstrap/Spinner";
import UnitTable from "./UnitTable";
import { useAuth } from "../../../dashStore/AuthContextDash";

const AddNewUnits = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [viewData, setViewData] = useState([]);
  const [subjectFilter, setSubjectFilter] = useState("10");

  const [Grade, setGrade] = useState("1");
  const [term, setTerm] = useState("1");
  const [subjects, setSubjects] = useState([]);

  const {
    getSubjects,
    getUnits,
    addUnit,
    addLesson,
    addLessonResources,
    getLesson,
    viewSubjects,
  } = useAuth();
  // const { addUnit, setAddUnit } = useState([]);

  useEffect(() => {
    if (!window.localStorage.getItem("adminToken")) {
      window.location.href = "/dashboard/login";
    }
    getAllSubjects();
    viewAllSubjects();
    // console.log(filteredData);
  }, [Grade, term]);

  // useEffect(() => {
  //   getAllSubjects();
  // }, [Grade, term]);

  const handleSearchChange = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
    const filteredData = viewData.filter((item) =>
      item.subject_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setViewData(filteredData);
  };

  const handleDelete = (id) => {
    const updatedData = filteredData.filter((item) => item.id_No !== id);
    setFilteredData(updatedData);
  };

  async function getAllSubjects() {
    return await getSubjects(Grade, term)
      .then((response) => {
        // console.log(response.data.message.subjects);
        setSubjects(response.data.message.subjects);
        setFilteredData(response.data.message.subjects);
        return response.data.message.subjects;
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
  async function viewAllSubjects() {
    return await viewSubjects(Grade, term)
      .then((response) => {
        console.log(response.data);
        setViewData(response.data);
        return response.data;
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

  async function addNewUnit({ type, subject_id, name, type_order }) {
    return await addUnit({ type, subject_id, name, type_order })
      .then((response) => {
        // console.log(response);
        // console.log(addUnit);
        Swal.fire({
          icon: "success",
          title: "New Unit Created Successfully",
          text: "The new unit has been added to the subject.",
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

  async function addNewLesson(formData) {
    return await addLesson(formData)
      .then((response) => {
        Swal.fire({
          icon: "success",
          title: "New lesson created",
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
  async function addResources(formData) {
    return await addLessonResources(formData)
      .then((response) => {
        Swal.fire({
          icon: "success",
          title: "Resources Added Successfully",
          text: "The resources have been added to the lesson.",
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

  async function handleUnits() {
    Swal.fire({
      title: "الوحدات و الدروس",
      html: `
        <style>
          #swal2-title {
            color: #333333;
            font-weight: bold;
            font-size: 24px;
            text-align: right;
            margin-bottom: 20px;
          }
          #swal-input1::placeholder {
            color: black;
            font-weight: 400;
            font-size: 17px;
          }
          #swal-input1, #swal-input2, #swal-input3, #swal-input4 {
            margin: 10px 0px;
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
            outline: none;
          }
        </style>
        <select id="swal-input1" class="swal2-input" style="width: 80%; border-radius: 10px; border: 1px solid #D6D6D6; outline: none; display: none;">
          <option value="unit" selected>اضافة وحدة جديدة</option>
        </select>
        <label style="width: 100%; text-align: start; padding-right: 40px;">اختيار المادة</label>
        <select id="swal-input2" class="swal2-input" style="width: 80%; border-radius: 10px; border: 1px solid #D6D6D6; outline: none;">
          <option value="" disabled selected>تحميل...</option>
        </select>
        <label style="width: 100%; text-align: start; padding-right: 40px;">اسم الوحدة</label>
        <input type="text" id="swal-input3" style="width: 80%; border-radius: 10px; border: 1px solid #D6D6D6; outline: none; padding: 10px 18px;" placeholder="ادخل اسم الوحدة" />
        <label style="width: 100%; text-align: start; padding-right: 40px;">ترتيب الوحدة</label>
        <input type="number" id="swal-input4" style="width: 80%; border-radius: 10px; border: 1px solid #D6D6D6; outline: none; padding: 10px 18px;" placeholder="ادخل ترتيب الوحدة" />
      `,
      focusConfirm: false,
      showCancelButton: true,
      showCloseButton: true,
      cancelButtonText: "الغاء",
      confirmButtonText: "اضافة الوحدة",
      showLoaderOnConfirm: true,
      allowOutsideClick: false,
      preConfirm: () => {
        const type = document.getElementById("swal-input1").value;
        const subject_id = document.getElementById("swal-input2").value;
        const name = document.getElementById("swal-input3").value;
        const type_order = document.getElementById("swal-input4").value;

        if (!subject_id || !name || !type_order) {
          Swal.showValidationMessage("الرجاء ادخال بيانات الوحدة كاملة");
          return false;
        }
        addNewUnit({ type, subject_id, name, type_order });
      },
      willOpen: () => {
        const swalInput2 = document.getElementById("swal-input2");
        swalInput2.innerHTML = `<option value="" disabled selected>تحميل...</option>`;

        getAllSubjects()
          .then((subjects) => {
            swalInput2.innerHTML = `<option value="" disabled selected>اختر المادة</option>${subjects
              .map(
                (subject) =>
                  `<option value="${subject.id}">${subject.subject_name}</option>`
              )
              .join("")}`;
          })
          .catch((error) => {
            console.error("Error fetching subjects:", error);
            swalInput2.innerHTML = `<option value="" disabled selected>خطأ في تحميل المواد</option>`;
          });
      },
    });
  }

  async function addLessonPopup() {
    Swal.fire({
      title: "اضافة درس جديد",
      html: `
        <style>
          #swal2-title {
            color: #333333;
            font-weight: bold;
            font-size: 24px;
            text-align: right;
            margin-bottom: 20px;
          }
          #swal-input1::placeholder {
            color: black;
            font-weight: 400;
            font-size: 17px;
          }
          #swal-input1, #swal-input2, #swal-input3, #swal-input4 {
            margin: 10px 0px;
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
            outline: none;
          }
          .uploadInput {
            padding: 6px;
            font-size: revert;
          }
        </style>
            
        <select id="swal-input1" class="swal2-input" style="width: 80%; border-radius: 10px; border: 1px solid #D6D6D6; outline: none; display: none;">
          <option value="lesson" selected> اضافة درس جديدة</option>
        </select>
        <label style="width: 100%; text-align: start; padding-right: 40px;">اسم الدرس</label>
        <input id="swal-input22" class="swal2-input" style="width: 80%; border-radius: 10px; border: 1px solid #D6D6D6; outline: none;" placeholder="ادخل اسم الدرس">
        <label style="width: 100%; text-align: start; padding-right: 40px;">اختار المادة</label> 
        <select id="swal-input2" class="swal2-input" style="width: 80%; border-radius: 10px; border: 1px solid #D6D6D6; outline: none;">
          <option value="" disabled selected>تحميل...</option>
        </select>
        <label style="width: 100%; text-align: start; padding-right: 40px;">اختار الوحدة</label> 
        <select id="swal-input3" class="swal2-input" style="width: 80%; border-radius: 10px; border: 1px solid #D6D6D6; outline: none;">
          <option value="" disabled selected>تحميل...</option>
        </select>
        <label style="width: 100%; text-align: start; padding-right: 40px;">ادخل رقم الدرس</label>
        <input id="swal-input4" class="swal2-input" style="width: 80%; border-radius: 10px; border: 1px solid #D6D6D6; outline: none;" placeholder="ادخل رقم الدرس">
        <label style="width: 100%; text-align: start; padding-right: 40px;">صوره الدرس</label>
        <input type="file" id="swal-input5" class="uploadInput" accept="image/png, image/jpeg, image/jpg">
      `,
      focusConfirm: false,
      showCancelButton: true,
      showCloseButton: true,
      cancelButtonText: "الغاء",
      confirmButtonText: "اضاقة الدرس",
      showLoaderOnConfirm: true,
      allowOutsideClick: false,
      preConfirm: () => {
        const type = document.getElementById("swal-input1").value;
        const name = document.getElementById("swal-input22").value;
        const unit_id = document.getElementById("swal-input3").value;
        const type_order = document.getElementById("swal-input4").value;
        const image = document.getElementById("swal-input5").files[0];

        if (!name || !unit_id || !type_order || !image) {
          Swal.showValidationMessage("الرجاء ادخال بيانات الدرس كاملة");
          return false;
        }

        const formData = new FormData();
        formData.append("type", type);
        formData.append("name", name);
        formData.append("unit_id", unit_id);
        formData.append("type_order", type_order);
        formData.append("image", image);

        addNewLesson(formData);
      },
      willOpen: async () => {
        const swalInput2 = document.getElementById("swal-input2");
        const swalInput3 = document.getElementById("swal-input3");

        try {
          const subjects = await getAllSubjects();
          swalInput2.innerHTML = `<option value="" disabled selected>اختر المادة</option>${subjects
            .map(
              (subject) =>
                `<option value="${subject.id}">${subject.subject_name}</option>`
            )
            .join("")}`;
        } catch (error) {
          console.error("Error fetching subjects:", error);
          swalInput2.innerHTML = `<option value="" disabled selected>خطأ في تحميل المواد</option>`;
        }

        swalInput2.addEventListener("change", async (e) => {
          try {
            swalInput3.innerHTML = `<option value="" disabled selected>تحميل...</option>`;
            const response = await getUnits(e.target.value);
            const units = response.data.message;
            swalInput3.innerHTML = `<option value="" disabled selected>اختار الوحدة</option>${units
              .map((unit) => `<option value="${unit.id}">${unit.name}</option>`)
              .join("")}`;
          } catch (error) {
            console.error("Error fetching units:", error);
            swalInput3.innerHTML = `<option value="" disabled selected>خطأ في تحميل الوحدات</option>`;
          }
        });
      },
    });
  }

  async function addResourcesLessonPopup() {
    Swal.fire({
      title: "اضافة محتوي للدرس ",
      html: `
        <style>
          #swal2-title {
            color: #333333;
            font-weight: bold; 
            font-size: 24px; 
            text-align: right; 
            margin-bottom: 20px; 
          }
          #swal-input1::placeholder { 
            color: black; 
            font-weight: 400; 
            font-size: 17px 
          }
          #swal-input1, #swal-input2, #swal-input3, #swal-input4, #swal-input5, #swal-input6, #swal-input7 {
            margin: 10px 0px;
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
            outline: none;
          }
          .uploadInput {
            padding: 6px;
            font-size: revert;
          }
          .textareaInput {
            padding: 6px;
            font-size: revert;
            width: 80%;
            border-radius: 10px;
            border: 1px solid #D6D6D6;
            outline: none;
          }
        </style>
  
        <select id="swal-input1" class="swal2-input" style="width: 80%; border-radius: 10px; border: 1px solid #D6D6D6; outline: none;">
          <option value="" selected disabled>اختار ما تريد اضافتة للدرس</option>
          <option value="video">اضافة فديو</option>
          <option value="text">اضافة ملف</option>
        </select>
        <label style="width: 100%; text-align: start; padding-right: 40px;">اختار المادة</label> 
        <select id="swal-input2" class="swal2-input" style="width: 80%; border-radius: 10px; border: 1px solid #D6D6D6; outline: none;">
          <option value="" disabled selected>تحميل...</option>
        </select>
        <label style="width: 100%; text-align: start; padding-right: 40px;">اختار الوحدة</label> 
        <select id="swal-input3" class="swal2-input" style="width: 80%; border-radius: 10px; border: 1px solid #D6D6D6; outline: none;">
          <option value="" disabled selected>تحميل...</option>
        </select>
        <label style="width: 100%; text-align: start; padding-right: 40px;">اختار الدرس</label> 
        <select id="swal-input4" class="swal2-input" style="width: 80%; border-radius: 10px; border: 1px solid #D6D6D6; outline: none;">
          <option value="" disabled selected>تحميل...</option>
        </select>
        <label style="width: 100%; text-align: start; padding-right: 40px;">اضافة فديو للدرس</label> 
        <input type="file" id="swal-input5" class="uploadInput" accept="video/*">
        <label style="width: 100%; text-align: start; padding-right: 40px;">اضافة محتوي للدرس</label>
        <input type="file" id="swal-input6" class="uploadInput" accept=".pdf">
        <label style="width: 100%; text-align: start; padding-right: 40px;" for="textArea1">اضافة اسم المحتوي </label>
        <input type="text" id="swal-input7" style="width: 80%; border-radius: 10px; border: 1px solid #D6D6D6; outline: none; padding: 10px 18px;" placeholder="ادخل اسم المحتوي" />
        <label style="width: 100%; text-align: start; padding-right: 40px;" for="textArea1">اضافة وصف للدرس</label>
        <textarea id="swal-input8" name="textArea1" class="textareaInput" rows="4" cols="50"></textarea>
      `,
      focusConfirm: false,
      showCancelButton: true,
      showCloseButton: true,
      cancelButtonText: "الغاء",
      confirmButtonText: "اضافة محتوي الدرس",
      showLoaderOnConfirm: true,
      allowOutsideClick: false,
      preConfirm: () => {
        const type = document.getElementById("swal-input1").value;
        const lesson_id = document.getElementById("swal-input4").value;
        const lesson_video = document.getElementById("swal-input5").files[0];
        const lesson_docs = document.getElementById("swal-input6").files[0];
        const lesson_description = document.getElementById("swal-input7").value;
        const description = document.getElementById("swal-input8").value;

        if (!type || !lesson_id) {
          Swal.showValidationMessage("الرجاء ادخال بيانات الدرس كاملة");
          return false;
        }

        const formData = new FormData();
        if (type === "video") {
          formData.append("type", type);
          formData.append("lesson_id", lesson_id);
          formData.append("lesson_video", lesson_video);
          formData.append("description", description);
        }
        if (type === "text") {
          formData.append("type", type);
          formData.append("lesson_id", lesson_id);
          formData.append("lesson_docs", lesson_docs);
          formData.append("lesson_description", lesson_description);
          formData.append("description", description);
        }

        addResources(formData);
      },
      willOpen: async () => {
        const swalInput2 = document.getElementById("swal-input2");
        const swalInput3 = document.getElementById("swal-input3");
        const swalInput4 = document.getElementById("swal-input4");

        try {
          const subjects = await getAllSubjects();
          swalInput2.innerHTML = `<option value="" disabled selected>اختار المادة</option>${subjects
            .map(
              (subject) =>
                `<option value="${subject.id}">${subject.subject_name}</option>`
            )
            .join("")}`;
        } catch (error) {
          console.error("Error fetching subjects:", error);
          swalInput2.innerHTML = `<option value="" disabled selected>خطأ في تحميل المواد</option>`;
        }

        swalInput2.addEventListener("change", async (e) => {
          try {
            swalInput3.innerHTML = `<option value="" disabled selected>تحميل...</option>`;
            const response = await getUnits(e.target.value);
            const units = response.data.message;
            swalInput3.innerHTML = `<option value="" disabled selected>اختار الوحدة</option>${units
              .map((unit) => `<option value="${unit.id}">${unit.name}</option>`)
              .join("")}`;

            swalInput3.addEventListener("change", async (event) => {
              try {
                swalInput4.innerHTML = `<option value="" disabled selected>تحميل...</option>`;
                const unitId = event.target.value;
                const selectedUnit = units.find((unit) => unit.id == unitId);
                const lessons = selectedUnit ? selectedUnit.lessons : [];
                swalInput4.innerHTML = `<option value="" disabled selected>اختار الدرس</option>${lessons
                  .map(
                    (lesson) =>
                      `<option value="${lesson.id}">${lesson.name}</option>`
                  )
                  .join("")}`;
              } catch (error) {
                console.error("Error fetching lessons:", error);
                swalInput4.innerHTML = `<option value="" disabled selected>خطأ في تحميل الدروس</option>`;
              }
            });
          } catch (error) {
            console.error("Error fetching units:", error);
            swalInput3.innerHTML = `<option value="" disabled selected>خطأ في تحميل الوحدات</option>`;
          }
        });
      },
    });
  }

  return (
    <>
      <div className={classes.wrapper}>
        <Sidebar />
        <div className={classes.content}>
          <Header addTitle="المحتوي" />
          <div className={classes.holder}>
            <CardsForAnalysis />
            <div className={classes.marginWrapper}>
              <div className="Func d-flex justify-content-between align-items-center">
                <h6>اختار الصف و الترم الدراسي قبل اضافه الوحده </h6>
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
            <div className={classes.card}>
              <div
                className={`Func d-flex justify-content-between align-items-center ${classes.search_div}`}
              >
                <SubjectSearch
                  searchTerm={searchTerm}
                  onSearchChange={handleSearchChange}
                />

                <div>
                  <Button addTitle={" اضافة وحدة جديدة"} click={handleUnits} />
                  <Button
                    addTitle={" اضافة درس  للوحدة "}
                    click={addLessonPopup}
                  />
                  <Button
                    addTitle={" اضافة محتوي  للدرس "}
                    click={addResourcesLessonPopup}
                  />
                </div>
              </div>
              {subjects ? (
                <UnitTable data={viewData} onDelete={handleDelete} />
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
      </div>
    </>
  );
};

export default AddNewUnits;
