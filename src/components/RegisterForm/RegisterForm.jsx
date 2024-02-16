import React, { useId, useState } from 'react';
import { Div, Label } from './RegisterForm.styled';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
};

const RegisterForm = ({ onSubmit }) => {
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

  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();

  // const { name, email, password } = state;

  return (
    <form onSubmit={handleSubmit}>
      <Div>
        <Label htmlFor={nameId}>Name:</Label>
        <input name="name" onChange={handleChange} id={nameId} required></input>
      </Div>
      <Div>
        <Label htmlFor={emailId}>Email:</Label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          id={emailId}
          required
        ></input>
      </Div>
      <Div>
        <Label html={passwordId}>Password:</Label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          id={passwordId}
          required
        ></input>
      </Div>
      <button type="submit">Button</button>
    </form>
  );
};

export default RegisterForm;
