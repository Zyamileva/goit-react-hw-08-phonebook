import LoginForm from '../../components/LoginForm/LoginForm';
import { login } from '../../redux/auth/auth-operations';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAuthLoading,
  selectAuthError,
  selectAuthIsLogin,
} from '../../redux/auth/auth-slectors';
import { Navigate } from 'react-router-dom';

const LoginPage = () => {
  const authLoading = useSelector(selectAuthLoading);
  const authError = useSelector(selectAuthError);
  const isLogin = useSelector(selectAuthIsLogin);

  const dispatch = useDispatch();
  const handleLogin = data => {
    dispatch(login(data));
  };

  if (isLogin) {
    return <Navigate to="/" />;
  }
  //   console.log('lkjhgfdfghjk');
  return (
    <main>
      <h1>Login</h1>
      {authLoading && <p>....Login in progress</p>}
      <LoginForm onSubmit={handleLogin} />
      {authError && <p style={{ color: 'red' }}>{authError}</p>}
    </main>
  );
};

export default LoginPage;