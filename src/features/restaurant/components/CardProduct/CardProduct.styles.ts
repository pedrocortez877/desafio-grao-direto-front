import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 240px;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

export const ImageContainer = styled.div<{ imageUrl: string }>`
  width: 100%;
  background-image: url(${({ imageUrl }) => imageUrl});
  background-size: cover;
  background-position: center;
  height: 200px;
  border-top-left-radius: ${({ theme }) => theme.borderRadius.medium};
  border-top-right-radius: ${({ theme }) => theme.borderRadius.medium};
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.small};
  padding: ${({ theme }) => theme.spacing.medium};
`;

export const Title = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkGray};
`;

export const DescriptionAndPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Description = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.darkGray};
  max-width: 120px;
`;

export const Price = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.primary};
`;
