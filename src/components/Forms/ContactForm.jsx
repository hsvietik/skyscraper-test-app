import React from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { useSelector, useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  StyledForm,
  StyledInput,
  FormButton,
  ErrorMessage,
} from './Forms.styled';
import { getContacts } from '../../redux/contacts/selectors.js';
import { addContact } from '../../redux/contacts/operations.js';
import { setFilter } from '../../redux/contacts/filterSlice.js';
import { contactAddSchema } from '../../helpers/validationSchema';

export function ContactForm() {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: { name: '', number: '' },
    resolver: yupResolver(contactAddSchema),
  });

  const onSubmit = ({ name, number }) => {
    const contactExists = contacts.find(contact => contact.name === name);
    if (contactExists) {
      toast.error(`${name} is already in contacts`);
      reset();
      return;
    }
    dispatch(addContact({ name, number }));
    dispatch(setFilter(''));
    reset();
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name</label>
        <StyledInput {...register('name')} type="text" id="name" />
        <ErrorMessage>{errors.name?.message}</ErrorMessage>
        <label htmlFor="number">Number</label>
        <StyledInput {...register('number')} type="tel" id="number" />
        <ErrorMessage>{errors.number?.message}</ErrorMessage>
        <FormButton type="submit">Add contact</FormButton>
      </StyledForm>
      <Toaster />
    </>
  );
}
