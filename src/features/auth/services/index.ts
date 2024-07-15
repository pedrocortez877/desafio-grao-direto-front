import axiosInstance from '@global/services/axiosInstance';
import { LoginCredentials, TokenObject } from '../types';

const signIn = async (credentials: LoginCredentials): Promise<TokenObject> => {
  const response = await axiosInstance.post<TokenObject>(
    '/auth/sign-in',
    credentials
  );
  return response.data;
};

export default {
  signIn,
};
