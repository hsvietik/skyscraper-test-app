import React from 'react';
import { Link } from 'react-router-dom';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';
import { StyledHeader, Logo, LogoText, LogoWrap } from './Header.styled';
import logo from './phone-book-logo.png';

function Header() {
  const { isLoggedIn } = useAuth();
  return (
    <StyledHeader>
      <Link to="/">
        <LogoWrap>
          <Logo src={logo} alt="Phonebook" />
          <LogoText>Phonebook</LogoText>
        </LogoWrap>
      </Link>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </StyledHeader>
  );
}
export default Header;
