import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectAuthLoading,
  selectAuthError,
} from '../../redux/auth/auth-slectors';
import { CssBaseline, Container, Box } from '@mui/material';
import { SubTitle } from './ContactsPage.styled';
import { boxContactsStyle } from '../Styled';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { Filter } from '../../components/Filter/Filter';
import { Loader } from '../../components/Loader/Loader';
import { Error } from '../../components/Error/Error';
import { ContactList } from '../../components/ContactList/ContactList';

const ContactsPage = () => {
  const isLoading = useSelector(selectAuthLoading);
  const error = useSelector(selectAuthError);

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />

      <Box sx={boxContactsStyle}>
        <ContactForm />
        <SubTitle>Contacts</SubTitle>
        <Filter />
        {isLoading && <Loader />}
        {error ? <Error /> : <ContactList />}
      </Box>
    </Container>
  );
};

export default ContactsPage;
