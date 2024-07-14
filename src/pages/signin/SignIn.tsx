import { useState } from 'react';
import {
  ButtonSubmit,
  ButtonViewPassword,
  FormContainer,
  FormContainerTitle,
  PasswordInputContainer,
  SignUpContainer,
  SignUpLink,
  SignUpText,
} from './Signin.styles';
import { IoMdEye, IoMdEyeOff, IoMdSend } from 'react-icons/io';
import Input from '@components/Input';
import InputContainer from '@containers/InputContainer/InputContainer';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import schema from './SignIn.schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuth } from '@hooks/useAuth';

type FormInput = yup.InferType<typeof schema>;

const SignIn: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { login, isLoading } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>({
    mode: 'all',
    resolver: yupResolver<FormInput>(schema),
  });

  const onSubmit = handleSubmit((data) => {
    login(data);
  });

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
