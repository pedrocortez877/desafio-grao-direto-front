import { useForm } from 'react-hook-form';
import { useSignUp } from './useSignUp';
import { SignUpFormInputProps } from '../pages/sign-up/SignUp';
import { yupResolver } from '@hookform/resolvers/yup';
import { signUpSchema } from '../schemas';

const useSignUpForm = () => {
  const { signUp, isLoading } = useSignUp();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormInputProps>({
    mode: 'all',
    resolver: yupResolver<SignUpFormInputProps>(signUpSchema),
  });

  const onSubmit = handleSubmit((data) => {
    signUp({
      name: data.name,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
    });
  });

  return {
    register,
    onSubmit,
    errors,
    isLoading,
  };
};

export default useSignUpForm;
