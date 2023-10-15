import React from 'react';
import { useForm } from 'react-hook-form';
// import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import toast, { Toaster } from 'react-hot-toast';
import {
  Container,
  Title,
  StyledForm,
  InputWrap,
  StyledLabel,
  StyledInput,
  FormButton,
  ErrorMessage,
  SignWrap,
  SignText,
  SignLink,
} from './Forms.styled';

import { createUser } from '../../redux/auth/authOperations';

import { registrationSchema } from '../../helpers/validationSchema';

export function SignupForm() {
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
    <Container>
      <Title>Sign Up</Title>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <InputWrap>
          <StyledLabel htmlFor="name">Name</StyledLabel>
          <StyledInput
            {...register('name')}
            type="text"
            placeholder="Name"
            id="name"
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </InputWrap>
        <InputWrap>
          <StyledLabel htmlFor="email">Email</StyledLabel>
          <StyledInput
            {...register('email')}
            type="email"
            placeholder="Email"
            id="email"
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>
        </InputWrap>
        <InputWrap>
          <StyledLabel htmlFor="password">Password</StyledLabel>
          <StyledInput
            {...register('password')}
            type="password"
            placeholder="Password"
            id="password"
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>
        </InputWrap>
        <FormButton type="submit">Sign Up</FormButton>
      </StyledForm>
      <SignWrap>
        <SignText>Already have account?</SignText>
        <SignLink to="/login">Log In</SignLink>
      </SignWrap>
      <Toaster />
    </Container>
  );
}
