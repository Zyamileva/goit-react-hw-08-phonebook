import React from 'react';
import { Div } from './Error.styled.jsx';
import { getError } from 'components/redux/selectors.js';
import { useSelector } from 'react-redux';

export const Error = () => {
  const error = useSelector(getError);
  return <Div>Sorry, temporary error on the site: {error}</Div>;
};
