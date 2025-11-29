import React from 'react';
import styles from './InstructionsPage.module.css';

const InstructionsPage = ({ onNext }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>التعليمات</h1>
      <ul className={styles.instructionsList}>
        <li>سيتم طرح سلسلة من الأسئلة.</li>
        <li>بعض الأسئلة ستحتوي على صور.</li>
        <li>تحدث بوضوح عند تسجيل إجاباتك.</li>
        <li>يمكنك الضغط على زر "قراءة بصوت عالٍ" لسماع السؤال.</li>
      </ul>
      <button className={styles.nextButton} onClick={onNext}>
        التالي
      </button>
    </div>
  );
};

export default InstructionsPage;
