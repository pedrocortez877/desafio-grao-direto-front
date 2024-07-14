import styled from 'styled-components';
import backgroundImage from '../../assets/images/background.webp';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  padding: ${({ theme }) => theme.spacing.large};
  box-shadow: inset 200px 200px 300px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.medium};
  }

  @media (max-width: 576px) {
    padding: ${({ theme }) => theme.spacing.small};
  }
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-family: ${({ theme }) => theme.fonts.default};
  font-weight: bold;
  max-width: 200px;
  margin-top: ${({ theme }) => theme.spacing.xl};
`;
