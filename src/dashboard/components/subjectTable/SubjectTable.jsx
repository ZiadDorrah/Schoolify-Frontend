import React, { useEffect } from "react";
import classes from "./subjectTable.module.css";
import { RiDeleteBin5Line } from "react-icons/ri";
import Spinner from "react-bootstrap/Spinner";

const SubjectTable = ({ data, onDelete }) => {
  useEffect(() => {
    console.log(data); // Check if data is correctly passed when the component mounts or updates
  }, [data]);

  const handleDelete = (subject_name) => {
    console.log(subject_name, "asdasd");
    onDelete(subject_name); // Call onDelete function with id
  };

  return (
    <div className={classes.subjectTable}>
      {data ? (
        <table className={`table text-center`}>
          <thead>
            <tr>
              <th scope="col">اسم المادة</th>
              <th scope="col">التحكم</th>
            </tr>
          </thead>
          <tbody>
            {data.map((subject) => (
              <tr key={subject.id}>
                <td>{subject.subject_name}</td>
                <td className="d-flex justify-content-center align-items-center">
                  <button
                    className={classes.del}
                    onClick={() => handleDelete(subject.subject_name)}
                  >
                    <RiDeleteBin5Line />
                  </button>
                </td>
              </tr>
            ))}
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

export default SubjectTable;
