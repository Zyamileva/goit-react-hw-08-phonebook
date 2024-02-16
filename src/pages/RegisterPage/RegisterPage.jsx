import RegisterForm from 'components/RegisterForm/RegisterForm';
import { signup } from 'components/services/auth-api';
import React from 'react';
import { useDispatch } from 'react-redux';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const handleSignup = data => {
    console.log('first', signup(data));
    dispatch(signup(data));
  };

  return (
    <main>
      <RegisterForm onSubmit={handleSignup} />
    </main>
  );
};

export default RegisterPage;
