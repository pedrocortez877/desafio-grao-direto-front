import {
  ErrorMessage,
  FormInputContainer,
  FormInputLabel,
} from './InputContainer.styles';

type InputContainerProps = {
  label: string;
  labelHtmlFor: string;
  children: React.ReactNode;
  error?: boolean;
  errorMessage?: string;
};

const InputContainer: React.FC<InputContainerProps> = ({
  label,
  labelHtmlFor,
  error,
  errorMessage,
  children,
}) => {
  return (
    <FormInputContainer>
      <FormInputLabel htmlFor={labelHtmlFor}>{label}</FormInputLabel>
      {children}
      {error && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </FormInputContainer>
  );
};

export default InputContainer;
