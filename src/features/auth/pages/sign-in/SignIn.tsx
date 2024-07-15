import Input from '@global/components/Input';
import InputContainer from '@global/containers/InputContainer';
import { useEffect, useState } from 'react';
import { IoMdEye, IoMdEyeOff, IoMdSend } from 'react-icons/io';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@features/auth/stores/useAuthStore';
import { useSignIn } from '@features/auth/hooks/useSignIn';
import { SignInFormInputProps } from '@features/auth/types';
import { signInSchema } from '@features/auth/schemas';
import {
  ButtonSubmit,
  ButtonViewPassword,
  FormContainer,
  FormContainerTitle,
  PasswordInputContainer,
  SignUpContainer,
  SignUpLink,
  SignUpText,
} from './SignIn.styles';

const SignIn: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { login, isLoading } = useSignIn();
  const { token } = useAuthStore();
  const navigate = useNavigate();
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

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token, navigate]);

  return (
    <FormContainer onSubmit={onSubmit}>
      <FormContainerTitle>Entre com suas credenciais</FormContainerTitle>

      <InputContainer
        label='E-mail'
        labelHtmlFor='email'
        error={!!errors.email}
        errorMessage={errors.email?.message}
      >
        <Input
          type='email'
          id='email'
          placeholder='example@example.com'
          aria-invalid={!!errors.email}
          {...register('email')}
        />
      </InputContainer>

      <InputContainer
        label='Senha'
        labelHtmlFor='password'
        error={!!errors.password}
        errorMessage={errors.password?.message}
      >
        <PasswordInputContainer>
          <Input
            type={showPassword ? 'text' : 'password'}
            id='password'
            placeholder='senha'
            aria-invalid={!!errors.password}
            {...register('password')}
          />
          <ButtonViewPassword
            onClick={() => setShowPassword((prevState) => !prevState)}
            type='button'
            aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
          >
            {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
          </ButtonViewPassword>
        </PasswordInputContainer>
      </InputContainer>

      <ButtonSubmit type='submit' disabled={isLoading}>
        <IoMdSend />
        {isLoading ? 'Carregando...' : 'Entrar'}
      </ButtonSubmit>

      <SignUpContainer>
        <SignUpText>Não tem uma conta?</SignUpText>
        <SignUpLink href='/cadastro'>Cadastre-se</SignUpLink>
      </SignUpContainer>
    </FormContainer>
  );
};

export default SignIn;
