import * as yup from 'yup';
import Input from '@global/components/Input';
import InputContainer from '@global/containers/InputContainer';
import useAuthRedirect from '@features/auth/hooks/useAuthRedirect';
import PasswordInput from '@features/auth/containers/PasswordInputContainer';
import ButtonSubmit from '@features/auth/components/ButtonSubmit';
import FormFooterLink from '@features/auth/components/FormFooterLink';
import FormContainer from '@features/auth/containers/FormContainer';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSignIn } from '@features/auth/hooks/useSignIn';
import { signInSchema } from '@features/auth/schemas';

export type SignInFormInputProps = yup.InferType<typeof signInSchema>;

const SignIn: React.FC = () => {
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
