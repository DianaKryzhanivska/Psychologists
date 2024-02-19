import React from 'react';
import {
  HeroText,
  HeroTitle,
  NavLinkStyled,
  Span,
  StyledContainer,
  SvgStyled,
  HeroWrapper,
  HeroImage,
  HeroMainText,
  HeroInfoBox,
  CheckBackground,
  InfoTitle,
  InfoNumber,
  QuestionIcon,
  UsersIcon,
} from './Home.styled';
import sprite from '../../images/sprite.svg';
import usual from '../../images/hero-image@1x.jpg';
import retina from '../../images/hero-image@2x.jpg';

const Home = () => {
  return (
    <>
      <StyledContainer>
        <HeroWrapper>
          <HeroMainText>
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
          </HeroMainText>
          <HeroImage
            srcSet={`${usual} 1x, ${retina} 2x`}
            width="464"
            height="526"
            alt="psychologist's photo"
          />
          <HeroInfoBox>
            <CheckBackground>
              <svg width="30" height="30">
                <use href={`${sprite}#check`} />
              </svg>
            </CheckBackground>
            <div>
              <InfoTitle>Experienced psychologists</InfoTitle>
              <InfoNumber>15,000</InfoNumber>
            </div>
          </HeroInfoBox>
          <QuestionIcon>
            <svg width="17" height="18">
              <use href={`${sprite}#question`} />
            </svg>
          </QuestionIcon>
          <UsersIcon>
            <svg width="28" height="28">
              <use href={`${sprite}#users`} />
            </svg>
          </UsersIcon>
        </HeroWrapper>
      </StyledContainer>
    </>
  );
};

export default Home;
