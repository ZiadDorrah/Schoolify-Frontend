// main.js or any other file
import React, { useState } from 'react';
import InstructionsPage from './InstructionsPage';
import QuestionPage from './QuestionPage';
import renderComponentInNewWindow from './NewWindow'; 
import Welcome from './Welcome'; 

const Main = () => {
  const [currentPage, setCurrentPage] = useState('welcome'); 

  const handleStartTest = () => {
    setCurrentPage('instructions');
  };

  const handleNextInstructions = () => {
    setCurrentPage('question');
  };

  const handleNextQuestion = () => {
    console.log('Move to the next question or finish the test');
  };

  return (
    <div>
      {currentPage === 'welcome' && <Welcome onStartTest={handleStartTest} />}
      {currentPage === 'instructions' && <InstructionsPage onNext={handleNextInstructions} />}
      {currentPage === 'question' && <QuestionPage />}
      {/* <button onClick={handleStartTest}>Open Welcome in New Window</button> */}
    </div>
  );
};

export default Main;
