import { ReactNode } from 'react';
import { Container, Title } from './AuthLayout.styles';

export type AuthLayoutProps = {
  title: string;
  children: ReactNode;
};

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  );
};

export default AuthLayout;
