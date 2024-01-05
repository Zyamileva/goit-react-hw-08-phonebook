import React from 'react';
import PropTypes from 'prop-types';
import { InputStyle } from './Filter.styled';

export const Filter = ({ filter, onChangeFilter }) => {
  return (
    <InputStyle
      type="text"
      name="filter"
      value={filter}
      title="Enter name"
      required
      onChange={onChangeFilter}
    />
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
