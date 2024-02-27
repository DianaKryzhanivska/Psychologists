import React, { useState } from 'react';
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
import Modal from '../Modal/Modal';
import LoginForm from '../LoginForm/LoginForm';
import RegisterForm from 'components/RegisterForm/RegisterForm';

const Header = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const handleOpenLoginModal = () => {
    setIsLoginModalOpen(true);
  };
  const handleCloseLoginModal = () => {
    setIsLoginModalOpen(false);
  };
  const handleOpenRedisterModal = () => {
    setIsRegisterModalOpen(true);
  };
  const handleCloseRegisterModal = () => {
    setIsRegisterModalOpen(false);
  };
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
            <SignInBtn onClick={handleOpenLoginModal}>Log in</SignInBtn>
            <SignUpBtn onClick={handleOpenRedisterModal}>
              Registration
            </SignUpBtn>
          </AuthBox>
        </StyledContainer>
      </header>
      <Modal isOpen={isLoginModalOpen} onClose={handleCloseLoginModal}>
        <LoginForm />
      </Modal>
      <Modal isOpen={isRegisterModalOpen} onClose={handleCloseRegisterModal}>
        <RegisterForm />
      </Modal>
    </>
  );
};

export default Header;
