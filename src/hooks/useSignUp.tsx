import { useMutation } from '@tanstack/react-query';
import axiosInstance from '@services/axiosInstance';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';

type SignUpCredentials = {
  name: string;
  lastName: string;
  email: string;
  password: string;
};
type ResponseError = {
  error: string;
  message: string;
  statusCode: number;
};

export const useSignUp = () => {
  const signUpMutation = useMutation<
    void,
    AxiosError<ResponseError>,
    SignUpCredentials
  >({
    mutationFn: async (variables: SignUpCredentials) => {
      await axiosInstance.post('/auth/sign-up', variables);
    },
    onError: (error: AxiosError<ResponseError>) => {
      toast.error(error.response?.data.message || 'Erro ao fazer cadastro');
    },
  });

  return {
    signUp: signUpMutation.mutate,
    isLoading: signUpMutation.isPending,
    error: signUpMutation.error,
  };
};
