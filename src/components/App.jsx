import css from './App.module.css';
import { FormAddContacts } from './FormAddContacts/FormAddContacts';
import {  useEffect  } from 'react';
import { Filter } from './Filter/Filter';
// import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts, filterChange, onRemoveContacts } from 'redux/contactReduser';
import { selectVisibleContacts } from 'redux/selectors';

export const App = () => {
  const contacts = useSelector(state => state.contactsState.contacts);
  const filter = useSelector(state => state.contactsState.filter);
  const dispatch = useDispatch();
 

  useEffect(() => {
    const stringifiedContacts = localStorage.getItem('contacts');
    const parcedContacts = JSON.parse(stringifiedContacts);
    if (parcedContacts && parcedContacts.length > 0) {
      dispatch(addContacts(parcedContacts));
    }
  }, [dispatch]);

  useEffect(() => {
    const stringifiedContacts = JSON.stringify(contacts);
    localStorage.setItem('contacts', stringifiedContacts);
  }, [contacts]);


  
  const filteredContacts = useSelector(selectVisibleContacts)

  return (
    <div className={css.wrap}>
      <h2>Phonebook</h2>
      <FormAddContacts addContacts={addContacts} />

      <h2>Find contacts by name</h2>
      <Filter filter={filter} filterChange={(value) => dispatch(filterChange(value))} />

      <h2>Contacts</h2>
      {filter === '' ? (
        <ContactList
          contacts={contacts}
          onRemoveContacts={(contactId) => dispatch(onRemoveContacts(contactId))}
        />
      ) : (
        <ContactList contacts={filteredContacts} />
      )}
    </div>
  );
};

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  filter: PropTypes.string,
  filterChange: PropTypes.func,
  addContacts: PropTypes.func,
  onRemoveContacts: PropTypes.func,
};
