import styled from 'styled-components';

export const Container = styled.div`
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
