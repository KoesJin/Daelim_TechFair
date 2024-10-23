import React, { useState } from 'react';
import styles from '../css/MakeGamePage.module.css';
import Header from '../components/Header';

const MakeGamePage = () => {
  const [gameType, setGameType] = useState('balance');
  const [question, setQuestion] = useState('');
  const [optionA, setOptionA] = useState('');
  const [optionB, setOptionB] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      gameType,
      question,
      optionA,
      optionB,
      image,
    });
    // 필요한 경우 데이터 전송 등 추가 처리
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // 미리보기용 URL 생성
    }
  };

  return (
    <div className={styles.body}>
      <Header />
        <div className={styles.container}>
          <h1 className={styles.title}>게임 만들기</h1>
          <div className={styles.categorySelector}>
            <button
              className={`${styles.categoryButton} ${gameType === 'balance' ? styles.active : ''}`}
              onClick={() => setGameType('balance')}
            >
              밸런스 게임
            </button>
            <button
              className={`${styles.categoryButton} ${gameType === 'poll' ? styles.active : ''}`}
              onClick={() => setGameType('poll')}
            >
              찬반 투표
            </button>
          </div>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
              <div>
                <label htmlFor="question" className={styles.label}>
                  질문
                </label>
                <input
                  id="question"
                  type="text"
                  className={styles.input}
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  required
                />
              </div>
            </div>
            {gameType === 'balance' && (
              <>
                <div className={styles.inputGroup}>
                  <div>
                    <label htmlFor="optionA" className={styles.label}>
                      A 값
                    </label>
                    <input
                      id="optionA"
                      type="text"
                      className={styles.input}
                      value={optionA}
                      onChange={(e) => setOptionA(e.target.value)}
                      required
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <label htmlFor="imageA" className={styles.label}>
                      이미지 업로드
                    </label>
                    <input id="imageA" type="file" accept="image/*" onChange={handleImageChange} />
                    {image && <img src={image} alt="Preview" className={styles.imagePreview} />}
                  </div>
                </div>
                <div className={styles.inputGroup}>
                  <div>
                    <label htmlFor="optionB" className={styles.label}>
                      B 값
                    </label>
                    <input
                      id="optionB"
                      type="text"
                      className={styles.input}
                      value={optionB}
                      onChange={(e) => setOptionB(e.target.value)}
                      required
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <label htmlFor="imageB" className={styles.label}>
                      이미지 업로드
                    </label>
                    <input id="imageB" type="file" accept="image/*" onChange={handleImageChange} />
                    {image && <img src={image} alt="Preview" className={styles.imagePreview} />}
                  </div>
                </div>
              </>
            )}
            <button type="submit" className={styles.button}>
              제출
            </button>
          </form>
        </div>
    </div>
  );
};

export default MakeGamePage;
