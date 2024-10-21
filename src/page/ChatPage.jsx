import React, { useState } from 'react';
import styles from '../css/ChatPage.module.css'; // 스타일 경로 확인

const ChatPage = () => {
  const [messages, setMessages] = useState([]); // 메시지를 저장할 상태
  const [input, setInput] = useState(''); // 입력창 상태

  // 메시지 전송 함수
  const handleSend = () => {
    if (input.trim()) {
      const newMessage = { text: input, sender: 'user' }; // 메시지 객체 생성
      setMessages((prevMessages) => [...prevMessages, newMessage]); // 메시지 추가
      setInput(''); // 입력창 초기화
    }
  };

  return (
    <div className={styles.chatContainer}>
      <div className={styles.navItem}>실시간 채팅</div>
      <div className={styles.messages}>
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`${styles.message} ${msg.sender === 'user' ? styles.userMessage : styles.otherMessage}`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className={styles.inputContainer}>
        <input
          type="text"
          className={styles.input}
          value={input}
          onChange={(e) => setInput(e.target.value)} // 입력값 업데이트
          placeholder="메시지를 입력하세요"
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSend();
            }
          }}
        />
        <button className={styles.sendButton} onClick={handleSend}>
          전송
        </button>
      </div>
    </div>
  );
};

export default ChatPage;
