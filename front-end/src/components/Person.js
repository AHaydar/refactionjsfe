import React from 'react';
import PropTypes from 'prop-types';

const Person = ({ person }) => (
  <li>
    {person.name}
    {' '}
    {person.age}
  </li>
);
Person.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
  }).isRequired,
};

export default Person;
