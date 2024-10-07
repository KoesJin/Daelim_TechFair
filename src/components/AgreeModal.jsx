// ModalComponent.js
import React from 'react';
import Modal from 'react-modal';
import styles from '../css/AgreeModal.module.css';

// 모달의 루트 요소 설정
Modal.setAppElement('#root');

const ModalComponent = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="개인정보 활용 동의"
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <button onClick={onRequestClose} className={styles.closeButton}>✖</button> {/* X 아이콘 */}
      <h2>개인정보 활용 동의</h2>
      <p>여기에 개인정보 활용에 대한 상세 내용을 작성해.</p>
    </Modal>
  );
};

export default ModalComponent;
