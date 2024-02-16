import React from 'react';
import { MainMenu, MenuLink } from './NavbarMenu.Styled';

const NavbarMenu = () => {
  return (
    <MainMenu>
      {/* <MenuLink to="/">Home</MenuLink> */}
      <MenuLink to="/Contacts">Contacts</MenuLink>
    </MainMenu>
  );
};

export default NavbarMenu;
