import React from 'react';
import * as S from '../css/SigninPageCSS.jsx';
import { useNavigate } from 'react-router-dom';

const SigninPage = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Box>
        <S.Title>로그인</S.Title>
        <form>
          <S.Input type="text" placeholder="아이디" />
          <S.Input type="password" placeholder="비밀번호" />
          <S.Button type="submit">로그인</S.Button>
        </form>
        <S.Options>
          <S.OptionLink onClick={() => { navigate('findidpage'); }}>아이디 찾기</S.OptionLink>
          <span>|</span>
          <S.OptionLink onClick={() => { navigate('findpwpage'); }}>비밀번호 찾기</S.OptionLink>
          <span>|</span>
          <S.OptionLink onClick={() => { navigate('signuppage'); }}>회원가입</S.OptionLink>
        </S.Options>
      </S.Box>
    </S.Container>
  );
};

export default SigninPage;