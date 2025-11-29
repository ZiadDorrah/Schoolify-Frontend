import React, { useEffect, useState } from "react";
import classes from "../../components/subjectTable/subjectTable.module.css";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
import Spinner from "react-bootstrap/Spinner";
import Swal from "sweetalert2";

const UnitTable = ({ data, onDelete }) => {
  const [subjects, setSubjects] = useState([]);
  const [subjectsName, setSubjectsName] = useState([]);

  useEffect(() => {
    // console.log(data + "1111"); // Check if data is correctly passed when the component mounts or updates
    console.log(data);
  }, [data]);

  const handleDelete = async (id) => {
    // Show a confirmation dialog
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });
  };

  return (
    <div className={classes.subjectTable}>
      {/* <h2>جميع الوحدات</h2> */}
      {data.length > 0 ? (
        <table className={`table text-center`}>
          <thead>
            <tr>
              <th scope="col">اسم المادة </th>
              <th scope="col">الترم الدراسي</th>
              <th scope="col"> عدد الوحدات</th>
              <th scope="col">التحكم</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.subject_name}</td>
                  <td>{item.term}</td>
                  <td>{item.units.length}</td>
                  <td className="d-flex justify-content-center align-items-center">
                    <button
                      className={classes.del}
                      onClick={() => handleDelete(item.id)}
                    >
                      <RiDeleteBin5Line />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <div className={classes.loading}>
          <Spinner animation="border" variant="success" role="status">
            <span className="visually-hidden text-center">Loading...</span>
          </Spinner>
        </div>
      )}
    </div>
  );
};

export default UnitTable;
