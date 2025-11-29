import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Uitily/Sidebar";
import Challenges from "./page/Challenges";
import LandingPage from "./page/LandingPage";
import FirstPopUp from "./components/popupComponents/FirstPopUp";
import popIamge from "./assets/images/popupImage.png";
import DegreePopUp from "./components/popupComponents/DegreePopUp";
import popImage2 from "./assets/images/popIamge2.png";
import Header from "./components/Uitily/Header";
import ToReview from "./page/ToReview";
import ReviewAnswer from "./page/ReviewAnswer";
import ExamResults from "./page/ExamResults";
import Exam from "./page/Exam";
import Subject from "./page/Subject";
import TopGrades from "./page/TopGrades";
import SignUp from "./page/SignUp";
import HomePage from "./components/HomePage/HomePage";
import PlatformContent from "./components/PlatformContent/PlatformContent";
import MainContent from "./page/MainContent";
import PlateFormSubject from "./page/PlateFormSubject";
import PlateFormExam from "./page/PlateFormExam";
import LoginPage from "./page/LoginPage";
import Otp from "./page/Otp";
import Units from "./page/Units";
import PageNotFound from "./page/PageNotFound";
import TestUnit from "./page/TestUnit";
import { AuthProvider } from "./store/AuthContext";
import Subjects from "./dashboard/page/subject/Subjects";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";
import { ProgressBar } from "react-bootstrap";
import ProtectedRoute from "./store/ProtectedRoute";
import Dashboard from "./dashboard/page/Dashboard page/Dashboard";
import Levels from "./dashboard/page/Levels/Levels";
import Content from "./dashboard/page/ContentPage/Content";
import AddNewUnits from "./dashboard/page/AddUnits/AddNewUnits";
import Challenge from "./dashboard/page/Challenges/Challenge";
import Teachers from "./dashboard/page/Teachers/Teachers";

import DashLogin from "./dashboard/page/Login/LoginPage";
import DashSignUp from "./dashboard/page/SignUp/SignUp";
import { AuthDashProvider } from "./dashStore/AuthContextDash";
import Students from "./dashboard/page/StudentsPage/Students";
import ModifyProfile from "./page/ModifyProfile";
import Main from "./components/Wechsler/Main";
import Welcome from "./components/Wechsler/Welcome";
import TestLesson from "./page/TestLesson";
import LessonsExam from "./page/LessonsExam";
import AllUnits from "./page/AllUnits";
import AllLessons from "./page/AllLessons";

function App() {
  const [userData, setUserData] = useState([]);
  // function saveUserData() {
  //   let encodedToken = localStorage.getItem('userToken');
  //   let decodedToken = jwtDecode(encodedToken);
  //   console.log(decodedToken);
  //   setUserData(decodedToken);
  // }
  const subjectButtons = [
    "الرياضيات",
    "العلوم",
    "التاريخ",
    "عربى",
    "انجليزى",
    "فرنساوى",
  ];

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
      children: [],
    },
    { path: "/login", element: <LoginPage /> },
    { path: "/signUp", element: <SignUp /> },
    { path: "/profile", element: <ModifyProfile /> },
    { path: "/otp", element: <Otp /> },
    { path: "/home", element: <MainContent /> },
    { path: "/subject", element: <PlateFormSubject /> },
    { path: "/subject/:subName", element: <AllUnits /> },
    { path: "/subject/:subName/:unitName", element: <AllLessons /> },
    { path: "/subject/:subName/:unitName/:lessonName", element: <AllLessons /> },
    {
      path: "/subject/units/:unitId",
      loader: ({ params }) => params.unitId,
      action: ({ params }) => params.unitId,
      element: <Units subjects={subjectButtons} />,
    },
    { path: "/exams", element: <PlateFormExam /> },
    { path: "/challenges", element: <Challenges /> },
    { path: "/results", element: <ExamResults /> },
    { path: "/top-students", element: <TopGrades /> },
    { path: "test-unit/:subject", element: <TestUnit /> },
    { path: "test-lesson/:unit", element: <TestLesson /> },
    { path: "/subject/content/:lesson_id", element: <HomePage /> },
    // { path: "/subject/units/lessonId/unitExam", element: <Subject /> },
    { path: "/subject/unit/:unitId/:lessonName/:lessonId", element: <Subject /> },
    { path: "/subject/unit/lesson/exam/:lessonName", element: <LessonsExam /> },
    // { path: "/subject/units/lessonId/unitExam/:unitName", element: <Subject /> },
    { path: "/subject/units/lessonId/unitExam/startExam", element: <Exam /> },
    { path: "/subject/units/lessonId/unitExam/degree", element: <ToReview /> },
    { path: "/subject/units/lessonId/unitExam/result", element: <ReviewAnswer />, },
    // Dashboard
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/dashboard/subjects", element: <Subjects /> },
    { path: "/dashboard/teachers", element: <Teachers /> },
    { path: "/dashboard/levels", element: <Levels /> },
    { path: "/dashboard/students", element: <Students /> },
    { path: "/dashboard/content", element: <Content /> },
    { path: "/dashboard/addnewunits", element: <AddNewUnits /> },
    { path: "/dashboard/challenges", element: <Challenge /> },
    { path: "/dashboard/login", element: <DashLogin /> },
    { path: "/dashboard/addmember", element: <DashSignUp /> },
    { path: "/wechsler", element: <Main /> },


    { path: "/*", element: <PageNotFound /> },
  ]);
  return (
    <AuthProvider>
      <AuthDashProvider>
        <RouterProvider router={router} />
      </AuthDashProvider>
    </AuthProvider>
  );
}

export default App;
