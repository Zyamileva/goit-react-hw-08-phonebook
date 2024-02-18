import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import { selectAuthIsLogin, selectUser } from '../../redux/auth/auth-slectors';
import photo from '../../photo/photo.jpg';
import { useSelector } from 'react-redux';
import { boxMainStyle, paperMainStyle } from '../Styled';

const HomePage = () => {
  const isLoggedIn = useSelector(selectAuthIsLogin);
  const user = useSelector(selectUser);

  return (
    <Paper sx={paperMainStyle(photo)}>
      <Box sx={boxMainStyle}>
        {isLoggedIn ? (
          <>
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              Hi, {user.name}! <br />
              Welcome to your phonebook.{' '}
            </Typography>
          </>
        ) : (
          <>
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              Hello! I'm your phonebook.{' '}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              Please login or register.
            </Typography>
          </>
        )}
      </Box>
    </Paper>
  );
};

export default HomePage;
