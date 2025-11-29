import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sidebar from "./../../components/sidebar/Sidebar";
import Header from "./../../components/header/Header";
import Button from "./../../components/Button/Button";
import classes from "./Challenge.module.css";
import SubjectSearch from "../../components/search/SubjectSearch";
import ChallengeCard from "../../components/DashboardComponents/ChallengeComponents/ChallengeCard";
import ChallengeButtonsBar from "./../../components/DashboardComponents/ChallengeComponents/ChallengeButtonBar";
import Swal from "sweetalert2";
import Spinner from "react-bootstrap/Spinner";
import CardsForAnalysis from "../../components/DashboardComponents/CardsForAnalysis/CardsForAnalysis";
import { useAuth } from "../../../dashStore/AuthContextDash";
import ChallengeTable from "./ChallengeTable";

const viewData = [
  {
    name: "الرياضيات",
    subject_name: "الدرس الثاني",
    term: 1,
    unit: "الوحدة الاولي",
    time: "30 دقيقة",
  },
  {
    name: "الرياضيات",
    subject_name: "الدرس الثالث",
    term: 1,
    unit: "الوحدة الاولي",
    time: "40 دقيقة",
  },
  {
    name: "اللغه العربيه",
    subject_name: "الدرس الاول",
    term: 1,
    unit: "الوحدة الاولي",
    time: "30 دقيقة",
  },
  {
    name: "العلوم",
    subject_name: "الدرس الاول",
    term: 1,
    unit: "الوحدة الاولي",
    time: "30 دقيقة",
  },
];

