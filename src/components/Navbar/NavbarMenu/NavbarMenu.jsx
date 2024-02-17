import React from 'react';
import { MainMenu, MenuLink } from './NavbarMenu.Styled';
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
  return <MainMenu>{elements}</MainMenu>;
};
export default NavbarMenu;
