import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup.string().email('ایمیل خود را به درستی وارد کنید').required('ایمیل خود را وارد کنید .'),
  password: yup.string().min(8, 'رمز عبور باید بیشتر از ۸ کاراکتر باشد').required('رمز عبور خود راوارد کنید'),
});

export const registerSchema = yup.object().shape({
  email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup.string().min(8, 'رمز عبور باید بیشتر از ۸ کاراکتر باشد').required('رمز عبور خود راوارد کنید'),
  confirmPassword: yup.string()
    .required('Confirm رمز عبور خود راوارد کنید')
    .oneOf([yup.ref('password')], 'Passwords must match'),
});
