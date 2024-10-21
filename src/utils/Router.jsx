import { createBrowserRouter } from 'react-router-dom';

import Root from '../Root';
import MainPage from '../page/MainPage';
import SigninPage from '../page/SigninPage';
import SignupPage from '../page/SignupPage';
import GamePage from '../page/GamePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    // errorElement: <ErrorPage />, 에러페이지
    children: [
      {
        path: '',
        element: <MainPage />,
      },
      {
        path: '/signinpage',
        element: <SigninPage />,
      },
      {
        path: '/signuppage',
        element: <SignupPage />,
      },
      {
        path: '/gamepage',
        element: <GamePage />,
      },
    ],
  },
]);

export default router;