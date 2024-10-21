import React from 'react';
import Header from '../components/Header';
import styles from '../css/GamePage.module.css';
import profileImg from '../img/logo.png';
import img from '../img/loginBackground.avif';
import { FaRegThumbsUp, FaRegThumbsDown } from 'react-icons/fa';

const Comment = ({ username, content, likes, dislikes }) => {
  return (
    <div className={styles.comment}>
      <img className={styles.profileImg} src={profileImg} alt="Profile" />
      <div className={styles.commentBody}>
        <div className={styles.commentHeader}>
          <span className={styles.username}>{username}</span>
          <span className={styles.timestamp}>1시간 전</span>
        </div>
        <p className={styles.content}>{content}</p>
        <div className={styles.commentActions}>
          <button className={styles.likeBtn}>
            <FaRegThumbsUp /> {likes}
          </button>
          <button className={styles.dislikeBtn}>
            <FaRegThumbsDown /> {dislikes}
          </button>
          <button className={styles.replyBtn}>답글</button>
        </div>
      </div>
    </div>
  );
};

const GamePage = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.eventBanner}>
          <span className={styles.eventText}>Game</span>
        </div>
        <h2 className={styles.question}>Q. 둘 중 한 명과 유월드를 가야한다면?</h2>
        <div className={styles.options}>
          <div className={styles.option}>
            <div className={styles.optionLabel}>A</div>
            <img src={img} alt="Option A" className={styles.optionImage} />
            <div className={styles.optionText}>
              찍어주는 사진마다 <br /> 인생샷 만들어주는 <br /> 금손 친구
            </div>
          </div>
          <div className={styles.option}>
            <div className={styles.optionLabel}>B</div>
            <img src={img} alt="Option B" className={styles.optionImage} />
            <div className={styles.optionText}>
              못 타는 놀이기구 없이 <br /> 스릴을 즐길 줄 <br /> 아는 친구
            </div>
          </div>
        </div>
      </div>
      <div className={styles.commentSection}>
        <h2>댓글</h2>
        <Comment
          profileImg="https://via.placeholder.com/40"
          username="사용자1"
          content="이 영상 너무 재밌어요!"
          likes={10}
          dislikes={2}
        />
        <Comment
          profileImg="https://via.placeholder.com/40"
          username="사용자2"
          content="뭐라는거야! 난 동의 못 해"
          likes={5}
          dislikes={1}
        />
      </div>
    </>
  );
};

export default GamePage;
