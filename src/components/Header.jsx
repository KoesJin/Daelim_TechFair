import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../css/Header.module.css';

const Header = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userId');
    localStorage.removeItem('token');
    setUserId(null);
    navigate('/');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const openChatWindow = () => {
    window.open('/chatpage', '_blank', 'width=500,height=800');
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo} onClick={() => navigate('/')}>
        밸런스게임
      </div>
      <div className={styles.hamburger} onClick={toggleMobileMenu}>
        <span className={styles.hamburgerIcon}></span>
        <span className={styles.hamburgerIcon}></span>
        <span className={styles.hamburgerIcon}></span>
      </div>

      {/* 모바일 메뉴 */}
      <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.showMenu : ''}`}>
        <div className={styles.navItem} onClick={() => navigate('/balancegame')}>
          밸런스 게임
        </div>
        <div className={styles.navItem} onClick={() => navigate('/vote')}>
          찬반 투표
        </div>
        <div className={styles.navItem} onClick={() => navigate('/makegame')}>
          게임 만들기
        </div>
        <div className={styles.navItem} onClick={openChatWindow}>
          온라인 채팅
        </div>
        {userId ? (
          <>
            <div className={styles.navItem}>환영합니다, {userId}님!</div>
            <div className={styles.navItem} onClick={handleLogout}>
              로그아웃
            </div>
          </>
        ) : (
          <>
            <div className={styles.navItem} onClick={() => navigate('/signinpage')}>
              로그인
            </div>
            <div className={styles.navItem} onClick={() => navigate('/signuppage')}>
              회원가입
            </div>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
