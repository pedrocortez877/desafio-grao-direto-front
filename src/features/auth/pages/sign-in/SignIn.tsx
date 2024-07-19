import * as yup from 'yup';
import Input from '@global/components/Input';
import InputContainer from '@global/containers/InputContainer';
import useAuthRedirect from '@features/auth/hooks/useAuthRedirect';
import PasswordInput from '@features/auth/containers/PasswordInputContainer';
import ButtonSubmit from '@features/auth/components/ButtonSubmit';
import FormFooterLink from '@features/auth/components/FormFooterLink';
import FormContainer from '@features/auth/containers/FormContainer';
import useSignInForm from '@features/auth/hooks/useSignInForm';
import { signInSchema } from '@features/auth/schemas';

export type SignInFormInputProps = yup.InferType<typeof signInSchema>;

const SignIn: React.FC = () => {
  const { onSubmit, errors, isLoading, register } = useSignInForm();

  useAuthRedirect();

  return (
    <FormContainer onSubmit={onSubmit} title='Entre com as suas credenciais'>
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

      <PasswordInput<SignInFormInputProps>
        register={register}
        error={!!errors.password}
        errorMessage={errors.password?.message}
        field='password'
      />

      <ButtonSubmit isLoading={isLoading} text='Entrar' />

      <FormFooterLink
        helpText='Ainda não possui uma conta?'
        linkHref='/cadastro'
        linkText='Cadastre-se'
      />
    </FormContainer>
  );
};

export default SignIn;
