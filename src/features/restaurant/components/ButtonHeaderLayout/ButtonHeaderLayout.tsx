import { RiLogoutBoxLine } from 'react-icons/ri';
import { Container } from './ButtonHeaderLayout.styles';
import { FaArrowLeft } from 'react-icons/fa';
import useButtonHeaderLayout from '@features/restaurant/hooks/useButtonHeaderLayout';

const ButtonHeaderLayout: React.FC<{ location: string }> = ({ location }) => {
  const { handleClick } = useButtonHeaderLayout({ location });

  return (
    <Container onClick={handleClick}>
      {location === '/' ? (
        <RiLogoutBoxLine size={24} />
      ) : (
        <FaArrowLeft size={24} />
      )}
    </Container>
  );
};

export default ButtonHeaderLayout;
