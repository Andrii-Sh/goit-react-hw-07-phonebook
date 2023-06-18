import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import { ContactInfo, DeleteButton } from './Contact.styled';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelBtnClick = () => dispatch(deleteContact(id));

  return (
    <>
      <ContactInfo>
        {name}: {number}
      </ContactInfo>
      <DeleteButton type="submit" onClick={handleDelBtnClick}>
        Delete
      </DeleteButton>
    </>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
