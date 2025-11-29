import React from "react";
import css from "./CardsForAnalysis.module.css";
import user from "../../../../assets/icons/profile-user.png";
import teacher from "../../../../assets/icons/teacher.png";
import video from "../../../../assets/icons/video.png";
import award from "../../../../assets/icons/award.png";
import note from "../../../../assets/icons/note-2.png";

const cardsData = [
  {
    title: "الطلاب",
    number: 10,
    icon: user,
    color: "#eef7e6",
  },
  {
    title: "المدرسين",
    number: 2,
    icon: teacher,
    color: "#FDEBE1",
  },
  {
    title: "الفيديوهات ",
    number: 50000,
    icon: video,
    color: " #BC141A24",
  },
  {
    title: "التحديات ",
    number: 50000,
    icon: award,
    color: "#EAD8FF ",
  },
  {
    title: "الاختبارات",
    number: 50000,
    icon: note,
    color: "#D2EEFF",
  },
];

const CardsForAnalysis = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        {cardsData.map((card, index) => (
          <div key={index} className={css.card}>
            <div className={css.info}>
              <p>{card.title}</p>
              {/* <h2>{card.number}</h2> */}
            </div>
            <div className={css.cIcon} style={{ background: `${card.color}` }}>
              <img src={card.icon} alt="icon" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsForAnalysis;
