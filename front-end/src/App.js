import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import gql from 'graphql-tag';
import People from './People';

const everyone_query = gql`
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

const male_query = gql`
  {
    info
    people (gender: "male")
    {
      id,
      name,
      age,
      gender
    }
  }
`;

const female_query = gql`
  {
    info
    people (gender: "female")
    {
      id,
      name,
      age,
      gender
    }
  }
`;

const over30_query = gql`
  {
    info
    people (age: {
      value: 30
      operator: GTE
    })
    {
      id,
      name,
      age,
      gender
    }
  }
`;

const under30_query = gql`
{
  info
  people (age: {
  	value: 30
    operator: LT
  })
  {
    id,
    name,
    age,
    gender
	}
}
`;

const App = () => (
  <HashRouter>
    <div>
      <div>
        <NavLink exact to="/">Everyone</NavLink>
        <NavLink to="/male">Male</NavLink>
        <NavLink to="/female">Female</NavLink>
        <NavLink to="/over30">Over 30</NavLink>
        <NavLink to="/under30">Under 30</NavLink>
      </div>
      <div>
        <Route exact path="/" render={(props) => <People {...props} gql={everyone_query} />} />
        <Route path="/male" render={(props) => <People {...props} gql={male_query}/>} />
        <Route path="/female" render={(props) => <People {...props} gql={female_query} />}/>
        <Route path="/over30" render={(props) => <People {...props} gql={over30_query} />}/>
        <Route path="/under30" render={(props) => <People {...props} gql={under30_query} />}/>
      </div>
    </div>
  </HashRouter>
);

export default App;
