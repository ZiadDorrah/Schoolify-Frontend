import React from 'react';
import classes from './Welcome.module.css';

import welcome from '../../assets/images/welcome.svg';

const Welcome = () => {
    return (
        <div className={`${classes.welcome} d-flex justify-content-between align-items-center`}>
            <div className={`${classes['welcome-content']}`}>
                <h1>اهلا بيك..</h1>
                <p>أنار الله درب كل مجتهد، وفقك لكل ما فيه الخير لك، ولكل شيء تحبه</p>
            </div>
            <img className={classes['welcome-icon']} src={welcome} alt="" />
        </div>
    );
};

export default Welcome;