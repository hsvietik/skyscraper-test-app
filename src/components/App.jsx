import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from '../redux/auth/authOperations';
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import SharedLayout from './SharedLayout/SharedLayout';
const Home = lazy(() => import('../pages/Home'));
const Signup = lazy(() => import('../pages/Signup'));
const Login = lazy(() => import('../pages/Login'));
const Skyscrapers = lazy(() => import('../pages/Skyscrapers'));
const NotFound = lazy(() => import('../pages/NotFound'));

export function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route
          path="signup"
          element={
            <RestrictedRoute redirectTo="/skyscrapers" component={<Signup />} />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/skyscrapers" component={<Login />} />
          }
        />
        <Route
          path="skyscrapers"
          element={
            <PrivateRoute redirectTo="/login" component={<Skyscrapers />} />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
