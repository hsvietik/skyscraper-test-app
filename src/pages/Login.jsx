import React from 'react';
import { LoginForm } from '../components/Forms/LoginForm';
import { NavigationLink } from '../components/AuthNav/AuthNav.styled';

function Login() {
  return (
    <>
      <h3>Log into your account</h3>
      <LoginForm />
      <h4>
        Or use <NavigationLink to="/register">Register</NavigationLink> to
        create a new account
      </h4>
    </>
  );
}

export default Login;
