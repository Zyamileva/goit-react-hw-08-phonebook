import { useSelector } from 'react-redux';
import { Container, SubTitle, Title } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { selectIsLoading, selectError } from './redux/selectors';
import { Loader } from './Loader/Loader';
import { Error } from './Error/Error';

export const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

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
