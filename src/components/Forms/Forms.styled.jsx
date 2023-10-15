import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Colors } from '../../helpers/colors';
import { Transition } from '../../helpers/transition';

export const Container = styled.section`
  width: 350px;
  color: ${Colors.black};
  margin: 0px auto;
`;
export const Title = styled.h2`
  margin-bottom: 20px;
  font-family: 'Merriweather', serif;
  font-size: 28px;
  font-weight: 700;
  line-height: 1.2;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  margin-bottom: 10px;
`;
export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledInput = styled.input`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.57;
  padding: 14px 20px;
  border-radius: 5px;
  border: none;
  background-color: ${Colors.grey};
  &:focus,
  &:hover {
    outline: solid 1px ${Colors.brown};
  }
`;
export const StyledLabel = styled.label`
  margin-bottom: 10px;
  font-family: 'Merriweather', serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.42;
`;
export const ErrorMessage = styled.p`
  font-size: 13px;
`;

export const ForgotButton = styled(Link)`
  margin-bottom: 10px;
  text-align: right;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.57;
  color: ${Colors.brown};
`;

export const FormButton = styled.button`
  padding: 11px;
  border-radius: 5px;
  border: 2px solid ${Colors.brown};
  outline: none;
  color: ${Colors.white};
  font-family: 'Merriweather', serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.37;
  background-color: ${Colors.brown};
  transition-property: color, background-color;
  transition-duration: ${Transition.duration};
  transition-timing-function: ${Transition.transitionTiming};
  &:focus,
  &:hover {
    background-color: ${Colors.black};
    color: ${Colors.brown};
  }
`;

export const SignWrap = styled.div`
  display: flex;
  gap: 3px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.57;
  justify-content: center;
`;
export const SignText = styled.p``;
export const SignLink = styled(Link)`
  color: ${Colors.brown};
`;
