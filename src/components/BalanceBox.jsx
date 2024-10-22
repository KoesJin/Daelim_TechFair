import React from 'react';
import styles from '../css/BalanceBox.module.css';

const BalanceGame = ({ onClick }) => {
  return (
    <div className={styles.container}>
      <div className={styles.questionContainer}>
        <div className={styles.question} onClick={onClick}>질문1</div>
        <div className={styles.question} onClick={onClick}>질문2</div>
      </div>
    </div>
  );
};

export default BalanceGame;