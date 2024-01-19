import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  FormStyle,
  LabelStyle,
  InputStyleName,
  InputStyleNumber,
  Button,
} from './ContactForm.styled';

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const OnChangeInput = evt => {
    const { name, value } = evt.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const OnChangeSubmit = evt => {
    evt.preventDefault();
    onSubmit({ name, number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormStyle onSubmit={OnChangeSubmit}>
      <LabelStyle>
        Name:
        <InputStyleName
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={OnChangeInput}
        />
      </LabelStyle>
      <LabelStyle>
        Number:
        <InputStyleNumber
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be
          digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={OnChangeInput}
        />
      </LabelStyle>
      <Button type="submit">Add contact</Button>
    </FormStyle>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
