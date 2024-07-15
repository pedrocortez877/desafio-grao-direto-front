import { Product } from '@features/product/types';
import {
  Container,
  ContentContainer,
  Description,
  DescriptionAndPriceContainer,
  ImageContainer,
  Price,
  Title,
} from './CardProduct.styles';

const CardProduct: React.FC<{ product: Product }> = ({ product }) => {
  console.log('🚀 ~ product:', product);
  return (
    <Container>
      <ImageContainer imageUrl={product.imageUrl} />
      <ContentContainer>
        <Title>{product.name}</Title>
        <DescriptionAndPriceContainer>
          <Description>{product.description}</Description>
          <Price>R$ {product.price}</Price>
        </DescriptionAndPriceContainer>
      </ContentContainer>
    </Container>
  );
};

export default CardProduct;
