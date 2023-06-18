import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/operations';
import { useSelector } from 'react-redux';
import { getContacts } from '../../redux/selectors';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { Container, Title, Subtitle } from './App.styled';

export const App = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <Subtitle>Contacts</Subtitle>
      <Filter />
      <ContactList>
        {isLoading && !error && <b>Request in progress...</b>}
      </ContactList>
    </Container>
  );
};
