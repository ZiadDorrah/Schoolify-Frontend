import React, { useState } from 'react';
// import ButtonBase from '../assets/images/ButtonBase.svg'
import classes from '../../page/Subject.module.css';
// import Sidebar from './Sidebar';
// import Header from './Header';
// import Footer from './Footer';
// import UnitContent from './UnitContent';
import headerkids from '../../assets/images/headerkids.svg';
import checkCircle from '../../assets/images/checkCircle.svg';
import { NavLink } from 'react-router-dom';
// import Subject from '../components/Uitily/UnitExam';


const StartExam = ({ lessonName, examLink }) => {

    return (

        <div className={classes['start-exam-card']}>
            <div className="image">
                <img className={classes['headerKids']} src={headerkids} style={{ borderTopLeftRadius: '16px', position: 'absolute', top: 0, left: 0 }} />
            </div>
            <div className={classes['card']} >
                <p className={classes['text-wrapper']}>هل أنت جاهز للإختبار</p>
                <div className={classes['instructions']}>
                    <div className={classes['div']}>
                        <img className={classes['checkCircle']} src={checkCircle} />
                        <p className={classes['p']}>إذا واجهتك مشكلة يرجي التواصل مع الدعم.</p>
                    </div>
                    <div className={classes['div']}>
                        <img className={classes['checkCircle']} src={checkCircle} />
                        <p className={classes['p']}>قم بإنهاء الامتحان في الوقت المحدد .</p>
                    </div>
                    <div className={classes['div']}>
                        <img className={classes['checkCircle']} src={checkCircle} />
                        <p className={classes['p']}>ستظهر نتيجتك بعد نهاية الاختبار.</p>
                    </div>
                </div>
                <NavLink to={`/subject/unit/lesson/exam/${lessonName}`} state={{ lessonName: lessonName, examLink: examLink }}>
                    <button className={`start-exam-button ${classes.bttn}`} > بدء الاختبار </button>
                </NavLink>
            </div>





        </div>



    );
};

export default StartExam;
