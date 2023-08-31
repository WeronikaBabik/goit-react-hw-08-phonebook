import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { selectGetContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/actions';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectGetContacts);

  const handleChange = e => {
    switch (e.currentTarget.name) {
      case 'name':
        setName(e.currentTarget.value);
        break;
      case 'number':
        setNumber(e.currentTarget.value);
        break;
      default:
        break;
    }
  };
  const reset = () => {
    setName('');
    setNumber('');
  };
  const handleSubmit = e => {
    e.preventDefault();
    let newContactAdded = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (newContactAdded) {
      alert(`${name} is already in contacts.`);
      return;
    }
    dispatch(addContact({ name, number }));
    reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+((['\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={handleChange}
      />
      <label>Number</label>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={handleChange}
      />
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
