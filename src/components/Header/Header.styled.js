import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from 'styles/GlobalStyles';

export const StyledContainer = styled(Container)`
  padding-top: 24px;
  padding-bottom: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(25, 26, 21, 0.1);

  @media only screen and (max-width: 768px) {
    padding-top: 14px;
    padding-bottom: 14px;
  }

  @media only screen and (max-width: 375px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const NameNavLink = styled(NavLink)`
  font-size: 20px;
  font-weight: 700;
  line-height: 1.2em;
  letter-spacing: -0.4px;

  @media only screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.colors.mainGreen};
`;

export const NavBar = styled.div`
  display: flex;
  gap: 40px;

  @media only screen and (max-width: 768px) {
    gap: 15px;
  }
`;

export const NavBarLink = styled(NavLink)`
  position: relative;
  font-weight: 400;
  line-height: 1.25em;
  letter-spacing: -0.16px;

  &.active::after {
    content: '';
    position: absolute;
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${({ theme }) => theme.colors.mainGreen};
  }
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

  @media only screen and (max-width: 768px) {
    padding: 7px 20px;
  }
`;

export const SignUpBtn = styled.button`
  padding: 14px 40px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.mainGreen};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  line-height: 1.25em;
  letter-spacing: -0.16px;

  @media only screen and (max-width: 768px) {
    padding: 7px 20px;
  }
`;

export const UserIcon = styled.div`
  width: 40px;
  height: 40px;
  background: ${({ theme }) => theme.colors.mainGreen};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    fill: ${({ theme }) => theme.colors.white};
  }

  @media only screen and (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

export const AccountBox = styled.div`
  display: flex;
  gap: 28px;
  align-items: center;

  @media only screen and (max-width: 768px) {
    gap: 10px;
  }
`;

export const AccountInfo = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
`;

export const UserName = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-weight: 500;
  line-height: 1.25em;
  letter-spacing: -0.16px;
`;

export const LogoutBtn = styled.button`
  padding: 14px 39px;
  border-radius: 30px;
  border: 1px solid rgba(25, 26, 21, 0.2);
  color: ${({ theme }) => theme.colors.black};
  background: transparent;
  font-weight: 500;
  line-height: 1.25em;
  letter-spacing: -0.16px;

  @media only screen and (max-width: 768px) {
    padding: 7px 20px;
  }
`;
