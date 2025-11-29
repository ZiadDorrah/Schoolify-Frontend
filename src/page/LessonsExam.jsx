import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Stack from 'react-bootstrap/Stack';

import classes from '../assets/css/toreview.module.css';
import Sidebar from './../components/Uitily/Sidebar';
import Header from './../components/Uitily/Header';


import Footer from '../components/Uitily/Footer';
import reviewIcon from '../assets/images/receiptedit.png';
import DrawerComponent from '../components/Uitily/DrawerComponent';
import ReviewAnswerComponent from '../components/revisionComponents/ReviewAnswerComponent';
import { useLocation } from 'react-router-dom';
import AnswersComponent from './AnswerComponent';

const LessonsExam = () => {
    const [isDrawer, setIsDrawer] = useState(false);
    const location = useLocation();
    const { lessonName, examLink } = location.state || {};

    const handleDrawer = (data) => {
        setIsDrawer(data);
    };
    return (
        <>
            <div className={`container-fluid`}>
                <div className={`${classes.chachallengs} `}>
                    <Sidebar />
                    <div className={`${classes.page}`}>
                        <Header onDrawer={handleDrawer} />
                        <Stack direction="horizontal" gap={3}>
                            <img src={reviewIcon} alt="" />
                            <h2 >إختبار علي {lessonName}</h2>
                        </Stack>
                        {isDrawer ? <DrawerComponent /> : <AnswersComponent examLink={examLink} />}
                    </div>
                </div>
            </div >
            <Footer />
        </>
    );
};

export default LessonsExam;