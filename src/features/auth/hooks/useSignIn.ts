import { jwtDecode } from 'jwt-decode';
import AuthService from '../services';
import storage, { StorageKey } from '@global/utils/storage';
import { useMutation } from '@tanstack/react-query';
import { useAuthStore } from '@features/auth/stores/useAuthStore';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { JwtPayload, LoginCredentials, TokenObject } from '../types';
import { ResponseError } from '@global/types';

export const useSignIn = () => {
  const {
    setToken: setAuthToken,
    setFirstName: setAuthFirstName,
    clearToken,
    clearFirstName,
  } = useAuthStore();
  const navigate = useNavigate();

  const loginMutation = useMutation<
    TokenObject,
    AxiosError<ResponseError>,
    LoginCredentials
  >({
    mutationFn: async (credentials: LoginCredentials) => {
      return AuthService.signIn(credentials);
    },
    onSuccess: async (data: TokenObject) => {
      const decoded: JwtPayload = jwtDecode(data.access_token);
      setAuthFirstName(decoded.firstName);

      setAuthToken(data.access_token);
      const stringifiedToken = JSON.stringify(data);
      await storage.set({ key: StorageKey.TOKEN, value: stringifiedToken });
      navigate('/');
    },
    onError: (error: AxiosError<ResponseError>) => {
      toast.error(error.response?.data.message || 'Erro ao fazer login');
    },
  });

  const logout = async () => {
    clearToken();
    clearFirstName();
    await storage.remove(StorageKey.TOKEN);
    navigate('/entrar');
  };

  return {
    login: loginMutation.mutate,
    logout,
    isLoading: loginMutation.isPending,
    error: loginMutation.error,
  };
};
