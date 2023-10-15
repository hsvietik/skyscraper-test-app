import React from 'react';
import { useForm } from 'react-hook-form';
// import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Container,
  Title,
  StyledForm,
  StyledInput,
  StyledLabel,
  FormButton,
  ErrorMessage,
  ForgotButton,
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
    <Container>
      <Title>Login</Title>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledLabel htmlFor="email">Email</StyledLabel>
        <StyledInput
          {...register('email')}
          type="email"
          placeholder="Email"
          id="email"
        />
        <ErrorMessage>{errors.email?.message}</ErrorMessage>
        <StyledLabel htmlFor="password">Password</StyledLabel>
        <StyledInput
          {...register('password')}
          type="password"
          placeholder="Password"
          id="password"
        />
        <ErrorMessage>{errors.password?.message}</ErrorMessage>

        <ForgotButton to="/resetpassword">Forgot password?</ForgotButton>
        <FormButton type="submit">Sign In</FormButton>
      </StyledForm>
      <Toaster />
    </Container>
  );
}
