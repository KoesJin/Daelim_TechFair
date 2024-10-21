import React, { useState } from 'react';
import styles from '../css/SignPage.module.css';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/AgreeModal';
import axios from 'axios';

const protocol = window.location.protocol === 'https:' ? 'https' : 'http';
const baseURL = `${protocol}://121.139.20.242:1492/api`;

const SignupPage = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [AgreedToAds, setAgreedToAds] = useState(false);
  const [AgreedToPrivacy, setAgreedToPrivacy] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [userAuthCode, setUserAuthCode] = useState("");
  const [authCode, setAuthCode] = useState("");
  const [authCheck, setAuthCheck] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  const handleAdsChange = () => {
    setAgreedToAds(!AgreedToAds);
  };

  const handlePrivacyChange = () => {
    setAgreedToPrivacy(!AgreedToPrivacy);
  };

  const handleTelChange = (e) => {
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

  const handleUserAuthChange = (e) => {
    setUserAuthCode(e.target.value);
  };

  const handleSendAuthCode = async () => {
    setShowAuth(true);
    try {
      const response = await axios.get(`${baseURL}/user/sms/send-code`, tel);
      console.log('인증번호 받기 성공:', response.data.authCode);
      setAuthCode(response.data.authCode);
    } catch (error) {
      console.error('인증번호 받기 실패:', error);
    }
  };

  const handleCheckCode = () => {
    if (userAuthCode.trim() === authCode.trim()) {
      alert("인증이 완료되었습니다.");
      setAuthCheck(true);
    } else {
      alert("인증번호가 틀렸습니다.");
    }
  };

  const openModal = (type) => {
    setModalType(type);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalType(""); 
  };

  const signupData = {
    id,
    password,
    passwordCheck,
    name,
    tel,
    AgreedToPrivacy
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!AgreedToPrivacy) {
      alert("개인정보 활용 동의를 해주세요");
      return;
    }

    if (!authCheck) {
      alert("전화번호 인증을 해주세요");
      return;
    }

    if (password !== passwordCheck) {
      alert("비밀번호가 일치하지 않습니다");
      return;
    }

    try {
      const response = await axios.post(`${baseURL}/user/signup`, signupData);
      console.log('회원가입 성공:', response.data);
      alert('회원가입이 성공적으로 완료되었습니다.');
      navigate('/signinpage');
    } catch (error) {
      console.error('회원가입 실패:', error);
      alert('회원가입 중 오류가 발생했습니다.');
    }
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
                onChange={handleTelChange}
              />
              <button
                type="button"
                className={`${styles.sendButton} ${styles.button}`}
                onClick={handleSendAuthCode}
              >인증번호 발송
              </button>
            </div>
          </div>
          {showAuth && (
            <div className={styles.inputContainer}>
              <div className={styles.inputWithButton}>
                <input
                  id="certification"
                  type="text"
                  placeholder="인증번호를 입력하세요"
                  className={`${styles.inputShort} ${styles.input}`}
                  value={userAuthCode}
                  onChange={handleUserAuthChange}
                />
                <button
                  type="button"
                  className={`${styles.sendButton} ${styles.button}`}
                  onClick={handleCheckCode}
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
            </label>
            <span className={styles.detailLink} onClick={() => openModal('privacy')}> 자세히 보기</span>
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
            </label>
            <span className={styles.detailLink} onClick={() => openModal('ads')}> 자세히 보기</span>
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
        modalType={modalType}
      />
    </div>
  );
};

export default SignupPage;