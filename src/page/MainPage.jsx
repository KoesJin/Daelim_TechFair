import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import BalanceBox from '../components/BalanceBox';
import styles from '../css/MainPage.module.css';

const MainPage = () => {
  const navigate = useNavigate();

  const balanceBoxes = new Array(12).fill(0);

  return (
    <>
      <Header />
      <div className={styles.gridContainer}>
        {balanceBoxes.map((_, index) => (
          <BalanceBox key={index} />
        ))}
      </div>
    </>
  );
};

export default MainPage;