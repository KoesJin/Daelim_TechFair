import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import BalanceBox from '../components/BalanceBox';
import styles from '../css/MainPage.module.css';
import { FaSearch } from 'react-icons/fa';

const MainPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // URL에서 gameType 파라미터 값을 가져옴
  const gameType = searchParams.get('gameType') || '밸런스게임'; // 값이 없으면 기본값으로 '밸런스게임'

  const balanceBoxes = new Array(60).fill(0);

  return (
    <>
      <Header />
      <div className={styles.topContainer}>
        <h1>{gameType}</h1> {/* 선택된 게임 타입을 표시 */}
        <div className={styles.searchContainer}>
          <FaSearch className={styles.searchIcon} />
          <input type="text" placeholder="검색어를 입력하세요" className={styles.searchBar} />
        </div>
      </div>
      <div className={styles.gridContainer}>
        {balanceBoxes.map((_, index) => (
          <BalanceBox key={index} onClick={() => navigate('/gamepage')} />
        ))}
      </div>
    </>
  );
};

export default MainPage;
