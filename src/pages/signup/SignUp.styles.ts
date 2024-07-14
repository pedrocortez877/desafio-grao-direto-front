import styled from 'styled-components';

export const FormContainer = styled.form`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.darkGray};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: ${({ theme }) => theme.spacing.large};
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  margin-top: ${({ theme }) => theme.spacing.xxl};
  max-width: 420px;
`;

export const FormContainerTitle = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-family: ${({ theme }) => theme.fonts.default};
  font-weight: bold;
`;

export const PasswordInputContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const ButtonViewPassword = styled.button`
  position: absolute;
  right: ${({ theme }) => theme.spacing.small};
  top: 28px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const ButtonSubmit = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xs};
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  padding: ${({ theme }) => theme.spacing.small};
  margin-top: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.default};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: bold;
  cursor: pointer;
`;
