import React from 'react';
import { NavLink } from 'react-router-dom';
import { Span, StyledContainer } from './Header.styled';

const Header = () => {
  return (
    <>
      <header>
        <StyledContainer>
          <NavLink to="/">
            <Span>psychologists.</Span>services
          </NavLink>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/psychologists">Psychologists</NavLink>
          <button>Log in</button>
          <button>Registration</button>
        </StyledContainer>
      </header>
    </>
  );
};

export default Header;
