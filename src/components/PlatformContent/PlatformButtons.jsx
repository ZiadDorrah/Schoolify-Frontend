import React, { useState, useEffect } from "react";
import classes from "./PlatformContent.module.css";
import image from "../../assets/images/subject.png";
import SubTitle from "../Uitily/SubTitle";
import ico from "../../assets/images/student-signin-c13744e2 1.png";
import PlatformSubject from "./platformSubject";
import { useAuth } from "../../store/AuthContext";

const PlatformButtons = () => {
  const { info } = useAuth();
  const [studentGrade, setStudentGrade] = useState("");

  const getInformation = async () => {
    const response = await info();

    const grade = response.data.message.grade.grade_name;
    setStudentGrade(response.data.message.grade.grade_name);
  };
  useEffect(() => {
    getInformation();
  }, []);

  // const [activeButton, setActiveButton] = useState(1);

  // const toggleButtonHandler = (buttonNumber) => {
  //   setActiveButton(buttonNumber);
  // };

  const subjectButtons = [
    // { title: "جميع المواد", path: '/' },
    // { title: "الاختبارات", path: '/' },
    // { title: "نتائج الاختبارات", path: '/' },
    // { title: "المسابقات", path: '/' },
    // { title: "جميع المواد", path: '/' },

    "المواد الدراسية ",
    "الاختبارات ",
    " المسابقات",
  ];

  return (
    // the h3 in header title have proplem
    <div className={`${classes.subjectsWrapper}`}>
      <hr className={`${classes.line}`} />
      <div className={`${classes.headerSubjects}`}>
        <SubTitle
          icon={ico}
          title={"جميع المحتوى داخل المنصة"}
          paragraph={studentGrade}
        />
      </div>
      <PlatformSubject subjectButtons={subjectButtons} />
    </div>
  );
};

export default PlatformButtons;
