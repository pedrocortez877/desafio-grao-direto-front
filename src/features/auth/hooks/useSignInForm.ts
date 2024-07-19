import { useForm } from 'react-hook-form';
import { SignInFormInputProps } from '../pages/sign-in/SignIn';
import { yupResolver } from '@hookform/resolvers/yup';
import { signInSchema } from '../schemas';
import { useSignIn } from './useSignIn';

const useSignInForm = () => {
  const { login, isLoading } = useSignIn();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormInputProps>({
    mode: 'all',
    resolver: yupResolver<SignInFormInputProps>(signInSchema),
  });

  const onSubmit = handleSubmit((data) => {
    login(data);
  });

  return {
    register,
    onSubmit,
    errors,
    isLoading,
  };
};

export default useSignInForm;
