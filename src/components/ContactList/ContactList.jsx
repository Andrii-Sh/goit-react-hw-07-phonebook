import { useSelector } from 'react-redux';
import { getFilter, getContacts } from '../../redux/selectors';
import { nanoid } from 'nanoid';
import { Contact } from '../Contact/Contact';
import { ContactItem } from './ContactList.styled';

export const ContactList = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const getFiltredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    if (filter === '') {
      return contacts;
    }

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filtredContacts = getFiltredContacts();

  return (
    <ul>
      {filtredContacts.map(contact => {
        const lisiItemtId = nanoid();
        return (
          <ContactItem key={lisiItemtId}>
            <Contact
              id={contact.id}
              name={contact.name}
              number={contact.number}
            />
          </ContactItem>
        );
      })}
    </ul>
  );
};
