import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  padding: ${({ theme }) => theme.spacing.small};
  margin-top: ${({ theme }) => theme.spacing.small};
`;
