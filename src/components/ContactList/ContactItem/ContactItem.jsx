import React from 'react';
import PropTypes from 'prop-types';
import { ContactItemStyle, ButtonStyle } from './ContactItem.styled';

export const ContactItem = ({ name, number, id, onDeleteContact }) => (
  <ContactItemStyle>
    <p>
      {name}: {number}
    </p>
    <ButtonStyle
      type="button"
      onClick={() => {
        onDeleteContact(id);
      }}
    >
      Delete
    </ButtonStyle>
  </ContactItemStyle>
);

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
