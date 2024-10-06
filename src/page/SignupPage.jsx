import React, { useState } from 'react';
import styles from '../css/SignPage.module.css';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [isAgreedToAds, setIsAgreedToAds] = useState(false);
  const [isAgreedToPrivacy, setIsAgreedToPrivacy] = useState(false);

  const handleAdsChange = () => {
    setIsAgreedToAds(!isAgreedToAds);
  };

  const handlePrivacyChange = () => {
    setIsAgreedToPrivacy(!isAgreedToPrivacy);
  };

  const handlePhoneNumberChange = (e) => {
    const inputValue = e.target.value.replace(/[^0-9]/g, "");
    setTel(inputValue);
  };

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordCheckChange = (e) => {
    setPasswordCheck(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!isAgreedToPrivacy) {
      alert("개인정보 활용 동의를 해주세요.");
      return;
    }

    if (password !== passwordCheck) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    // 회원가입 처리 로직 (API 요청 등)
    console.log('회원가입 정보:', { id, password, name, tel, isAgreedToAds });
  };

  return (
    <div className={styles.Container}>
      <div className={styles.boxContainer}>
        <h1 className={styles.h1}>회원가입</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputContainer}>
            <label htmlFor="username" className={styles.label}>아이디</label>
            <input
              id="username"
              type="text"
              className={styles.input}
              value={id}
              onChange={handleIdChange}
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="password" className={styles.label}>비밀번호</label>
            <input
              id="password"
              type="password"
              className={styles.input}
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="passwordCheck" className={styles.label}>비밀번호 확인</label>
            <input
              id="passwordCheck"
              type="password"
              className={styles.input}
              value={passwordCheck}
              onChange={handlePasswordCheckChange}
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="name" className={styles.label}>이름</label>
            <input
              id="name"
              type="text"
              className={styles.input}
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="tel" className={styles.label}>전화번호</label>
            <input
              id="tel"
              type="tel"
              className={styles.input}
              value={tel}
              onChange={handlePhoneNumberChange}
            />
          </div>
          <div className={styles.checkboxContainer}>
            <input
              type="checkbox"
              id="privacy"
              checked={isAgreedToPrivacy}
              onChange={handlePrivacyChange}
            />
            <label htmlFor="privacy" className={styles.checkboxLabel}>
              <span className={styles.required}>(필수)</span> 개인정보 활용 동의
              <span className={styles.required}>*</span>
              <span className={styles.detailLink} onClick> 자세히 보기</span>
            </label>
          </div>
          <div className={styles.checkboxContainer}>
            <input
              type="checkbox"
              id="ads"
              checked={isAgreedToAds}
              onChange={handleAdsChange}
            />
            <label htmlFor="ads" className={styles.checkboxLabel}>
              광고성 메시지 전송 동의
              <span className={styles.required}>*</span>
              <span className={styles.detailLink} onClick> 자세히 보기</span>
            </label>
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