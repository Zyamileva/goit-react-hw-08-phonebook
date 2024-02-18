import React, { useState } from 'react';
import { boxFormStyle, avatarStyle } from './Styled';
import {
  Avatar,
  Button,
  Container,
  Typography,
  CssBaseline,
  TextField,
  Box,
  Grid,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
};

const RegisterForm = ({ onSubmit }) => {
  const [state, setState] = useState({ ...INITIAL_STATE });

  const handleChange = ({ target }) => {
    const { name, value, type, checked } = target;
    const newValue = type === 'checkbox' ? checked : value;

    setState({
      ...state,
      [name]: newValue,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    reset();
  };

  const reset = () => {
    setState({ ...INITIAL_STATE });
  };

  const { name, email, password } = state;

  return (
    <Container maxWidth="xs">
      <CssBaseline />
      <Box sx={boxFormStyle}>
        <Avatar sx={avatarStyle}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form onSubmit={handleSubmit} noValidate>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                value={name}
                name="name"
                inputProps={{
                  inputMode: 'text',
                  pattern:
                    '^[a-zA-Zа-яА-Я]+(([a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$',
                }}
                onChange={handleChange}
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                value={email}
                type="email"
                name="email"
                pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                onChange={handleChange}
                id="email"
                label="Email Address"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                value={password}
                type="password"
                name="password"
                onChange={handleChange}
                label="Password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            sx={{ mt: 3, mb: 2 }}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Sign Up
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default RegisterForm;
