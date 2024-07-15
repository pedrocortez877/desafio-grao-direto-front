import { AuthLayoutProps } from '@features/auth/types';
import { Container, Title } from './AuthLayout.styles';

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  );
};

export default AuthLayout;
