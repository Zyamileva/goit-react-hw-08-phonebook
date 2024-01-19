import { useEffect, useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Container, SubTitle, Title } from './App.styled';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

const LS_KEY = 'my-contacts';

export const App = () => {
  const contactList = JSON.parse(localStorage.getItem(LS_KEY));
  const [contacts, setContacts] = useState(() => [...contactList] ?? []);
  const [filter, setFilter] = useState('');

  useEffect(
    () => localStorage.setItem(LS_KEY, JSON.stringify(contacts)),
    [contacts]
  );

  const onChangeSubmit = data => {
    const newContact = { id: nanoid(), ...data };
    contacts.some(({ name }) => {
      return name.toLocaleLowerCase() === newContact.name.toLocaleLowerCase();
    })
      ? Notify.warning(`${newContact.name} is already in the contact list`, {
          width: '400px',
          timeout: 5000,
          fontSize: '24px',
        })
      : setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const onChangeFilter = ({ currentTarget: { value } }) => {
    setFilter(value);
  };

  const findByLetter = () => {
    const filterLowerCase = filter.toLocaleLowerCase();
    return contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(filterLowerCase)
    );
  };

  const onDeleteContact = idContact => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== idContact)
    );
  };

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={onChangeSubmit} />
      <SubTitle>Contacts</SubTitle>
      <Filter filter={filter} onChangeFilter={onChangeFilter} />
      <ContactList
        contacts={findByLetter()}
        onDeleteContact={onDeleteContact}
      />
    </Container>
  );
};
