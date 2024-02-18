import React from 'react';
import { navbarStyle, MenuLink } from './NavbarMenu.Styled';
import { Toolbar } from '@mui/material';
import menuItems from './menuItems';
import { selectAuthIsLogin } from '../../../redux/auth/auth-slectors';
import { useSelector } from 'react-redux';

const NavbarMenu = () => {
  const isLogin = useSelector(selectAuthIsLogin);

  const filteredMenuItems = !isLogin
    ? menuItems.filter(item => !item.private)
    : menuItems;

  const elements = filteredMenuItems.map(({ id, to, text }) => (
    <li key={id}>
      <MenuLink to={to}>{text}</MenuLink>
    </li>
  ));
  return <Toolbar sx={navbarStyle}>{elements}</Toolbar>;
};
export default NavbarMenu;
