import { useState } from 'react';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import Input from '@global/components/Input';
import InputContainer from '@global/containers/InputContainer';
import {
  ButtonViewPassword,
  PasswordInputContainer,
} from './PasswordInput.styles';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

type PasswordInputProps<T extends FieldValues> = {
  register: UseFormRegister<T>;
  error: boolean;
  errorMessage: string | undefined;
  field: Path<T>;
};

const PasswordInput = <T extends FieldValues>({
  register,
  error,
  errorMessage,
  field,
}: PasswordInputProps<T>) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <InputContainer
      label='Senha'
      labelHtmlFor={field}
      error={error}
      errorMessage={errorMessage}
    >
      <PasswordInputContainer>
        <Input
          type={showPassword ? 'text' : 'password'}
          id={field}
          placeholder={field === 'password' ? 'Senha' : 'Confirme sua senha'}
          aria-invalid={error}
          {...register(field)}
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
  );
};

export default PasswordInput;
