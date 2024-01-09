import { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Container, SubTitle, Title } from './App.styled';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('my-contacts'));
    console.log('1', contacts);
    if (contacts?.length) {
      this.setState({ contacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    console.log('2', contacts);
    if (contacts.length !== prevState.contacts.length) {
      console.log('first');
      localStorage.setItem('my-contacts', JSON.stringify(this.state.contacts));
    }
  }

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
