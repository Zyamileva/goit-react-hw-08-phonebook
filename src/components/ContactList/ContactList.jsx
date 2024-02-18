import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { ContactItem } from './ContactItem/ContactItem';
import { ContactsListStyle, boxListStyle } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../redux/contacts/contacts-selectors';
import { fetchContacts } from '../../redux/contacts/contacts-operations';

export const ContactList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const findByLetter = useSelector(selectVisibleContacts);

  return (
    <Box sx={boxListStyle}>
      <Typography component="h1" variant="h5">
        Your Contacts
      </Typography>
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
    </Box>
  );
};
