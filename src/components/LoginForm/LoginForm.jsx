import React, { useId, useState } from 'react';
import { Div, Label } from './LoginForm.styled';

const INITIAL_STATE = {
  email: '',
  password: '',
};

const LoginForm = ({ onSubmit }) => {
  console.log('onSubmit', onSubmit);
  const [state, setState] = useState({ ...INITIAL_STATE });

  const handleChange = ({ target }) => {
    const { name, value, type, checked } = target;
    const newValue = type === 'checkbox' ? checked : value;

    setState({
      ...state,
      [name]: newValue,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    reset();
  };

  const reset = () => {
    setState({ ...INITIAL_STATE });
  };

  const emailId = useId();
  const passwordId = useId();
  console.log('emailId', emailId);
  console.log('state', state);
  const { email, password } = state;

  return (
    <form onSubmit={handleSubmit}>
      <Div>
        <Label htmlFor={emailId}>Email:</Label>
        <input
          value={email}
          type="email"
          name="email"
          onChange={handleChange}
          id={emailId}
          required
        ></input>
      </Div>
      <Div>
        <Label htmlFor={passwordId}>Password:</Label>
        <input
          value={password}
          type="password"
          name="password"
          autoComplete="of"
          onChange={handleChange}
          id={passwordId}
          required
        ></input>
      </Div>
      <button type="submit">Register</button>
    </form>
  );
};

export default LoginForm;
