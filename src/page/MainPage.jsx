import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import BalanceBox from '../components/BalanceBox';
import styles from '../css/MainPage.module.css';
import { FaSearch } from 'react-icons/fa';

const MainPage = () => {
  const navigate = useNavigate();
  const balanceBoxes = new Array(60).fill(0);

  return (
    <>
      <Header />
      <div className={styles.topContainer}>
        <h1>밸런스게임</h1>
        <div className={styles.searchContainer}>
          <FaSearch className={styles.searchIcon} />
          <input type="text" placeholder="검색어를 입력하세요" className={styles.searchBar} />
        </div>
      </div>
      <div className={styles.gridContainer}>
        {balanceBoxes.map((_, index) => (
          <BalanceBox key={index} onClick={() => navigate('/gamepage')}/>
        ))}
      </div>
    </>
  );
};

export default MainPage;
