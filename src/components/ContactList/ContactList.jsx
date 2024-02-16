import React, { useEffect } from 'react';
import { ContactItem } from './ContactItem/ContactItem';
import { ContactsListStyle } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from '../redux/contacts/contacts-selectors';
import { fetchContacts } from '../services/fetchContacts';

export const ContactList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const findByLetter = useSelector(selectVisibleContacts);

  return (
    <ContactsListStyle>
      {findByLetter.map(contact => (
        <ContactItem
          name={contact.name}
          number={contact.number}
          key={contact.id}
          id={contact.id}
        />
      ))}
    </ContactsListStyle>
  );
};
