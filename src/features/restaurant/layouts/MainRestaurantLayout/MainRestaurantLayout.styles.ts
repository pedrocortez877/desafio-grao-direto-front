import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: fixed;
  top: 0;
  padding: ${({ theme }) =>
    `${theme.spacing.large} ${theme.spacing.medium} ${theme.spacing.medium}`};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  z-index: 1;
`;

export const ButtonMenu = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const HeaderInformations = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const HeaderPersonName = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-family: ${({ theme }) => theme.fonts.default};
  color: ${({ theme }) => theme.colors.darkGray};
`;

export const HeaderAddressContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xxs};
`;

export const HeaderAddressText = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-family: ${({ theme }) => theme.fonts.default};
  color: ${({ theme }) => theme.colors.primary};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 96px 0px;
  padding: ${({ theme }) => `0 ${theme.spacing.medium}`};
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: fixed;
  bottom: 0;
  padding: ${({ theme }) => `${theme.spacing.medium} ${theme.spacing.xxl}`};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 2;
`;

export const FooterItem = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
