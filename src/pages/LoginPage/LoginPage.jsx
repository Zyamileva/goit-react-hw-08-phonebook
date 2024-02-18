import LoginForm from '../../components/LoginForm/LoginForm';
import { login } from '../../redux/auth/auth-operations';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAuthLoading,
  selectAuthError,
} from '../../redux/auth/auth-slectors';

const LoginPage = () => {
  const authLoading = useSelector(selectAuthLoading);
  const authError = useSelector(selectAuthError);

  const dispatch = useDispatch();
  const handleLogin = data => {
    dispatch(login(data));
  };

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
