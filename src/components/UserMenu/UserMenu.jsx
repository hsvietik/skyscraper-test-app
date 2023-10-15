import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from 'redux/auth/authOperations';
import { useAuth } from 'hooks/useAuth';
import { Menu, LogOutButton } from './UserMenu.styled';

function UserMenu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = () => {
    dispatch(logOut());
    navigate('/', { replace: true });
  };
  const { userName } = useAuth();
  return (
    <Menu>
      <p>Welcome, {userName}</p>

      <LogOutButton type="button" onClick={handleLogOut}>
        Log out
      </LogOutButton>
    </Menu>
  );
}
export default UserMenu;
