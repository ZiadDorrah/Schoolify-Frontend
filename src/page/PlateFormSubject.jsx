import React, { useEffect, useState } from "react";
import classes from "../components/PlatformContent/PlatformContent.module.css";

import Sidebar from "../components/Uitily/Sidebar";
import Header from "../components/Uitily/Header";
import Welcome from "../components/Uitily/Welcome";
import Medals from "../components/Uitily/Medals";
import Footer from "../components/Uitily/Footer";
import PlatformSubject from "../components/PlatformContent/platformSubject";
import SubTitle from "../components/Uitily/SubTitle";
import TermsComponent from "../components/Uitily/TermsComponent";
import Swal from "sweetalert2";
import { useAuth } from "../store/AuthContext";
import image from "../assets/images/subject.png";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const PlateFormExam = () => {
  const { studentSubjects } = useAuth();
  const [grade, setGrade] = useState("1");
  const [grade_name, setGradeName] = useState("");
  const [term, seTterm] = useState("1");
  const [subjects, setSubjects] = useState([]);

  const getTerm = (term) => {
    seTterm(term);
  };
  const getAllSubjects = async () => {
    await studentSubjects()
      .then((response) => {
        setSubjects(response.data.message);
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
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userData"));
    setGrade(data.grade.id);
    setGradeName(data.grade.grade_name);
  }, []);
  useEffect(() => {
    getAllSubjects();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className={`${classes.psWrapper}`}>
          <Sidebar />
          <div className={`${classes.psLeftSection}`}>
            <Header />
            <Welcome />
            <Medals />
            <div className={`${classes.subjectsWrapper}`}>
              <hr className={`${classes.line}`} />
              <div className={`${classes.headerSubjects}`}>
                <SubTitle title={`مواد ${grade_name}`} />
              </div>
              <div className={classes.subjects}>
                {subjects &&
                  subjects.map((subject) => (
                    <Link
                      key={subject.id}
                      to={`/subject/${subject.subject_name}`}
                      state={{
                        subjectId: subject.id,
                        subjectName: subject.subject_name,
                      }}
                    >
                      <button className={`${classes.mohamedsubjectButton}`}>
                        <p>{subject.subject_name}</p>
                        <img src={image} alt="group" />
                      </button>
                    </Link>
                  ))}
                {subjects.length === 0 && (
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
      </div>
      <Footer />
    </>
  );
};

export default PlateFormExam;
