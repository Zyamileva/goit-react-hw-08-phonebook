import { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Container, SubTitle, Title } from './App.styled';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onChangeSubmit = data => {
    const newContact = { id: nanoid(), ...data };
    this.state.contacts.some(({ name }) => {
      return name.toLocaleLowerCase() === newContact.name.toLocaleLowerCase();
    })
      ? Notify.warning(`${newContact.name} is already in the contact list`, {
          width: '400px',
          timeout: 5000,
          fontSize: '24px',
        })
      : this.setState(({ contacts }) => {
          return { contacts: [...contacts, newContact] };
        });
  };

  onChangeFilter = ({ currentTarget: { value } }) => {
    this.setState({ filter: value });
  };

  findByLetter = () => {
    const { filter, contacts } = this.state;
    const filterLowerCase = filter.toLocaleLowerCase();
    return contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(filterLowerCase)
    );
  };

  onDeleteContact = idContact => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(({ id }) => id !== idContact),
    }));
  };

  render() {
    const { filter } = this.state;

    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.onChangeSubmit} />
        <SubTitle>Contacts</SubTitle>
        <Filter filter={filter} onChangeFilter={this.onChangeFilter} />
        <ContactList
          contacts={this.findByLetter()}
          onDeleteContact={this.onDeleteContact}
        />
      </Container>
    );
  }
}
