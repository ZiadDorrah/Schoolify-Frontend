import React, { useState } from 'react';
import classes from './Header.module.css';

import profile from '../../assets/images/profile.svg';
import notification from '../../assets/images/notification.svg';
import search from '../../assets/images/search.svg';
import drawerIcon from '../../assets/images/drawerIcon.svg';
import DrawerComponent from './DrawerComponent';

const Header = ({ onDrawer }) => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    const formHandler = (event) => {
        event.preventDefault();
    };

    const handleDrawerToggle = () => {
        onDrawer(!isDrawerOpen);
        setDrawerOpen(!isDrawerOpen);
    };
    return (
        <>
            <div className={`${classes.header} d-flex justify-content-end align-items-center mt-5`}>
                <form className={`${classes['search-container']} d-flex align-items-center`} onSubmit={formHandler}>
                    <a href="#"><img className={classes['search-icon']} src={search} /></a>
                    <input type="text" id={classes['search-bar']} placeholder="ابحث عن المناهج" />
                </form>
                <div className={`${classes.icons} d-flex align-items-center`}>
                    <a href="#">
                        <img src={notification} alt="" />
                    </a>
                    <a href="#">
                        <img src={profile} alt="" />
                    </a>
                </div>
            </div>
            <div className={` ${classes.headerRes} d-flex justify-content-between align-items-center mt-4`}>
                <div className={classes.logo}>
                    <h1>Scolifay</h1>
                </div>
                <div className={`${classes.headerRes_component} d-flex justify-content-end align-items-center`}>
                    <form className={`${classes['search-container']} d-flex align-items-center`} onSubmit={formHandler}>
                        <a href="#"><img className={classes['search-icon']} src={search} /></a>
                        <input type="text" id={classes['search-bar']} placeholder="ابحث عن المناهج" />
                    </form>
                    <div className={`${classes.icons} d-flex align-items-center`}>
                        <div className="btn">
                            <img src={notification} alt="" />
                        </div>
                        <div className="btn" onClick={handleDrawerToggle}>
                            <img src={drawerIcon} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;