import React, { useState } from 'react';
// import { Div, Label } from './RegisterForm.styled';
// import { Button } from '@mui/material';
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

  // const nameId = useId();
  // const emailId = useId();
  // const passwordId = useId();

  const { name, email, password } = state;

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box>
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form onSubmit={handleSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                value={name}
                name="name"
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
          <Button type="submit" fullWidth variant="contained" color="primary">
            Sign Up
          </Button>
        </form>
      </Box>
    </Container>
  );
};
// }
//     <form onSubmit={handleSubmit}>
//       <Div>
//         <Label htmlFor={nameId}>Name:</Label>
//         <input
//           value={name}
//           name="name"
//           onChange={handleChange}
//           id={nameId}
//           required
//         ></input>
//       </Div>
//       <Div>
//         <Label htmlFor={emailId}>Email:</Label>
//         <input
//           value={email}
//           type="email"
//           name="email"
//           onChange={handleChange}
//           id={emailId}
//           required
//         ></input>
//       </Div>
//       <Div>
//         <Label htmlFor={passwordId}>Password:</Label>
//         <input
//           value={password}
//           type="password"
//           name="password"
//           autoComplete="of"
//           onChange={handleChange}
//           id={passwordId}
//           required
//         ></input>
//       </Div>
//       <button type="submit">Register</button>
//     </form>
//   );
// };

export default RegisterForm;
