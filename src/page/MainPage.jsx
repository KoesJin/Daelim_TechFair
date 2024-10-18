import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import BalanceBox from '../components/BalanceBox';
import styles from '../css/MainPage.module.css';
import { FaSearch } from 'react-icons/fa';

const MainPage = () => {
  const navigate = useNavigate();
  const balanceBoxes = new Array(12).fill(0);

  return (
    <>
      <Header />
      <div className={styles.splitContainer}>
        <div className={styles.leftSection}>
          <h1>밸런스게임</h1>
          <div className={styles.searchContainer}>
            <FaSearch className={styles.searchIcon} />
            <input type="text" placeholder="검색어를 입력하세요" className={styles.searchBar} />
          </div>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.chatBox}>실시간 채팅</div>
        </div>
      </div>
      <div className={styles.gridContainer}>
        {balanceBoxes.map((_, index) => (
          <BalanceBox key={index} />
        ))}
      </div>
    </>
  );
};

export default MainPage;