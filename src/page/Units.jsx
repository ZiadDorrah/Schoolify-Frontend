import React from 'react';
import classes from '../components/PlatformContent/PlatformContent.module.css';

import Sidebar from '../components/Uitily/Sidebar';
import Header from '../components/Uitily/Header';
import Welcome from '../components/Uitily/Welcome';
import Medals from '../components/Uitily/Medals';
import Footer from '../components/Uitily/Footer';
import SubTitle from '../components/Uitily/SubTitle';
import { useParams } from 'react-router-dom';
import image from "../assets/images/subject.png";
import PageNotFound from './PageNotFound';


const Units = ({ subjects }) => {
    const params = useParams();
    const subject = params.unitId;

    const unitsButtons = [
        "الوحده الاولي",
        "الوحده الثانيه",
        "الوحده الثالثه",
        "الوحده الرابعه",
        "الوحده الخامسه",
        "الوحده السادسه",
    ];

    return (
        <>
            {subjects.includes(subject) ? <><div className="container-fluid">
                <div className={`${classes.psWrapper}`}>
                    <Sidebar />
                    <div className={`${classes.psLeftSection}`}>
                        <Header />
                        <Welcome />
                        <Medals />
                        <div className={`${classes.subjectsWrapper}`}>
                            <hr className={`${classes.line}`} />
                            <div className={`${classes.headerSubjects}`}>
                                <SubTitle
                                    title={`وحدات ${subject}`} />
                            </div>
                            <div className={`${classes.mohamedsubjectsButtons}`}>
                                {unitsButtons.map((subject, index) => (
                                    <button key={index} className={`${classes.mohamedsubjectButton}`}>
                                        <p>{subject}</p>
                                        <img src={image} alt="group" />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div><Footer /></> : <PageNotFound />}
        </>
    );
};

export default Units;