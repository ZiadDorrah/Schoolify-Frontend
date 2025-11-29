import React, { useEffect, useState } from "react";
import classes from "./teacher.module.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/header/Header";
import TeachersTable from "./TeachersTable";
import SubjectSearch from "../../components/search/SubjectSearch";
import Button from '../../components/Button/Button';
import Swal from 'sweetalert2';
import { useAuth } from "../../../dashStore/AuthContextDash";
import Spinner from 'react-bootstrap/Spinner';

const Teachers = () => {
  const { getAllTeachers } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [pageLoading, setPageLoading] = useState(false);

  const handleSearchChange = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
    const filtered = originalData.filter(
      (item) =>
        item.first_name.includes(searchTerm) ||
        item.last_name.includes(searchTerm) ||
        item.phone.includes(searchTerm)
    );
    setFilteredData(filtered);
  };

  const handleDelete = (id) => {
    const updatedData = filteredData.filter(item => item.id !== id);
    setFilteredData(updatedData);
    setOriginalData(originalData.filter(item => item.id !== id));
  };

  useEffect(() => {
    if (!window.localStorage.getItem("adminToken")) {
      window.location.href = "/dashboard/login";
    }
    setPageLoading(true);
    const fetchTeachers = async () => {
      const response = await getAllTeachers();
      setOriginalData(response.data);
      setFilteredData(response.data);
      setPageLoading(false);
    };
    fetchTeachers();
  }, [getAllTeachers]);

  return (
    <>
      <main className="d-flex vh-100">
        <Sidebar />
        <div className="body w-100">
          <Header addTitle="المدرسين" />
          <div className={classes.holder}>
            <div className={classes.card}>
              <div className="Func d-flex justify-content-between align-items-center">
                <SubjectSearch
                  searchTerm={searchTerm}
                  onSearchChange={handleSearchChange}
                />
              </div>
              {!pageLoading ? (
                <TeachersTable data={filteredData} onDelete={handleDelete} />
              ) : (
                <div className={classes.loading}>
                  <Spinner animation="border" variant="success" role="status">
                    <span className="visually-hidden text-center">Loading...</span>
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

export default Teachers;
