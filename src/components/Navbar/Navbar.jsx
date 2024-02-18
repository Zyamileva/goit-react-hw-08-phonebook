import React from 'react';
import NavbarMenu from './NavbarMenu/NavbarMenu';
import NavbarUser from './NavbarUser/NavbarUser';
import NavbarAuth from './NavbarAuth/NavbarAuth';
import { AppBar, Toolbar } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectAuthIsLogin } from '../../redux/auth/auth-slectors';

const Navbar = () => {
  const isLogin = useSelector(selectAuthIsLogin);
  return (
    <AppBar>
      <Toolbar
        sx={{ display: 'flex', fontSize: 20, justifyContent: 'space-between' }}
      >
        <NavbarMenu />
        {isLogin ? <NavbarUser /> : <NavbarAuth />}
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
