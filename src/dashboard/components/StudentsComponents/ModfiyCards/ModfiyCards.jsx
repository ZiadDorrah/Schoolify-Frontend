import React from "react";
import css from "./ModfiyCards.module.css";
import user from "../../../../assets/icons/profile-user.png";
import user1 from "../../../../assets/icons/profile-2user.png";

const cardsData = [
  {
    title: "كل الطلاب",
    number: 50000,
    icon: user,
    color: "#eef7e6",
  },
  {
    title: "طلاب مقبولين",
    number: 50000,
    icon: user,
    color: "#eef7e6",
  },
  {
    title: "طلاب مرفوضين ",
    number: 50000,
    icon: user1,
    color: " #BC141A24",
  },
];

const ModfiyCards = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        {cardsData.map((card, index) => (
          <div key={index} className={css.card}>
            <div className={css.info}>
              <p>{card.title}</p>
              <h2>{card.number}</h2>
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

export default ModfiyCards;
