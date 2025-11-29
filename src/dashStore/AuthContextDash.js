import React, { createContext, useState, useContext } from "react";
import axios from "axios";

let token = window.localStorage.getItem("adminToken");

const AuthContext = createContext();

const AuthDashProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [pageLoading, setPageLoading] = useState(false);

  const apiAdmin = axios.create({
    baseURL: "http://localhost:8000/api",
    withCredentials: false,
    headers: {
      Authorization: token ? `Bearer ${token}` : null,
    },
  });
  apiAdmin.defaults.headers.common["Accept"] = "application/json";

  apiAdmin.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if (error.response.status == 401) {
        // remove local token
        // remove local user
      }

      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    }
  );

  //   const logout = () => {
  //     setUser(null);
  //     localStorage.removeItem('user');
  // };

  // ============= APIS ============= /
  async function login(data) {
    return await apiAdmin.post("/admin", data);
  }

  async function register(data) {
    return await apiAdmin.post("/panel/staff", data);
  }

  // async function getGrades() {
  //   return await apiAdmin.get('/grades');
  // }

  async function signin(data) {
    return await apiAdmin.post("/admin", data);
  }

  // ============== staff API ========= //
  async function getAllTeachers() {
    return await apiAdmin.get("/panel/staff");
  }

  async function deleteTeacher(id) {
    return await apiAdmin.delete(`/panel/staff/${id}`);
  }

  async function getStudents(status, grade = "4") {
    return await apiAdmin.get(`/panel/students/${grade}?status=${status}`);
  }

  async function UpdateStudentStatus(data) {
    return await apiAdmin.put(`/panel/students/status/2`, data);
  }

  async function addGrades(data) {
    return await apiAdmin.post("/panel/grades/", data);
  }

  async function getGrades() {
    return await apiAdmin.get("/panel/grades");
  }

  async function deleteGrade(id) {
    return await apiAdmin.delete(`/panel/grades/${id}`);
  }
  async function addSubject(data) {
    return await apiAdmin.post(
      `/panel/subjects/?grade_id=${data.grade_id}&term=${data.term}&subject_name=${data.subject_name}`
    );
  }
  async function getSubjects(grade = "1", term = "1") {
    return await apiAdmin.get(`/panel/subjects/${grade}?term=${term}`);
  }
  async function delSubject(grade = "1", data) {
    return await apiAdmin.delete(
      `/panel/subjects/${grade}?term=${data.term}&subject_name=${data.subject_name}`
    );
  }

  async function addUnit(data) {
    return await apiAdmin.post(`/panel/heading/`, data);
  }
  async function addLesson(formData) {
    return await apiAdmin.post(`/panel/heading`, formData);
  }
  async function addLessonResources(formData) {
    return await apiAdmin.post(`/panel/content/add`, formData);
  }
  async function viewSubjects(grade = "1", term = "1") {
    return await apiAdmin.get(
      `/panel/content/view?term=${term}&grade=${grade}`
    );
  }
  async function getUnits(id) {
    return await apiAdmin.get(`/content/heading/${id}`);
  }
  async function getLesson(id) {
    return await apiAdmin.get(`/content/lesson/${id}`);
  }
  async function deleteContent() {
    return await apiAdmin.delete(`/panel/content/delete/9?resource_type=video`);
  }

  async function addQuestions(formData) {
    return await apiAdmin.post(`/panel/question/`, formData);
  }
  async function getQuestions(id) {
    return await apiAdmin.get(`/panel/question/${id}`);
  }
  async function createExam(formData) {
    return await apiAdmin.post(`/panel/exam`, formData);
  }

  async function getSubjectExams(subjectId) {
    console.log(subjectId);
    return await apiAdmin.get(`/panel/exam/subject/${subjectId}`);
  }
  return (
    <AuthContext.Provider
      value={{
        pageLoading,
        login,
        register,
        setPageLoading,
        signin,
        getAllTeachers,
        deleteTeacher,
        getStudents,
        UpdateStudentStatus,
        getGrades,
        addGrades,
        deleteGrade,
        addSubject,
        getSubjects,
        viewSubjects,
        delSubject,
        addUnit,
        addLesson,
        getUnits,
        getLesson,
        deleteContent,
        addLessonResources,
        addQuestions,
        getQuestions,
        createExam,
        getSubjectExams,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export { AuthDashProvider, AuthContext };
