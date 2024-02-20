import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from 'styles/GlobalStyles';

export const StyledContainer = styled(Container)`
  padding-top: 24px;
  padding-bottom: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NameNavLink = styled(NavLink)`
  font-size: 20px;
  font-weight: 700;
  line-height: 1.2em;
  letter-spacing: -0.4px;
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.colors.mainGreen};
`;

export const NavBar = styled.div`
  display: flex;
  gap: 40px;
`;

export const NavBarLink = styled(NavLink)`
  font-weight: 400;
  line-height: 1.25em;
  letter-spacing: -0.16px;
`;

export const AuthBox = styled.div`
  display: flex;
  gap: 8px;
`;

export const SignInBtn = styled.button`
  padding: 14px 39px;
  border-radius: 30px;
  border: 1px solid rgba(25, 26, 21, 0.2);
  color: ${({ theme }) => theme.colors.black};
  background: transparent;
  font-weight: 500;
  line-height: 1.25em;
  letter-spacing: -0.16px;
`;

export const SignUpBtn = styled.button`
  padding: 14px 40px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.mainGreen};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  line-height: 1.25em;
  letter-spacing: -0.16px;
`;
