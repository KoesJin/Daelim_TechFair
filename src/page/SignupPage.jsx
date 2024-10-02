import React from 'react';
import styles from '../css/SignupPage.module.css';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.mainContainer}>
      <div>
        <h1>회원가입</h1>
        <form>
          <div>
            <label htmlFor="username">
              아이디<span>*</span>
            </label>
            <input id="username" type="text"/>
          </div>
          <div>
            <label htmlFor="password">
              비밀번호<span>*</span>
            </label>
            <input id="password" type="password"/>
          </div>
          <div>
            <label htmlFor="name">
              이름<span>*</span>
            </label>
            <input id="name" type="text" />
          </div>
          <div>
            <label htmlFor="tel">
              전화번호<span>*</span>
            </label>
            <input id="tel" type="tel" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');"/>
          </div>
          <button type="submit">회원가입</button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;