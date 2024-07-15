import { forwardRef, InputHTMLAttributes } from 'react';
import { StyledInput } from './Input.styles';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    return <StyledInput ref={ref} {...props} />;
  }
);

export default Input;
