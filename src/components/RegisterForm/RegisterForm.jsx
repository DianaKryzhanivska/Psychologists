import {
  Form,
  Icon,
  InputBox,
  Text,
  Title,
  Wrapper,
} from 'components/LoginForm/LoginForm.styled';
import React from 'react';
import sprite from '../../images/sprite.svg';
import { SubmitBtn } from './RegisterForm.styled';

const RegisterForm = () => {
  return (
    <>
      <Wrapper>
        <Title>Registration</Title>
        <Text>
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information.
        </Text>
        <Form>
          <InputBox>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Password" />
            <Icon width="20" height="20">
              <use href={`${sprite}#eye-off`} />
            </Icon>
          </InputBox>
          <SubmitBtn type="submit">Sign Up</SubmitBtn>
        </Form>
      </Wrapper>
    </>
  );
};

export default RegisterForm;
