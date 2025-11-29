import React, { useState, useEffect } from 'react';
import { ReactMic } from 'react-mic';
import styles from './QuestionPage.module.css';
import student from './../../assets/images/student.png';
import timer from './../../assets/images/timer.png';
import counter from './../../assets/images/questioncount.png';
import questionIcon from './../../assets/images//light-bulb.png';

const questions = [
  'من أي حيوان نحصل علي الصوف ؟',
  'ما هو الحيوان الذي يطلق عليه سفينة الصحراء؟',
  'ما هو الحيوان الذي يعيش في الماء وعلى اليابسة؟',
];

const QuestionPage = () => {
  const [recording, setRecording] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [blobURL, setBlobURL] = useState(null);
  const [timeLeft, setTimeLeft] = useState(45);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);

      return () => clearTimeout(timerId);
    } else {
      if (recording) {
        stopRecording();
      }
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setTimeLeft(45);
        setRecording(false);
        setSubmitted(false);
        setBlobURL(null);
      }
    }
  }, [timeLeft, recording, currentQuestionIndex]);

  const startRecording = () => {
    setRecording(true);
  };

  const stopRecording = () => {
    setRecording(false);
  };

  const onStop = (recordedBlob) => {
    console.log('Recorded Blob: ', recordedBlob);
    setBlobURL(recordedBlob.blobURL);
    setSubmitted(true);
  };

  const handleSubmission = () => {
    console.log('Answer submitted:', blobURL);
    // Add your submission logic here
    // Move to the next question after submission
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimeLeft(45);
      setRecording(false);
      setSubmitted(false);
      setBlobURL(null);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.questionContainer}>
        <img className={styles.timerImage} src={timer} alt='timer' />
        <div className={styles.timer}>
          <div className={styles.time}>{timeLeft}s</div>
        </div>
        <img className={styles.counterImage} src={counter} alt='counter' />
        <div className={styles.questionCount}>
          <div className={styles.count}>{currentQuestionIndex + 1}/{questions.length}</div>
        </div>
        <div className={styles.questionTextContainer}>
          <img src={questionIcon} alt="question icon" className={styles.questionIcon} />
          <p className={styles.questionText}>{questions[currentQuestionIndex]}</p>
        </div>
        <img className={styles.studentImage} src={student} alt='student-img' />
      </div>
      <div className={styles.answerarea}>
        <div className={styles.voiceInput}>
          <ReactMic
            record={recording}
            onStop={onStop}
            mimeType="audio/wav"
            strokeColor="#808080"
            backgroundColor="#F5F5F5"
            visualSetting="sinewave"
            className={styles.visualizer}
          />
          <button
            onClick={recording ? stopRecording : startRecording}
            className={styles.recordButton}
            disabled={timeLeft === 0}
          >
            {recording ? 'انه التسجيل' : 'سجل إجابتك'}
          </button>
          <button
            className={styles.submitButton}
            onClick={handleSubmission}
            disabled={!blobURL}
          >
            أرسل إجابتك
          </button>
        </div>
        {submitted && (
          <div className={styles.voiceInput}>
            <p className={styles.submittedText}>Your recorded answer:</p>
            <audio src={blobURL} controls="controls" />
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionPage;
