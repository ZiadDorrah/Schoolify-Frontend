import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import classes from "./HomePage.module.css";
import LessonDiscreption from "./LessonDiscreption";
import LessonTitle from "./LessonTitle";
import BelongLesson from "./BelongLesson";
import VideoComponent from "./VideoComponent";
import StudentComments from "./StudentComments";
import NavAuthenticationComponent from "../Uitily/NavAuthenticationComponent";
import Footer from "../Uitily/Footer";
import ContentLesson from "./ContentLesson";
import { useAuth } from "../../store/AuthContext";
import Spinner from "react-bootstrap/Spinner";

const HomePage = () => {
  const { lesson_id } = useParams();
  const { lessonView } = useAuth();
  const [loading, setLoading] = useState(true);
  const [lessonFile, setLessonFile] = useState([]);
  const [lessonVideo, setLessonVideo] = useState(null);
  const [lessonExam, setLessonExam] = useState([]);
  const [lessonDescription, setLessonDescription] = useState([]);

  async function viewContent(id) {
    setLoading(true); // Start loading
    await lessonView(id).then((response) => {
      console.log(response);
      setLessonFile(response.data.message.files);
      setLessonVideo(response.data.message.video);
      setLessonExam(response.data.message.exams);
      setLessonDescription(response.data.message.description);
      setLoading(false); // End loading
    });
  }

  useEffect(() => {
    viewContent(lesson_id);
  }, [lesson_id]);

  return (
    <>
      <div className="container-fluid h-100">
        <NavAuthenticationComponent />
        <div className={`container-fluid ${classes.hpWrapper}`}>
          {loading ? (
            <div className={classes.loading}>
              <Spinner animation="border" variant="success" role="status">
                <span className="visually-hidden text-center">Loading...</span>
              </Spinner>
            </div>
          ) : (
            <>
              <div className={`${classes.rightSection}`}>
                <StudentComments exams={lessonExam} />
              </div>
              <div className={classes.leftSection}>
                {lessonVideo && (
                  <VideoComponent videoUrl={lessonVideo.lesson_video} />
                )}
                <LessonTitle descriptions={lessonDescription} />
                <LessonDiscreption descriptions={lessonDescription} />
                <BelongLesson files={lessonFile} />
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
