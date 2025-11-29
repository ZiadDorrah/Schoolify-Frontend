import React, { createContext, useState, useContext } from "react";
import axios from "axios";

let token = window.localStorage.getItem("userToken");

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [pageLoading, setPageLoading] = useState(false);

  const apiClient = axios.create({
    baseURL: "http://localhost:8000/api",
    withCredentials: false,
    headers: {
      Authorization: token ? `Bearer ${token}` : null,
    },
  });

  console.log(apiClient.defaults.headers.Authorization);

  apiClient.defaults.headers.common["Accept"] = "application/json";

  apiClient.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if (error.response.status === 401) {
        // remove local token
        // remove local user
        // redirect user to login
        // window.localStorage.removeItem('userToken');
        // window.localStorage.removeItem('userData');
        window.location.href = "/login";
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
    return await apiClient.post("/student-login", data);
  }

  async function register(data) {
    return await apiClient.post("/student-register", data);
  }

  async function logout(data) {
    return await apiClient.post("/student/logout", data);
  }

  async function getGrades() {
    return await apiClient.get("/grades");
  }

  async function getUnits(subjectId) {
    return await apiClient.get(`/content/heading/${subjectId}`);
  }

// Hussieny Updates
  async function studentSubjects(){
    return await apiClient.get('/student/subjects/');
  }

  async function lessonView(lessonId){
    return await apiClient.get(`/content/lesson/${lessonId}`)
  }
  // async function verify_otp(data){
  //   return await apiClient.post('/verify-code', data)
  // }
  async function verify_otp(data) {
    const response = await apiClient.post("/verify-code", data);
    if (response.data && response.data.token) {
      // localStorage.setItem('authToken', response.data.token);
      setUser(response.data.student);
    }
    return response;
  }

  // ============== USER API ========= //

  async function info() {
    return await apiClient.get("/student/info");
  }

  async function getExams(examLink) {
    console.log(examLink);
    return await apiClient.get(`/exam/${examLink}`);
  }
  async function sendAnswerExams(examLink, formData) {
    return await apiClient.post(`/exam/${examLink}`, formData);
  }

  async function getScore() {
    return await apiClient.get(`/student/exams`);
  }

  return (
    <AuthContext.Provider
      value={{
        pageLoading,
        register,
        getGrades,
        setPageLoading,
        login,
        logout,
        verify_otp,
        info,
        getUnits,
        getExams,
        sendAnswerExams,
        getScore,
        studentSubjects,
        lessonView
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export { AuthProvider, AuthContext };
