import React, { useEffect, useState } from "react";
import classes from "../../assets/css/goAnswer.module.css";
import revision from "../../assets/images/revision.png";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../store/AuthContext";
import Swal from "sweetalert2";
import { Spinner } from "react-bootstrap";

const GoToAnswers = ({ examLink }) => {
  const { getScore } = useAuth();
  const [links, setLinks] = useState([]);
  const [filterLink, setFilterLink] = useState(null);

  useEffect(() => {
    const getScoreExam = async () => {
      try {
        const response = await getScore();
        setLinks(response.data);
        const filteredLink = response.data.find((link) => link.link === examLink);
        setFilterLink(filteredLink);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: `${error.response?.data.message || "An error occurred"}`,
          showConfirmButton: false,
          timer: 5000,
        });
      }
    };
    getScoreExam();
  }, [examLink, getScore]);

  return (
    <>
      {filterLink === null ? (
        <div className={classes.loading}>
          <Spinner animation="border" variant="success" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <div className={`${classes["revision-content"]} `}>
          <img className={classes.image} src={revision} alt="" />
          <h1>لقد إنتهي الإختبار </h1>
          <p>
            حصلت علي <span>{filterLink?.pivot?.score ?? 0}</span> درجة من {filterLink?.score ?? 0}
          </p>
          <NavLink
            style={{ color: "#fff" }}
            to="/subject/units/lessonId/unitExam/result"
          >
            <div className={`btn ${classes.btn} `}>راجع اجاباتك</div>
          </NavLink>
        </div>
      )}
    </>
  );
};

export default GoToAnswers;
