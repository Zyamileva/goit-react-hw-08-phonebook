import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

import { selectAuthIsLogin, selectToken } from '../../redux/auth/auth-slectors';

const PublicRoute = () => {
  const isLogin = useSelector(selectAuthIsLogin);
  const token = useSelector(selectToken);

  if (!isLogin && token) {
    return <p>...Loading</p>;
  }

  if (isLogin) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default PublicRoute;
