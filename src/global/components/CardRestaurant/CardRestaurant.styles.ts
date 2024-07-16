import styled from 'styled-components';
import backgroundImage from '@assets/images/background.webp';

export const Container = styled.button`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  position: relative;
`;

export const Header = styled.div`
  width: 100%;
  height: 120px;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  border-top-left-radius: ${({ theme }) => theme.borderRadius.medium};
  border-top-right-radius: ${({ theme }) => theme.borderRadius.medium};
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
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

export const RestaurantInformationContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.xxs};
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const RestaurantInformation = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-family: ${({ theme }) => theme.fonts.default};
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xxs};
`;

export const RestaurantLogo = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 64px;
  transform: translate(-50%, -50%);
`;
