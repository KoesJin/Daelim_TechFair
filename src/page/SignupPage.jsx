import React, { useState } from 'react';
import styles from '../css/SignPage.module.css';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/AgreeModal';

const SignupPage = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [AgreedToAds, setAgreedToAds] = useState(false);
  const [AgreedToPrivacy, setAgreedToPrivacy] = useState(false);
  const [showCertification, setShowCertification] = useState(false);
  const [certification, setCertification] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleAdsChange = () => {
    setAgreedToAds(!AgreedToAds);
  };

  const handlePrivacyChange = () => {
    setAgreedToPrivacy(!AgreedToPrivacy);
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

  const handlecertificationChange = (e) => {
    setCertification(e.target.value);
  };

  const handleSendcertification = () => {
    setShowCertification(true);
  };

  const handleVerifyCode = () => {
    if (certification === "123456") { // 나중에 변수로 바꾸면 되용~
      alert("인증이 완료되었습니다.");
    } else {
      alert("인증번호가 틀렸습니다.");
    }
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!AgreedToPrivacy) {
      alert("개인정보 활용 동의를 해주세요.");
      return;
    }

    if (password !== passwordCheck) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    console.log('회원가입 정보:', { id, password, name, tel, AgreedToAds, AgreedToPrivacy });
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
            <div className={styles.inputWithButton}>
              <input
                id="tel"
                type="tel"
                className={`${styles.inputShort} ${styles.input}`}
                value={tel}
                onChange={handlePhoneNumberChange}
              />
              <button
                type="button"
                className={`${styles.sendButton} ${styles.button}`}
                onClick={handleSendcertification}
              >인증번호 발송
              </button>
            </div>
          </div>
          {showCertification && (
            <div className={styles.inputContainer}>
              <div className={styles.inputWithButton}>
                <input
                  id="certification"
                  type="text"
                  placeholder="인증번호를 입력하세요"
                  className={`${styles.inputShort} ${styles.input}`}
                  value={certification}
                  onChange={handlecertificationChange}
                />
                <button
                  type="button"
                  className={`${styles.sendButton} ${styles.button}`}
                  onClick={handleVerifyCode}
                >확인
                </button>
              </div>
            </div>
          )}
          <div className={styles.checkboxContainer}>
            <input
              type="checkbox"
              id="privacy"
              checked={AgreedToPrivacy}
              onChange={handlePrivacyChange}
            />
            <label htmlFor="privacy" className={styles.checkboxLabel}>
              <span className={styles.required}>(필수)</span> 개인정보 활용 동의
              <span className={styles.required}>*</span>
              <span className={styles.detailLink} onClick={openModal}> 자세히 보기</span>
            </label>
          </div>
          <div className={styles.checkboxContainer}>
            <input
              type="checkbox"
              id="ads"
              checked={AgreedToAds}
              onChange={handleAdsChange}
            />
            <label htmlFor="ads" className={styles.checkboxLabel}>
              광고성 메시지 전송 동의
              <span className={styles.required}>*</span>
              <span className={styles.detailLink} onClick={openModal}> 자세히 보기</span>
            </label>
          </div>
          <button type="submit" className={styles.button}>회원가입</button>
        </form>
        <div className={styles.options}>
          <span className={styles.optionLink} onClick={() => { navigate('/signinpage'); }}>계정 로그인하기</span>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen} 
        onRequestClose={closeModal} 
      />
    </div>
  );
};

export default SignupPage;