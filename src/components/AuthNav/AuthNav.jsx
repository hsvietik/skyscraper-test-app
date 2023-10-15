import React from 'react';

import { Navigation, NavigationLink } from './AuthNav.styled';

function AuthNav() {
  return (
    <Navigation>
      <NavigationLink to="/register">Register</NavigationLink>
      <NavigationLink to="/login">Log In</NavigationLink>
    </Navigation>
  );
}
export default AuthNav;
