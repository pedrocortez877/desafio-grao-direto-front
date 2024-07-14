import styled from 'styled-components';

export const FormInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.spacing.medium};
  position: relative;
`;

export const FormInputLabel = styled.label`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-family: ${({ theme }) => theme.fonts.default};
`;

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-family: ${({ theme }) => theme.fonts.default};
  margin-top: ${({ theme }) => theme.spacing.xs};
`;
