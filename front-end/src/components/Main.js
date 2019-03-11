/* eslint-disable react/button-has-type */
/* eslint-disable default-case */
import React from 'react';
import gql from 'graphql-tag';
import People from './People';
import queries from '../graphql/queries';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: queries.everyone,
    };
    this.handleClick = this.handleClick.bind(this);
  }

handleClick = (event) => {
  event.preventDefault();
  switch (event.target.innerHTML) {
    case 'Everyone':
      this.setState({
        query: queries.everyone,
      });
      break;
    case 'Male':
      this.setState({
        query: queries.male,
      });
      break;
    case 'Female':
      this.setState({
        query: queries.female,
      });
      break;
    case 'Over 30':
      this.setState({
        query: queries.over30,
      });
      break;
    case 'Under 30':
      this.setState({
        query: queries.under30,
      });
      break;
  }
}

render() {
  const { query } = this.state;
  return (
    <div>
      <button onClick={this.handleClick}>Everyone</button>
      <button onClick={this.handleClick}>Male</button>
      <button onClick={this.handleClick}>Female</button>
      <button onClick={this.handleClick}>Over 30</button>
      <button onClick={this.handleClick}>Under 30</button>
      <People gql={gql`${query}`} />
    </div>
  );
}
}

export default Main;
