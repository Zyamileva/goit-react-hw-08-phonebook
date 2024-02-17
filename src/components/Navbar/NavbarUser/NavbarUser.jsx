import React from 'react';
import { selectUser } from '../../../redux/auth/auth-slectors';
import { logout } from '../../../redux/auth/auth-operations';
import { useDispatch, useSelector } from 'react-redux';

const NavbarUser = () => {
  const { name } = useSelector(selectUser);
  const dispatch = useDispatch();

  const onLogout = () => dispatch(logout());

  return (
    <div>
      {name}
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default NavbarUser;
