import { useSelector } from 'react-redux';
import { getFilter, getContacts } from '../../redux/selectors';
import { Contact } from '../Contact/Contact';
import { ContactItem } from './ContactList.styled';

export const ContactList = () => {
  const filter = useSelector(getFilter);
  const { items, isLoading, error } = useSelector(getContacts);

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
        {filtredContacts.map(item => {
          return (
            <ContactItem key={item.id}>
              <Contact id={item.id} name={item.name} number={item.phone} />
            </ContactItem>
          );
        })}
      </ul>
    </div>
  );
};
