import { useState } from 'react';
import {
  FormStyle,
  LabelStyle,
  InputStyleName,
  InputStyleNumber,
  Button,
} from './ContactForm.styled';
import { selectPhoneBookValue } from '../redux/selectors';
import { addContacts } from '../services/fetchContacts';
import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const phoneBook = useSelector(selectPhoneBookValue);

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
    const data = { name, number };

    if (
      phoneBook.some(({ name }) => {
        return name.toLocaleLowerCase() === data.name.toLocaleLowerCase();
      })
    ) {
      Notify.warning(`${data.name} is already in the contact list`, {
        width: '400px',
        timeout: 5000,
        fontSize: '24px',
      });
      return;
    }
    dispatch(addContacts(data));
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
