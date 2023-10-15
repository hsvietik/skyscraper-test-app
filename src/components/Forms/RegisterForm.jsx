import React from 'react';
import { useForm } from 'react-hook-form';
// import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import toast, { Toaster } from 'react-hot-toast';
import {
  StyledForm,
  StyledInput,
  FormButton,
  ErrorMessage,
} from './Forms.styled';

import { createUser } from '../../redux/auth/authOperations';

import { registrationSchema } from '../../helpers/validationSchema';

export function RegisterForm() {
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: { name: '', email: '', password: '' },
    resolver: yupResolver(registrationSchema),
  });

  const onSubmit = ({ name, email, password }) => {
    dispatch(createUser({ name, email, password }))
      .unwrap()
      .then(() => toast.success('Account successfully created!'))
      .catch(e =>
        e === 'Request failed with status code 400'
          ? toast.error('This user already exist! Use Log In button')
          : toast.error('Something went wrong, try one nore time!')
      );
    reset();
    // navigate('/contacts', { replace: true });
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name</label>
        <StyledInput {...register('name')} type="text" id="name" />
        <ErrorMessage>{errors.name?.message}</ErrorMessage>
        <label htmlFor="email">Email</label>
        <StyledInput {...register('email')} type="email" id="email" />
        <ErrorMessage>{errors.email?.message}</ErrorMessage>
        <label htmlFor="password">Password</label>
        <StyledInput {...register('password')} type="password" id="password" />
        <ErrorMessage>{errors.password?.message}</ErrorMessage>
        <FormButton type="submit">Register</FormButton>
      </StyledForm>
      <Toaster />
    </>
  );
}
