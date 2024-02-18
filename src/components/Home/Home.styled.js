import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from 'styles/GlobalStyles';

export const StyledContainer = styled(Container)`
  padding-top: 78px;
  padding-bottom: 100px;
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.colors.mainGreen};
`;

export const NavLinkStyled = styled(NavLink)`
  padding: 18px 50px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.mainGreen};
  border-radius: 30px;
  display: inline-block;
`;
