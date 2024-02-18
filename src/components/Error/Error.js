import React from 'react';
import { selectError } from '../../redux/contacts/contacts-selectors';
import { useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';
import { ErrorStyle } from './Error.styled';

export const Error = () => {
  const error = useSelector(selectError);
  return (
    <Box sx={ErrorStyle}>
      <Typography color="white" component="h2" variant="h3">
        Sorry, temporary error on the site: {error}
      </Typography>
    </Box>
  );
};
