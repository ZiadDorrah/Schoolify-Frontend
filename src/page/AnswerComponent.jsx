import React, { useEffect, useState } from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import classes from "./AnswerComponent.module.css";
import { useAuth } from "../store/AuthContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory

const AnswersComponent = ({ examLink }) => {
  const { getExams, sendAnswerExams, getScore } = useAuth();
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [examsArray, setExamsArray] = useState([]);
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.entries(selectedAnswers).forEach(([questionId, answer]) => {
      formData.append(
        "answers[]",
        JSON.stringify({ question: questionId, answer })
      );
    });

    try {
      await sendAnswerExams(examLink.link, formData);
      const response = await getScore();
      const { score, pivot } = response.data[0]; // Adjust according to your data structure
      Swal.fire({
        icon: "success",
        title: "Answers submitted successfully!",
        showConfirmButton: false,
        timer: 3000,
      }).then(() => {
        navigate("/subject/units/lessonId/unitExam/degree", {
          state: { score, pivotScore: pivot.score, examLink: examLink },
        }); // Use navigate instead of history.push and pass the scores
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: `${error.response?.data.message || "An error occurred"}`,
        showConfirmButton: false,
        timer: 5000,
      });
    }
  };

  const handleRadioChange = (questionId, value) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  useEffect(() => {
    const getAllExams = async () => {
      try {
        const response = await getExams(examLink.link);
        const exams = response.data.message.questions.map((exam) => ({
          ...exam,
          answers: JSON.parse(exam.answers),
        }));
        setExamsArray(exams);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: `${error.response?.data.message || "An error occurred"}`,
          showConfirmButton: false,
          timer: 5000,
        });
      }
    };
    getAllExams();
  }, [getExams]);

  return (
    <form onSubmit={handleSubmit}>
      {examsArray &&
        examsArray.map((exam, index) => (
          <div key={exam.id} className={classes.content}>
            <div className="mb-3">
              <h1>
                <span>{++index})</span> {exam.question}
              </h1>
              {Array.isArray(exam.answers) &&
                exam.answers.map((option, optionIndex) => (
                  <Form.Check
                    key={optionIndex}
                    reverse
                    label={option}
                    name={`group${exam.id}`}
                    type="radio"
                    id={`reverse-${exam.id}-${optionIndex}`}
                    className="mb-3 p-2 rounded"
                    onChange={() => handleRadioChange(exam.id, option)}
                  />
                ))}
            </div>
          </div>
        ))}
      {examsArray.length === 0 && (
        <div className={classes.loading}>
          <Spinner animation="border" variant="success" role="status">
            <span className="visually-hidden text-center">Loading...</span>
          </Spinner>
        </div>
      )}
      <Button
        variant="primary"
        type="submit"
        className={`btn ${classes.btn} ${classes.diraction}`}
      >
        تسليم الإجابات
      </Button>
    </form>
  );
};

export default AnswersComponent;
