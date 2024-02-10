import React from 'react';
import { InputStyle, LabelStyle } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/filterSlice';
import { selectFilter } from '../redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <LabelStyle>
      Find contacts by name:
      <InputStyle
        type="text"
        name="filter"
        value={filter}
        title="Enter name"
        required
        onChange={e => dispatch(setFilter(e.currentTarget.value))}
      />
    </LabelStyle>
  );
};
