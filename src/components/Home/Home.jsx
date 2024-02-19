import React from 'react';
import {
  HeroText,
  HeroTitle,
  HeroInfoBox,
  NavLinkStyled,
  Span,
  StyledContainer,
  SvgStyled,
  HeroWrapper,
  HeroImage,
} from './Home.styled';
import sprite from '../../images/sprite.svg';
import usual from '../../images/hero-image@1x.jpg';
import retina from '../../images/hero-image@2x.jpg';

const Home = () => {
  return (
    <>
      <StyledContainer>
        <HeroWrapper>
          <HeroInfoBox>
            <HeroTitle>
              The road to the <Span>depths</Span> of the human soul
            </HeroTitle>
            <HeroText>
              We help you to reveal your potential, overcome challenges and find
              a guide in your own life with the help of our experienced
              psychologists.
            </HeroText>
            <NavLinkStyled to="/psychologists">
              Get started
              <SvgStyled width="18" height="22">
                <use href={`${sprite}#arrow`} />
              </SvgStyled>
            </NavLinkStyled>
          </HeroInfoBox>
          <HeroImage
            srcSet={`${usual} 1x, ${retina} 2x`}
            width="464"
            height="526"
            alt="psychologist's photo"
          />
        </HeroWrapper>
      </StyledContainer>
    </>
  );
};

export default Home;
