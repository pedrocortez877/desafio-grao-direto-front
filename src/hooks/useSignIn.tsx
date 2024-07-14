import { useMutation } from '@tanstack/react-query';
import { useAuthStore } from '@stores/useAuthStore';
import storage, { StorageKey } from '@utils/storage';
import axiosInstance from '@services/axiosInstance';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';

type LoginCredentials = {
  email: string;
  password: string;
};

type TokenObject = {
  access_token: string;
};

type ResponseError = {
  error: string;
  message: string;
  statusCode: number;
};

export const useSignIn = () => {
  const { setToken: setAuthToken, clearToken } = useAuthStore();

  const loginMutation = useMutation<
    TokenObject,
    AxiosError<ResponseError>,
    LoginCredentials
  >({
    mutationFn: async (credentials: LoginCredentials) => {
      const response = await axiosInstance.post<TokenObject>(
        '/auth/sign-in',
        credentials
      );
      return response.data;
    },
    onSuccess: async (data: TokenObject) => {
      setAuthToken(data.access_token);
      const stringifiedToken = JSON.stringify(data);
      await storage.set({ key: StorageKey.TOKEN, value: stringifiedToken });
    },
    onError: (error: AxiosError<ResponseError>) => {
      toast.error(error.response?.data.message || 'Erro ao fazer login');
    },
  });

  const logout = async () => {
    clearToken();
    await storage.remove(StorageKey.TOKEN);
  };

  return {
    login: loginMutation.mutate,
    logout,
    isLoading: loginMutation.isPending,
    error: loginMutation.error,
  };
};
