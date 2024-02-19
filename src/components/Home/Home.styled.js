import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from 'styles/GlobalStyles';

export const StyledContainer = styled(Container)`
  padding-top: 78px;
  padding-bottom: 100px;
`;

export const HeroWrapper = styled.div`
  display: flex;
  gap: 125px;
  align-items: center;
`;

export const HeroInfoBox = styled.div`
  width: 595px;
`;

export const HeroTitle = styled.h1`
  font-size: 80px;
  margin-bottom: 20px;
  font-weight: 600;
  line-height: 1.02em;
  letter-spacing: -1.6px;
  color: ${({ theme }) => theme.colors.black};
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.colors.mainGreen};
  font-style: italic;
`;

export const HeroText = styled.p`
  width: 510px;
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33em;
  letter-spacing: -0.36px;
  color: ${({ theme }) => theme.colors.black};
`;

export const NavLinkStyled = styled(NavLink)`
  padding: 18px 50px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.mainGreen};
  border-radius: 30px;
  display: inline-flex;
  gap: 18px;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.2em;
  letter-spacing: -0.2px;
`;

export const SvgStyled = styled.svg`
  fill: ${({ theme }) => theme.colors.white};
`;

export const HeroImage = styled.img`
  border-radius: 10px;
`;
