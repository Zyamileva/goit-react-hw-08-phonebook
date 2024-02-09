import React from 'react';
import { ContactItemStyle, ButtonStyle, Info } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../services/fetchContacts';

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <ContactItemStyle>
      <Info>
        {name}: {number}
      </Info>
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