export default function Challenge() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [subjectFilter, setSubjectFilter] = useState(viewData);

  const [Grade, setGrade] = useState("1");
  const [term, setTerm] = useState("1");
  const [subjects, setSubjects] = useState([]);
  const [questions, setQuestions] = useState([]);

  const { getSubjects, addQuestions, getUnits, getQuestions, createExam } =
    useAuth();

  useEffect(() => {
    if (!window.localStorage.getItem("adminToken")) {
      window.location.href = "/dashboard/login";
    }
    getAllSubjects();
  }, [Grade, term]);

  const handleSearchChange = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
    const filteredData = subjects.filter((item) =>
      item.subject_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSubjectFilter(filteredData);
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
  async function addNewQuestions(formData) {
    return await addQuestions(formData)
      .then((response) => {
        Swal.fire({
          icon: "success",
          title: "New question created",
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

  async function createNewExam(formData) {
    return await createExam(formData)
      .then((response) => {
        Swal.fire({
          icon: "success",
          title: "New Exam Created",
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

  function handleQuestions() {
    Swal.fire({
      title: "اضافة اسئلة للدرس",
      html: `
        <style>
          #swal2-title {
            color: #333333;
            font-weight: bold;
            font-size: 22px;
            text-align: right;
            margin-bottom: 10px;
          }
          #swal-input1::placeholder { color: black; font-weight: 400; font-size: 17px }
          #swal-input1, #swal-input2, #swal-input3, #swal-input4, #swal-input5, #swal-input6, #swal-input7 {
            margin: 7px 0px;
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
          div:where(.swal2-container) .swal2-html-container {
            padding: 0em 1.6em .3em;
          }
        </style>
        <label style="width: 100%; text-align: start; padding-right: 40px;">اختار المادة</label>
        <select id="swal-input1" class="swal2-input" style="width: 80%; border-radius: 10px; border: 1px solid #D6D6D6; outline: none;">
          <option value="" disabled selected>تحميل...</option>
        </select>
        <label style="width: 100%; text-align: start; padding-right: 40px;">اختار الوحدة</label>
        <select id="swal-input" class="swal2-input" style="width: 80%; border-radius: 10px; border: 1px solid #D6D6D6; outline: none;">
          <option value="" disabled selected>اختار الوحدة</option>
        </select>
        <label style="width: 100%; text-align: start; padding-right: 40px;">اختار الدرس</label>
        <select id="swal-input0" class="swal2-input" style="width: 80%; border-radius: 10px; border: 1px solid #D6D6D6; outline: none;">
          <option value="" disabled selected>اختار الدرس</option>
        </select>
        <label style="width: 100%; text-align: start; padding-right: 40px;">ادخل السؤال</label>
        <input type="text" id="swal-input2" style="width: 80%; border-radius: 10px; border: 1px solid #D6D6D6; outline: none; padding: 10px 18px;" placeholder="ادخل السؤال" />
        <label style="width: 100%; text-align: start; padding-right: 40px;">ادخل الاجابة الاولي</label>
        <input type="text" id="swal-input3" style="width: 80%; border-radius: 10px; border: 1px solid #D6D6D6; outline: none; padding: 10px 18px;" placeholder="ادخل اول اجابة" />
        <label style="width: 100%; text-align: start; padding-right: 40px;">ادخل الاجابة الثانية</label>
        <input type="text" id="swal-input4" style="width: 80%; border-radius: 10px; border: 1px solid #D6D6D6; outline: none; padding: 10px 18px;" placeholder="ادخل ثاني اجابة" />
        <label style="width: 100%; text-align: start; padding-right: 40px;">ادخل الاجابة الثالثة</label>
        <input type="text" id="swal-input5" style="width: 80%; border-radius: 10px; border: 1px solid #D6D6D6; outline: none; padding: 10px 18px;" placeholder="ادخل ثالث اجابة" />
        <label style="width: 100%; text-align: start; padding-right: 40px;">ادخل الاجابة الرابعة</label>
        <input type="text" id="swal-input6" style="width: 80%; border-radius: 10px; border: 1px solid #D6D6D6; outline: none; padding: 10px 18px;" placeholder="ادخل رابع اجابة" />
        <label style="width: 100%; text-align: start; padding-right: 40px;">ادخل الاجابة الصحيحة</label>
        <input type="text" id="swal-input7" style="width: 80%; border-radius: 10px; border: 1px solid #D6D6D6; outline: none; padding: 10px 18px;" placeholder="ادخل الاجابة الصحيحة" />
        <label style="width: 100%; text-align: start; padding-right: 40px;">صوره الدرس</label>
        <input type="file" id="swal-input8" class="uploadInput" accept="image/png, image/jpeg, image/jpg">
      `,
      focusConfirm: false,
      showCancelButton: true,
      showCloseButton: true,
      cancelButtonText: "الغاء",
      confirmButtonText: "اضافة السؤال",
      showLoaderOnConfirm: true,
      allowOutsideClick: false,
      preConfirm: () => {
        const lesson_id = document.getElementById("swal-input0").value;
        const question = document.getElementById("swal-input2").value;
        const answer1 = document.getElementById("swal-input3").value;
        const answer2 = document.getElementById("swal-input4").value;
        const answer3 = document.getElementById("swal-input5").value;
        const answer4 = document.getElementById("swal-input6").value;
        const correct = document.getElementById("swal-input7").value;
        const image = document.getElementById("swal-input8").files[0];

        if (
          !lesson_id ||
          !question ||
          !answer1 ||
          !answer2 ||
          !answer3 ||
          !answer4 ||
          !correct
        ) {
          Swal.showValidationMessage("الرجاء ادخال بيانات السؤال كاملة");
          return false;
        }

        const formData = new FormData();
        formData.append("lesson_id", lesson_id);
        formData.append("question", question);
        formData.append("answers[]", answer1);
        formData.append("answers[]", answer2);
        formData.append("answers[]", answer3);
        formData.append("answers[]", answer4);
        formData.append("correct", correct);
        formData.append("image", image);

        addNewQuestions(formData);
      },
      willOpen: () => {
        const swalInput1 = document.getElementById("swal-input1");
        swalInput1.innerHTML = `<option value="" disabled selected>تحميل...</option>`;
        swalInput1.addEventListener("change", async (e) => {
          const select = document.getElementById("swal-input");
          select.innerHTML = `<option value="" disabled selected>تحميل...</option>`;

          try {
            const response = await getUnits(e.target.value);
            const units = response.data.message;

            const options = units
              .map((unit) => `<option value="${unit.id}">${unit.name}</option>`)
              .join("");
            select.innerHTML = `<option value="" disabled selected>اختار الوحدة</option>${options}`;

            select.addEventListener("change", () => {
              const select2 = document.getElementById("swal-input0");
              select2.innerHTML = `<option value="" disabled selected>تحميل...</option>`;

              const selectedUnitId = select.value;

              const options2 = units
                .map((unit) =>
                  unit.lessons
                    .map((lesson) => {
                      if (unit.id == selectedUnitId) {
                        return `<option value="${lesson.id}">${lesson.name}</option>`;
                      }
                    })
                    .join("")
                )
                .join("");
              select2.innerHTML = `<option value="" disabled selected>اختار الدرس</option>${options2}`;
            });
          } catch (error) {
            console.error("Error fetching units:", error);
          }
        });

        // Fetch subjects and populate the subjects dropdown
        getAllSubjects()
          .then((subjects) => {
            swalInput1.innerHTML = `<option value="" disabled selected>اختار المادة</option>${subjects
              .map(
                (subject) =>
                  `<option value="${subject.id}">${subject.subject_name}</option>`
              )
              .join("")}`;
          })
          .catch((error) => {
            console.error("Error fetching subjects:", error);
            swalInput1.innerHTML = `<option value="" disabled selected>خطأ في تحميل المواد</option>`;
          });
      },
    });
  }

  function handleExams() {
    Swal.fire({
      title: "اضافة امتحان للدرس",
      html: `
        <style>
          #swal2-title {
            color: #333333;
            font-weight: bold;
            font-size: 22px;
            text-align: right;
            margin-bottom: 10px;
          }
          #swal-input1::placeholder { color: black; font-weight: 400; font-size:17px}
          #swal-input1, #swal-input2, #swal-input3, #swal-input4, #swal-input5, #swal-input6, #swal-input7 {
            margin:7px 0px
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
          .uploadInput {
            padding: 6px;
            font-size: revert;
          }
          div:where(.swal2-container) .swal2-html-container {
            padding: 0em 1.6em .3em;
          }
          .form-check {
            width: 80%;
            margin: 0 auto;
          }
          .form-check-label {
            display: block;
            margin: 10px 25px;
            text-align: start;
          }
          .form-check-input {
            float: right;
          }
          .form-check .form-check-input {
            float: right;
          }
        </style>
        <label style="width: 100%; text-align: start; padding-right: 40px;">اسم الامتحان</label>
        <input id="swal-inputname" class="swal2-input" style="width: 80%; border-radius: 10px; border: 1px solid #D6D6D6; outline:none;" placeholder="ادخل اسم الامتحان">
        <label style="width: 100%; text-align: start; padding-right: 40px; margin-top: 10px;">اختار المادة</label>
        <select id="swal-input1" class="swal2-input" style="width: 80%; border-radius: 10px; border: 1px solid #D6D6D6; outline:none;">
          <option value="" disabled selected>تحميل...</option>
        </select>
        <label style="width: 100%; text-align: start; padding-right: 40px; margin-top: 10px;">اختار الوحدة</label>
        <select id="swal-input" class="swal2-input" style="width: 80%; border-radius: 10px; border: 1px solid #D6D6D6; outline:none;">
          <option value="" disabled selected>اختار الوحدة</option>
        </select>
        <label style="width: 100%; text-align: start; padding-right: 40px; margin-top: 10px;">اختار الدرس</label>
        <select id="swal-input0" class="swal2-input" style="width: 80%; border-radius: 10px; border: 1px solid #D6D6D6; outline:none;">
          <option value="" disabled selected>اختار الدرس</option>
        </select>
        <label style="width: 100%; text-align: start; padding-right: 40px; margin-top: 10px;">اختار الاسئلة اللتي توريد اضافتها</label>
        <div class="form-check" id="swal-checkinputs"></div>
      `,
      focusConfirm: false,
      showCancelButton: true,
      showCloseButton: true,
      cancelButtonText: "الغاء",
      confirmButtonText: "اضافة الامتحان",
      showLoaderOnConfirm: true,
      allowOutsideClick: false,
      preConfirm: () => {
        const name = document.getElementById("swal-inputname").value;
        const lesson_id = document.getElementById("swal-input0").value;
        const formData = new FormData();
        const selectedQuestions = Array.from(
          document.querySelectorAll(".form-check-input:checked")
        ).map((input) => {
          formData.append("questions[]", input.value);
        });

        if (!lesson_id || !name || selectedQuestions.length === 0) {
          Swal.showValidationMessage("الرجاء ادخال بيانات الامتحان  كاملة ");
          return false;
        }

        formData.append("lesson_id", lesson_id);

        formData.append("name", name);

        createNewExam(formData);
      },
      willOpen: async () => {
        const swalInput1 = document.getElementById("swal-input1");
        try {
          const subjectsResponse = await getAllSubjects();
          const subjects = subjectsResponse;
          // console.log(subjects);

          swalInput1.innerHTML = `<option value="" disabled selected>اختار المادة</option>${subjects
            .map(
              (subject) =>
                `<option value="${subject.id}">${subject.subject_name}</option>`
            )
            .join("")}`;

          swalInput1.addEventListener("change", async (e) => {
            const select = document.getElementById("swal-input");
            select.innerHTML = `<option value="" disabled selected>تحميل...</option>`;

            try {
              const response = await getUnits(e.target.value);
              const units = response.data.message;

              const options = units
                .map(
                  (unit) => `<option value="${unit.id}">${unit.name}</option>`
                )
                .join("");
              select.innerHTML = `<option value="" disabled selected>اختار الوحدة</option>${options}`;

              select.addEventListener("change", () => {
                const select2 = document.getElementById("swal-input0");
                select2.innerHTML = `<option value="" disabled selected>تحميل...</option>`;

                const selectedUnitId = select.value;

                const options2 = units
                  .map((unit) =>
                    unit.lessons
                      .map((lesson) => {
                        if (unit.id == selectedUnitId) {
                          return `<option value="${lesson.id}">${lesson.name}</option>`;
                        }
                      })
                      .join("")
                  )
                  .join("");
                select2.innerHTML = `<option value="" disabled selected>اختار الدرس</option>${options2}`;
              });

              const select2 = document.getElementById("swal-input0");
              select2.addEventListener("change", async (e) => {
                const answers = document.getElementById("swal-checkinputs");
                answers.innerHTML = `تحميل...`;

                const response = await getQuestions(e.target.value);
                const lessons = response.data.message.questions;

                const options = lessons
                  .map(
                    (lesson) => `
                  <input class="form-check-input" type="checkbox" value=${
                    lesson.id
                  } id="${"flexCheckDefault" + lesson.id}">
                  <label class="form-check-label" for="flexCheckDefault">${
                    lesson.question
                  }</label>
                `
                  )
                  .join("");
                answers.innerHTML = options;
              });
            } catch (error) {
              console.error("Error fetching units:", error);
            }
          });
        } catch (error) {
          console.error("Error fetching subjects:", error);
        }
      },
    });
  }

  return (
    <>
      <div className={classes.wrapper}>
        <Sidebar />
        <div className={classes.content}>
          <Header addTitle="التحديات" />
          <div className={classes.holder}>
            <CardsForAnalysis />
            <div className={classes.marginWrapper}>
              <div className="Func d-flex justify-content-between align-items-center">
                <h6>
                  اختار الصف و الترم الدراسي قبل اضافه السوال او الامتحان{" "}
                </h6>
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
                  <Button
                    addTitle={" اضافة اسئلة للدرس "}
                    click={handleQuestions}
                  />
                  <Button
                    addTitle={" اضافة امتحان للدرس "}
                    click={handleExams}
                  />
                </div>
              </div>
              <ChallengeTable data={subjectFilter} onDelete={handleDelete} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
