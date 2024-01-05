import React from 'react';
import PropTypes from 'prop-types';
import { ContactItemStyle } from './ContactItem.styled';

export const ContactItem = ({ name, number }) => (
  <ContactItemStyle>
    {name}: {number}
  </ContactItemStyle>
);

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
