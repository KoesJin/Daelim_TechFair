import React, { useState } from "react";
import styles from "../css/MakeGamePage.module.css";
import Header from "../components/Header";

const MakeGamePage = () => {
  const [selectedTab, setSelectedTab] = useState("balanceGame");
  const [question, setQuestion] = useState("");
  const [valueA, setValueA] = useState("");
  const [valueB, setValueB] = useState("");
  const [imageA, setImageA] = useState(null);
  const [imageB, setImageB] = useState(null);
  const [previewA, setPreviewA] = useState(null);
  const [previewB, setPreviewB] = useState(null);

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
    setQuestion("");
    setValueA("");
    setValueB("");
    setImageA(null);
    setImageB(null);
    setPreviewA(null);
    setPreviewB(null);
  };

  const handleImageChangeA = (e) => {
    const file = e.target.files[0];
    setImageA(file);
    setPreviewA(URL.createObjectURL(file));  // 이미지 미리보기 설정
  };

  const handleImageChangeB = (e) => {
    const file = e.target.files[0];
    setImageB(file);
    setPreviewB(URL.createObjectURL(file));  // 이미지 미리보기 설정
  };

  const handleSubmit = () => {
    // 제출 로직
    console.log({ question, valueA, valueB, imageA, imageB });
  };

  return (
    <>
      <Header />
      <h1 className={styles.title}>게임 만들기</h1>
      <div className={styles.container}>
        <div className={styles.tabs}>
          <button
            className={selectedTab === "balanceGame" ? styles.activeTab : ""}
            onClick={() => handleTabChange("balanceGame")}
          >
            밸런스 게임
          </button>
          <button
            className={selectedTab === "voteGame" ? styles.activeTab : ""}
            onClick={() => handleTabChange("voteGame")}
          >
            찬반 투표
          </button>
        </div>
        <div className={styles.form}>
          <label>질문: </label>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="질문을 입력하세요"
          />
          <div className={styles.inputGroup}>
            <label>A</label>
            <input
              type="text"
              value={valueA}
              onChange={(e) => setValueA(e.target.value)}
              placeholder="A 값을 입력하세요"
            />
            <input
              type="file"
              onChange={handleImageChangeA}
              accept="image/*"
            />
            {previewA && <img src={previewA} alt="A 미리보기" className={styles.preview} />}
          </div>
          <div className={styles.inputGroup}>
            <label>B</label>
            <input
              type="text"
              value={valueB}
              onChange={(e) => setValueB(e.target.value)}
              placeholder="B 값을 입력하세요"
            />
            <input
              type="file"
              onChange={handleImageChangeB}
              accept="image/*"
            />
            {previewB && <img src={previewB} alt="B 미리보기" className={styles.preview} />}
          </div>
          <button className={styles.submitButton} onClick={handleSubmit}>
            제출
          </button>
        </div>
      </div>
    </>
  );
};

export default MakeGamePage;
