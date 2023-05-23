import React from 'react';
// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/ContactSlice';
import Notification from './notafication/Notafication';
import {
  ContactsContainer,
  ContactsList,
  ContactsItem,
  Button,
} from './Contacts.styled';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.phoneBook);
  const filter = useSelector(state => state.filter.filter);
  const handleSearchByName = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };
  return (
    <ContactsContainer>
      <ContactsList>
        {handleSearchByName().map(({ id, name, number }) => (
          <ContactsItem key={id}>
            <p>
              {name}: {number}
            </p>
            <Button type="button" onClick={() => dispatch(deleteContact(id))}>
              Delete
            </Button>
          </ContactsItem>
        ))}
      </ContactsList>
      {handleSearchByName().length === 0 && (
        <Notification message="No Contacts" />
      )}
    </ContactsContainer>
  );
};

export default Contacts;

// Contacts.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   filterContacts: PropTypes.func.isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };
