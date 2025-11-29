import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import classes from '../../assets/css/toreview.module.css';
import { NavLink } from 'react-router-dom';

const questionsAndAnswers = [
  {
    question: 'هنا يوضع عنوان السؤال؟',
    options: [
      { text: '1 توضع اختيارات الأسئلة', class: 'right_answer' },
      { text: '2 توضع اختيارات الأسئلة', class: 'normal_answer' },
      { text: '3 توضع اختيارات الأسئلة', class: 'normal_answer' },
      { text: '4 توضع اختيارات الأسئلة', class: 'wrong_answer' },
    ],
  },
  {
    question: 'هنا يوضع عنوان السؤال؟',
    options: [
      { text: '1 توضع اختيارات الأسئلة', class: 'normal_answer' },
      { text: '2 توضع اختيارات الأسئلة', class: 'normal_answer' },
      { text: '3 توضع اختيارات الأسئلة', class: 'wrong_answer' },
      { text: '4 توضع اختيارات الأسئلة', class: 'right_answer' },
    ],
  },
  {
    question: 'هنا يوضع عنوان السؤال؟',
    options: [
      { text: '1 توضع اختيارات الأسئلة', class: 'wrong_answer' },
      { text: '2 توضع اختيارات الأسئلة', class: 'normal_answer' },
      { text: '3 توضع اختيارات الأسئلة', class: 'right_answer' },
      { text: '4 توضع اختيارات الأسئلة', class: 'normal_answer' },
    ],
  },
  {
    question: 'هنا يوضع عنوان السؤال؟',
    options: [
      { text: '1 توضع اختيارات الأسئلة', class: 'wrong_answer' },
      { text: '2 توضع اختيارات الأسئلة', class: 'right_answer' },
      { text: '3 توضع اختيارات الأسئلة', class: 'normal_answer' },
      { text: '4 توضع اختيارات الأسئلة', class: 'normal_answer' },
    ],
  },
];

const ReviewAnswerComponent = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Selected Radio Button Value:', selectedOption);

  };

  const handleRadioChange = (value) => {
    setSelectedOption(value);
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      {questionsAndAnswers.map((qa, index) => (
        <div key={index} className={` ${classes.content} `}>
          <div className="mb-3 ">
            <h1>
              <span>{index + 1})</span> {qa.question}
            </h1>
            {qa.options.map((option, optionIndex) => (
              <Form.Check
                key={optionIndex}
                reverse
                label={option.text}
                name={`group${index}`}
                type="radio"
                id={`reverse-${index}-${optionIndex}`}
                className={`mb-3 p-2 rounded ${selectedOption === option.text ? classes.right_answer : ''} ${classes[option.class]}`}
                onChange={() => handleRadioChange(option.text)}
              />
            ))}
          </div>
        </div>
      ))}
      <NavLink to="/subject">
        <Button
          variant="primary"
          type="submit"
          className={`btn ${classes.btn} ${classes.diraction}`}
        >
          واصل التعلم
        </Button>
      </NavLink>
    </form>
  );
};

export default ReviewAnswerComponent;
