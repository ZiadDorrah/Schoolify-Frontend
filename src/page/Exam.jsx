import React, { useState } from 'react';
import classes from './Subject.module.css';
import Sidebar from '../components/Uitily/Sidebar';
import Header from '../components/Uitily/Header';
import Footer from '../components/Uitily/Footer';
import UnitContent from '../components/Uitily/UnitContent';
import ExamQuestions from '../components/Uitily/ExamOuestions';

const Exam = () => {
  return (
    <>
      <div className={`container-fluid`}>
        <div className={`${classes.subject} d-flex justify-content-between `}>
          <Sidebar />
          <div className={classes.subjectPage}>
            <Header />
            <div className={classes.subjectt}>
              <UnitContent />
              <ExamQuestions />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>

  );
};

export default Exam;
