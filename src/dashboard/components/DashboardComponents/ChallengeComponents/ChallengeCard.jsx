import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import classes from "./ChallengeCard.module.css";
import ChallengeIcon from "./../../../../assets/images/challenges.svg";
import Modify from "./../../../../assets/images/pencil-line.svg";
import Delete from "./../../../../assets/images/trash-01.png";

export default function ChallengeCard() {
    const challenge_list  =[  {
        id_No : 1,
        title: "اكمال الوحدة الاولى في اسبوع",
        grade: "الصف الثاني الابتدائى",
        subject: "الرياضيات",
        term: "الثاني"
    },
    {
        id_No : 2,
        title: "حل مسائل على جدول الضرب",
        grade: "الصف الثاني الابتدائى",
        subject: "الرياضيات",
        term: "الثاني"
    },
    {
        id_No : 3,
        title: "اكمال الوحدة الاولى في اسبوع",
        grade: "الصف الثاني الابتدائى",
        subject: "الرياضيات",
        term: "الثاني"
    }];
const [challenges, setChallenges] = useState(challenge_list);
const deleteHandle = (id) => {
    const updateData = challenges.filter((item) => item.id_No !== id);
    setChallenges(updateData);
};


    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await fetch('API_ENDPOINT');
    //         const data = await response.json();
    //         setData(data);
    //     };
    //     fetchData();
    // }, []);

    // Use 'data' or 'challenges' based on your approach
    // const challengesToDisplay = data.length > 0 ? data : challenges;

    return (
        <>
        <div className={classes.container}>
            {/* change data with challengesToDisplay after connecting to api*/}
            {challenges.map((challenge, index) => (
                <div key={index} className={classes['card']}>
                    <div className={classes['titles']}>
                        <h2>{challenge.title}</h2>
                        <p className={classes['info']}>الصف: {challenge.grade}</p>
                        <p className={classes['info']}>المادة: {challenge.subject}</p>
                        <p className={classes['info']}>الترم: {challenge.term}</p>
                    </div>
                    <img className={classes['challenge-img']} src={ChallengeIcon} alt="challenge Visual" />
                    <div className={classes['buttons']}>
                        <button className={classes['modify-button']}>
                            <img src={Modify} alt="Edit"/>
                            تعديل
                        </button>
                        <button className={classes['delete-button']}
                                onClick={() => deleteHandle(challenge.id_No)}>
                            <img src={Delete} alt="Delete"/>
                            حذف
                        </button>
                    </div>
                </div>
            ))}
        </div>
        </>
    );
}