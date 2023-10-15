import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Colors } from '../../helpers/colors';

export const Menu = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
`;
export const Wrap = styled.div`
  display: flex;
  gap: 10px;
`;
export const ContactsLink = styled(Link)`
  min-width: 80px;
  padding: 8px;
  border-radius: 6px;
  font-size: 16px;
  background-color: ${Colors.blue};
  &:focus,
  &:hover {
    background-color: ${Colors.blueHover};
  }
`;
export const LogOutButton = styled.button`
  min-width: 80px;
  color: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  padding: 8px;
  border: none;
  border-radius: 6px;
  background-color: ${Colors.yellow};
  cursor: pointer;
  &:focus,
  &:hover {
    background-color: ${Colors.yellowHover};
  }
`;
