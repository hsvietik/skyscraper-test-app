import React from 'react';
import { AuthNavigation, LogIn, SignUp } from './AuthNav.styled';

function AuthNav() {
  return (
    <AuthNavigation>
      <li>
        <LogIn to="/login">Log In</LogIn>
      </li>
      <li>
        <SignUp to="/signup">Sign Up</SignUp>
      </li>
    </AuthNavigation>
  );
}
export default AuthNav;
