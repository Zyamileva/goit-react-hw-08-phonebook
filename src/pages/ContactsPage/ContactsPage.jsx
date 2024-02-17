import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectAuthLoading,
  selectAuthError,
} from '../../redux/auth/auth-slectors';
import { Container, Title, SubTitle } from './ContactsPage.styled';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { Filter } from '../../components/Filter/Filter';
import { Loader } from '../../components/Loader/Loader';
import { Error } from '../../components/Error/Error';
import { ContactList } from '../../components/ContactList/ContactList';

const ContactsPage = () => {
  const isLoading = useSelector(selectAuthLoading);
  const error = useSelector(selectAuthError);

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <SubTitle>Contacts</SubTitle>
      <Filter />
      {isLoading && <Loader />}
      {error ? <Error /> : <ContactList />}
    </Container>
  );
};

export default ContactsPage;
