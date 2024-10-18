import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import BalanceBox from '../components/BalanceBox';
import styles from '../css/MainPage.module.css';  // CSS 모듈을 따로 만들어서 스타일 적용

const MainPage = () => {
  const navigate = useNavigate();

  // 배열을 만들어 BalanceBox 여러 개 렌더링하기
  const balanceBoxes = new Array(12).fill(0);  // 예시로 12개를 렌더링

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