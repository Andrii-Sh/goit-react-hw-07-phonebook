import { useSelector } from 'react-redux';
import { selectFiltredContacts } from '../../redux/selectors';
import { Contact } from '../Contact/Contact';
import { ContactItem } from './ContactList.styled';

export const ContactList = () => {
  const filtredContacts = useSelector(selectFiltredContacts);

  return (
    <div>
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
