import React, { useEffect, useState } from "react";
import classes from "./AllLessons.module.css";
import Sidebar from "../components/Uitily/Sidebar";
import Header from "../components/Uitily/Header";
import Welcome from "../components/Uitily/Welcome";
import Medals from "../components/Uitily/Medals";
import Footer from "../components/Uitily/Footer";
import SubTitle from "../components/Uitily/SubTitle";
import image from "../assets/images/subject.png";
import note from "../assets/images/note-2.png";
import { Link, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { Spinner } from "react-bootstrap";
import { useAuth } from "../dashStore/AuthContextDash";

const AllLessons = () => {
    const { getSubjectExams } = useAuth();
    const [units, setUnits] = useState([]);
    const [filteredUnit, setFilteredUnit] = useState(null);
    const [lessonsExams, setLessonsExams] = useState(null);

    const location = useLocation();
    const { subjectId, unitId, unitName, subjectName } = location.state || {};

    useEffect(() => {
        const fetchLessons = async (subjectId) => {
            try {
                const response = await getSubjectExams(subjectId);
                setUnits(response.data.units);
            } catch (error) {
                Swal.fire({
                    icon: "error",
                    title: "Failed to get Lessons",
                    text: error.response ? error.response.data.message : "Error occurred",
                    showConfirmButton: false,
                    timer: 5000,
                });
            }
        };

        if (subjectId) {
            fetchLessons(subjectId);
        }
    }, [subjectId, getSubjectExams]);

    useEffect(() => {
        if (units.length > 0 && unitId) {
            const filtered = units.find((unit) => unit.id === unitId);
            setFilteredUnit(filtered || null);
            setLessonsExams(filtered?.lessons || null);
        }
    }, [units, unitId]);

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
                                <SubTitle title={"جميع الدروس"} />
                            </div>
                            <div className={`${classes.mohamedsubjectsButtons}`}>
                                {lessonsExams === null ? (
                                    <div className={classes.loading}>
                                        <Spinner animation="border" variant="success" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </Spinner>
                                    </div>
                                ) : (
                                    lessonsExams.map((lesson) => (
                                        <Link
                                            to={`/subject/content/${lesson.id}`}
                                            key={lesson.id}
                                        >
                                            <button className={`${classes.testUnit}`}>
                                                <div className={`${classes.testUnit_content}`}>
                                                    <p>{lesson.name}</p>
                                                    <img
                                                        src={image}
                                                        alt="group"
                                                        className={classes.bookImage}
                                                    />
                                                </div>
                                            </button>
                                        </Link>
                                    ))
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

export default AllLessons;
