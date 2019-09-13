/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';

class Menu extends React.Component {
  shouldComponentUpdate(nextProps) {
    const { handleClick } = this.props;
    return nextProps.handleClick !== handleClick;
  }

  render() {
    const { handleClick } = this.props;
    return (
      <>
        <button onClick={handleClick}>Everyone</button>
        <button onClick={handleClick}>Male</button>
        <button onClick={handleClick}>Female</button>
        <button onClick={handleClick}>Over 30</button>
        <button onClick={handleClick}>Under 30</button>
      </>
    );
  }
}
Menu.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Menu;
