import React, { useState, useEffect, useRef } from 'react';
import styles from '../css/ChatPage.module.css';
import profileImg from '../img/logo.png';

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null); // 메시지 끝부분에 대한 참조

  // 메시지 전송 함수
  const handleSend = () => {
    if (input.trim()) {
      const newMessage = { text: input, sender: 'user', timestamp: '12:00 PM' };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setInput('');
    }
  };

  // 메시지 상태가 업데이트될 때마다 자동 스크롤
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]); // messages가 업데이트될 때마다 실행됨

  const formatMessage = (message) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g; // URL 정규식
    const parts = message.split(urlRegex);

    return parts.map((part, index) =>
      urlRegex.test(part) ? (
        <a key={index} href={part} target="_blank" rel="noopener noreferrer">
          {part}
        </a>
      ) : (
        <span key={index}>{part}</span>
      )
    );
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
            <img className={styles.profileImg} src={profileImg} alt="Profile" />
            <div className={styles.messageContent}>
              <div className={styles.username}>사용자 이름</div>
              <div className={styles.messageHeader}>
                <div className={styles.text}>{formatMessage(msg.text)}</div>
                <div className={styles.timestamp}>{msg.timestamp}</div>
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} /> {/* 스크롤할 마지막 부분 */}
      </div>
      <div className={styles.inputContainer}>
        <input
          type="text"
          className={styles.input}
          value={input}
          onChange={(e) => setInput(e.target.value)}
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
