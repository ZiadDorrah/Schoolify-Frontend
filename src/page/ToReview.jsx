import React, { useState } from 'react';
import classes from '../assets/css/goAnswer.module.css';

import Sidebar from './../components/Uitily/Sidebar';
import Header from './../components/Uitily/Header';
import Footer from '../components/Uitily/Footer';
import GoToAnswers from '../components/revisionComponents/GoToAnswers';
import DrawerComponent from '../components/Uitily/DrawerComponent';
import { useLocation } from 'react-router-dom';

const ToReview = () => {
    const [isDrawer, setIsDrawer] = useState(false);
    const location = useLocation();
    const { examLink } = location.state || {};

    const handleDrawer = (data) => {
        setIsDrawer(data);
    };
    return (
        <>
            <div className={`container-fluid`}>
                <div className={`${classes.chachallengs}  `}>
                    <Sidebar />
                    <div className={`${classes.page}`}>
                        <Header onDrawer={handleDrawer} />
                        {isDrawer ? <DrawerComponent /> : <GoToAnswers examLink={examLink.link} />}
                    </div>
                </div>
            </div >
            <Footer />
        </>
    );
};

export default ToReview;