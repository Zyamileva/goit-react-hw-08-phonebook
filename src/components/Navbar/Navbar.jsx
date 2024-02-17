import React from 'react';
import NavbarMenu from './NavbarMenu/NavbarMenu';
import NavbarUser from './NavbarUser/NavbarUser';
import NavbarAuth from './NavbarAuth/NavbarAuth';
import { Wrapper } from './Navbar.styled';
import { useSelector } from 'react-redux';
import { selectAuthIsLogin } from '../../redux/auth/auth-slectors';

const Navbar = () => {
  const isLogin = useSelector(selectAuthIsLogin);
  return (
    <Wrapper>
      {/* <Link to="/">Home</Link> */}
      <NavbarMenu />
      {isLogin ? <NavbarUser /> : <NavbarAuth />}
    </Wrapper>
  );
};

export default Navbar;
