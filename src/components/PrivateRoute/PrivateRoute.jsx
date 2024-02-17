import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

import { selectAuthIsLogin, selectToken } from '../../redux/auth/auth-slectors';

const PrivateRoute = () => {
  const isLogin = useSelector(selectAuthIsLogin);
  const token = useSelector(selectToken);

  if (!isLogin && token) {
    return <p>...Loading</p>;
  }

  if (!isLogin && !token) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
