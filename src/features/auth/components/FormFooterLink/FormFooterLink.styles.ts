import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-top: ${({ theme }) => theme.spacing.large};
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const HelpText = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.default};
  font-size: ${({ theme }) => theme.fontSizes.medium};
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.default};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  cursor: pointer;
`;
