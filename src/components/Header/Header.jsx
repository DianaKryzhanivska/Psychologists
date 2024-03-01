import React, { useState } from 'react';
import {
  AccountBox,
  AccountInfo,
  AuthBox,
  LogoutBtn,
  NameNavLink,
  NavBar,
  NavBarLink,
  SignInBtn,
  SignUpBtn,
  Span,
  StyledContainer,
  UserIcon,
  UserName,
} from './Header.styled';
import Modal from '../Modal/Modal';
import LoginForm from '../LoginForm/LoginForm';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import { useDispatch } from 'react-redux';
import { removeUser } from '../../redux/auth/slice';
import sprite from '../../images/sprite.svg';
import { useAuth } from 'hooks/useAuth';
import { toast } from 'react-toastify';

const Header = () => {
  const dispatch = useDispatch();
  const { isAuth, email, name } = useAuth();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const handleOpenLoginModal = () => {
    setIsLoginModalOpen(true);
  };
  const handleCloseLoginModal = () => {
    setIsLoginModalOpen(false);
  };
  const handleOpenRegisterModal = () => {
    setIsRegisterModalOpen(true);
  };
  const handleCloseRegisterModal = () => {
    setIsRegisterModalOpen(false);
  };
  const handleLogout = () => {
    dispatch(removeUser());
    toast(`Good bye!`);
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
            <NavBarLink to="/favorites">Favorites</NavBarLink>
          </NavBar>
          {isAuth ? (
            <AuthBox>
              <SignInBtn type="button" onClick={handleOpenLoginModal}>
                Log in
              </SignInBtn>
              <SignUpBtn type="button" onClick={handleOpenRegisterModal}>
                Registration
              </SignUpBtn>
            </AuthBox>
          ) : (
            <AccountBox>
              <AccountInfo>
                <UserIcon>
                  <svg width="24" height="24">
                    <use href={`${sprite}#user`} />
                  </svg>
                </UserIcon>
                <UserName>{name || email}</UserName>
              </AccountInfo>
              <LogoutBtn type="button" onClick={handleLogout}>
                Log out
              </LogoutBtn>
            </AccountBox>
          )}
        </StyledContainer>
      </header>
      <Modal isOpen={isLoginModalOpen} onClose={handleCloseLoginModal}>
        <LoginForm closeModal={handleCloseLoginModal} />
      </Modal>
      <Modal isOpen={isRegisterModalOpen} onClose={handleCloseRegisterModal}>
        <RegisterForm closeModal={handleCloseRegisterModal} />
      </Modal>
    </>
  );
};

export default Header;
