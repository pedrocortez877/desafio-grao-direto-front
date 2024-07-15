import * as yup from 'yup';
import { signInSchema, signUpSchema } from '../schemas';
import { ReactNode } from 'react';

export type AuthState = {
  token: string | null;
  setToken: (token: string) => void;
  clearToken: () => void;
  initializeToken: () => Promise<void>;
};

export type LoginCredentials = {
  email: string;
  password: string;
};

export type TokenObject = {
  access_token: string;
};

export type ResponseError = {
  error: string;
  message: string;
  statusCode: number;
};

export type SignInFormInputProps = yup.InferType<typeof signInSchema>;

export type SignUpFormInputProps = yup.InferType<typeof signUpSchema>;

export type AuthLayoutProps = {
  title: string;
  children: ReactNode;
};
