import React from 'react';
import { Div } from './Error.styled.jsx';
import { selectError } from '../../redux/contacts/contacts-selectors';
import { useSelector } from 'react-redux';

export const Error = () => {
  const error = useSelector(selectError);
  return <Div>Sorry, temporary error on the site: {error}</Div>;
};
