import React, { useState, useEffect, useRef } from "react";
import classes from "./Levels.module.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/header/Header";
import Button from "../../components/Button/Button";
import { RiDeleteBin5Line } from "react-icons/ri";
import Swal from "sweetalert2";
import { useAuth } from "../../../dashStore/AuthContextDash";
import Spinner from "react-bootstrap/Spinner";

const Levels = () => {
    const [title] = useState("الصفوف الدراسية");
    const [levels, setLevels] = useState([]);
    const ref = useRef();

    const { addGrades, getGrades, deleteGrade } = useAuth();

    const addPopup = () => {
        Swal.fire({
            title: "اضافة صف جديدة",
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
            <label style="width: 100% ;text-align: start; padding-right: 40px;">اسم الصف</label>
            <input id="swal-input1"  class="swal2-input "  style="width: 80% ; border-radius: 10px; border: 1px solid #D6D6D6 ;outline:none;" placeholder="ادخل اسم الصف">
            `,
            focusConfirm: false,
            showCancelButton: true,
            showCloseButton: true,
            cancelButtonText: "الغاء",
            confirmButtonText: "اضافة الصف",
            showLoaderOnConfirm: true,
            allowOutsideClick: false,
            preConfirm: () => {
                const gradeName = document.getElementById("swal-input1").value;

                if (!gradeName) {
                    Swal.showValidationMessage("الرجاء ادخال اسم الصف");
                    return false;
                }

                addGrade(gradeName);
            },
        });
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
                    text: `${error.response ? error.response.data.message : "Error occurred"
                        }`,
                    showConfirmButton: false,
                    timer: 5000,
                });
            });
    }
    const deleteHandle = async (id) => {
        // Show a confirmation dialog
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
                deleteGrade(id)
                    .then(() => {
                        // Call getAllGrades to refresh the list
                        getAllGrades();

                        // Success message
                        Swal.fire("Deleted!", "The grade has been deleted.", "success");
                    })
                    .catch((error) => {
                        // Error handling
                        Swal.fire({
                            icon: "error",
                            title: "Failed to delete",
                            text: `${error.response ? error.response.data.message : "Error occurred"
                                }`,
                            showConfirmButton: false,
                            timer: 5000,
                        });
                    });
            }
        });
    };

    async function addGrade(grade_name) {
        return await addGrades({ grade_name })
            .then((response) => {
                getAllGrades();
                Swal.fire({
                    icon: "success",
                    title: "New grade created",
                    timer: 5000,
                });
            })
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Failed to delete",
                    text: `${error.response ? error.response.data.message : "Error occurred"
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
        getAllGrades();
    }, []);
    return (
        <>
            <main className="d-flex vh-100">
                <Sidebar />
                <div className="body w-100">
                    <Header addTitle={title} />
                    <div className={classes.holder}>
                        <div className={classes.card}>
                            <div className="Func d-flex justify-content-between align-items-center">
                                <h1>جميع الصفوف داخل المنصة</h1>
                                <Button addTitle={"اضافة صف جديد"} click={addPopup} />
                            </div>
                            {levels.length > 0 ? (
                                <div className={`${classes.levels} row`}>
                                    {levels.map((item, index) => (
                                        <div
                                            key={item.id}
                                            className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center align-items-center"
                                        >
                                            <div
                                                className={`${classes.level} d-flex justify-content-between align-items-center`}
                                            >
                                                <h1 className="m-0">{item.grade_name}</h1>
                                                <button
                                                    className={classes.del}
                                                    onClick={() => deleteHandle(item.id)}
                                                >
                                                    <RiDeleteBin5Line />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
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

export default Levels;
