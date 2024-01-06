import React from 'react';
import PropTypes from 'prop-types';
import { InputStyle, LabelStyle } from './Filter.styled';

export const Filter = ({ filter, onChangeFilter }) => {
  return (
    <LabelStyle>
      Find contacts by name:
      <InputStyle
        type="text"
        name="filter"
        value={filter}
        title="Enter name"
        required
        onChange={onChangeFilter}
      />
    </LabelStyle>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
