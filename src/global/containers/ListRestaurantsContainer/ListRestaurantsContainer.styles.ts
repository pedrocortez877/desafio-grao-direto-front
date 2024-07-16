import styled from 'styled-components';

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.medium};
  width: 100%;
  padding: ${({ theme }) => `${theme.spacing.large} ${theme.spacing.medium}`};

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
