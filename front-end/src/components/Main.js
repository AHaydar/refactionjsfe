import React from 'react';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import gql from 'graphql-tag';
import People from './People';
import queries from '../graphql/queries';

const Main = () => (
  <BrowserRouter>
    <div>
      <div>
        <NavLink exact to="/">Everyone</NavLink>
        <NavLink to="/male">Male</NavLink>
        <NavLink to="/female">Female</NavLink>
        <NavLink to="/over30">Over 30</NavLink>
        <NavLink to="/under30">Under 30</NavLink>
      </div>
      <div>
        <Route exact path="/" render={props => <People {...props} gql={gql`${queries.everyone}`} />} />
        <Route path="/male" render={props => <People {...props} gql={gql`${queries.male}`} />} />
        <Route path="/female" render={props => <People {...props} gql={gql`${queries.female}`} />} />
        <Route path="/over30" render={props => <People {...props} gql={gql`${queries.over30}`} />} />
        <Route path="/under30" render={props => <People {...props} gql={gql`${queries.under30}`} />} />
      </div>
    </div>
  </BrowserRouter>
);

export default Main;
