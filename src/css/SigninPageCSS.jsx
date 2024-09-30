import styled from 'styled-components';

/* 전체 컨테이너 스타일 */
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

/* 로그인 박스 스타일 */
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

/* 로그인 제목 스타일 */
export const Title = styled.h2`
  color: #5e35b1;
  font-size: 24px;
  margin-bottom: 40px;
`;

/* 입력 필드 스타일 */
export const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 16px;
  border: none;
  border-bottom: 1px solid #ddd;
  outline: none;
  font-size: 14px;
  &:focus {
    border-color: #ddd;
  }
`;

/* 로그인 버튼 스타일 */
export const Button = styled.button`
  margin-top: 25px;
  width: 100%;
  padding: 12px;
  background-color: #673fb8;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #4527a0;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
`;

/* 옵션 링크 섹션 스타일 */
export const Options = styled.div`
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  width: 100%;
  color: #5e35b1;
`;

export const OptionLink = styled.span`
  color: #5e35b1;
  text-decoration: none;
  font-size: 14px;
  padding-top: 3px;
  cursor: pointer;
`;