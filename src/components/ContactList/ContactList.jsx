import React from 'react';
import { ContactItem } from './ContactItem/ContactItem';
import { ContactsListStyle } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getFilter } from '../redux/filterSlice';
import { getContacts } from '../redux/contactsSlice';

export const ContactList = () => {
  const phoneBook = useSelector(getContacts);
  const filterName = useSelector(getFilter);

  const findByLetter = phoneBook.filter(({ name }) =>
    name.toLocaleLowerCase().includes(filterName.toLocaleLowerCase())
  );

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
