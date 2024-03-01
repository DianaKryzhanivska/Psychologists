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
import { Formik } from 'formik';
import { toast } from 'react-toastify';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/auth/slice';

const RegisterForm = ({ closeModal }) => {
  const dispatch = useDispatch();
  const auth = getAuth();

  const handleSubmit = values => {
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
            name: user.displayName,
          })
        );
        // localStorage.setItem('accessToken', user.accessToken);
      })
      .catch(console.error);
    toast.success(`Welcome ${values.name}`);
    closeModal();
  };
  return (
    <>
      <Wrapper>
        <Title>Registration</Title>
        <Text>
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information.
        </Text>
        <Formik
          initialValues={{ name: '', email: '', password: '' }}
          validate={values => {
            const errors = {};
            if (!values.name) {
              errors.name = 'Required';
            }
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
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
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.name && touched.name ? 'error' : ''}
                  value={values.name}
                />
                {errors.name && touched.name && <span>{errors.name}</span>}
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
                <Icon width="20" height="20">
                  <use href={`${sprite}#eye-off`} />
                </Icon>
              </InputBox>
              <SubmitBtn type="submit" disabled={isSubmitting}>
                Sign Up
              </SubmitBtn>
            </Form>
          )}
        </Formik>
      </Wrapper>
    </>
  );
};

export default RegisterForm;
