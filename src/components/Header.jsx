import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../css/Header.module.css';

const Header = () => {
  const navigate = useNavigate();
  
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <div 
          className={styles.logo}
          onClick={() => navigate('/')}
        >밸런스게임
        </div>
      </div>
      <nav className={styles.nav}>
        <div 
          className={styles.navItem}
          onClick={() => navigate('/balance')}
        >밸런스 게임
        </div>
        <div 
          className={styles.navItem}
          onClick={() => navigate('/vote')}
        >찬반 투표
        </div>
      </nav>
      <div className={styles.authButtons}>
        <div 
          className={styles.authButton}
          onClick={() => navigate('/signinpage')}
        >로그인
        </div>
        <div 
          className={styles.authButton}
          onClick={() => navigate('/signuppage')}
        >회원가입
        </div>
      </div>
    </header>
  );
};

export default Header;