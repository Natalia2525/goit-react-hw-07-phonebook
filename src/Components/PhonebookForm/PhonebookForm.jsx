import { useState } from 'react';
// import PropTypes from 'prop-types';
import st from './PhonebookForm.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../../redux/contacts/contacts-selectors';
import { addContact } from '../../redux/contacts/contact-operations';

const PhonebookForm = () => {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleNameChange = e => {
    setName(e.target.value);
  };
  const handleNumberChange = e => {
    setNumber(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();

    const isValidated = validateForm();
    if (!isValidated) return;
    dispatch(addContact(name, number));
    setName('');
    setNumber('');
  };
  const handleUniq = ({ name }) => {
    const filterContact = !!contacts.find(contact => contact.name === name);
    filterContact && alert(`Contact is already in the Phonebook`);
    return !filterContact;
  };
  const validateForm = () => {
    if (!name || !number) {
      alert('Please еnter data!');
      setName('');
      setNumber('');
      return false;
    }

    return handleUniq(name);
  };

  return (
    <form className={st.form} onSubmit={handleSubmit}>
      <label className={st.title}>
        Name
        <input
          className={st.input}
          type="text"
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label>
        Number
        <input
          className={st.input}
          type="text"
          value={number}
          onChange={handleNumberChange}
        />
      </label>
      <button className={st.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

// PhonebookForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
//   onCheckUniq: PropTypes.func.isRequired,
// };

export default PhonebookForm;
