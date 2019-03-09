/* eslint react/forbid-prop-types: 0 */
import React from 'react';
import { Query } from 'react-apollo';
import PropTypes from 'prop-types';
import Person from './Person';

const People = ({ gql }) => (
  <Query query={gql}>
    {
            ({ loading, error, data }) => {
              if (loading) return <div>Fetching</div>;
              if (error) return <div>Error</div>;

              const personsToRender = data.people;
              return (
                <ul>
                  {personsToRender.map(person => <Person key={person.id} person={person} />)}
                </ul>
              );
            }
        }
  </Query>
);
People.propTypes = {
  gql: PropTypes.object.isRequired,
};

export default People;
