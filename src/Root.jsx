import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { createGlobalStyle, styled } from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      overflow-y: scroll; /* 가로 스크롤을 막되 세로 스크롤은 허용 */
    }

    .fade-enter {
      opacity: 0;
    }

    .fade-enter-active {
      opacity: 1;
      transition: opacity 250ms ease-in;
    }

    .fade-exit {
      opacity: 1;
    }

    .fade-exit-active {
      opacity: 0;
      transition: opacity 250ms ease-out;
    }
  `;

const AnimationContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

function Root() {
    const location = useLocation();
    return (
        <>
            <Helmet>
              <title>Balance Game</title>
            </Helmet>
            <GlobalStyle />
            <TransitionGroup>
                <CSSTransition key={location.pathname} classNames="fade" timeout={300}>
                    <AnimationContainer>
                        <Outlet />
                    </AnimationContainer>
                </CSSTransition>
            </TransitionGroup>
        </>
    );
}

export default Root;