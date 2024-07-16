import { RiLogoutBoxLine } from 'react-icons/ri';
import { Container } from './ButtonHeaderLayout.styles';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useSignIn } from '@features/auth/hooks/useSignIn';

const ButtonHeaderLayout: React.FC<{ location: string }> = ({ location }) => {
  const navigate = useNavigate();
  const { logout } = useSignIn();

  const handleClick = () => {
    if (location === '/') {
      logout();
    } else {
      navigate('/');
    }
  };
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
