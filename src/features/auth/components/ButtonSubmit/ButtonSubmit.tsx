import { ButtonHTMLAttributes } from 'react';
import { Container } from './ButtonSubmit.styles';
import { IoMdSend } from 'react-icons/io';

type ButtonSubmitProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean;
  text: string;
};

const ButtonSubmit: React.FC<ButtonSubmitProps> = ({
  isLoading,
  text,
  ...props
}) => {
  return (
    <Container type='submit' disabled={isLoading} {...props}>
      <IoMdSend />
      {isLoading ? 'Carregando...' : text}
    </Container>
  );
};

export default ButtonSubmit;
