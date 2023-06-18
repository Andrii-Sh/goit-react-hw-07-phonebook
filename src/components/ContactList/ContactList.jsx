import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter, getContacts } from '../../redux/selectors';
import { fetchContacts } from '../../redux/operations';
import { nanoid } from 'nanoid';
import { Contact } from '../Contact/Contact';
import { ContactItem } from './ContactList.styled';

export const ContactList = () => {
  const filter = useSelector(getFilter);
  // const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getFiltredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    if (filter === '') {
      return items;
    }

    return items.filter(item =>
      item.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filtredContacts = getFiltredContacts();

  return (
    <div>
      {isLoading && <b>Loading contacts...</b>}
      {error && <b>{error}</b>}
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
    </div>
  );
};
