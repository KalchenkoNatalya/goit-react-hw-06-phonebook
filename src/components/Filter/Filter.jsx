import PropTypes from 'prop-types';
import css from './Filter.module.css';
import React, { useState } from 'react';

export const Filter = ({ filterChange, filter }) => {
  const [inputValue, setInputValue] = useState(filter); 
  const handleChangeFilter = event => {
    const value = event.target.value;
    setInputValue(value); // Оновіть стан новим значенням інпуту
    filterChange(value);
    // filterChange(event.target.value);

    console.log(event.target.value);
  };
  console.log(inputValue);
  return (
    <input
      type="text"
      name="filter"
      className={css.filterInput}
      value={inputValue}
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      onChange={handleChangeFilter}
    />
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  filterChange: PropTypes.func.isRequired,
};
