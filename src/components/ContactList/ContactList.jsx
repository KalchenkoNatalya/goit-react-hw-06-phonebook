import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, onRemoveContacts }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id} className={css.item}>
          <p>
            {contact.name}: {contact.number}
          </p>
          <button
            onClick={() => onRemoveContacts(contact.id)}
            className={css.btnRemove}
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onRemoveContacts: PropTypes.func,
};
