import styled from 'styled-components';
import backgroundImage from '@assets/images/background.webp';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  position: relative;
`;

export const LogoContainer = styled.div`
  width: 100%;
  height: 120px;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;

  @media (min-width: 768px) {
    height: 240px;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom-left-radius: ${({ theme }) => theme.borderRadius.medium};
  border-bottom-right-radius: ${({ theme }) => theme.borderRadius.medium};
`;

export const RestaurantName = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-family: ${({ theme }) => theme.fonts.default};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.darkGray};

  @media (max-width: 410px) {
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }
`;

export const RestaurantDescription = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-family: ${({ theme }) => theme.fonts.default};
  color: ${({ theme }) => theme.colors.darkGray};
`;

export const RestaurantLogo = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 64px;
  transform: translate(-50%, -50%);

  @media (min-width: 768px) {
    top: 70%;
  }
`;

export const MenusContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.large};
  margin: ${({ theme }) => `${theme.spacing.large} 0`};
`;

export const ButtonFavorite = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  position: absolute;
  top: 148px;
  right: 16px;
  cursor: pointer;
`;
