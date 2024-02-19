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

export const HeroMainText = styled.div`
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
  position: relative;
  z-index: -10;
`;

export const HeroInfoBox = styled.div`
  padding: 32px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.mainGreen};
  display: flex;
  gap: 16px;
  position: absolute;
  top: 478px;
  left: 745px;
  z-index: -5;
`;

export const CheckBackground = styled.div`
  width: 54px;
  height: 54px;
  border-radius: 13px;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    fill: ${({ theme }) => theme.colors.mainGreen};
  }
`;

export const InfoTitle = styled.p`
  color: ${({ theme }) => theme.colors.lightWhite};
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 400;
`;

export const InfoNumber = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 24px;
  font-weight: 700;
  line-height: normal;
`;

export const QuestionIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  transform: rotate(-15deg);
  background-color: ${({ theme }) => theme.colors.violet};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 329px;
  left: 814px;
  z-index: -5;

  & svg {
    fill: ${({ theme }) => theme.colors.white};
    transform: rotate(15deg);
  }
`;

export const UsersIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 10px;
  transform: rotate(15deg);
  background-color: ${({ theme }) => theme.colors.yellow};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 186px;
  right: 88px;
  z-index: -5;

  & svg {
    fill: ${({ theme }) => theme.colors.white};
    transform: rotate(-12deg);
  }
`;