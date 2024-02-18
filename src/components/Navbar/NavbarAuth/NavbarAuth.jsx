import React from 'react';
import { Toolbar } from '@mui/material';
import { navbarStyle, MenuLink } from './NavbarAuth.Styled';

const NavbarAuth = () => {
  return (
    <Toolbar sx={navbarStyle}>
      <MenuLink to="/register">Register</MenuLink>
      <MenuLink to="/login">Login</MenuLink>
    </Toolbar>
  );
};

export default NavbarAuth;
