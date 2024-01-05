import PropTypes from 'prop-types';
import { Component } from 'react';
import { FormStyle, LabelStyle, InputStyle } from './ContactForm.styled';

const INITIAL_STATE = {
  name: '',
  number: '',
};

export class ContactForm extends Component {
  state = { ...INITIAL_STATE };

  OnChangeInput = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  OnChangeSubmit = evt => {
    evt.preventDefault();
    console.log(this.state);
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { name, number } = this.state;
    return (
      <FormStyle onSubmit={this.OnChangeSubmit}>
        <LabelStyle>
          <InputStyle
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.OnChangeInput}
          />
        </LabelStyle>
        <LabelStyle>
          <InputStyle
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{(1, 4)}?[ .\-\s]?\(?\d{(1, 3)}?\)?[ .\-\s]?\d{(1, 4)}[
          .\-\s]?\d{(1, 4)}[ .\-\s]?\d{(1, 9)}"
            title="Phone number must be
          digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.OnChangeInput}
          />
        </LabelStyle>
        <button type="submit"></button>
      </FormStyle>
    );
  }

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
}
