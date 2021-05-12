import React from 'react';
import headerClasses from './Header.module.css';
import PropTypes from 'prop-types';
import Button from './Button';

const Header = (props) => {
  return (
    <header className={headerClasses.header}>
      <h1 className={headerClasses.h1}>{props.title}</h1>
      <Button
        backgroundColor={props.showAddTask ? 'darkred' : 'darkgreen'}
        color='white'
        text={props.showAddTask ? 'Close' : 'Add'}
        onAdd={props.onAdd}
      />
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
