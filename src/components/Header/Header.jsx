import React from 'react';
import {
  AuthBox,
  NameNavLink,
  NavBar,
  NavBarLink,
  SignInBtn,
  SignUpBtn,
  Span,
  StyledContainer,
} from './Header.styled';

const Header = () => {
  return (
    <>
      <header>
        <StyledContainer>
          <NameNavLink to="/">
            <Span>psychologists.</Span>services
          </NameNavLink>
          <NavBar>
            <NavBarLink to="/">Home</NavBarLink>
            <NavBarLink to="/psychologists">Psychologists</NavBarLink>
          </NavBar>
          <AuthBox>
            <SignInBtn>Log in</SignInBtn>
            <SignUpBtn>Registration</SignUpBtn>
          </AuthBox>
        </StyledContainer>
      </header>
    </>
  );
};

export default Header;
