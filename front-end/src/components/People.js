import React from 'react';
import { Query } from 'react-apollo'
import Person from './Person';

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