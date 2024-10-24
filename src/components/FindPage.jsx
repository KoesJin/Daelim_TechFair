import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import style from '../css/FindPage.module.css';
import axios from 'axios';

const protocol = window.location.protocol === 'https:' ? 'https' : 'http';
const baseURL = `${protocol}://121.139.20.242:1492/api`;

const FindPage = () => {
  const [userName, setUserName] = useState('');
  const [userTel, setUserTel] = useState('');
  const [userId, setUserId] = useState('');
  const [userAuthCode, setUserAuthCode] = useState('');
  const [authCode, setAuthCode] = useState('');
  const [authCheck, setAuthCheck] = useState(false);
  const [showAuth, setShowAuth] = useState(false);

  // URL에서 type 파라미터를 가져옴
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const type = queryParams.get('type'); // "id" 또는 "password"

  const handleSendAuthCode = async () => {
    setShowAuth(true);
    try {
      const response = await axios.get(`${baseURL}/user/sms/send-code`, { params: { userTel } });
      console.log('인증번호 받기 성공:', response.data.authCode);
      setAuthCode(response.data.authCode);
    } catch (error) {
      console.error('인증번호 받기 실패:', error);
    }
  };

  const handleCheckCode = () => {
    if (userAuthCode.trim() === authCode.trim()) {
      alert('인증이 완료되었습니다.');
      setAuthCheck(true);
    } else {
      alert('인증번호가 틀렸습니다.');
    }
  };

  const handleSubmit = () => {
    if (!authCheck) {
      alert('전화번호 인증을 해주세요');
      return;
    }

    if (type === 'id') {
      // 아이디 찾기 로직
      console.log('아이디 찾기');
    } else if (type === 'password') {
      // 비밀번호 찾기 로직
      console.log('비밀번호 찾기');
    }
  };

  return (
    <div>
      {type === 'id' && (
        <div className={style.container}>
          <h2 className={style.title}>아이디 찾기</h2>
          <label className={style.label}>이름</label>
          <input className={style.input} value={userName} onChange={(e) => setUserName(e.target.value)} />
          <label className={style.label}>전화번호</label>
          <div className={style.inputWithButton}>
            <input
              className={`${style.inputShort} ${style.input}`}
              value={userTel}
              onChange={(e) => setUserTel(e.target.value)}
            />
            <button type="button" onClick={handleSendAuthCode} className={style.button}>
              인증번호 발송
            </button>
          </div>
          {showAuth && (
            <>
              <div className={style.inputContainer}>
                <label className={style.label}>인증번호</label>
                <div className={style.inputWithButton}>
                  <input
                    className={`${style.inputShort} ${style.input}`}
                    value={userAuthCode}
                    onChange={(e) => setUserAuthCode(e.target.value)}
                  />
                  <button type="button" onClick={handleCheckCode} className={style.button}>
                    확인
                  </button>
                </div>
              </div>
            </>
          )}
          <button onClick={handleSubmit} className={style.submit}>
            확인
          </button>
        </div>
      )}
      {type === 'password' && (
        <div className={style.container}>
          <h2 className={style.title}>비밀번호 찾기</h2>
          <label className={style.label}>아이디</label>
          <input className={style.input} value={userId} onChange={(e) => setUserId(e.target.value)} />
          <label className={style.label}>전화번호</label>
          <div className={style.inputWithButton}>
            <input className={style.input} value={userTel} onChange={(e) => setUserTel(e.target.value)} />
            <button type="button" onClick={handleSendAuthCode} className={style.submit}>
              인증번호 발송
            </button>
          </div>
          {showAuth && (
            <>
              <div className={style.inputContainer}>
                <label className={style.label}>인증번호</label>
                <input className={style.input} value={userAuthCode} onChange={(e) => setUserAuthCode(e.target.value)} />
                <button type="button" onClick={handleCheckCode} className={style.submit}>
                  확인
                </button>
              </div>
            </>
          )}
          <button onClick={handleSubmit} className={style.submit}>
            확인
          </button>
        </div>
      )}
    </div>
  );
};

export default FindPage;
