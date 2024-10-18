import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        {/* 로고 클릭 시 메인 페이지로 이동 */}
        <Link to="/" className={styles.logo}>
          밸런스게임
        </Link>
      </div>
      <nav className={styles.nav}>
        {/* 카테고리 버튼 */}
        <Link to="/balance" className={styles.navItem}>
          밸런스 게임
        </Link>
        <Link to="/vote" className={styles.navItem}>
          찬반 투표
        </Link>
      </nav>
      <div className={styles.authButtons}>
        {/* 로그인 및 회원가입 버튼 */}
        <Link to="/signin" className={styles.authButton}>
          로그인
        </Link>
        <Link to="/signup" className={styles.authButton}>
          회원가입
        </Link>
      </div>
    </header>
  );
};

export default Header;