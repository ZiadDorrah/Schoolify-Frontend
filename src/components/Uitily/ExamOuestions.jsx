import React, { useState, useEffect } from 'react';
import classes from './ExamQuestions.module.css';
import { Form } from 'react-bootstrap';
import receiptedit from '../../assets/images/receiptedit.svg';
import clockicon from '../../assets/images/clockicon.svg';
import group from '../../assets/images/Group.svg';
import { NavLink } from 'react-router-dom';

const ExamQuestions = () => {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function calculateTimeRemaining() {
    const examStartTime = new Date('2024-01-21T12:00:00'); // Replace with actual start time
    const examTimeLimitInMinutes = 120; // Replace with actual time limit in minutes

    const currentTime = new Date();
    const elapsedTimeInSeconds = Math.floor((currentTime - examStartTime) / 1000);
    const remainingTimeInSeconds = Math.max(0, examTimeLimitInMinutes * 60 - elapsedTimeInSeconds);

    const minutes = Math.floor(remainingTimeInSeconds / 60);
    const seconds = remainingTimeInSeconds % 60;

    return { minutes, seconds };
  }

  const questionsAndAnswers = [
    {
      question: 'هنا يوضع عنوان السؤال؟',
      options: [
        { text: ' توضع اختيارات الأسئلة'},
        { text: ' توضع اختيارات الأسئلة'},
        { text: ' توضع اختيارات الأسئلة'},
        { text: ' توضع اختيارات الأسئلة'},
      ],
    },
  ];

  return (
    <div className={classes['Question-template']}>
      <div className={classes['template']}>
        <div className={classes['frame']}>
          <div className={classes['div-2']}>
            <img className={classes['receiptedit']} src={receiptedit} alt="" />
            <p className={classes['p']}>اختبار شامل علي الوحدة الثانية</p>
          </div>
          <div className={classes['frame-wrapper']}>
            <div className={classes['div']}>
              <img className={classes['clockicon']} src={clockicon} alt="" />
              <div className={classes['text-wrapper']}>
                {`${timeRemaining.minutes}`}
                <span className={classes['bold-colon']}> : </span>
                {`${timeRemaining.seconds} دقيقة`}
              </div>
            </div>
          </div>
        </div>
        <div className={classes['frame-screen']}>
          {questionsAndAnswers.map((question, questionIndex) => (
            <div key={questionIndex} className={classes['frame-2']}>
              <div className={classes['frame-3']}>
                <div className={classes['text-wrapper-2']}>{`السؤال رقم ${questionIndex + 1}/${questionsAndAnswers.length}`}</div>
                <div className={classes['text-wrapper-3']}>{question.question}</div>
              </div>
              <div className={classes['frame-4']}>
                {question.options.map((option, index) => (
                  <Form.Check
                    key={index}
                    reverse
                    label={option.text}
                    name={`group${questionIndex + 1}`}
                    type="radio"
                    id={`reverse-radio-${questionIndex}-${index}`}
                    className={`mb-3 border p-2 rounded ${classes.customRadio} `}
                  />
                ))}
              </div>
            </div>
          ))}
          <img className={classes['group']} src={group} alt="" />
        </div>
        <div className={classes['buttons']}>
          <button className={classes['previous']}> السؤال السابق</button>
          <NavLink to="/subject/units/lessonId/unitExam/degree">
            <button className={classes['submit']}> تسليم </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ExamQuestions;