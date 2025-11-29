import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

import classes from "./Students.module.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/header/Header";
import ButtonsBar from "../../components/StudentsComponents/ButtonsBar/ButtonsBar";
import ModfiyCards from "../../components/StudentsComponents/ModfiyCards/ModfiyCards";

import { useAuth } from "../../../dashStore/AuthContextDash";
import Spinner from "react-bootstrap/Spinner";
import Pagination from "./../../components/pagination/Pagination";

const Students = () => {
  const { getStudents, UpdateStudentStatus } = useAuth();

  const [loading, setLoading] = useState(true);

  const [students, setStudents] = useState([]);
  const [statusFilter, setStatusFilter] = useState("pending");
  const [gradeFilter, setGradeFilter] = useState("1"); // Default grade is '1'

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Change this to control the number of items per page

  // Calculate the index range for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = students.slice(indexOfFirstItem, indexOfLastItem);

  // Function to handle page change
  const onPageChange = (pageNumber) => setCurrentPage(pageNumber);

  // Load students from API
  const loadStudents = async () => {
    return await getStudents(statusFilter, gradeFilter)
      .then((response) => {
        setStudents(response.data); // Assuming response.data contains the array of students
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.response.data.message);
        Swal.fire({
          icon: "error",
          title: "Error loading students",
          text: err.response?.data.message || "Unknown error occurred",
          showConfirmButton: false,
          allowOutsideClick: false,
          allowEscapeKey: false,
        });
      });
  };

  const UpdataStatus = async (stu_id, status) => {
    console.log(stu_id, status);
    return await UpdateStudentStatus({ stu_id, status })
      .then((response) => {
        console.log(response);
        Swal.fire(
          "Success!",
          "The student status has been updated.",
          "success"
        );
        loadStudents();
      })
      .catch((err) => {
        Swal.fire({
          icon: "Error!",
          title: `${err.response.data.message}`,
        });
      });
  };

  useEffect(() => {
    if (!window.localStorage.getItem("adminToken")) {
      window.location.href = "/dashboard/login";
    }

    loadStudents();
  }, [statusFilter, gradeFilter]); // Re-load students when statusFilter changes

  return (
    <div className={classes.wrapper}>
      <Sidebar />
      <div className={classes.content}>
        <Header addTitle="جميع الطلاب" />
        <div className={classes.container}>
          <div className={classes.upperSide}>
            <ModfiyCards />
          </div>
          <div className={classes.middleSide}>
            <div className="Func d-flex justify-content-between align-items-center">
              <h6>عرض طلبات تسجيل طلاب</h6>
              <div className={classes.selectContainer}>
                <select
                  value={gradeFilter}
                  onChange={(e) => setGradeFilter(e.target.value)}
                >
                  <option value="1">الصف الأول</option>
                  <option value="11">الصف الثاني</option>
                  <option value="3">الصف الثالث</option>
                  <option value="4">الصف الرابع</option>
                  <option value="5">الصف الخامس</option>
                  <option value="6">الصف السادس</option>
                </select>
              </div>
            </div>
            <ButtonsBar clicked={(value) => setStatusFilter(value)} />
            {currentItems.length > 0 && (
              <>
                <table className={`${classes.table} text-center`}>
                  <thead>
                    <tr>
                      <th>اسم الطالب</th>
                      <th>الرقم القومي</th>
                      <th>رقم الهاتف</th>
                      <th>الصف الدراسي</th>
                      <th> منذ</th>
                      {statusFilter !== "inactive" && (
                        <th colSpan={2}>التحكم</th>
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {currentItems.map((student, index) => (
                      <tr key={student.id}>
                        <td>
                          {student.first_name} {student.last_name}
                        </td>
                        <td>{student.national_id}</td>
                        <td>{student.phone}</td>
                        <td>{student.grade_id}</td>
                        <td style={{ direction: "ltr" }}>
                          {student.joined_from}
                        </td>
                        {statusFilter !== "inactive" && (
                          <td className={classes.buttonsContainer}>
                            <>
                              {statusFilter !== "active" && (
                                <button
                                  className={classes.accept}
                                  onClick={() =>
                                    UpdataStatus(student.id, "active")
                                  }
                                >
                                  قبول
                                </button>
                              )}
                              <button
                                className={classes.refused}
                                onClick={() =>
                                  UpdataStatus(student.id, "inactive")
                                }
                              >
                                رفض
                              </button>
                            </>
                          </td>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
                <Pagination
                  currentPage={currentPage}
                  totalPages={Math.ceil(students.length / itemsPerPage)}
                  onPageChange={onPageChange}
                />
              </>
            )}
            {loading && (
              <div className={classes.loading}>
                <Spinner animation="border" variant="success" role="status">
                  <span className="visually-hidden text-center">
                    Loading...
                  </span>
                </Spinner>
              </div>
            )}
            {currentItems.length === 0 && !loading && (
              <p className="text-center" style={{ direction: "ltr" }}>
                No data Found!
              </p>
            )}
          </div>
          <div className={classes.lowerSide}></div>
        </div>
      </div>
    </div>
  );
};

export default Students;
