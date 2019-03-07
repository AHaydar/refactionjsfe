import React from 'react';
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Person from './Person';

// const PEOPLE_QUERY = gql`
//     {
//     info
//     people 
//     {
//         id,
//         name,
//         age,
//         gender
//         }
//     }
// `;

const People = ({ gql }) => (
    <Query query={gql}>
        {
            ({ loading, error, data }) => {
                if (loading) return <div>Fetching</div>
                if (error) return <div>Error</div>

                const personsToRender = data.people
                return (
                    <ul>
                        {personsToRender.map(person => <Person key={person.id} person={person}/>)}
                    </ul>
                )
            }
        }
    </Query>
);

export default People;