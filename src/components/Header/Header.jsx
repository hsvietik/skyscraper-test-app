import React from 'react';
import { Link } from 'react-router-dom';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';
import { StyledHeader, LogoText } from './Header.styled';

export function Header() {
  const { isLoggedIn } = useAuth();
  return (
    <StyledHeader>
      <Link to="/">
        <LogoText>My logo</LogoText>
      </Link>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </StyledHeader>
  );
}
