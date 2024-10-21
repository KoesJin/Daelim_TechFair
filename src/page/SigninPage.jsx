import React from 'react';
import styles from '../css/SignPage.module.css';
import { useNavigate } from 'react-router-dom';
import Logo from '../img/logo.png';
import { FaHome } from 'react-icons/fa';

const SigninPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/'); // 홈 화면으로 이동
  };
  return (
    <div className={styles.mainContainer}>
      <button className={styles.homeButton} onClick={handleGoHome}>
        <FaHome className={styles.icon} />
      </button>
      <div className={styles.leftContainer}>
        <img src={Logo} alt="이미지" className={styles.image} />
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.box}>
          <h1 className={styles.h1}>로그인</h1>
          <form>
            <div className={styles.inputContainer}>
              <label htmlFor="username" className={styles.label}>
                아이디<span className={styles.required}>*</span>
              </label>
              <input id="username" type="text" className={styles.input} />
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="password" className={styles.label}>
                비밀번호<span className={styles.required}>*</span>
              </label>
              <input id="password" type="password" className={styles.input} />
            </div>
            <button type="submit" className={styles.button}>
              로그인
            </button>
          </form>
          <div className={styles.options}>
            <span
              className={styles.optionLink}
              onClick={() => {
                navigate('/findidpage');
              }}
            >
              아이디 찾기
            </span>
            <span className={styles.divider}>|</span>
            <span
              className={styles.optionLink}
              onClick={() => {
                navigate('/findpwpage');
              }}
            >
              비밀번호 찾기
            </span>
            <span className={styles.divider}>|</span>
            <span
              className={styles.optionLink}
              onClick={() => {
                navigate('/signuppage');
              }}
            >
              회원가입
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninPage;
