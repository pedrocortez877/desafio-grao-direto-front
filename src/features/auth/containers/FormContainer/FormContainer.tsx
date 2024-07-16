import { Container, Title } from './FormContainer.styles';

type FormContainerProps = {
  onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
  title: string;
  children: React.ReactNode;
};

const FormContainer: React.FC<FormContainerProps> = ({
  onSubmit,
  title,
  children,
}) => {
  return (
    <Container onSubmit={onSubmit}>
      <Title>{title}</Title>

      {children}
    </Container>
  );
};

export default FormContainer;
