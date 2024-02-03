import React from 'react';
import { ContactItemStyle, ButtonStyle } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <ContactItemStyle>
      <p>
        {name}: {number}
      </p>
      <ButtonStyle
        type="button"
        onClick={() => {
          dispatch(deleteContact(id));
        }}
      >
        Delete
      </ButtonStyle>
    </ContactItemStyle>
  );
};
