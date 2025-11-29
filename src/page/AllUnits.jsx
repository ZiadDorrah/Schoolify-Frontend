import React, { useEffect, useState } from "react";
import classes from "./AllUnits.module.css";

import Sidebar from "../components/Uitily/Sidebar";
import Header from "../components/Uitily/Header";
import Welcome from "../components/Uitily/Welcome";
import Medals from "../components/Uitily/Medals";
import Footer from "../components/Uitily/Footer";
import SubTitle from "../components/Uitily/SubTitle";
import image from "../assets/images/subject.png";
import clockIcon from "../assets/images/clock.png";
import note from "../assets/images/note-2.png";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../store/AuthContext";
import Swal from "sweetalert2";
import { Spinner } from "react-bootstrap";

const AllUnits = () => {
    const { getUnits } = useAuth();
    const [units, setUnits] = useState([]);
    const location = useLocation();
    const { subjectId, subjectName } = location.state || {};

    const getAllUnits = async (id) => {
        await getUnits(id)
            .then((response) => {
                setUnits(response.data.message);
                console.log(response.data.message);
            })
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Failed to get Units",
                    text: `${error.response ? error.response.data.message : "Error occurred"
                        }`,
                    showConfirmButton: false,
                    timer: 5000,
                });
            });
    };

    useEffect(() => {
        console.log("subjectId:", subjectId); // Debugging
        if (subjectId) {
            getAllUnits(subjectId);
        }
    }, [subjectId]);

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
                                <SubTitle title={"جميع الوحدات "} />
                            </div>
                            <div className={`${classes.mohamedsubjectsButtons}`}>
                                {units &&
                                    units.map((unit) => (
                                        <Link
                                            key={unit.id}
                                            to={`/subject/${subjectName}/${unit.name}`}
                                            state={{ subjectId, unitId: unit.id, subjectName: subjectName, unitName: unit.name }}
                                        >
                                            <button className={`${classes.testUnit}`}>
                                                <div className={`${classes.testUnit_content}`}>
                                                    <p>{unit.name}</p>
                                                    <img
                                                        src={image}
                                                        alt="group"
                                                        className={classes.bookImage}
                                                    />
                                                </div>
                                            </button>
                                        </Link>
                                    ))}
                                {units.length === 0 && (
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

export default AllUnits;
