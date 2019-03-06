import React from 'react';
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Person from './Person';

// const personsToRender = [
//     {
//       "id": "b3Fshn8F976TZCTg",
//       "name": "Jim",
//       "age": 30,
//       "gender": "male"
//     },
//     {
//       "id": "k3nEqkqlKmWZNejC",
//       "name": "Jane",
//       "age": 55,
//       "gender": "female"
//     },
//     {
//       "id": "oqnu2ZnPTebp04bG",
//       "name": "Bob",
//       "age": 20,
//       "gender": "male"
//     },
//     {
//       "id": "tKmv8RC6GlUnYcV3",
//       "name": "Sally",
//       "age": 24,
//       "gender": "female"
//     }
//   ];

const PEOPLE_QUERY = gql`
    {
    info
    people 
    {
        id,
        name,
        age,
        gender
        }
    }
`;

const People = () => (
    <Query query={PEOPLE_QUERY}>
        {
            ({ loading, error, data }) => {
                if (loading) return <div>Fetching</div>
                if (error) return <div>Error</div>

                const personsToRender = data.people
                return (
                    <div>
                        {personsToRender.map(person => <Person key={person.id} person={person}/>)}
                    </div>
                )
            }
        }
    </Query>
);

export default People;