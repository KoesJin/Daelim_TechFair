import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const MainPage = () => {
    const navigate = useNavigate();

    return (
        <>
          <Header></Header>
            <div>MainPage</div>
            <button
                onClick={() => {
                    navigate('signinpage');
                }}
            >
                로그인 페이지 가기1
            </button>
        </>
    );
};

export default MainPage;