import React from 'react';
import Modal from 'react-modal';
import styles from '../css/AgreeModal.module.css';

Modal.setAppElement('#root');

const ModalComponent = ({ isOpen, onRequestClose, modalType }) => {
  const renderModalContent = () => {
    if (modalType === 'privacy') {
      return (
        <>
          <h2>개인정보 수집 및 이용 안내</h2><br />
          <p>회원 가입을 위해 이름, 전화번호, 이메일 등의 개인정보를 수집합니다. 수집된 개인정보는 회원 관리, 서비스 제공 및 개선, 법적 의무 준수를 위해 사용됩니다.</p>
        </>
      );
    } else if (modalType === 'ads') {
      return (
        <>
          <h2>광고성 정보 수신 동의 안내</h2><br />
          <p>마케팅 및 광고 목적으로 회원님의 연락처를 통해 광고성 정보를 발송할 수 있습니다. 이 동의는 선택사항이며, 언제든지 철회할 수 있습니다.</p>
        </>
      );
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="모달"
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <button onClick={onRequestClose} className={styles.closeButton}>✖</button> {/* X 아이콘 */}
      {renderModalContent()} {/* 모달 내용 렌더링 */}
    </Modal>
  );
};

export default ModalComponent;