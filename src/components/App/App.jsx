import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/operations';
import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/selectors';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { Container, Title, Subtitle } from './App.styled';

export const App = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <Subtitle>Contacts</Subtitle>
      <Filter />
      {isLoading && !error && <b>Loading contacts...</b>}
      <ContactList />
    </Container>
  );
};
