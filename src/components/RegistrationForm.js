import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const initialValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

const handleSubmit = (values, { setSubmitting }) => {
  // Perform form submission logic or API call
  console.log('Form data:', values);

  // Reset form after submission
  setSubmitting(false);
};

const RegistrationForm = () => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={handleSubmit}
  >
    <Form>
      <div>
        <label htmlFor="name">Name:</label>
        <Field type="text" id="name" name="name" />
        <ErrorMessage name="name" component="div" />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <Field type="email" id="email" name="email" />
        <ErrorMessage name="email" component="div" />
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <Field type="password" id="password" name="password" />
        <ErrorMessage name="password" component="div" />
      </div>

      <div>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <Field type="password" id="confirmPassword" name="confirmPassword" />
        <ErrorMessage name="confirmPassword" component="div" />
      </div>

      <button type="submit">Submit</button>
    </Form>
  </Formik>
);

export default RegistrationForm;
