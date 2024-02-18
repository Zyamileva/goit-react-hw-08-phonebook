import React from 'react';
import { TextField, Box } from '@mui/material';
import { boxFilterStyle } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filter/filter-slice';
import { selectFilter } from '../../redux/contacts/contacts-selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <Box component="div" sx={boxFilterStyle}>
      <TextField
        margin="normal"
        sx={{
          width: 400,
          bgcolor: 'rgba(208, 224, 241, 0.822)',
        }}
        label="Search:"
        type="text"
        value={filter}
        name="filter"
        title="Enter the name"
        onChange={e => dispatch(setFilter(e.currentTarget.value))}
      />
    </Box>
  );
};
