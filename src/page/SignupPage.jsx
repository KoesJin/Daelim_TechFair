import React from 'react';
import * as S from '../css/SigninPageCSS.jsx';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Box>
        <S.Title>로그인</S.Title>
        <form>
          <S.Input type="text" placeholder="아이디" />
          <S.Input type="password" placeholder="비밀번호" />
          <S.Input type="text" placeholder="아이디" />
          <S.Input type="password" placeholder="비밀번호" />
          <S.Button type="submit">회원가입</S.Button>
        </form>
      </S.Box>
    </S.Container>
  );
};

export default SignupPage;