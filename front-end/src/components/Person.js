import React from 'react';

const Person = ({ person }) => (
    <li>
        {person.name} {person.age}
    </li>
);

export default Person;