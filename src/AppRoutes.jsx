import React from 'react';
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import ContactsPage from 'pages/ContactsPage/ContactsPage';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
