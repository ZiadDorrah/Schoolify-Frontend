import React, { useState } from 'react';
import classes from './DrawerComponent.module.css';

import instruction from '../../assets/images/instruction.svg';
import archive from '../../assets/images/archive.svg';

import Sidebar from './Sidebar';

const DrawerComponent = () => {
    return (
        <div className={classes["drawer-container"]}>
            <div className={classes.drawer}>
                <div className={classes['sidebar-buttons']}>
                    <ul>
                        <li>
                            <button className='btn d-flex justify-content-right align-items-center'>
                                <img src={instruction} alt="" />
                                <h2>لوحتى التعليمية</h2>
                            </button>
                        </li>
                        <li>
                            <button className={`btn ${classes.selected} d-flex justify-content-right align-items-center`}>
                                <img src={archive} alt="" />
                                <h2 >المواد الدراسية</h2>
                            </button>
                        </li>
                        <li>
                            <button className='btn d-flex justify-content-right align-items-center'>
                                <img src={archive} alt="" />
                                <h2>الاختبارات</h2>
                            </button>
                        </li>
                        <li>
                            <button className='btn d-flex justify-content-right align-items-center'>
                                <img src={archive} alt="" />
                                <h2>المسابقات</h2>
                            </button>
                        </li>
                        <li>
                            <button className='btn d-flex justify-content-right align-items-center'>
                                <img src={archive} alt="" />
                                <h2>نتائج الاختبارت</h2>
                            </button>
                        </li>
                        <li>
                            <button className='btn d-flex justify-content-right align-items-center'>
                                <img src={archive} alt="" />
                                <h2>الاوائل </h2>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DrawerComponent;
