// import { useState, useEffect } from 'react';
import PhonebookForm from './Components/PhonebookForm';
import ContactList from './Components/ContactList';
import Filter from './Components/Filter';

const App = () => {
  return (
    <>
      <h1>Phonebook</h1>
      <PhonebookForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};

export default App;
