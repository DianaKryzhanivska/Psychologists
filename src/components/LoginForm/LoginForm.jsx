import React, { useState } from 'react';
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
import { Formik } from 'formik';
import { toast } from 'react-toastify';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../redux/auth/slice';
import { loginSchema } from '../../schemas/yupSchemas';

const LoginForm = ({ closeModal }) => {
  const dispatch = useDispatch();
  const auth = getAuth();
  const { name } = useSelector(state => state.auth);
  const [loginError, setLoginError] = useState('');
  const handleSubmit = values => {
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
            name: name,
          })
        );
        toast.success(`Welcome ${values.email}`);
        closeModal();
      })
      .catch(error => {
        setLoginError('Invalid email or password');
      });
  };

  return (
    <>
      <Wrapper>
        <Title>Log In</Title>
        <Text>
          Welcome back! Please enter your credentials to access your account and
          continue your search for a psychologist.
        </Text>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={loginSchema}
          validate={values => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Required';
            }
            if (!values.password) {
              errors.password = 'Required';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            handleSubmit(values);
            resetForm();
            setSubmitting(false);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <Form onSubmit={handleSubmit}>
              <InputBox>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.email && touched.email ? 'error' : ''}
                  value={values.email}
                />
                {errors.email && touched.email && <span>{errors.email}</span>}
                <input
                  type="text"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.password && touched.password ? 'error' : ''}
                  value={values.password}
                />
                {errors.password && touched.password && (
                  <span>{errors.password}</span>
                )}
                {loginError && <span>{loginError}</span>}
                <Icon width="20" height="20">
                  <use href={`${sprite}#eye-off`} />
                </Icon>
              </InputBox>
              <SubmitBtn type="submit" disabled={isSubmitting}>
                Log In
              </SubmitBtn>
            </Form>
          )}
        </Formik>
      </Wrapper>
    </>
  );
};

export default LoginForm;
