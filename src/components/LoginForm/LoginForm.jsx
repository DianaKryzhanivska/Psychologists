import React from 'react';
import sprite from '../../images/sprite.svg';
import {
  Form,
  Icon,
  InputBox,
  SubmitBtn,
  Text,
  Title,
  Wrapper,
} from './LoginForm.styled';

const LoginForm = ({ onClose }) => {
  return (
    <>
      <Wrapper>
        <Title>Log In</Title>
        <Text>
          Welcome back! Please enter your credentials to access your account and
          continue your search for a psychologist.
        </Text>
        <Form>
          <InputBox>
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Password" />
            <Icon width="20" height="20">
              <use href={`${sprite}#eye-off`} />
            </Icon>
          </InputBox>
          <SubmitBtn type="submit">Log In</SubmitBtn>
        </Form>
      </Wrapper>
    </>
  );
};

export default LoginForm;
