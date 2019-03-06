import React from 'react';

const Person = ({ person }) => {
    return (
        <li>
            {person.name} {person.age}
        </li>
    );
};

export default Person;