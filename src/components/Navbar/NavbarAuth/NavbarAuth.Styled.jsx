import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MenuLink = styled(NavLink)`
  color: #212121;
  &.active {
    color: yellowgreen;
    list-style-type: none;
  }
`;

export const navbarStyle = {
  display: 'flex',
  columnGap: 2,
};
