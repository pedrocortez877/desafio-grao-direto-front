import * as yup from 'yup';
import InputContainer from '@global/containers/InputContainer';
import Input from '@global/components/Input';
import PasswordInput from '@features/auth/containers/PasswordInputContainer';
import ButtonSubmit from '@features/auth/components/ButtonSubmit';
import FormFooterLink from '@features/auth/components/FormFooterLink';
import FormContainer from '@features/auth/containers/FormContainer';
import { signUpSchema } from '@features/auth/schemas';
import useSignUpForm from '@features/auth/hooks/useSignUpForm';

export type SignUpFormInputProps = yup.InferType<typeof signUpSchema>;

const SignUp: React.FC = () => {
  const { onSubmit, errors, register, isLoading } = useSignUpForm();

  return (
    <FormContainer onSubmit={onSubmit} title='Informe os seus dados'>
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

      <PasswordInput<SignUpFormInputProps>
        register={register}
        error={!!errors.password}
        errorMessage={errors.password?.message}
        field='password'
      />

      <PasswordInput<SignUpFormInputProps>
        register={register}
        error={!!errors.confirmPassword}
        errorMessage={errors.confirmPassword?.message}
        field='confirmPassword'
      />

      <ButtonSubmit isLoading={isLoading} text='Cadastrar' />

      <FormFooterLink
        helpText='Já possui uma conta?'
        linkHref='/entrar'
        linkText='Entrar'
      />
    </FormContainer>
  );
};

export default SignUp;
