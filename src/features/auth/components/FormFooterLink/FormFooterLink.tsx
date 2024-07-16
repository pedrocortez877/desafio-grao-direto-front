import { Container, HelpText, Link } from './FormFooterLink.styles';

type FormFooterLinkProps = {
  helpText: string;
  linkText: string;
  linkHref: string;
};

const FormFooterLink: React.FC<FormFooterLinkProps> = ({
  helpText,
  linkText,
  linkHref,
}) => {
  return (
    <Container>
      <HelpText>{helpText}</HelpText>
      <Link href={linkHref}>{linkText}</Link>
    </Container>
  );
};

export default FormFooterLink;
