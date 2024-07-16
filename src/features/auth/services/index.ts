import axiosInstance from '@global/services/axiosInstance';
import { LoginCredentials, SignUpCredentials, TokenObject } from '../types';

const signIn = async (credentials: LoginCredentials): Promise<TokenObject> => {
  const response = await axiosInstance.post<TokenObject>(
    '/auth/sign-in',
    credentials
  );
  return response.data;
};

const signUp = async (credentials: SignUpCredentials): Promise<TokenObject> => {
  const response = await axiosInstance.post<TokenObject>(
    '/auth/sign-up',
    credentials
  );
  return response.data;
};

export default {
  signIn,
  signUp,
};
