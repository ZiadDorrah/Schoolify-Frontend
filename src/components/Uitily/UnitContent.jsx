import React, { useState } from 'react';
import classes from './UnitContent.module.css';
import calendar1 from '../../assets/images/calendar1.svg';
import calendar2 from '../../assets/images/calendar2.svg';
import calendar3 from '../../assets/images/calendar3.svg';
import calendar4 from '../../assets/images/calendar4.svg';
import calendar5 from '../../assets/images/calendar5.svg';
import checked from '../../assets/images/Checkbox.svg';
import unchecked from '../../assets/images/unselected.svg';




import { Link } from 'react-router-dom';

const unitData = [
    { id: 1, calendar: calendar1, label: 'خواص الأشكال ثنائية الأبعاد' },
    { id: 2, calendar: calendar2, label: 'خواص الأشكال ثنائية الأبعاد' },
    { id: 3, calendar: calendar3, label: 'خواص الأشكال ثنائية الأبعاد' },
    { id: 4, calendar: calendar4, label: 'خواص الأشكال ثنائية الأبعاد' },
    { id: 5, calendar: calendar5, label: 'خواص الأشكال ثنائية الأبعاد' },
    { id: 6, calendar: calendar5, label: 'خواص الأشكال ثنائية الأبعاد' },

];

const UnitContent = () => {
    const [selected, setSelected] = useState([]);

    const toggleSelect = id => {
        if (selected.includes(id)) {
            setSelected(selected.filter(item => item !== id));
        } else {
            setSelected([...selected, id]);
        }
    };

    return (
        <div className={classes['frame-screen-wrapper']}>
            <div className={classes['frame-screen']} style={{ overflowY: 'scroll' }}>
                {unitData.map(lesson => (
                    <div key={lesson.id} className={classes['frame']}>
                        <Link to={`/subject/${lesson.id}`}>
                            <img className={classes['calendar']} src={lesson.calendar} alt="" />
                            <p className={classes['label']}>{lesson.label}</p>
                        </Link>
                        <img
                            className={classes['checkbox']}
                            src={selected.includes(lesson.id) ? checked : unchecked}
                            alt=""
                            onClick={() => toggleSelect(lesson.id)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UnitContent;
