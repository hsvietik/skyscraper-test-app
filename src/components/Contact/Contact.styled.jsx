import styled from 'styled-components';
import { FaTrash } from 'react-icons/fa';
import { Colors } from '../../helpers/colors';

export const TableRow = styled.tr`
  &:hover,
  &:focus {
    background-color: ${Colors.headerBackground};
  }
`;

export const TableData = styled.td`
  padding: 5px;
`;

export const DeleteButton = styled.button`
  display: inline-block;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  background-color: transparent;
  cursor: pointer;
  border: none;
  outline: none;
  color: inherit;
`;

export const DeleteIcon = styled(FaTrash)`
  width: 15px;
  height: 15px;
  color: ${Colors.green};
  &:hover,
  &:focus {
    color: ${Colors.greenHover};
  }
`;
