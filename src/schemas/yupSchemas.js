import * as Yup from 'yup';

export const registerSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().required('Required').min(6, 'Min length 6'),
});

export const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .min(6, 'Min length 6')
    .max(20, 'Max length 20')
    .required('Required'),
});
