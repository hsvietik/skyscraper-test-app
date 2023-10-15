import styled from '@emotion/styled';
import { Colors } from '../../helpers/colors';

export const StyledForm = styled.form`
  width: 300px;
  display: inline-flex;
  flex-direction: column;
  gap: 10px;
  padding: 30px;
  border-radius: 6px;
  background-color: ${Colors.green};
`;

export const StyledInput = styled.input`
  padding: 10px;
  border-radius: 6px;
  background-color: #e1d5bb;
  &:focus,
  &:hover {
    outline: solid 2px ${Colors.yellow};
  }
`;
export const FormButton = styled.button`
  margin-top: 10px;
  padding: 10px;
  border-radius: 6px;
  color: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  padding: 8px;
  background-color: ${Colors.yellow};
  &:focus,
  &:hover {
    background-color: ${Colors.yellowHover};
  }
`;
export const ErrorMessage = styled.p`
  margin: 0px;
  padding: 0px;
`;
