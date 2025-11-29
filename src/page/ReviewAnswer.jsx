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
const ReviewAnswer = () => {
    const [isDrawer, setIsDrawer] = useState(false);

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
                            <h2 >راجع إجاباتك</h2>
                        </Stack>
                        {isDrawer ? <DrawerComponent /> : <ReviewAnswerComponent />}
                    </div>
                </div>
            </div >
            <Footer />
        </>
    );
};

export default ReviewAnswer;