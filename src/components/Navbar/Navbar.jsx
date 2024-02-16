import React from 'react';
import { Link } from 'react-router-dom';
import NavbarMenu from './NavbarMenu/NavbarMenu';
import NavbarUser from './NavbarUser/NavbarUser';
import NavbarAuth from './NavbarAuth/NavbarAuth';
import { Wrapper } from './Navbar.styled';

const Navbar = () => {
  const isLogin = true;
  return (
    <Wrapper>
      <Link to="/">Home</Link>
      <NavbarMenu />
      {isLogin ? <NavbarUser /> : <NavbarAuth />}
    </Wrapper>
  );
};

export default Navbar;
