import React from 'react';
import { useForm } from 'react-hook-form';
// import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  StyledForm,
  StyledInput,
  FormButton,
  ErrorMessage,
} from './Forms.styled';
import { logIn } from '../../redux/auth/authOperations';

import { loginSchema } from '../../helpers/validationSchema';

export function LoginForm() {
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: { email: '', password: '' },
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = ({ email, password }) => {
    dispatch(logIn({ email, password }))
      .unwrap()
      .then(resp => {
        toast.success(`Successfully logged in as ${resp.user.name}`);
      })
      .catch(e => {
        e === 'Request failed with status code 400'
          ? toast.error('Wrong email or password')
          : toast.error('Something went wrong, try one nore time!');
      });
    reset();
    // navigate('/contacts', { replace: true });
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Email</label>
        <StyledInput {...register('email')} type="email" id="email" />
        <ErrorMessage>{errors.email?.message}</ErrorMessage>
        <label htmlFor="password">Password</label>
        <StyledInput {...register('password')} type="password" id="password" />
        <ErrorMessage>{errors.password?.message}</ErrorMessage>
        <FormButton type="submit">Login</FormButton>
      </StyledForm>
      <Toaster />
    </>
  );
}
