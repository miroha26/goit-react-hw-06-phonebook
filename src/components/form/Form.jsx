import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/ContactSlice';
import { nanoid } from 'nanoid';
import {
  PhoneBookForm,
  PhoneBookLabel,
  PhoneBookInput,
  PhoneBookButton,
} from './Form.styled';

const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const onInputChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const contact = {
      id: nanoid(),
      name,
      number,
    };
    dispatch(addContact(contact));
    e.target.reset();
  };

  const nameId = nanoid();
  const numberId = nanoid();

  return (
    <div>
      <PhoneBookForm onSubmit={handleSubmit}>
        <PhoneBookLabel htmlFor={nameId}>
          Name
          <PhoneBookInput
            id={nameId}
            onChange={onInputChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </PhoneBookLabel>
        <PhoneBookLabel htmlFor={numberId}>
          Number
          <PhoneBookInput
            id={numberId}
            onChange={onInputChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </PhoneBookLabel>
        <PhoneBookButton type="submit">Add Contact</PhoneBookButton>
      </PhoneBookForm>
    </div>
  );
};

export default Form;
