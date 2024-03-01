import React from 'react';
import {
  Desc,
  Form,
  InputBox,
  InputComment,
  Name,
  Psychologist,
  SubmitBtn,
  Text,
  Title,
  Wrapper,
} from './AppointmentForm.styled';
import { Formik } from 'formik';
import { toast } from 'react-toastify';

const AppointmentForm = ({ psychologist, closeModal }) => {
  const { name, avatar_url } = psychologist;
  const handleFormSubmit = values => {
    toast.success(`Made an appointment successfully!`);
    closeModal();
  };
  return (
    <>
      <Wrapper>
        <Title>Make an appointment with a psychologists</Title>
        <Text>
          You are on the verge of changing your life for the better. Fill out
          the short form below to book your personal appointment with a
          professional psychologist. We guarantee confidentiality and respect
          for your privacy.
        </Text>
        <Psychologist>
          <img src={avatar_url} alt="psychologist" />
          <div>
            <Desc>Your psychologists</Desc>
            <Name>{name}</Name>
          </div>
        </Psychologist>
        <Formik
          initialValues={{
            name: '',
            phone: '',
            time: '',
            email: '',
            comment: '',
          }}
          validate={values => {
            const errors = {};
            if (!values.name) {
              errors.name = 'Required';
            }
            if (!values.phone) {
              errors.phone = 'Required';
            }
            if (!values.time) {
              errors.time = 'Required';
            }
            if (!values.email) {
              errors.email = 'Required';
            }
            if (!values.comment) {
              errors.comment = 'Required';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            handleFormSubmit(values);
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
              <InputBox>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+380"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.phone && touched.phone ? 'error' : ''}
                  value={values.phone}
                />
                {errors.phone && touched.phone && <span>{errors.phone}</span>}
                <input
                  type="time"
                  name="time"
                  placeholder="00:00"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.time && touched.time ? 'error' : ''}
                  value={values.time}
                />
                {errors.time && touched.time && <span>{errors.time}</span>}
              </InputBox>
              <input
                type="text"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.email && touched.email ? 'error' : ''}
                value={values.email}
              />
              {errors.email && touched.email && <span>{errors.email}</span>}
              <InputComment
                type="text"
                name="comment"
                placeholder="Comment"
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.comment && touched.comment ? 'error' : ''}
                value={values.comment}
              />
              {errors.comment && touched.comment && (
                <span>{errors.comment}</span>
              )}
              <SubmitBtn type="submit" disabled={isSubmitting}>
                Send
              </SubmitBtn>
            </Form>
          )}
        </Formik>
      </Wrapper>
    </>
  );
};

export default AppointmentForm;
