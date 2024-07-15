import { FaSearch } from 'react-icons/fa';
import { Input, InputContainer } from './InputSearch.styles';
import { InputHTMLAttributes } from 'react';

const InputSearch: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({
  hidden,
  ...props
}) => {
  return (
    <InputContainer hidden={hidden}>
      <Input placeholder='Pesquisar' {...props} />
      <FaSearch />
    </InputContainer>
  );
};

export default InputSearch;
