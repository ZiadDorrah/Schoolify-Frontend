import React from 'react';
import styles from './Welcome.module.css';
import logo from './../../assets/images/rm-logo.png'; 

const Welcome = ({ onStartTest }) => {
  return (
    <div className={styles.container}>
      <img src={logo} alt="Schoolify Logo" className={styles.logo} />
      <h1 className={styles.heading}>مرحبًا بك في اختبار وكسلر للذكاء!</h1>
      <p className={styles.description}>
        سيساعدنا هذا الاختبار على فهم نقاط قوتك وقدراتك الفريدة.
      </p>
      <button className={styles.startButton} onClick={onStartTest}>
        بدء الاختبار
      </button>
    </div>
  );
};

export default Welcome;
