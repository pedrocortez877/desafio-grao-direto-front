import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => `0px ${theme.spacing.medium}`};
  width: calc(100% - 32px);
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  background-color: ${({ theme }) => theme.colors.gray};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
  position: fixed;
  bottom: ${({ hidden }) => (hidden ? '96px' : '-100px')};
  transition: bottom 0.3s;
  align-self: center;
`;

export const Input = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.small};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-family: ${({ theme }) => theme.fonts.default};
  color: ${({ theme }) => theme.colors.darkGray};
  background-color: ${({ theme }) => theme.colors.gray};
  outline: none;
`;
