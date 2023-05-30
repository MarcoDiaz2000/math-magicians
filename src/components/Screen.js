import React from 'react';
import PropTypes from 'prop-types';
import './Screen.css';

const Screen = ({ value }) => (
  <div className="screen">{value}</div>
);

Screen.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Screen;
