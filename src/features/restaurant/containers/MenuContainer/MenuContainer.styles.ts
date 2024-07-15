import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkGray};
  padding: ${({ theme }) => `0px ${theme.spacing.medium}`};
`;

export const ProductsContainer = styled.div`
  display: flex;
  overflow-y: scroll;
  flex-wrap: nowrap;
  gap: ${({ theme }) => theme.spacing.medium};
  padding: ${({ theme }) => `${theme.spacing.medium} ${theme.spacing.medium}`};
  scrollbar-width: none;
  -ms-overflow-style: none;
`;
