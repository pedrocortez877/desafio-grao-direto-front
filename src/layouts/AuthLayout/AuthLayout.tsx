import { ReactNode } from 'react';
import { Container, Title } from './AuthLayout.styles';

const AuthLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Container>
      <Title>Acesse seus restaurantes prediletos</Title>
      {children}
    </Container>
  );
};

export default AuthLayout;
