import React from 'react';
import styles from '../css/SignPage.module.css';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.Container}>
      <div className={styles.boxContainer}>
        <h1 className={styles.h1}>회원가입</h1>
        <form>
          <div className={styles.inputContainer}>
            <label htmlFor="username" className={styles.label}>
              아이디<span className={styles.required}>*</span>
            </label>
            <input id="username" type="text" className={styles.input}/>
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="password" className={styles.label}>
              비밀번호<span className={styles.required}>*</span>
            </label>
            <input id="password" type="password" className={styles.input}/>
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="passwordCheck" className={styles.label}>
              비밀번호 확인<span className={styles.required}>*</span>
            </label>
            <input id="passwordCheck" type="password" className={styles.input}/>
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="name" className={styles.label}>
              이름<span className={styles.required}>*</span>
            </label>
            <input id="name" type="text" className={styles.input}/>
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="tel" className={styles.label}>
              전화번호<span className={styles.required}>*</span>
            </label>
            <input id="tel" type="tel" className={styles.input}/>
          </div>
          <button type="submit" className={styles.button}>회원가입</button>
        </form>
        <div className={styles.options}>
          <span className={styles.optionLink} onClick={() => { navigate('/signinpage'); }}>계정 로그인하기</span>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;