import React from 'react';
import { LoginForm } from '../components/Forms/LoginForm';
import { FormDecor } from '../components/FormDecor/FormDecor';

function Login() {
  return (
    <FormDecor>
      <LoginForm />
    </FormDecor>
  );
}

export default Login;
