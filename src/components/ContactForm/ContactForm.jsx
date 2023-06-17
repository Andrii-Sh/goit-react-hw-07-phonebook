import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { useSelector } from 'react-redux';
import { getContacts } from '../../redux/selectors';
import {
  Label,
  ContactInputForm,
  Input,
  SubmitButton,
} from './ContactForm.styled';
import { Formik } from 'formik';

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = (values, { resetForm }) => {
    if (
      contacts.find(
        item => item.name.toLowerCase() === values.name.toLowerCase()
      )
    ) {
      alert(`${values.name} is already in contacts.`);
      return;
    }

    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <ContactInputForm>
        <Label htmlFor="name">
          Name
          <Input
            type="text"
            name="name"
            id="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label htmlFor="number">
          Number
          <Input
            type="tel"
            name="number"
            id="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>

        <SubmitButton type="submit">Add contact</SubmitButton>
      </ContactInputForm>
    </Formik>
  );
};
