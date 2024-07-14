import * as yup from 'yup';
import schema from './SignUp.schema';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSignUp } from '@hooks/useSignUp';
import {
  ButtonSubmit,
  ButtonViewPassword,
  FormContainer,
  FormContainerTitle,
  PasswordInputContainer,
} from './SignUp.styles';
import InputContainer from '@containers/InputContainer/InputContainer';
import Input from '@components/Input';
import { IoMdEye, IoMdEyeOff, IoMdSend } from 'react-icons/io';

type FormInput = yup.InferType<typeof schema>;

const SignUp: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { signUp, isLoading } = useSignUp();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>({
    mode: 'all',
    resolver: yupResolver<FormInput>(schema),
  });

  const onSubmit = handleSubmit((data) => {
    signUp(data);
  });

  return (
    <FormContainer onSubmit={onSubmit}>
      <FormContainerTitle>Informe seus dados</FormContainerTitle>

      <InputContainer
        label='Nome'
        labelHtmlFor='name'
        error={!!errors.name}
        errorMessage={errors.name?.message}
      >
        <Input
          type='text'
          id='name'
          placeholder='Nome'
          aria-invalid={!!errors.name}
          {...register('name')}
        />
      </InputContainer>

      <InputContainer
        label='Sobrenome'
        labelHtmlFor='lastName'
        error={!!errors.lastName}
        errorMessage={errors.lastName?.message}
      >
        <Input
          type='text'
          id='lastName'
          placeholder='Sobrenome'
          aria-invalid={!!errors.lastName}
          {...register('lastName')}
        />
      </InputContainer>

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

      <InputContainer
        label='Confirmar senha'
        labelHtmlFor='confirmPassword'
        error={!!errors.confirmPassword}
        errorMessage={errors.confirmPassword?.message}
      >
        <PasswordInputContainer>
          <Input
            type={showPassword ? 'text' : 'password'}
            id='confirmPassword'
            placeholder='senha'
            aria-invalid={!!errors.confirmPassword}
            {...register('confirmPassword')}
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
    </FormContainer>
  );
};

export default SignUp;
