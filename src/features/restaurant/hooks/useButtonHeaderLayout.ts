import { useSignIn } from '@features/auth/hooks/useSignIn';
import { useNavigate } from 'react-router-dom';

const useButtonHeaderLayout = ({ location }: { location: string }) => {
  const navigate = useNavigate();
  const { logout } = useSignIn();

  const handleClick = () => {
    if (location === '/') {
      logout();
    } else {
      navigate(-1);
    }
  };

  return { handleClick };
};

export default useButtonHeaderLayout;
