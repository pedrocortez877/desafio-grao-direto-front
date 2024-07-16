import styled from 'styled-components';

export const Container = styled.form`
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

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-family: ${({ theme }) => theme.fonts.default};
  font-weight: bold;
`;
