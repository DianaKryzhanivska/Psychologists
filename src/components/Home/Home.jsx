import React from 'react';
import { NavLinkStyled, Span, StyledContainer } from './Home.styled';

const Home = () => {
  return (
    <>
      <StyledContainer>
        <h1>
          The road to the <Span>depths</Span> of the human soul
        </h1>
        <p>
          We help you to reveal your potential, overcome challenges and find a
          guide in your own life with the help of our experienced psychologists.
        </p>
        <NavLinkStyled to="/psychologists">Get started</NavLinkStyled>
      </StyledContainer>
    </>
  );
};

export default Home;
