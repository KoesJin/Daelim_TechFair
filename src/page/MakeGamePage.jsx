import React, { useState } from 'react';
import styles from '../css/MakeGamePage.module.css';
import Header from '../components/Header';

const MakeGamePage = () => {
  const [selectedTab, setSelectedTab] = useState('balanceGame');
  const [question, setQuestion] = useState('');
  const [valueA, setValueA] = useState('');
  const [valueB, setValueB] = useState('');
  const [imageA, setImageA] = useState(null);
  const [imageB, setImageB] = useState(null);
  const [previewA, setPreviewA] = useState(null);
  const [previewB, setPreviewB] = useState(null);

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
    setQuestion('');
    setValueA('');
    setValueB('');
    setImageA(null);
    setImageB(null);
    setPreviewA(null);
    setPreviewB(null);
  };

  const handleImageChangeA = (e) => {
    const file = e.target.files[0];
    setImageA(file);
    setPreviewA(URL.createObjectURL(file)); // 이미지 미리보기 설정
  };

  const handleImageChangeB = (e) => {
    const file = e.target.files[0];
    setImageB(file);
    setPreviewB(URL.createObjectURL(file)); // 이미지 미리보기 설정
  };

  const handleSubmit = () => {
    // 제출 로직
    console.log({ question, valueA, valueB, imageA, imageB });
  };

  return (
    <>
      <Header />
      <div className={styles.body}>
        <h1 className={styles.title}>게임 만들기</h1>
        <div className={styles.container}>
          <div className={styles.tabs}>
            <div>
              <button
                className={selectedTab === 'balanceGame' ? styles.activeTab : styles.button}
                onClick={() => handleTabChange('balanceGame')}
              >
                밸런스 게임
              </button>
              <button
                className={selectedTab === 'voteGame' ? styles.activeTab : styles.button}
                onClick={() => handleTabChange('voteGame')}
              >
                찬반 투표
              </button>
            </div>
            <button className={styles.submitButton} onClick={handleSubmit}>
              등록하기
            </button>
          </div>
          <div className={styles.form}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>질문</label>
              <input
                className={styles.input}
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="질문을 입력하세요"
              />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label}>A</label>
              <input
                className={styles.input}
                type="text"
                value={valueA}
                onChange={(e) => setValueA(e.target.value)}
                placeholder="A 값을 입력하세요"
              />
            </div>
            <input type="file" onChange={handleImageChangeA} accept="image/*" />
            {previewA && <img src={previewA} alt="A 미리보기" className={styles.preview} />}
            <div className={styles.inputGroup}>
              <label className={styles.label}>B</label>
              <input
                className={styles.input}
                type="text"
                value={valueB}
                onChange={(e) => setValueB(e.target.value)}
                placeholder="B 값을 입력하세요"
              />
            </div>
            <input type="file" onChange={handleImageChangeB} accept="image/*" />
            {previewB && <img src={previewB} alt="B 미리보기" className={styles.preview} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default MakeGamePage;
