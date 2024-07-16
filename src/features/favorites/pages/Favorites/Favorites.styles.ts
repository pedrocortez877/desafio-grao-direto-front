import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const Title = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-family: ${({ theme }) => theme.fonts.default};
  color: ${({ theme }) => theme.colors.darkGray};
  margin: ${({ theme }) => `${theme.spacing.medium} ${theme.spacing.medium} 0`};
`;

export const EmptyFavoritesText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-family: ${({ theme }) => theme.fonts.default};
  color: ${({ theme }) => theme.colors.darkGray};
  margin-top: ${({ theme }) => theme.spacing.large};
  max-width: 300px;
  text-align: center;
`;
