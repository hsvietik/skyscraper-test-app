import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Filter } from '../components/Filter/Filter';
import { ContactList } from '../components/ContactList/ContactList';
import { ContactForm } from '../components/Forms/ContactForm';
import { NoContactsMessage } from '../components/ContactList/NoContactsMessage';
import { getContacts, getFilter } from '../redux/contacts/selectors';
import { fetchContacts } from '../redux/contacts/operations';

function Contacts() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  let filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <section>
      <h2>Add contact using the form below </h2>
      <ContactForm />
      <Filter />
      {filteredContacts.length > 0 ? (
        <ContactList contacts={filteredContacts} />
      ) : (
        <NoContactsMessage />
      )}
    </section>
  );
}

export default Contacts;
