import React from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
    const navigate = useNavigate();

    return (
        <>
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