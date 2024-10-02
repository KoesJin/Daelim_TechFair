import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Box>
        <S.Title>회원가입</S.Title>
        <form>
          <S.Input type="text" placeholder="아이디" />
          <S.Input type="password" placeholder="비밀번호" />
          <S.Input type="tel" pattern="[0-9]*" placeholder="전화번호" />
          <S.Input type="text" placeholder="이름" />
          <S.Button type="submit">회원가입</S.Button>
        </form>
      </S.Box>
    </S.Container>
  );
};

export default SignupPage;